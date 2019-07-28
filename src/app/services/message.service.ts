
import { Injectable } from '@angular/core';
import { IEmail } from '../models/email.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public sendEmail(email: IEmail): Observable<any> {
    return this.http.post<any>('http://localhost:3000/messages/email', email);
  }

}