import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
    declarations: [
        HeaderComponent,
        NavComponent,
        InputComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        NavComponent,
        InputComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
