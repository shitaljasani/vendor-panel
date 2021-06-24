import { Route } from '@angular/router';
import { ListingComponent } from 'app/modules/admin/vendor/listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
export const ListingRoutes: Route[] = [
    {
        path     : '',
        component: ListingComponent,
    },
     {
        path     : 'add',
        component: AddListingComponent,
    }
];
