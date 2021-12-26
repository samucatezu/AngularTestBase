import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CepDetailsComponent } from './cep-details/cep-details.component';
import { CepHomeComponent } from './cep-home/cep-home.component';
import { layoutComponent } from './Layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    layoutComponent,
    CepHomeComponent,
    CepDetailsComponent,
  ],
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
    // RouterModule.forRoot([
    //   { path: '', component: CepHomeComponent },
    //   { path: 'cep/:cep', component: CepDetailsComponent },
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
