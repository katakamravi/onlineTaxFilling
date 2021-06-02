import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ContentResolver } from '../services/contentResolver';
import { ServicesComponent } from './services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsandcondComponent } from './others/termsandcond/termsandcond.component';
import { PrivacypolicyComponent } from './others/privacypolicy/privacypolicy.component';
import { AboutusComponent } from './others/aboutus/aboutus.component';



@NgModule({
  declarations: [HomeComponent, ServicesComponent, TermsandcondComponent, PrivacypolicyComponent, AboutusComponent],
  imports: [
    RouterModule.forChild([
    {
      path: '',
      component: HomeComponent,
      resolve: {content: ContentResolver}
    },
    {
      path: 'services',
      component: ServicesComponent,
      resolve: {content: ContentResolver}
    },
    {
      path: 'termsandconditions',
      component: TermsandcondComponent,
      resolve: {content: ContentResolver}
    },
    {
      path: 'privacypolicy',
      component: PrivacypolicyComponent,
      resolve: {content: ContentResolver}
    }
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MainModule { }
