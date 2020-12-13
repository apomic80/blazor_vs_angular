import { Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  template: `
    <div class="top-row pl-4 navbar navbar-dark">
        <a class="navbar-brand" href="">Angular Client</a>
        <button class="navbar-toggler" (click)="toggleNavMenu()">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div [ngClass]="{'collapse': collapseNavMenu}" class="@NavMenuCssClass" (click)="toggleNavMenu()">
        <ul class="nav flex-column">
            <li class="nav-item px-3">
                <a class="nav-link" routerLink="/" routerLinkActive="active">
                    <span class="oi oi-home" aria-hidden="true"></span> Home
                </a>
            </li>
            <li class="nav-item px-3">
                <a class="nav-link" routerLink="/counter" routerLinkActive="active" >
                    <span class="oi oi-plus" aria-hidden="true"></span> Counter
                </a>
            </li>
            <li class="nav-item px-3">
                <a class="nav-link" href="fetchdata" routerLink="/fetchdata" routerLinkActive="active">
                    <span class="oi oi-list-rich" aria-hidden="true"></span> Fetch data
                </a>
            </li>
        </ul>
    </div>
  `,
  styles: [`
    .navbar-toggler {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .top-row {
        height: 3.5rem;
        background-color: rgba(0,0,0,0.4);
    }
    
    .navbar-brand {
        font-size: 1.1rem;
    }
    
    .oi {
        width: 2rem;
        font-size: 1.1rem;
        vertical-align: text-top;
        top: -2px;
    }
    
    .nav-item {
        font-size: 0.9rem;
        padding-bottom: 0.5rem;
    }
    
        .nav-item:first-of-type {
            padding-top: 1rem;
        }
    
        .nav-item:last-of-type {
            padding-bottom: 1rem;
        }
    
        .nav-item a {
            color: #d7d7d7;
            border-radius: 4px;
            height: 3rem;
            display: flex;
            align-items: center;
            line-height: 3rem;
        }
    
    .nav-item a.active {
        background-color: rgba(255,255,255,0.25);
        color: white;
    }
    
    .nav-item a:hover {
        background-color: rgba(255,255,255,0.1);
        color: white;
    }
    
    @media (min-width: 641px) {
        .navbar-toggler {
            display: none;
        }
    
        .collapse {
            /* Never collapse the sidebar for wide screens */
            display: block;
        }
    }
  `
  ]
})
export class NavMenuComponent {

  collapseNavMenu = true;

  toggleNavMenu() {
      this.collapseNavMenu = !this.collapseNavMenu;
  }

}
