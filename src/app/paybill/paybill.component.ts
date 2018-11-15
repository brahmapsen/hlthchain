import { Component, OnInit } from '@angular/core';
import { hlinks } from '../hlthlinks';
import { PATIENT_LINKS } from '../hlthlinks';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css']
})
export class PaybillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

patientLinks = PATIENT_LINKS;

}
