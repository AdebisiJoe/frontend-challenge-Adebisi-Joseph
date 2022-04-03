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

  private countries;
  private holidays;

  async ngOnInit() {
    this.countries=await this.holidayService.getCountries();

    console.log(this.countries.countries[0].code);   

    this.holidays=await this.holidayService.getACountryHolidays(this.countries.countries[0].code,2022);

    console.log(this.holidays);   

  }

}
