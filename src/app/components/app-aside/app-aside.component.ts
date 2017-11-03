import { Component, OnInit, Input } from '@angular/core';
// import { navigation } from '../../_nav';
import { navigation } from '../../_navdemo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html',
  styleUrls: ['./app-aside.component.scss']
})
export class AppAsideComponent implements OnInit {
  theme = true;
  navigation: any[];
  curRouter: string;
  @Input() miniNav: boolean;

  constructor(private router: Router) {
    navigation.map(item => {
      if (item['children'] && item['children'].length) {
        item['hasChild'] = true;
      } else {
        item['hasChild'] = false;
      }
    });
    this.navigation = navigation;
    this.curRouter = this.router.url;
  }

  ngOnInit() {
  }

  toggle() {
    this.miniNav = !this.miniNav;
  }
}
