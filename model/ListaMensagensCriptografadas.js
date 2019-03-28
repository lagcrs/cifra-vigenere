class ListaMensagensCriptografadas{

    constructor(){
        this._mensagensCriptografadas = []
    }

    adiciona(mensagem){
        this._mensagensCriptografadas.push(mensagem);
        console.log(this._mensagensCriptografadas)
    }

    get mensagensCriptografadas(){
        return this.mensagensCriptografadas
    }
}