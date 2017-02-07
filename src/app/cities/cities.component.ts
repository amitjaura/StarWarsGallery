import{Component, OnInit } from '@angular/core';
import{CitiesService} from './cities.service';
import{City} from '../city/city';


@Component({
    selector: 'my-cities',
  templateUrl: `app/cities/cities.view.html`,
  providers: [CitiesService]
})

export class Cities extends OnInit{
 constructor(private cityService: CitiesService){
     super();
 }
 
 cities: City[];
 getCities(): void {
    this.cities = this.cityService.getCities();
  }

 ngOnInit(): void {
    this.getCities();
  }
};
