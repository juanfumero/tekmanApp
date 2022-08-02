

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { HomeComponent } from './home/home.component';



const adminRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,

    },
    {
      path: 'detailCard/:id',
      component: DetailCardComponent,
    }
  ];


@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class TekmanRoutingModule { }
