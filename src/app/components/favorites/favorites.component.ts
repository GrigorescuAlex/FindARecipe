import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipes } from 'src/app/models';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
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
export class FavoritesComponent implements OnInit {
  
  favorites:  Recipes[] = [];
  favoritesSub: Subscription;

  constructor(private favoritesServ: FavoritesService ) { }


  ngOnInit(){
    this.favoritesSub = this.favoritesServ.getAllFavorites().subscribe((data) => this.favorites = data, 
    (error) => console.log(error))
    console.log(this.favorites);

  }

  ngOnDestroy(){
    this.favoritesSub.unsubscribe();
  }

  deleteRecipe(id:number){
    this.favoritesServ.deleteRecipe(id).subscribe((data) => {
      this.ngOnInit();
    })
  }

}







