import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { IconsModule } from '@materia-extended/mdb-angular-ui-kit/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './public/home/home.component';
import { CustomsComponent } from './public/customs/customs.component';
import { PartsComponent } from './public/parts/parts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CustomsComponent,
    PartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
