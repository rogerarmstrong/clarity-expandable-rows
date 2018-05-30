/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    users: User[] = new Array<User>();

    constructor() {
        for (let i = 0; i < 20; i++) {
            this.users.push(new User(i, `user${i}`));
        }
    }
}

export class User {
    constructor(public id: number, public name: string) { }
}
