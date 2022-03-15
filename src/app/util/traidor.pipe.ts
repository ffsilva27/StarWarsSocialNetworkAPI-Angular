import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traidor'
})
export class TraidorPipe implements PipeTransform {
  statusRetorno: string = "";
  transform(status: boolean, ...args: unknown[]): unknown {
    
    if(status==false){
      this.statusRetorno = "Não"
    }else{
      this.statusRetorno = "Sim"
    }
    return this.statusRetorno;
  }

}
