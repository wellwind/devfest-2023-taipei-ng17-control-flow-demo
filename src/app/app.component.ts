import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Angular 17 Control Flow Demo</span>
    </mat-toolbar>
    <mat-sidenav-container class="h-[calc(100vh-64px)]">
      <mat-sidenav [opened]="true" mode="side">
        <div class="w-48 m-2">
          <h3 class="font-bold">NgIf -> &#64;if</h3>

          <mat-nav-list>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/ng-if">
              NgIf
            </a>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/at-if">
              &#64;if
            </a>
          </mat-nav-list>

          <h3 class="font-bold">NgFor -> &#64;for</h3>

          <mat-nav-list>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/ng-for">
              NgFor
            </a>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/at-for">
              &#64;for
            </a>
          </mat-nav-list>

          <h3 class="font-bold">NgSwitch -> &#64;switch</h3>

          <mat-nav-list>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/ng-switch">
              NgSwitch
            </a>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/at-switch">
              &#64;switch
            </a>
          </mat-nav-list>

          <h3 class="font-bold">&#64;defer</h3>
          <mat-nav-list>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/defer/basic">
              Basic Usage
            </a>
            <a mat-list-item routerLinkActive="pl-2" routerLink="/defer/blocks">
              Blocks
            </a>
            <a
              mat-list-item
              routerLinkActive="pl-2"
              routerLink="/defer/trigger-when"
            >
              Triggers: when
            </a>
            <a
              mat-list-item
              routerLinkActive="pl-2"
              routerLink="/defer/trigger-on-viewport"
            >
              Triggers: on viewport
            </a>
            <a
              mat-list-item
              routerLinkActive="pl-2"
              routerLink="/defer/trigger-on-hover"
            >
              Triggers: on hover
            </a>
          </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="m-2">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class AppComponent {}
