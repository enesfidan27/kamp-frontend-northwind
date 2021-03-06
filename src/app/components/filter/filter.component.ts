import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  currentBrand:Brand
  currentColor:Color
  brands:Brand[]
  colors:Color[]
  
  constructor(private carService:CarService,
              private brandService:BrandService,
              private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors()
    this.getBrands()
    this.getFilteredDetails()
  }
  getFilteredDetails(){
    this.carService.getCarDetails(this.currentBrand.brandId,this.currentColor.colorId)
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
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand
  }
  setCurrentColor(color:Color){
    this.currentColor=color
    
  }
}
