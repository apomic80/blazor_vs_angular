import { Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: 'navmenu.component.html',
  styleUrls: ['navmenu.component.css']
})
export class NavMenuComponent {

  collapseNavMenu = true;

  toggleNavMenu() {
      this.collapseNavMenu = !this.collapseNavMenu;
  }

}
