import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaundrystoreDataService {
  private laundryStoreUrl = 'https://13.212.24.193/api/v1/laundry-store';

  constructor(private http: HttpClient) { }

  getLaundryStore() {
    return this.http.get(this.laundryStoreUrl);
  }
  getLaundryStoreById(laundryStoreId: String): Observable<any> {
    const url = `${this.laundryStoreUrl}/${laundryStoreId}`;
    return this.http.get(url);
  }
  deleteStore(id: String) {
    return this.http.delete(`https://13.212.24.193/api/v1/laundry-store/${id}`);
  }



}




