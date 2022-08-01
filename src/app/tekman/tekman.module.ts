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

@NgModule({
  declarations: [
    HomeComponent,
    DetailCardComponent,
    DialogInstructionsComponent
  ],
  imports: [
    TekmanRoutingModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class TekmanModule { }
