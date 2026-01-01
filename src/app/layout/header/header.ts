
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Theme } from '../../core/services/theme/theme';
import { isPlatformBrowser } from '@angular/common';
import { APP_THEME, THEME_STORAGE_KEY } from '../../core/environment/theme';
import { FlowbiteService } from '../../core/services/flowbite/flowbite';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {


  themeSaved: "dark" | "light" = "dark";
  scrolled = false;
  isMenuOpen = false;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeService = inject(Theme);

  constructor(private flowbiteService: FlowbiteService) { }



  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

    this.getTheme();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  getTheme() {
    if (isPlatformBrowser(this.platformId)) {

      this.themeSaved = localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
      console.log(this.themeSaved);
      console.log('browser');
      return;
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.getTheme();

  }


  openMenu() {
    this.isMenuOpen = true;
    document.body.style.overflow = 'hidden'; // lock scroll
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleMenu() {
    this.isMenuOpen ? this.closeMenu() : this.openMenu();
  }

}
