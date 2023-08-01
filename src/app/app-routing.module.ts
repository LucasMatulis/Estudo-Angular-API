import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './views/sobre/sobre.component';
import { ClienteComponent } from './views/cliente/cliente.component';

const routes: Routes = [
  {
    path:'sobre',
    component: SobreComponent
  },
  {
    path:'cliente',
    component: ClienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
