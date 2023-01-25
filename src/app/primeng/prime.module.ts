import { NgModule } from "@angular/core";
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';

@NgModule({
    imports: [],
    exports: [
        CalendarModule,
        CheckboxModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        InputNumberModule,
        TableModule
    ]
})
export class PrimeModule { }
