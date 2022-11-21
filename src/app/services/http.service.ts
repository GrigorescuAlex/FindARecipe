import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Results} from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRecipeList(search: string = 'random'): Observable<Results> {
    return this.http.get<Results>(`${env.API_URL}&q=${search}&app_id=${env.API_ID}&app_key=${env.API_KEY}&imageSize=LARGE&random=true`)
  } 
}