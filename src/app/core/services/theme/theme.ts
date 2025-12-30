import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private readonly STORAGE_KEY = 'theme';
  // private isBrowser: boolean = false;

    constructor() {
    // this.isBrowser = isPlatformBrowser(platformId);
    this.loadTheme();
  }

  //   getTheme(): 'dark' | 'light' {
  //   if (!this.isBrowser) return 'dark';
  //   return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  // }

  loadTheme() {
    if(!isPlatformBrowser(Inject(PLATFORM_ID))) return;
    else {
    const saved = localStorage.getItem(this.STORAGE_KEY);

    if (saved === 'dark') {
      this.enableDark();
    } else if (saved === 'light') {
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
    localStorage.setItem(this.STORAGE_KEY, 'dark');
  }

  disableDark() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(this.STORAGE_KEY, 'light');
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    isDark ? this.disableDark() : this.enableDark();
  }
  
}
