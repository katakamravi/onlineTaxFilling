import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable()

export class RouteUtil {

   // tslint:disable-next-line:typedef
   getResolvedUrl(route: ActivatedRouteSnapshot) {
    return route.pathFromRoot.map((path) => path.url.map((segment) => segment.toString()).join('/')).join('/');
}
}
