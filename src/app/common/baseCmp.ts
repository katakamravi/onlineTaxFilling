import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContentHelper } from "../services/contentHelper";
import { map } from 'rxjs/operators';
@Injectable()
export class BaseComponent {
    private _content: any;
    private _componentName: string;

    constructor(private route: ActivatedRoute, @Inject('contentHelper') private contentHelper: ContentHelper,
        @Inject('componentName') componentName: string = '') {
        this._componentName = componentName;
        this.route.data.pipe(map((data) => data.content)).subscribe((res) => {
            console.log(res);
            if (res) {
                this._content = this.setContent(res);
            }
        });
    }
    // tslint:disable-next-line:typedef
    setContent(data: any) {
        const templatePath = this.contentHelper.getResolvedUrl(this.route.snapshot);
        this.contentHelper.registerRouteContent(templatePath, data);
        return this.contentHelper.getContent(templatePath);
    }

    get content(): any {
        return this._content;
    }
}
