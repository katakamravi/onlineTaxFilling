import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { ContentResolver } from './services/contentResolver';

const routes: Routes = [
  {path: 'home', component: HomeComponent,
   resolve: {content: ContentResolver}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'services', component: ServicesComponent,
   resolve: {content: ContentResolver}}
  //  { path: '', loadChildren: './main/main.module#MainModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
