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
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewServicesComponent } from './new-services/new-services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, ServicesComponent, TermsandcondComponent, PrivacypolicyComponent, AboutusComponent, NewHomeComponent, NewServicesComponent, ServiceDetailComponent, DetailsComponent],
  imports: [
    IvyCarouselModule,
    RouterModule.forChild([
    {
      path: '',
      component: HomeComponent,
      resolve: {content: ContentResolver}
    },
    {
      path: 'services',
      component: NewServicesComponent,
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
