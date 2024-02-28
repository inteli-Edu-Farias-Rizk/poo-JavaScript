class Carro{
    constructor(marca,modelo,ano,cor,preco){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
    descricao(){
        console.log(`Este é um ${this.marca} ${this.modelo} ano ${this.ano}, na cor ${this.cor} e custa $ ${this.preco}`);
    }
}   
class CarroNovo extends Carro{
    constructor(marca,modelo,ano,cor,preco,garantia){
        super(marca,modelo,ano,cor,preco)
        this.garantia = garantia;

    }
    ofertaEspecial(){
    console.log(`Aproveite nossa oferta ${this.marca} ${this.modelo}! Por apenas $ ${this.preco-500} você leva o carro com ${this.garantia}`)

    }

}
var carro01 = new CarroNovo("Chevrolet", "33z", 1999, 'vermelho', 44.555, 'Vinte anos')
carro01.descricao();
carro01.ofertaEspecial();

  

