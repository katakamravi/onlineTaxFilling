import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentHelper } from './contentHelper';

@Injectable()
export class ContentResolver implements Resolve<any> {
    finalResponse: any;
    constructor(private httpClient: HttpClient, private contentHelper: ContentHelper) { }
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Observable<never> {
        let templatePath = this.contentHelper.getResolvedUrl(route);
        templatePath = this.indexCheck(templatePath);
        const finalTemplate = this.getFinalTemplate(templatePath);
        return this.httpClient.get(finalTemplate);
    }

    // tslint:disable-next-line:typedef


    // tslint:disable-next-line:typedef
    indexCheck(templatePath: string) {
        templatePath = templatePath.substring(1);
        const lastIndexCheck = templatePath.lastIndexOf('/');
        templatePath = (templatePath.lastIndexOf('/') > 0) ? templatePath.substring(lastIndexCheck, 0) : templatePath;
        return templatePath;
    }

    // tslint:disable-next-line:typedef
    getFinalTemplate(templatePath: string) {
        return './assets/content/' + templatePath + '.json';
    }
}
