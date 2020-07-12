import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        PagesComponent,
        ProgressComponent,
        Graficas1Component,
        DashboardComponent
    ],
    exports: [
        ProgressComponent,
        Graficas1Component,
        DashboardComponent
    ],
    imports: [
         SharedModule,
         PAGES_ROUTES
    ]
})

export class PagesModule { }
