import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ContentResolver } from '../services/contentResolver';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [HomeComponent, ServicesComponent],
  imports: [
    RouterModule.forChild([
    {
      path: '',
      component: HomeComponent,
      resolve: {content: ContentResolver}
    },
    {
      path: '/services',
      component: ServicesComponent,
      resolve: {content: ContentResolver}
    }
    ]),
    CommonModule
  ],
})
export class MainModule { }
