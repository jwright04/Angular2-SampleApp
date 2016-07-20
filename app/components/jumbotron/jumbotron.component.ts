import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {

    jbtHeading:string;
    jbtText:string;
    jbtButtonText:string;
    jbtButtonUrl:string;

    constructor(){

        this.jbtHeading = "Sample Application";
        this.jbtText = "This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.";
        this.jbtButtonText = "Read More";
        this.jbtButtonUrl = "http://abc123.com";
    }
}