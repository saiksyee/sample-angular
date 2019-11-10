import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  private url='http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
    })
  };
  
  public CheckUserLogin(data):Observable<any>{
    return this.httpClient.post(this.url+'/checkUser',JSON.stringify(data),this.httpOptions).pipe(
      map(res=>res));
  }
}
