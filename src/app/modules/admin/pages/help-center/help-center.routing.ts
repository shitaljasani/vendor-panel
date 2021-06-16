import { Route } from '@angular/router';
import { HelpCenterComponent } from 'app/modules/admin/pages/help-center/help-center.component';
import { HelpCenterFaqsComponent } from 'app/modules/admin/pages/help-center/faqs/faqs.component';
import { HelpCenterFaqsResolver, HelpCenterGuidesCategoryResolver, HelpCenterGuidesGuideResolver, HelpCenterGuidesResolver, HelpCenterMostAskedFaqsResolver } from 'app/modules/admin/pages/help-center/help-center.resolvers';

export const helpCenterRoutes: Route[] = [
    {
        path     : '',
        component: HelpCenterComponent,
        resolve  : {
            faqs: HelpCenterMostAskedFaqsResolver
        }
    },
    {
        path     : 'faqs',
        component: HelpCenterFaqsComponent,
        resolve  : {
            faqs: HelpCenterFaqsResolver
        }
    },
    
    
];
