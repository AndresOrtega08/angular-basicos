import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

   
    heroes: string[] = ['spiderman','Ironman', 'Hulk','1','2','3']
    heroesEliminado: string ='';
    
    borrar(): void{
      const heroeBorrado1 = this.heroes.splice((this.heroes.length)-1);
      
      console.log('borrando...', heroeBorrado1);
      console.log('quedan vivos...', this.heroes);
 
    }
    borrar2(): void{
      const heroeBorrado = this.heroes.shift()||'';
      this.heroesEliminado = heroeBorrado;

    }
}
