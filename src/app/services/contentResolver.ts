import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentHelper } from './contentHelper';

@Injectable()
export class ContentResolver implements Resolve<any> {
    finalResponse: any;
   constructor(private httpClient: HttpClient, private contentHelper: ContentHelper) {}
    resolve(route: ActivatedRouteSnapshot): any {
        let templatePath = this.contentHelper.getResolvedUrl(route);
        templatePath = this.indexCheck(templatePath);
        console.log(this.getData(templatePath));
    }

    // tslint:disable-next-line:typedef
    getContentData(templatePath: string) {
    this.getData(templatePath);
    }

    // tslint:disable-next-line:typedef
    async getData(templatePath: string) {
    let response = null;
    return this.httpClient.get(this.getFinalTemplate(templatePath)).subscribe(result => {
     if (result !== undefined && result !== null) {
      response = result;
     }
     });
    // return response;
    }


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
