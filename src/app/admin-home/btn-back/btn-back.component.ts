import { Component, Input, OnInit } from '@angular/core';
import { AdminHomeComponent } from '../admin-home.component';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.css']
})
export class BtnBackComponent implements OnInit {

  @Input() back!: string;

  constructor() { }

  ngOnInit(): void {
  }

 

}
