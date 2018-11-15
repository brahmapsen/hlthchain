import { Component, OnInit } from '@angular/core';
import { hlinks } from '../hlthlinks';
import { PROVIDER_LINKS } from '../hlthlinks';


@Component({
  selector: 'app-provcontract',
  templateUrl: './provcontract.component.html',
  styleUrls: ['./provcontract.component.css']
})
export class ProvcontractComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
providerLinks = PROVIDER_LINKS;

}
