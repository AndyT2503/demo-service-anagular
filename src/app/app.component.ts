import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Supplier } from './supplier.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-observable';
  number!: number;
  listSupplier: Supplier[] = [];
  constructor(private apiService: ApiService) { } //inject

  ngOnInit(): void {
    console.log(this.apiService.randomNumber);
    // this.apiService.getSupplier().subscribe(
    //   (res) => console.log(res)
    // );
  }



  testFunction = () => { // arrow function
    this.number = 1;
    console.log(1);
  }
}


// Callback
// Promise
// async/await
// Observable