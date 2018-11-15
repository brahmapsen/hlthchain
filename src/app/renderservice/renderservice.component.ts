import { Component, OnInit } from '@angular/core';
import { hlinks } from '../hlthlinks';
import { PROVIDER_LINKS } from '../hlthlinks';


@Component({
  selector: 'app-renderservice',
  templateUrl: './renderservice.component.html',
  styleUrls: ['./renderservice.component.css']
})
export class RenderserviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  providerLinks = PROVIDER_LINKS;

}
