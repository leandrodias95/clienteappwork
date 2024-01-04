import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';

  ngAfterViewInit(): void {
    (function ($) {
      "use strict";
    
      // Adiciona estado ativo aos links de navegação da barra lateral
      const path: string = window.location.href;
    
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        // Utiliza type assertion para informar ao TypeScript que 'this' é um HTMLAnchorElement
        const anchorElement = this as HTMLAnchorElement;
    
        if (anchorElement.href === path) {
          $(anchorElement).addClass("active");
        }
      });
    
      // Alterna a navegação lateral
      $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}
