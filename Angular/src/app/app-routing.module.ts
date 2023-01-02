import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { DetailsComponent } from './main/details/details.component';
import { HomeComponent } from './main/home/home.component';
import { NewHomeComponent } from './main/new-home/new-home.component';
import { NewServicesComponent } from './main/new-services/new-services.component';
import { TermsandcondComponent } from './main/others/termsandcond/termsandcond.component';
import { ServiceDetailComponent } from './main/service-detail/service-detail.component';
import { ServicesComponent } from './main/services/services.component';
import { ContentResolver } from './services/contentResolver';

const routes: Routes = [
  {path: 'home', component: NewHomeComponent,
   resolve: {content: ContentResolver}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'services', component: NewServicesComponent, 
  resolve: {content: ContentResolver}},
  {path: 'service-detail', component: ServiceDetailComponent,
  resolve: {content: ContentResolver}},
  {path: 'detail', component: DetailsComponent,
  resolve: {content: ContentResolver}},
  {path: 'contact', component: ContactComponent,
  resolve: {content: ContentResolver}},
  {path: 'about', component: AboutComponent},
  {path: 'termsconditions', component: TermsandcondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
