import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaundrystoreDataService } from 'app/service/laundrystore-data.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {
  selectLaundry: any;

  constructor(private route: ActivatedRoute, private laundrystore: LaundrystoreDataService) { }

  ngOnInit(): void {
    this.getLaundryStoreById();
  }

  getLaundryStoreById() {
    const laundryId = this.route.snapshot.paramMap.get('id');
    this.laundrystore.getLaundryStoreById(laundryId).subscribe((laundry) => {
      this.selectLaundry = laundry;
      console.log(laundry);
    })
  }

  

}
