import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TreoCardModule } from '@treo/components/card';
import { TreoMessageModule } from '@treo/components/message';
import { SharedModule } from 'app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { ListingComponent } from 'app/modules/admin/vendor/listing/listing.component';
import { ListingRoutes } from 'app/modules/admin/vendor/listing/listing.routing';
import { AddListingComponent } from './add-listing/add-listing.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
    declarations: [
        ListingComponent,
        AddListingComponent
    ],
    imports: [
        RouterModule.forChild(ListingRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        TreoCardModule,
        TreoMessageModule,
        SharedModule,
        MatSelectModule,
        MatRadioModule,
        MatDialogModule,
        MatTabsModule,
        MatDividerModule,
        SharedModule,
        MatSlideToggleModule,
        DragDropModule,
    ]
})
export class ListingModule
{
}
