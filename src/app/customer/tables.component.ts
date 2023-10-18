import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from 'app/service/customer-data.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {
  customerData: any;

  constructor(private customer: CustomerDataService) { }

  ngOnInit(): void {
    this.customer.getCustomer().subscribe((data) => {
      this.customerData = data
      console.log(data)
    });
  }
  add() {
    let item = {
      "buildingId": "testt ",
      "applicationUserId": "222"
    }
    this.customer.add(item).subscribe()
  }

}
