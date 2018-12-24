import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

const routes:Routes = [
  {path: '', component:LoginComponent},
  {path: 'heroes', component:HeroListComponent},
  {path: 'hero/:id', component:HeroComponent},
  {path: 'about', component:AboutComponent},
  {path: '**', redirectTo:''},
]

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
