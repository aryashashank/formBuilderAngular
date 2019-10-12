import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public formJson = {
    formName:'Hello World',
    formComponents: [
      {
        id:1,
        title: 'description',
        inputType: 'static',
        value: "Hi, please fill this form to say Hi to the world with a smile!"
      },
      {
        id:2,
        title: 'name',
        inputType: 'text',
        placeHolder: 'your answer',
        required: false
      },
      {
        id:3,
        title: 'phone',
        inputType: 'text',
        placeHolder: 'your answer',
        required: false
      },
      {
        id:4,
        title: 'gender',
        inputType: 'radio',
        options:['male', 'female']
      },
      {
        id:5,
        title: 'Role',
        inputType: 'dropdown',
        options:['President', 'V P Education', 'VP Public Relations', 'VP Membership', 'Secretary', 'Treasurer']
      }
    ]
  }

}
