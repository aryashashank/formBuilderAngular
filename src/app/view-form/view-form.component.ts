import { Component, OnInit } from '@angular/core';
import { ShareFormService } from '../services/share-form.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  constructor(private shareForm:ShareFormService) { }
  public formJson:object;
  ngOnInit() {
   
    this.shareForm.formStateObservable.subscribe(
      message => {
        this.formJson = message;
        console.log(this.formJson);
        
      });

  }
}
