import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './app-breadcrumb.component.html',
  styleUrls: ['./app-breadcrumb.component.scss']
})
export class AppBreadcrumbComponent implements OnInit {
  public breadcrumbs: Array<any> = [];
  public title = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.parseRoute(this.router.routerState.snapshot.root);
    this.router.events.subscribe(event => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
    });
  }

  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['title']) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach(routerState => {
        urlSegments = urlSegments.concat(routerState.url);
      });
      const url = urlSegments.map(urlSegment => {
        return urlSegment.path;
      }).join('/');

      this.breadcrumbs.push({
        name: node.data['title'],
        url: '/' + url
      });
    }

    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    } else {
      this.title = node.data['title'];
    }
  }
}
