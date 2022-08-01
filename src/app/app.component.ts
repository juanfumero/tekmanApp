import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tekmanApp';

  constructor(public dialog: MatDialog) {}

  status: boolean = false;
  //Sidebar opne
  clickEvent(){
      this.status = true;
  }
  //Sidebar close
  clickEvent2()
  {
    this.status = false;
  }

}
