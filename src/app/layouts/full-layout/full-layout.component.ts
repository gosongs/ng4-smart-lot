import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  public miniNav = false;

  constructor() {
  }

  ngOnInit() {
  }

  onToggle(miniNav: boolean) {
    this.miniNav = miniNav;
  }
}
