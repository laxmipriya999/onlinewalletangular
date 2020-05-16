import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Bank } from '../bank';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

 	private baseUrl = 'http://localhost:8014';
  constructor(private http: HttpClient) { }

  deposite(accNo: number,depositeAmount: number):Observable<Bank>{
	return this.http.get<Bank>(`${this.baseUrl}`+`/deposite/`+accNo+`&`+depositeAmount).pipe(catchError(this.errorHandle));
}
 
errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || " Server Error");
  }
}
