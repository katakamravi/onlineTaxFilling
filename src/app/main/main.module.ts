import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ContentResolver } from '../services/contentResolver';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([
    {
      path: '',
      component: HomeComponent,
      resolve: {content: ContentResolver}
    }
    ]),
    CommonModule
  ],
})
export class MainModule { }
