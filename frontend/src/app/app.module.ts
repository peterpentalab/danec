import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard.component';
import { PlantaListComponent } from './components/planta-list.component';
import { PlantaFormComponent } from './components/planta-form.component';
import { ProductoListComponent } from './components/producto-list.component';
import { ProductoFormComponent } from './components/producto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlantaListComponent,
    PlantaFormComponent,
    ProductoListComponent,
    ProductoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
