import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { layoutComponent } from './Layout/layout.component';
import { TestFieldComponent } from './pages/test-field/test-field.component';

const routes: Routes = [
  { path: '', component: layoutComponent },
  { path: 'layout', component: layoutComponent },
  { path: 'testfield', component: TestFieldComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
