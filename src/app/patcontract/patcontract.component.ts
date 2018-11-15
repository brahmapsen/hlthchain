import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComposerService } from '../composer.service';
import { hlinks } from '../hlthlinks';
import { PATIENT_LINKS } from '../hlthlinks';

@Component({
  selector: 'app-patcontract',
  templateUrl: './patcontract.component.html',
  styleUrls: ['./patcontract.component.css'],
  providers: [ComposerService]
})
export class PatcontractComponent implements OnInit {

  constructor(public composerService: ComposerService, fb: FormBuilder) {
      // this.myForm = new FormGroup({
      //     careType = new FormControl('', Validators.required);
      // });
      this.myForm = fb.group({
           careCode: this.careCode,
           chargeAmount: this.chargeAmount,
           chargeUnit: this.chargeUnit,
           contractDate: this.contractDate,
           physId: this.physId,
           contractID: this.contractID
      });
  };

  ngOnInit() {
  }

  private asset;
  private errorMessage;

  patientLinks = PATIENT_LINKS;

  myForm: FormGroup;

  //careType = new FormControl('', Validators.required);
  careCode = new FormControl('');
  chargeAmount = new FormControl('');
  chargeUnit = new FormControl('');
  contractDate = new FormControl('');
  physId = new FormControl('');
  contractID = new FormControl('');



  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.hlthchain.ContractService'
      ,'careCode': this.careCode.value
      ,'chargeAmount': this.chargeAmount.value
      ,'chargeUnit': this.chargeUnit.value
      ,'contractDate': this.contractDate.value
      ,'physId': this.physId.value
      ,'contractID': this.contractID.value
    };

    this.myForm.setValue({
      'careCode': null
      ,'chargeAmount': null
      ,'chargeUnit': null
      ,'contractDate': null
      ,'physId': null
      ,'contractID': null
    });

    return this.composerService.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'careCode': null
        ,'chargeAmount': null
        ,'chargeUnit': null
        ,'contractDate': null
        ,'physId': null
        ,'contractID': null
      });
      //this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }

}
