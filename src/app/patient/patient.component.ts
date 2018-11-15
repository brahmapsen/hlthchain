import { Component, OnInit } from '@angular/core';
import { hlinks } from '../hlthlinks';
import { PATIENT_LINKS } from '../hlthlinks';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  patientLinks = PATIENT_LINKS;

}
