import IItem from "./interface/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Iniciando o jogo...")
    }
    getDescription(): void {
        console.log("Lendo descrição do jogo...")
    }

}