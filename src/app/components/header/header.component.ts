import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    CurrencyPipe
  ],
  templateUrl: './header.component.html', 
})
export class HeaderComponent {
  constructor() {

  }

  ngOnInit(): void {

  }

}