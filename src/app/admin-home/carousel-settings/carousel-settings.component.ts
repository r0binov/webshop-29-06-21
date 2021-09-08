import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Carousel } from 'src/app/models/carousel.model';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel-settings',
  templateUrl: './carousel-settings.component.html',
  styleUrls: ['./carousel-settings.component.css']
})
export class CarouselSettingsComponent implements OnInit {

  images: Carousel[] = [];
  @Input() carouselImage = this.images;
  
  carouselConfigForm!: FormGroup;
  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselService.getImgFromDB().subscribe(
      (firebaseItems) => {
      this.images = firebaseItems;
      this.carouselService.saveToServiceFromDB(firebaseItems)});
     

    this.carouselConfigForm = new FormGroup({
      interval: new FormControl(this.carouselService.interval),
      wrap: new FormControl(this.carouselService.wrap),
      keyboard: new FormControl(this.carouselService.keyboard),
      pauseOnHover: new FormControl(this.carouselService.pauseOnHover)
    })
  }

  onSubmit(form: NgForm) {
    this.carouselService.addImage(form.value);
    this.images = this.carouselService.getAllImages();
    console.log(form.value);
    
  }

  onDeleteImage (image: Carousel) {
    this.carouselService.deleteImage(image);
    console.log(image);
    this.images = this.carouselService.getAllImages();
  }

  onSubmitConfig() {
    this.carouselService.interval = this.carouselConfigForm.value.interval, Validators.required;
    this.carouselService.keyboard = this.carouselConfigForm.value.keyboard;
    this.carouselService.pauseOnHover = this.carouselConfigForm.value.pauseOnHover;
    this.carouselService.wrap = this.carouselConfigForm.value.wrap;
    this.saveToLocalStorage();
  }

  onChangeImageDetails(image: Carousel) {
    image.isEditState = !image.isEditState;
  }

  onSendImagesToDB() {
    this.carouselService.saveImgToDB().subscribe()
  }

  onEditImage() {
    this.carouselService.saveImgToDB().subscribe();
  }
  

  saveToLocalStorage () {
    localStorage.setItem("carouselConfig", JSON.stringify(this.carouselConfigForm));
  }

  imageChanged(image: Carousel, index: number) {
    image.isEditState = false
    this.carouselService.editImage(index, image).subscribe();
  }
  
  

}
