import { Component, OnInit } from '@angular/core';
import { StaffDataService } from 'app/service/staff-data.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  staffData: any;

  constructor(private staff: StaffDataService) { }

  ngOnInit(): void {
    this.staff.getStaff().subscribe((data) => {
      this.staffData = data
      console.log(data)
    });
  }

}
