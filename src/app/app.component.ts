import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// SERVICES
import events from '../shared/services/EventService'

// CLASSES
import { WishItem } from '../shared/models/wishItem';
// COMPONENTS
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent]
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn to be cool.'),
    new WishItem('Drink coffee.', true),
    new WishItem('Find a job that pays well.'),
  ];

  constructor() {
    events.listen('removeWish', (wish: any) => {
      console.log(wish)
    })
  }

  filter: any;
}
