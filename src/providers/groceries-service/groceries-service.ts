import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import{map,catchError} from 'rxjs/operators';
import{ Subject} from 'rxjs';

/*
  Generated class for the GroceriesServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

  items: any = [];

  dataChanged$: Observable<boolean>;
  private dataChangeSubject: Subject <boolean>;
  baseURL="https://groceries-server-demo-one.herokuapp.com";

  

  constructor (public http: HttpClient){
    console.log('Hello GroceriesServiceProvider Provider');

    this.dataChangeSubject=new Subject <boolean>();
    this.dataChanged$=this.dataChangeSubject.asObservable();
  }

  getItems():Observable<object[]> {
    return this.http.get(this.baseURL + '/api/groceries').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res:Response){
    let body=res;
    return body || {};

  }
    
  private handleError(error:Response | any){
    let errMsg: string;
    if (error instanceof Response){
      const err=error || '';
      errMsg=`${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg=error.message ? error.message : error.toString();
    }
    
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  removeItem(item) {
    console.log("Remove Item - id= " + item);
    this.http.delete(this.baseURL + "/api/groceries/"+ item._id).subscribe(res =>{
      this.items=res;
      this.dataChangeSubject.next(true);
    });
   
  }

  addItem(item) {
    this.http.post(this.baseURL +"/api/groceries/", item).subscribe(res=> {
      this.items=res;
      this.dataChangeSubject.next(true);
    });
    
  }

  editItem(item, keepId, index){
      this.http.put(this.baseURL+'/api/groceries/'+keepId, item).subscribe(res => {
      this.items=res;
      this.dataChangeSubject.next(true);
    });
  }

}