import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { threadId } from 'node:worker_threads';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
//import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages: CarImage[] = [];
  cars: Car[] = [];
  dataLoaded = false;
  apiUrl : string = "https://localhost:44305";
  rental: Rental
  
  constructor(private carService: CarService,
    private carImageService:CarImageService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private toastrService:ToastrService
  
    //private config:NgbCarouselConfig
    ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailsByCarId(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      } 
      
    })
  }

  getCarDetailsByCarId(carId:number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      this.dataLoaded = true;
      console.log(response.data);
    })
  }

  getSliderClassName(index:number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
  goToCars(){
    this.router.navigate(['./cars'])
  }
  checkIfRented(){
    this.toastrService.success("wqfww")

}
}