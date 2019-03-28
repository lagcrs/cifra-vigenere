class Mensagem {
    constructor(mensagem, chave, opcao) {
        
        this._mensagem = mensagem;
        this._chave = chave;
        this._opcao = opcao;      
    }

    get mensagem (){
        return this._mensagem;
    }

    get chave (){
        return this._chave;
    }

    get opcao (){
        return this._opcao;
    }

   
}