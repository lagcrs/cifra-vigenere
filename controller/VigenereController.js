class VigenereController{

    constructor (){
        let $ = document.querySelector.bind(document);
        this._inputMensagem = $('#mensagem');
        this._inputChave = $('#chave');
        this._inputCheckbox = $('#opcao');

        this._listaMensagens = new ListaMensagens();
        this._mensagem = new Mensagem();

        this._criptografar = new CriptografarController();
        this._descriptografar = new DescriptografarController();

        

        this._alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    adiciona(event){
        event.preventDefault();
        this._listaMensagens.adiciona(this._criaMensagem());
        console.log('Mensagem adicionada com sucesso');
        this._opcaoCheck();
    }

    _criaMensagem(){
        return new Mensagem(
            this._inputMensagem.value,
            this._inputChave.value,
            this._inputCheckbox.value
        )
    }

    _opcaoCheck(){
        if (this._inputCheckbox.value === '1'){
            this._criptografar.criptografar(this._inputMensagem.value, this._inputChave.value, this._alfabeto)

        }
                  
        if (this._inputCheckbox.value === '2'){
            this._descriptografar.descriptografar(this._inputMensagem.value, this._inputChave.value, this._alfabeto)
        } 
    }  
}