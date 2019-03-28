class ListaMensagens{

    constructor(){
        this._mensagens = [];
    }

    adiciona(mensagem){
        this._mensagens.push(mensagem);
    }

    get mensagens(){
        return [].concat(this._mensagens);
    }
}