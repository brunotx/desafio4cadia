import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ExtratoPageComponent } from './extrato-page/extrato-page.component';
import { SaldoPageComponent } from './saldo-page/saldo-page.component';
import { IndicacaoPageComponent } from './indicacao-page/indicacao-page.component';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AuthGuard } from 'src/app/Auth/auth-guard.service';


const routes: Routes = [
    {
        path: ':id', component: DashboardComponent,
        children: [
            { path: ':id/welcome', component: WelcomePageComponent },
            { path: ':id/user', component: UserPageComponent },
            { path: ':id/extrato', component: ExtratoPageComponent },
            { path: ':id/saldo', component:  SaldoPageComponent },
            { path: ':id/indicacao', component: IndicacaoPageComponent }
        ]
    },
];

@NgModule({
    declarations: [
        DashboardComponent,
        WelcomePageComponent,
        IndicacaoPageComponent,
        UserPageComponent,
        ExtratoPageComponent,
        SaldoPageComponent
    ],
    imports: [
        CommonModule,
        ModalModule.forRoot(),
        SidebarModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    providers: [BsModalService],
    bootstrap: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
