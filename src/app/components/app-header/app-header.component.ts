import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public miniNav = false;
  @Output() onToggle = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.miniNav = !this.miniNav;
    this.onToggle.emit(this.miniNav);
  }
}
