import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { HeroesService } from './services/heroes.service';

// Components
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HeroecardComponent } from './components/heroecard/heroecard.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    HeroecardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
