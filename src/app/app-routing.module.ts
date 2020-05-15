import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: "", redirectTo: "/table-list", pathMatch: "full" },
  {
    path: "table-list",
    loadChildren: () =>
      import("./customerdashboard/customer.module").then(m => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
