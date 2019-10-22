import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareFormService {

  private formBehavior = new BehaviorSubject({
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
        options:[{value:'male'}, 
      {value:'female'}]
      },
      {
        id:5,
        title: 'Role',
        inputType: 'dropdown',
        options:[{value:'President'}, {value:'V P Education'}, {value:'VP Public Relations'}, {value:'VP Membership'}, {value:'Secretary'}, {value:'Treasurer'}]
      }
      
    ]
  });
  formStateObservable = this.formBehavior.asObservable();


  updateForm(form: any) {
    this.formBehavior.next(form);
  }
  constructor() { }
}
