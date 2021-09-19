import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseSupplier } from './supplier.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  randomNumber!: number;
  constructor(private httpClient: HttpClient) {
    this.randomNumber = Math.random();
  }

  getSupplier(pageIndex?: number, pageSize?: number, name?: string) {
    return this.httpClient.get<ResponseSupplier>('http://localhost:5000/api/Supplier',
      {
        params: {
          pageSize: `${pageIndex || ''}`,
          pageIndex: `${pageSize || ''}`
        }
      });
  }

  createSupplier(name: string, logo: string, code: string) {
    return this.httpClient.post('http://localhost:5000/api/Supplier',
      {
        name,
        logo,
        code,
        productTypes: []
      });
  }

  deleteSupplier(id: string) {
    return this.httpClient.delete(`http://localhost:5000/api/Supplier/${id}`)
  }
}
