import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
// CLASSES
import { WishItem } from '../../shared/models/wishItem';

// SERVICES
import events from '../../shared/services/EventService'

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  get cssClasses() {
    return this.fulfilled ? ['strikeout', 'text-muted'] : [];
  }

  @Input() wishText!: string;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  removeWish() {
    events.emit('removeWish', this.wishText)
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
