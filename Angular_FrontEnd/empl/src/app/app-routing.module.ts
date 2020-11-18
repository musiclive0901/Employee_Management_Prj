import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'list-test',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
