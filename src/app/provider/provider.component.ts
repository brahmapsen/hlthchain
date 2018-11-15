import { Component, OnInit } from '@angular/core';
import { hlinks } from '../hlthlinks';
import { PROVIDER_LINKS } from '../hlthlinks';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  providerLinks = PROVIDER_LINKS;

}
