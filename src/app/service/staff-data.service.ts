import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffDataService {

  constructor(private http: HttpClient) { }

  getStaff(){
    return this.http.get('https://13.212.24.193/api/v1/staff')
  }
}