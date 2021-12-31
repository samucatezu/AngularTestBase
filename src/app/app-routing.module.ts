import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { layoutComponent } from './Layout/layout.component';
import { TestFieldComponent } from './pages/test-field/test-field.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  { path: '', component: layoutComponent },
  { path: 'layout', component: layoutComponent },
  { path: 'testfield', component: TestFieldComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
