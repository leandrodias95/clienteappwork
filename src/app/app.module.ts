import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './service/clientes.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ServicoPrestadoService } from './service/servico-prestado.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true},
    ClientesService,
    ServicoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
