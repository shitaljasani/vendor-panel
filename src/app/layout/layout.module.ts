import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreoDrawerModule } from '@treo/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';
import { ThinLayoutModule } from 'app/layout/layouts/vertical/thin/thin.module';
import { SharedModule } from 'app/shared/shared.module';

const modules = [
    // Vertical navigation
    ThinLayoutModule
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        MatCheckboxModule,
        MatIconModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TreoDrawerModule,
        SharedModule,
        ...modules
    ],
    exports     : [
        ...modules
    ]
})
export class LayoutModule
{
}
