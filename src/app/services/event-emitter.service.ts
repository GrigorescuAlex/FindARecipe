import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeHomeSearchRecipes = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onHomeSearchRecipes(form: string) {    
    this.invokeHomeSearchRecipes.emit(form);    
  }    
}  

