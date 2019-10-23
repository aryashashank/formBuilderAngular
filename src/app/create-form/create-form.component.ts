import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ShareFormService } from '../services/share-form.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  
  constructor(private shareForm: ShareFormService, private router: Router) { }
  formJson:any;
  ngOnInit() {
    this.shareForm.formStateObservable.subscribe(
      message => {
        this.formJson = message;
      });
  }

  newMessage() {
    this.shareForm.updateForm({
      ...this.formJson
    });
    this.router.navigate(['/view']);
  }

  addComponent(type) {
    let component: any = {
      title: 'Untitled Field',
      inputType: type
    }
    if (type == 'radio' || type == 'dropdown') {
      component.options = [{value: ''}];
    }
    if (type == 'static') {
      component.value = '';
    }

    this.formJson.formComponents.push(component);
  }

  addOption(item) {
    item.options.push({ value: '' });
  }

  downloadJson() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.formJson, null, 4));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `${this.formJson.formName}_form.json`);
    dlAnchorElem.click();
  }

}
