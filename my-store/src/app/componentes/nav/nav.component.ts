import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../servicios/store.service';
@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  showMenu: boolean = false;

  counter = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


}
