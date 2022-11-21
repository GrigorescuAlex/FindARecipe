import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { Results } from 'src/app/models';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:  [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('100ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  public search: any;
  public recipes: any[] = [];

  constructor(
    private httpService: HttpService,
    public loaderService: LoadingService,
    private eventEmitterService: EventEmitterService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchRecipes(this.search);
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeHomeSearchRecipes.subscribe((form:string) => {    
        this.searchRecipes(form);    
      });    
    }   
  }

   searchRecipes(search: string) {
    this.httpService
      .getRecipeList(search)
      .subscribe((response: Results) => {
        this.recipes = response.hits;
      }
    );
  }

  openDialog(recipe) {
    let dialogRef = this.dialog.open(DialogComponent,{
      data: recipe
    });
  }

  
}






  

  