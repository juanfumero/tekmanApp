import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tekmanApp';

  constructor(public dialog: MatDialog) { }

  status: boolean = false;

  clickEvent() {
    this.status = true;
  }

  clickEvent2() {
    this.status = false;
  }

}
