import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { CustomsComponent } from './public/customs/customs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customs', component: CustomsComponent },
  { path: '**', redirectTo: '' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
