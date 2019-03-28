class ListaMensagensDescriptografadas{

    constructor(){
        this._mensagensDescriptografadas = []
    }

    adiciona(mensagem){
        this._mensagensDescriptografadas.push(mensagem);
        console.log(this._mensagensDescriptografadas);
    }

    get mensagensDescriptografadas(){
        return this._mensagensDescriptografadas;
    }
}