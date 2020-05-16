
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Online } from './online';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OnlineserviceService {

   private baseUrl = 'http://localhost:8087';
  // private baseUrl1 = 'http://localhost:8085';
  httpService: any;
  
  online:Online;
  constructor(private http: HttpClient,private router:Router) { }
  createAccount(online :Object):Observable<Object>{
	return this.http.post(`${this.baseUrl}`+`/create`,online);
}

/*
userlogin(login:Online){
  console.log("ins service login");
  console.log(login);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put("http://localhost:8082/Loginuser", login,  { headers, responseType: 'text'});
}*/

userlogin(online :Object):Observable<Object>{
	return this.http.put(`${this.baseUrl}`+`/Loginuser`,online,{responseType:'text'}).pipe(catchError(this.errorHandle));
}

  deposite(accNo: number,depositeAmount: number):Observable<Online>{
	return this.http.get<Online>(`${this.baseUrl}`+`/deposite/`+accNo+`&`+depositeAmount).pipe(catchError(this.errorHandle));
}
errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || " Server Error");
  }

  public sharedId={};
}



