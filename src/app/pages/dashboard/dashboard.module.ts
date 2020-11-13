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
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    {
        path: 'account', component: DashboardComponent,
        children: [
            { path: 'home/:id', component: WelcomePageComponent },
            { path: 'user/:id', component: UserPageComponent },
            { path: 'extrato/:id', component: ExtratoPageComponent },
            { path: 'saldo/:id', component:  SaldoPageComponent },
            // { path: 'indicacao/:id', component: IndicacaoPageComponent }
        ], canActivate: [AuthGuard]
    },
]

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
        FormsModule,
        ModalModule.forRoot(),
        SidebarModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    providers: [BsModalService],
    bootstrap: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
