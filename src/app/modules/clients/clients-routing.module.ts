import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from "./components/clients/clients.component";
import { ClientsListComponent } from "./components/clients-list/clients-list.component";
import { ClientFormComponent } from "./components/client-form/client-form.component";

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ClientsListComponent
      },
      {
        path: 'add',
        component: ClientFormComponent
      },
      {
        path: ':id',
        component: ClientFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
