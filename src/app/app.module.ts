import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarRebeldeComponent } from './criar-rebelde/criar-rebelde.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main-screen/main/main.component';
import { NavBarComponent } from './main-screen/nav-bar/nav-bar.component';
import { ListagemRebeldesComponent } from './listagem-rebeldes/listagem-rebeldes.component';
import { ModalListagemComponent } from './modal-listagem/modal-listagem.component';
import { TraidorPipe } from './util/traidor.pipe';
import { GeneroPipe } from './util/genero.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CriarRebeldeComponent,
    ModalComponent,
    HomeComponent,
    MainComponent,
    NavBarComponent,
    ListagemRebeldesComponent,
    ModalListagemComponent,
    TraidorPipe,
    GeneroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
