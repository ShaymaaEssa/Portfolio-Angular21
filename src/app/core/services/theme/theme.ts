import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { APP_THEME, THEME_STORAGE_KEY } from '../../environment/theme';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  // private readonly STORAGE_KEY = 'portfolio-theme';
  private readonly platformId = Inject(PLATFORM_ID);
  // private isBrowser: boolean = false;

    constructor() {
    // this.isBrowser = isPlatformBrowser(platformId);
    this.loadTheme();
  }

  loadTheme() {
    if(!isPlatformBrowser(this.platformId)) return;
    else {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);

    if (saved === APP_THEME.dark) {
      this.enableDark();
    } else if (saved === APP_THEME.light) {
      this.disableDark();
    } else {
      // system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      prefersDark ? this.enableDark() : this.disableDark();
    }
    }
  }

  enableDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem(THEME_STORAGE_KEY, APP_THEME.dark);
  }

  disableDark() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(THEME_STORAGE_KEY, APP_THEME.light);
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    isDark ? this.disableDark() : this.enableDark();
  }
  
}
