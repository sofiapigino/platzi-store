import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date(); // Automaticamente toma la fecha actual

    // Aca es donde se construye nuestro ProductComponent
    constructor() {
        console.log('1. constructor'); // Para ver el orden en que se ejecutan en el ciclo de vida del componente
    }

    /*     ngOnChanges(changes: SimpleChanges) {
            console.log('2. ngOnChanges'); // Un log de seguimiento
            console.log(changes);
        } */

    // Se ejecuta solo una vez y es cuando el componente ya fue puesto en pantalla
    ngOnInit() {
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        console.log('Agregar al carrito');
        this.productClicked.emit(this.product.id);
    }
}
