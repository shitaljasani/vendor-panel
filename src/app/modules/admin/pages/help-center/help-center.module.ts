import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TreoMessageModule } from '@treo/components/message';
import { SharedModule } from 'app/shared/shared.module';
import { HelpCenterComponent } from 'app/modules/admin/pages/help-center/help-center.component';
import { HelpCenterFaqsComponent } from 'app/modules/admin/pages/help-center/faqs/faqs.component';
import { helpCenterRoutes } from 'app/modules/admin/pages/help-center/help-center.routing';

@NgModule({
    declarations: [
        HelpCenterComponent,
        HelpCenterFaqsComponent,
    ],
    imports     : [
        RouterModule.forChild(helpCenterRoutes),
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        TreoMessageModule,
        SharedModule
    ]
})
export class HelpCenterModule
{
}
