import { Component, EventEmitter, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort="sort"
  itemsShowCount=12

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount=count
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNum: number): void {
    this.columsCountChange.emit(colsNum);
  }
}
