import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { NgChartsModule } from 'ng2-charts';

import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { layoutComponent } from './Layout/layout.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { TestFieldComponent } from './pages/test-field/test-field.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './pages/test-field/portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, layoutComponent, TestFieldComponent, PortfolioComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    FontAwesomeModule,
    // RouterModule.forRoot([
    //   { path: '', component: CepHomeComponent },
    //   { path: 'cep/:cep', component: CepDetailsComponent },
    // ]),
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
