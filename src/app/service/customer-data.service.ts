import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) { }

  getCustomer() {
    return this.http.get('https://13.212.24.193/api/v1/customer')
  }
  add(item): Observable<any> {
    return this.http.get('https://13.212.24.193/api/v1/customer', item)
  }
}