class Evento{
    constructor(){ //iincialmente não tem ninguém na array nem no valor eles são valores fixos, por esse motivo eles não precisam srer definidos no constructor
        this.tipos = [];
        this.valor = 0;
        
    }
    adiciona(fornecedor,orcamento){
        this.tipos.push(fornecedor)
        this.valor = this.valor + orcamento
    }
    getTotal(){
        return this.valor,this.tipos
    }
}
var e1 = new Evento(); //criando um novo obejto da classe evento
console.log(e1.getTotal())
e1.adiciona('som', 500)
console.log(e1.getTotal())
