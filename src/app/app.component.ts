import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
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
        <div class="w-32 m-2">
          <h3 class="font-bold">NgIf -> &#64;if</h3>

          <mat-nav-list>
            <a mat-list-item routerLink="/ng-if">NgIf</a>
            <a mat-list-item routerLink="/at-if">&#64;if</a>
          </mat-nav-list>

          <h3 class="font-bold">NgFor -> &#64;for</h3>

          <mat-nav-list>
            <a mat-list-item routerLink="/ng-for">NgFor</a>
            <a mat-list-item routerLink="/at-for">&#64;for</a>
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
