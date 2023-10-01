import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(private dataService: DatabaseService,private _snackBar: MatSnackBar) {}
  // 
  data$: Observable<any[]>|any;
  actualData:any = []

  
  async ngOnInit(): Promise<void> {
    this.data$ = this.dataService.getData();
    this.data$.subscribe((e: any[])=>{
      this.actualData = e
    })
  }

  // extras

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

interface Item {
  // Define your properties here to match the structure of your JSON data
  id: number;
  name: string;
  // Add other properties...
}
