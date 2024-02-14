import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
  
   
    
    
  ],
  exports:[
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
  
    
    
  ],
 
})

export class SharedModule { }
