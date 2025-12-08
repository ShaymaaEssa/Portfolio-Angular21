import { Component, inject } from '@angular/core';
import { theme } from '../../state/theme.signal';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {

  private readonly themeSignal = inject(theme);

  toggleTheme(){
    theme.update(current => current === 'light' ? 'dark' : 'light');
  }

}
