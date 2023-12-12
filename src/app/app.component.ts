import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule],
  template: `
    <mat-toolbar color="primary">
      <span>Angular 17 Control Flow Demo</span>
    </mat-toolbar>
    <mat-sidenav-container class="h-[calc(100vh-64px)]">
      <mat-sidenav [opened]="true" mode="side">
        <div class="w-32 m-2">
          <h3>Menu</h3>
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
