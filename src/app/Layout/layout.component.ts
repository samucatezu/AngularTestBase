import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class layoutComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  

  constructor(
    private observer: BreakpointObserver,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
    ) {}
  ngOnInit() {
    
  }

  
  

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
