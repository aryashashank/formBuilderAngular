import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareFormService {

  private formBehavior = new BehaviorSubject({
    formName: 'Untitled Form',
    formComponents: [
      {
        title: 'description',
        inputType: 'static',
        value: "Hi, please fill this form to say Hi to the world with a smile!"
      }
    ]
  });
  formStateObservable = this.formBehavior.asObservable();


  updateForm(form: any) {
    this.formBehavior.next(form);
  }
  constructor() { }
}
