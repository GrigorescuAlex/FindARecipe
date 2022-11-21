import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

 
constructor(private http: HttpClient) { }

getAllFavorites(): Observable<any> {
  return this.http.get<any>(`${env.JSON_URL}/recipes`)
}

postRecipe(recipe: any): Observable<any>{
  return this.http.post<any>(`${env.JSON_URL}/recipes`, recipe);
}

deleteRecipe(id: number): Observable<void> {
  console.log(id);
  return this.http.delete<void>(`${env.JSON_URL}/recipes/${id}`);
}
}
