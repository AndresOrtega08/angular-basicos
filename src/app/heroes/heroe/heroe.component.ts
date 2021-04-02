import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Aironman';
    edad: number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre():string{
        return `${ this.nombre} - ${ this.edad}`;

    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';

    }
    cambiarEdad():void{
        this.edad = 1;
    }
    volver():void{
        this.edad = 45;
        this.nombre='Aironman';
    }

}