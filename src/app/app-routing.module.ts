import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ContentResolver } from './services/contentResolver';

const routes: Routes = [
  {path: 'home', component: HomeComponent,
   resolve: {content: ContentResolver}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', loadChildren: '../main/main.module#MainModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
