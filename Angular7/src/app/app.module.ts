import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from "@angular/forms"; 
import { HttpClientModule } from "@angular/common/http"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NursesComponent } from './nurses/nurses.component';
import { NurseComponent } from './nurses/nurse/nurse.component';
import { NurseListComponent } from './nurses/nurse-list/nurse-list.component';
import { NurseService } from './shared/nurse.service';

@NgModule({
  declarations: [
    AppComponent,
    NursesComponent,
    NurseComponent,
    NurseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 

  ],
  providers: [NurseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
