import { Component, OnInit } from '@angular/core';
import { BuildingDataService } from 'app/service/building-data.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  buildingData: any;

  constructor(private building: BuildingDataService) { }

  ngOnInit(): void {
    this.building.getBuilding().subscribe((data) => {
      this.buildingData = data
      console.log(data)
    });
  }

}
