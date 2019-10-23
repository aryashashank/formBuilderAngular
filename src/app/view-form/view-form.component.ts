import { Component, OnInit } from '@angular/core';
import { ShareFormService } from '../services/share-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  constructor(private router: Router ,private shareForm:ShareFormService) { }
  public formJson:object;
  ngOnInit() {
   
    this.shareForm.formStateObservable.subscribe(
      message => {
        this.formJson = message;
        console.log(this.formJson);
        
      });

  }

  submitForm(){
    this.router.navigate(['/create']);
  }


}
