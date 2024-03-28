import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    CurrencyPipe
  ],
  templateUrl: "./product-box.component.html"
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
}
