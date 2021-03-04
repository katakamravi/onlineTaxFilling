import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContentHelper } from "../services/contentHelper";

@Injectable()
export class BaseComponent {
    private _content: any;
    private _componentName: string;

    constructor(private route: ActivatedRoute, @Inject('contentHelper') private contentHelper: ContentHelper,
                @Inject('componentName') componentName: string = '') {
        this._componentName = componentName;
        this.route.data.subscribe((data) => {
            if (data) {
            this._content = this.setContent(data.content);
            if (!this._content && this._content === undefined && this._componentName) {
                this._content = this.contentHelper.getContent(this._componentName);
            }
            }
        });

    }
    setContent(data: any) {
        const templatePath = this.contentHelper.getResolvedUrl(this.route.snapshot);
        this.contentHelper.registerRouteContent(templatePath, data);
        this.contentHelper.getContent(templatePath);
    }

    get content(): any {
     return this._content;
    }
}
