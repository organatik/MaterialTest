import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidenavContainerComponent } from './components/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './components/sidenav-container/sidenav/sidenav.component';
import { MainContentComponent } from './components/sidenav-container/main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavContainerComponent,
    SidenavComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
