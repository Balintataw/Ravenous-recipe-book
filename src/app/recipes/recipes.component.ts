import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

    constructor(private authService: AuthService) { };

    ngOnInit() { };

    isAuth() {
        return this.authService.isAuth();
    }
};
