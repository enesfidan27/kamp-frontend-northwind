import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

 
  apiUrl = "https://localhost:44305/api/rentals/";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let urlPath = this.apiUrl + "getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rental>>(urlPath);

  }
  getRentalByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let urlPath = this.apiUrl + "getbyId?id="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(urlPath);
}
}
