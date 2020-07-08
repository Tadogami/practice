import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.authService.afUser$;

  constructor(
    private authService: AuthService
  ) {}

  title = 'practice';

  logout() {
    this.authService.logout();

  }
}

