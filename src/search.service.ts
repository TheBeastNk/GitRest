import { Injectable } from '@angular/core'
import { HttpHeaders,HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable()

export class SearchService {
    
    private apiUrl = '//api.github.com/search/users';
	constructor(private http: HttpClient){}
    


    getUsersList(param: string,page: number,sort:string,order: string): Observable<any>{
    	return this.http.get(`${this.apiUrl}?q=${param}&page=${page}&per_page=10&sort=${sort}&order=${order}`)	 
    } 

    getUsersMoreInfo(param: string): Observable<any>{
    	return this.http.get(param)	 
    }

    getUsersRepo(param: string): Observable<any>{
    	return this.http.get(param)	 
    }

}