import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HlComposerComponent } from './hl-composer/hl-composer.component';
import { PatientComponent } from './patient/patient.component';
import { ProviderComponent } from './provider/provider.component';
import { AppRoutingModule } from './app-routing.module';
import { PatcontractComponent } from './patcontract/patcontract.component';
import { AuthrecComponent } from './authrec/authrec.component';
import { PaybillComponent } from './paybill/paybill.component';
import { ProvcontractComponent } from './provcontract/provcontract.component';
import { RenderserviceComponent } from './renderservice/renderservice.component';
import { SubmitclaimComponent } from './submitclaim/submitclaim.component';

@NgModule({
  declarations: [
    AppComponent,
    HlComposerComponent,
    PatientComponent,
    ProviderComponent,
    PatcontractComponent,
    AuthrecComponent,
    PaybillComponent,
    ProvcontractComponent,
    RenderserviceComponent,
    SubmitclaimComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
