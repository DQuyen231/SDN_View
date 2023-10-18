import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderDataService {
    private orderUrl = 'https://13.212.24.193/api/v1/order';

    constructor(private http: HttpClient) { }

    getOrder() {
        return this.http.get(this.orderUrl);
    }
    getOrderById(orderId: String): Observable<any> {
        const url = `${this.orderUrl}/${orderId}`;
        return this.http.get(url);
    }

}