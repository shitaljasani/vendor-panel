import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/finance'
    {path: '', pathMatch : 'full', redirectTo: 'dashboards/finance'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboards/finance'},

  
    
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [

            // Dashboards
            {path: 'dashboards', children: [
                {path: 'finance', loadChildren: () => import('app/modules/admin/dashboards/finance/finance.module').then(m => m.FinanceModule)},
                {path: 'analytics', loadChildren: () => import('app/modules/admin/dashboards/analytics/analytics.module').then(m => m.AnalyticsModule)},
                {path: 'crypto', loadChildren: () => import('app/modules/admin/dashboards/crypto/crypto.module').then(m => m.CryptoModule)},
            ]},

            // Apps
            {path: 'apps', children: [
              
                {path: 'contacts', loadChildren: () => import('app/modules/admin/apps/contacts/contacts.module').then(m => m.ContactsModule)},
                {path: 'ecommerce', loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.module').then(m => m.ECommerceModule)},
            ]},

            // Pages
            {path: 'pages', children: [

                // Authentication
                {path: 'authentication', children: [
                  
                    {path: 'forgot-password', loadChildren: () => import('app/modules/admin/pages/authentication/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
                    {path: 'reset-password', loadChildren: () => import('app/modules/admin/pages/authentication/reset-password/reset-password.module').then(m => m.ResetPasswordModule)},
                    {path: 'sign-in', loadChildren: () => import('app/modules/admin/pages/authentication/sign-in/sign-in.module').then(m => m.SignInModule)},
                    {path: 'sign-up', loadChildren: () => import('app/modules/admin/pages/authentication/sign-up/sign-up.module').then(m => m.SignUpModule)},
                    {path: 'sign-out', loadChildren: () => import('app/modules/admin/pages/authentication/sign-out/sign-out.module').then(m => m.SignOutModule)},
                    {path: 'unlock-session', loadChildren: () => import('app/modules/admin/pages/authentication/unlock-session/unlock-session.module').then(m => m.UnlockSessionModule)}
                ]},

                // Errors
                {path: 'errors', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/errors/error-404/error-404.module').then(m => m.Error404Module)},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/errors/error-500/error-500.module').then(m => m.Error500Module)}
                ]},

                // Help center
                {path: 'help-center', loadChildren: () => import('app/modules/admin/pages/help-center/help-center.module').then(m => m.HelpCenterModule)},

              

                // Profile
               
            ]},

            // User interface
            {path: 'ui', children: [
                 // Content layouts
                {path: 'content-layouts', children: [

                    // Overview
                    {path: 'overview', loadChildren: () => import('app/modules/admin/ui/content-layouts/overview/overview.module').then(m => m.ContentLayoutsOverviewModule)},

                    // Fullwidth
                    {path: 'fullwidth', children: [
                        {path: 'basic', loadChildren: () => import('app/modules/admin/ui/content-layouts/fullwidth/basic/basic.module').then(m => m.FullwidthBasicModule)},
                        {path: 'standard', loadChildren: () => import('app/modules/admin/ui/content-layouts/fullwidth/standard/standard.module').then(m => m.FullwidthStandardModule)},
                        {path: 'tabs', loadChildren: () => import('app/modules/admin/ui/content-layouts/fullwidth/tabs/tabs.module').then(m => m.FullwidthTabsModule)},
                        {path: 'tabs-navigation', loadChildren: () => import('app/modules/admin/ui/content-layouts/fullwidth/tabs-navigation/tabs-navigation.module').then(m => m.FullwidthTabsNavigationModule)}
                    ]},

                ]},

            ]},

           // 404 & Catch all
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/errors/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
