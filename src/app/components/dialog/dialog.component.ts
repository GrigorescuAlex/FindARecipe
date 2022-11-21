import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoritesService } from 'src/app/services/favorites.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  // favorites?: [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private http: FavoritesService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  printPage() {
    window.print();
  }

  saveToFavorites(data) {
    console.log(data);
    this.http.postRecipe(data).subscribe((data) => this.data = data, 
      (error) => console.log(error));
  }

}

