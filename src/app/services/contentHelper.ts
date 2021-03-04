import { Injectable } from "@angular/core";
import { RouteUtil } from "./routeUtil";


@Injectable()
export class ContentHelper extends RouteUtil {
// tslint:disable-next-line:variable-name
protected _routeContentStore: { [name: string]: any} = {};

registerRouteContent(path: string, content: any) {
if (this._routeContentStore && this._routeContentStore[path] === undefined ) {
this._routeContentStore[path] = content;
}
}

getContent(path: string) {
return this._routeContentStore[path];
}

resetContent() {
    this._routeContentStore = {};
}
}
