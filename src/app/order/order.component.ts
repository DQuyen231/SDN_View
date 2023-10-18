import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'app/service/order-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderData: any;

  constructor(private order: OrderDataService) { }

  ngOnInit(): void {
    this.order .getOrder().subscribe((data) => {
      this.orderData = data
      console.log(data)
    });
  }

}