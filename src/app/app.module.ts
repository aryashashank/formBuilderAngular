import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBuilderComponent } from './input-builder/input-builder.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



const appRoutes: Routes = [
  { path: 'view', component: ViewFormComponent },
  { path: 'create', component: CreateFormComponent },
  { path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    InputBuilderComponent,
    ViewFormComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
