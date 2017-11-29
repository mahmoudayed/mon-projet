import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import * as x2js  from 'xml2json';

@Injectable()
export class XmlService {

  constructor(private _http: HttpClient) { }


    getCompanies(): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/xml');

        return this._http.get('http://www.lemonde.fr/videos/rss_full.xml', {headers: headers});
    }


}
