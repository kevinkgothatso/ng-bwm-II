import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListingItemComponent } from './rental-listing-item/rental-listing-item.component';

import {RentalService} from '../shared/rental.services'

@NgModule({
    declarations: [
      // components
      RentalListComponent,
      RentalListingItemComponent,
      RentalComponent
    ],
    imports: [ CommonModule], providers: [RentalService]
    // a service.ts must stay inside proiders whwen imorted
    // imports contains modules
  })

  export class RentalModule{}