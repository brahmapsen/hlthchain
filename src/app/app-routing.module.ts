import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientComponent } from './patient/patient.component';
import { ProviderComponent } from './provider/provider.component';

import { PatcontractComponent } from './patcontract/patcontract.component';
import { AuthrecComponent } from './authrec/authrec.component';
import { PaybillComponent } from './paybill/paybill.component';

import { ProvcontractComponent } from './provcontract/provcontract.component';
import { RenderserviceComponent } from './renderservice/renderservice.component';
import { SubmitclaimComponent } from './submitclaim/submitclaim.component';

const routes: Routes = [
    { path: '', redirectTo: '/patient', pathMatch: 'full'},
    { path: 'patient', component: PatientComponent },
    { path: 'provider', component: ProviderComponent },
    { path: 'patcontract', component: PatcontractComponent },
    { path: 'authrec', component: AuthrecComponent },
    { path: 'paybill', component: PaybillComponent },
    { path: 'provcontract', component: ProvcontractComponent },
    { path: 'renderservice', component: RenderserviceComponent },
    { path: 'submitclaim', component: SubmitclaimComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
