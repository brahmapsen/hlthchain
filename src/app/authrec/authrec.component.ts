import { Component, OnInit } from '@angular/core';
import { hlinks } from '../hlthlinks';
import { PATIENT_LINKS } from '../hlthlinks';

@Component({
  selector: 'app-authrec',
  templateUrl: './authrec.component.html',
  styleUrls: ['./authrec.component.css']
})
export class AuthrecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  patientLinks = PATIENT_LINKS;

}
