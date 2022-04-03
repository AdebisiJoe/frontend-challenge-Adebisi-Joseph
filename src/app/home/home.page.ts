import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HolidayService } from 'src/app/api/holiday.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private holidayService: HolidayService, private router: Router) { }

  private countries:string[];
  

  async ngOnInit() {
    this.holidayService.getCountries().subscribe((data) => {
			this.countries = data.countries;
      console.log(this.countries);
    });  

  }


  async gotoDetail(country_code:string){
    console.log(country_code);
     this.router.navigateByUrl(`/detail/${country_code}`);
  }

}
