import { Component, OnInit } from '@angular/core';
import { hlinks } from '../hlthlinks';
import { PROVIDER_LINKS } from '../hlthlinks';


@Component({
  selector: 'app-submitclaim',
  templateUrl: './submitclaim.component.html',
  styleUrls: ['./submitclaim.component.css']
})
export class SubmitclaimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  providerLinks = PROVIDER_LINKS;

}
