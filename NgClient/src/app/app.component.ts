import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="page">
        <div class="sidebar">
            <app-navmenu></app-navmenu>
        </div>

        <div class="main">
            <div class="top-row px-4">
                <a href="https://angular.io/" target="_blank" class="ml-md-auto">About</a>
            </div>

            <div class="content px-4">
              <router-outlet></router-outlet>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .page {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .main {
        flex: 1;
    }

    .sidebar {
        background-image: linear-gradient(180deg, rgb(5, 39, 103) 0%, #3a0647 70%);
    }

    .top-row {
        background-color: #f7f7f7;
        border-bottom: 1px solid #d6d5d5;
        justify-content: flex-end;
        height: 3.5rem;
        display: flex;
        align-items: center;
    }

        .top-row ::deep a, .top-row .btn-link {
            white-space: nowrap;
            margin-left: 1.5rem;
        }

        .top-row a:first-child {
            overflow: hidden;
            text-overflow: ellipsis;
        }

    @media (max-width: 640.98px) {
        .top-row:not(.auth) {
            display: none;
        }

        .top-row.auth {
            justify-content: space-between;
        }

        .top-row a, .top-row .btn-link {
            margin-left: 0;
        }
    }

    @media (min-width: 641px) {
        .page {
            flex-direction: row;
        }

        .sidebar {
            width: 250px;
            height: 100vh;
            position: sticky;
            top: 0;
        }

        .top-row {
            position: sticky;
            top: 0;
            z-index: 1;
        }

        .main > div {
            padding-left: 2rem !important;
            padding-right: 1.5rem !important;
        }
    }
  `]
})
export class AppComponent {
  
}
