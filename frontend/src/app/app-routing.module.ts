import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { PlantaListComponent } from './components/planta-list.component';
import { PlantaFormComponent } from './components/planta-form.component';
import { ProductoListComponent } from './components/producto-list.component';
import { ProductoFormComponent } from './components/producto-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plantas', component: PlantaListComponent },
  { path: 'plantas/crear', component: PlantaFormComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/crear', component: ProductoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
