import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'FormMaterial';
  Message(){
    this.dialog.open(Message,{
      height:'300px',
      width:'400px'
    });
  }
  openContact(){
    this.dialog.open(Contact,{
      height:'250px',
      width:'260px'
    });
  }
}
@Component({

  selector: 'Message',

  templateUrl: './Message.html',

})

export class Message {

  constructor(public dialog: MatDialog) {}
  dclose(){
    this.dialog.closeAll();
  }
}
@Component({

  selector: 'Contact',

  templateUrl: './dialog.html',

})

export class Contact {

  constructor(public dialog: MatDialog) {}
  dclose(){
    this.dialog.closeAll();
  }
}