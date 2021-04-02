import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NaviComponent } from './components/navi/navi.component';

import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import {ToastrModule} from "ngx-toastr";

import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FilterComponent } from './components/filter/filter.component';
import { RentalComponent } from './components/rental/rental.component'

@NgModule({
  declarations: [
    AppComponent,

    NaviComponent,

    FilterPipePipe,

    BrandComponent,
    CarComponent,
    CarDetailComponent,
    ColorComponent,
    CustomerComponent,
    FilterComponent,
    RentalComponent,
    FilterColorPipePipe,
    FilterBrandPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
