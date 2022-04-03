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

  constructor() { }
}
