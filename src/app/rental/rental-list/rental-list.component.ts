import { Component, OnInit } from '@angular/core';
import {RentalService} from '../../shared/rental.services'

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
   rentals: any[] = [];
  constructor(private rentalservices: RentalService) { }

  ngOnInit() {
    this.rentals = this.rentalservices.getRentals();
  }

}
