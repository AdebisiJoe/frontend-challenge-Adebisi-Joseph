import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HolidayService } from 'src/app/api/holiday.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private country_code: string;
  private holidays:string[];

  constructor(private holidayService: HolidayService,private router: Router,private route: ActivatedRoute) { }

  async ngOnInit() {

    this.country_code = this.route.snapshot.paramMap.get('country_code');
    console.log(this.country_code);

       // console.log(this.countries.countries[0].code);   

     this.holidayService.getACountryHolidays(this.country_code,2022).subscribe((data) => {
			this.holidays = data.holidays;
      console.log(this.holidays);
    });  ;

      
  }

}
