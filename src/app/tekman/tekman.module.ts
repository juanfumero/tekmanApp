import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TekmanRoutingModule } from './tekman-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DetailCardComponent } from './detail-card/detail-card.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { DialogInstructionsComponent } from './dialog-instructions/dialog-instructions.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgChartsModule } from 'ng2-charts';
import { CardInfoComponent } from './card-info/card-info.component';
@NgModule({
  declarations: [
    HomeComponent,
    DetailCardComponent,
    DialogInstructionsComponent,
    CardInfoComponent
  ],
  imports: [
    TekmanRoutingModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    NgChartsModule
  ]
})
export class TekmanModule { }
