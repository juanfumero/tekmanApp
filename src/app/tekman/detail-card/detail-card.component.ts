import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DialogInstructionsComponent } from '../dialog-instructions/dialog-instructions.component';
import { CardService } from '../services/card.service';


export interface PeriodicElement {
  name: string;
  position: string;
  img: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', name: 'Ordinales', img: 'tekmanEyes.png'},
  {position: '2', name: 'Ordinales y fracciones', img: 'tekmanEyes.png'},
  {position: '3', name: 'Fracciones y decimales', img: 'tekmanEyes.png'},
  {position: '4', name: 'Ordinales, Fracciones y Decimales', img: 'tekmanEyes.png'},
  {position: '5', name: 'Ordinales, Fracciones, Decimales y Geometría',  img: 'tekmanEyes.png'},
  {position: '6', name: 'Carbon',  img: 'tekmanEyes.png'},
  {position: '7', name: 'Geometría y Fracciones',  img: 'tekmanEyes.png'},
  {position: '8', name: 'Fracciones, Decimales y  Geometría', img: 'tekmanEyes.png'},
  {position: '9', name: 'Ordinales, Fracciones, Decimales,Geometria, Números', img: 'tekmanEyes.png'},
  {position: '10', name: 'Fracciones', img: 'tekmanEyes.png'},
];
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  displayedColumns = ['position', 'name', 'img'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  idCard: any;
  myCard: any;
  isLoading: boolean = false;
  selectedRow: boolean = true;

  constructor(private router: Router, public dialog: MatDialog, private rutaActiva: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      this.idCard = params.get('id');
      this.cardService.getListCardInfo().subscribe(item => {
        this.myCard = item.find((x:any) => (x.id === Number(this.idCard)));
      });
    });


  }

  goToBack() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
      this.isLoading = false;
    }, 1500);
  }

  selectedItem(row: any) {
    let isEqual = false;
    this.clickedRows.forEach( x => { if(x === row) {
      isEqual = true;
      this.clickedRows.delete(row);
    }})

    if(!isEqual){
      this.clickedRows.add(row);
    }

    const dialogRef = this.dialog.open(DialogInstructionsComponent);

    dialogRef.afterClosed().subscribe(result => {
    });

  }





}




