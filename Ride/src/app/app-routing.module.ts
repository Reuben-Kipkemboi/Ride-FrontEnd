import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { CustomsComponent } from './public/customs/customs.component';
import { PartsComponent } from './public/parts/parts.component';
import { TestimonialsComponent } from './public/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customs', component: CustomsComponent },
  { path: 'parts', component: PartsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '**', redirectTo: '' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
