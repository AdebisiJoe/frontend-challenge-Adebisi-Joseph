import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { Country } from "../models/country";

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  public country: Observable<Country>;

  constructor(private http: HttpClient) { 

  }



  getCountries() {
    const http_object = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${environment.apiToken}`
    });
    const httpOtions = {
      headers: http_object,
    };
    return this.http
      .post<Country>(
        `${environment.apiUrl}holidays/Countries`,
        {},
        httpOtions
      ).toPromise();

  }


  getACountryHolidays(country_code:string,year:number) {
  
    
    const http_object = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${environment.apiToken}`
    });
    const httpOtions = {
      headers: http_object,
    };
    return this.http
      .post(
        `${environment.apiUrl}holidays/List`,
        {country_code,year},
        httpOtions
      ).toPromise();
  }


}
