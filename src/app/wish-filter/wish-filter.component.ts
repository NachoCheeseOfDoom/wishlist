import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//CLASSES
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.updateFilter('0');
    // this.filter.emit(filters[0]);

  }

  listFilter: any = '0';

  updateFilter(value: any) {
    this.filter = filters[value]
    this.filterChange.emit(this.filter);
  }
}
