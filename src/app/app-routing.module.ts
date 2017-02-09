import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { starCastComponent }   from './StarWars/starcast/starcast.components';
import { filmsComponent }     from './StarWars/films/films.components';
import {AppComponent} from './app.component'
const appRoutes: Routes = [
  { path: 'films', component: filmsComponent },
  { path: 'starcast/:id', component: starCastComponent },
  { path: 'starcast', component: starCastComponent },
  {path: '', redirectTo:'/films', pathMatch:'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
