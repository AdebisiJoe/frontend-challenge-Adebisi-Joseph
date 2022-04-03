import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable,throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

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
      ).pipe(
        map((data: any) => data),
        catchError((err) => {
          return throwError("Problem fetching countries from API, error: ", err);
        })
      );

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
      ).pipe(
        map((data: any) => data),
        catchError((err) => {
          return throwError("Problem fetching holidays from API, error: ", err);
        })
      );
  }


}
