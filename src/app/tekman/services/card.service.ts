import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor(private http: HttpClient) {
   }


  getListCardInfo(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/cardinfo');
  }

}
