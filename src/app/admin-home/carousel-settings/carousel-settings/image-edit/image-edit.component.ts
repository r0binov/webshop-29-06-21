import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Carousel } from 'src/app/models/carousel.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {

  @Input() carouselImage!: Carousel;
  editImageForm!: FormGroup;
  @Output() imageChangedEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.editImageForm = new FormGroup({
      url: new FormControl(this.carouselImage.url),
      header: new FormControl(this.carouselImage.header),
      description: new FormControl(this.carouselImage.description),
      alt: new FormControl(this.carouselImage.alt)
    });
  }

  onSubmit() {
    this.imageChangedEvent.emit(this.editImageForm.value)
  }

}
