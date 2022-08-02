import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DialogInstructionsComponent } from '../dialog-instructions/dialog-instructions.component';
import { CardService } from '../services/card.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  idCard: any;
  myCard: any;
  isLoading: boolean = false;

  constructor(private router: Router, public dialog: MatDialog, private rutaActiva: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      this.idCard = params.get('id');
      console.log('obtengo mi idCard', this.idCard)
      this.cardService.getListCardInfo().subscribe(item => {
        console.log('imprimo mi item', item);
        this.myCard = item.find((x:any) => (x.id === Number(this.idCard)));
        console.log('imprimo myCard', this.myCard);
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
      console.log(`Dialog result: ${result}`);
    });

  }




}




