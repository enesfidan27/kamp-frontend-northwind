import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementFinder } from 'protractor';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] =[];
  dataLoaded=false;
  filterTextA="";
  currentBrand:number
  currentColor:number
  brands:Brand[]
  colors:Color[]
  rental:Rental


 
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private rentalService:RentalService,
    private brandService:BrandService,
    private colorService:ColorService) { }
    
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     if(params["brandId"]){
       this.getCarsByBrandId(params["brandId"])
     }
     else if(params["colorId"]){
       this.getCarsByColorId(params["colorId"])
     }
    //  else if(params["brandId"] && params["colorId"]){
    //    this.getCarDetailsFiltered(params["brandId"],params["colorId"])
    //  }
     else{
       this.getCars()
     }
     this.getBrands()
     this.getColors()
   })
  }

  getCars(){
 this.carService.getCars().subscribe((response)=>{
   this.cars = response.data;
   this.dataLoaded=true;
 })
  }
 getCarsByBrandId(brandId:number){
  this.carService.getCarsByBrandId(brandId).subscribe((response)=>{
    this.cars = response.data;
    this.dataLoaded=true;
 })
}
getCarsByColorId(colorId:number){
  this.carService.getCarsByColorId(colorId).subscribe((response)=>{
    this.cars = response.data;
    this.dataLoaded=true;
  })
}
getCarDetailsFiltered(){
  console.log(this.currentBrand,this.currentColor)
  this.carService.getCarDetails(this.currentBrand,this.currentColor).subscribe((response)=>{
    this.cars = response.data
    this.dataLoaded=true;
  })
}
setCurrentBrand(brand:string){
  console.log(brand)
  this.currentBrand=parseInt(brand)
}
setCurrentColor(color:string){
  console.log(color)
  this.currentColor=parseInt(color)
  
}
getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data
  })
}
getColors(){
  this.colorService.getColors().subscribe(response=>{
    this.colors=response.data
  })
}
getRentalByCarId(carId:number){
  this.rentalService.getRentalByCarId(carId).subscribe((response)=>{
    this.cars = response.data;
    this.dataLoaded=true;
  })
}

}
