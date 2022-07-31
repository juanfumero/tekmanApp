import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TekmanRoutingModule } from './tekman-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DetailCardComponent } from './detail-card/detail-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailCardComponent
  ],
  imports: [
    TekmanRoutingModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ]
})
export class TekmanModule { }
