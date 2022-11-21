import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
  }

  homeSearchRecipes(form: string){
    this.eventEmitterService.onHomeSearchRecipes(form);    
  }
}
