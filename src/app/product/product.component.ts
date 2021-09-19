import { ApiService } from './../api.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
 
  name!: string;
  code!: string;
  logo!: string;
  
  x!: string;

  constructor(private apiService: ApiService) {
    console.log('constructor')
  }

  ngOnInit(): void {
    
  }

  tets(): void {
    this.apiService.getSupplier().subscribe(
    );
  }
  ngOnDestroy(): void {

  }

  createSupplier(): void {
    this.apiService.createSupplier(this.name, this.logo, this.code)
      .subscribe(
        () => { console.log('Success'); },
        (err) => console.error(err)
      )
  }

  delete(): void {
    this.apiService.deleteSupplier('9b7cbdbb-cf51-4671-9c18-b2d9372cb1b2').subscribe(
      () => { console.log('Success'); },
      (err) => console.error(err)
    )
  }
}
