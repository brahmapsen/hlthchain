import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Headers} from "@angular/http";
import { map } from 'rxjs/operators';

import { Observable, of, Subject } from 'rxjs';


@Injectable()
export class ComposerService {

    private headers: Headers;

  constructor(private _http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  getCurrentTime() {
    return this._http.get('http://date.jsontest.com').pipe(
      map( res => res.json() ) );
  }

  postJSON() {
      var json = JSON.stringify({ var1: 'test', var2: 3 });
      var params = 'json=' + json;

      return this._http.post('http://validate.jsontest.com',
                              params, {
                                headers: this.headers
                               }).pipe(
                                map( res => res.json() ) );
  }

  createService() {

      var asset = {
        '$class': 'org.hlthchain.HealthService',
        'careCode': 'CCD_203',
        'careType': 'LAB_TEST',
        'careName': 'Heart Scan',
        'careDesc': 'Heart Scan'
      };

     return this._http.post('http://localhost:3000/api/HealthService', asset,
                            { headers: this.headers}).pipe
                                (map(res => res.json() ) );
  }

  public addAsset(itemToAdd: any): Observable<ComposerService> {
    console.log('In Add Asset: ' + itemToAdd.contractID + itemToAdd.careCode);
    var asset = {
      '$class': 'org.hlthchain.ContractService'
      ,'careCode': itemToAdd.careCode
      ,'chargeAmount': itemToAdd.chargeAmount
      ,'chargeUnit': itemToAdd.chargeUnit
      ,'contractDate': itemToAdd.contractDate
      ,'physId': itemToAdd.physId
      ,'contractID': itemToAdd.contractID
    };
    return this._http.post('http://localhost:3000/api/ContractService', asset,
                           { headers: this.headers}).pipe
                               (map(res => res.json() ) );
  }

  private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
  }

  private extractData(res: Response): any {
        return res.json();
    }


}
