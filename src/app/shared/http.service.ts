import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Sample of http options to be used at later point if needed
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class HttpService {

    public constructor(private client: HttpClient) {
    }

    public postToUrl<T>(url: string, body: T, httpOptions?: any): Observable<any> {
        return this.client.post(url, body, httpOptions);
    }

    public getFromUrl(url: string): Observable<any> {
        return this.client.get<any>(url);
    }

}
