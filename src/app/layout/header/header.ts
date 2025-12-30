
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Theme } from '../../core/services/theme/theme';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{
 

  scrolled = false;
  private readonly themeService = inject(Theme);
   ngOnInit(): void {
    
  }


  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }



}
