import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {
  generoRetorno:string = "";
  transform(genero: string, ...args: unknown[]): unknown {
    if(genero == "masculino"){
      this.generoRetorno = "Masculino";
    }else{
      this.generoRetorno = "Feminino";
    }
    return this.generoRetorno;
  }

}
