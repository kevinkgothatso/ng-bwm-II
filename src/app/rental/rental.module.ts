import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListingItemComponent } from './rental-listing-item/rental-listing-item.component';

@NgModule({
    declarations: [
      RentalListComponent,
      RentalListingItemComponent,
      RentalComponent
    ],
    imports: [
        CommonModule
    ]
  })

  export class RentalModule{}