import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private formJson = {
    title: '',
    formComponents: []
  };

  addComponent(type) {
    let component: any = {
      title: '',
      inputType: type
    }
    if (type == 'radio' || type == 'dropdown') {
      component.options = [''];
    }
    if (type == 'static') {
      component.value = '';
    }

    this.formJson.formComponents.push(component);
  }

  addOption(item) {
    item.options.push('');
  }

  downloadJson() {
    debugger;
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.formJson));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  }

}
