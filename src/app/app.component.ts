import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FormBuilder';



  observable = new Observable(subscriber => {
    let i =0;
    setInterval(() => {
      
      subscriber.next(i++);
      if(i == 10) {
        subscriber.complete();
      }
    }, 1000);
  });
  
  ngOnInit() {
    this.observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
  }
}
