import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
  nome = "Fulano da Silva";
  telefone = "11.999.999.999";
  idade = 73;
  CPF = "12312312399";
  email = "fulano@email.com";
  instagram = "https://www.google.com.br";
  linkedin = "http://manasbrodas.wordpress.com";

  visible = true;

  trocaDiv(){
    this.visible=!this.visible;
  }

  trocaValor(){
    this.nome="Harry Potter";
    this.telefone="11 98989899898999";
    this.CPF="000.123.000-11";
    this.idade="125";
    this.email = "harry.potter@email.com";
  }

  trocaDeVolta(){
    this.nome="Fulano da Silva";
    this.telefone="11.999.999.999";
    this.CPF="12312312399";
    this.idade="73";  
    this.email = "fulano@email.com";
  }


}
