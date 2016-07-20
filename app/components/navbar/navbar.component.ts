import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {

    projectName:string;

    constructor(){

        this.projectName = "Sample Application";
    }
}