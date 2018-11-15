import { Component, OnInit } from '@angular/core';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-hl-composer',
  // template: `
  // <button (click)="onTestGet()"> Test GET Request</button><br/>
  // <p>GET Output: {{getData}}</p>
  // <button (click)='onTestPut()'> Test POST Request</button><br/>
  // <p>POST Output: {{postData}}</p>
  // <button (click)='createService()'> Create a Service</button><br/>
  // <p>Service Output: {{postService}}</p>
  // `,
  templateUrl: './hl-composer.component.html',
  providers: [ComposerService],
  styleUrls: ['./hl-composer.component.css']
})
export class HlComposerComponent implements OnInit {

  constructor(private _composerService: ComposerService) { }

  ngOnInit() {}

  getData: string;
  postData: string;
  postService: string;


  onTestGet(){
     this._composerService.getCurrentTime()
         .subscribe(
           data => this.getData = JSON.stringify(data),
           error => alert(error),
           () => console.log("Finished")
         );
  }

  onTestPut(){
     this._composerService.postJSON()
         .subscribe(
           data => this.postData = JSON.stringify(data),
           error => alert(error),
           () => console.log("Finished")
         );

  }

  createService(){

     return this._composerService.createService()
         .subscribe(
           data => this.postService = JSON.stringify(data),
           error => alert(error),
           () => console.log("Finished")
         );

  }


}
