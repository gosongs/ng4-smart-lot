import { Component, OnInit } from '@angular/core';
import { navigation } from '../../_nav';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html',
  styleUrls: ['./app-aside.component.scss']
})
export class AppAsideComponent implements OnInit {
  theme = true;
  navigation: any[];
  miniNav = false;

  constructor() {
    navigation.map(item => {
      if (item['children'] && item['children'].length) {
        item['hasChild'] = true;
      } else {
        item['hasChild'] = false;
      }
    });
    this.navigation = navigation;
  }

  ngOnInit() {
  }

  toggle() {
    this.miniNav = !this.miniNav;
  }
}
