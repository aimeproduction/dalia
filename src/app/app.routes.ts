import {provideRouter, Routes} from '@angular/router';
import {MonBbDaliaComponent} from "./monbbdalia/mon-bb-dalia/mon-bb-dalia.component";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {provideAnimations} from "@angular/platform-browser/animations";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mon-bb-dalia',
    pathMatch: 'full'
  },
  {
    path: 'mon-bb-dalia',
    component: MonBbDaliaComponent
  },
];

