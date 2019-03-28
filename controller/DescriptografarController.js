class DescriptografarController{

    constructor(){
        this._textoDescriptogradado = [];

        this._listaDescriptografados = new ListaMensagensDescriptografadas();

        this._posicao_alfa = []

        this._texto_posicao = []
    }

    descriptografar(mensagem, chave, alfabeto){
        this._mensagem = mensagem.toUpperCase();
        this._alfabeto = alfabeto;

        this._chave = chave.toUpperCase().split('');
        console.log("Chave: ", this._chave)

        this._tam_chave = this._chave.length;
        console.log("Tamanho da Chave: ", this._tam_chave);   
        
        
        
        let texto = this._mensagem.replace( /\s/g, '');
        console.log("Texto sem espaço: ", texto);

        let texto_bloco = this.separador(texto, this._tam_chave);
        console.log("Bloco: ", texto_bloco);

        //FOR PEGANDO A POSIÇÃO DA CHAVE NO ALFABETO
        for(let num in this._chave){
            for(let index in this._alfabeto){
                if( this._chave[num] == this._alfabeto[index]){
                    console.log(index)
                    this._posicao_alfa.push(parseInt(index))
                    console.log("Chave posição no Alfabeto: ", this._posicao_alfa)
                }
            }
        }



        for(let i in texto_bloco){   
            this._texto_posicao.push(texto_bloco[i].split(''))   
        }
        console.log("Dividindo o Bloco: ", this._texto_posicao);



        var aux = 0
        for(let i = 0; i < this._texto_posicao.length; i++){

            for(let j = 0; j < this._texto_posicao[i].length; j++){

                console.log("Letra Alfabeto: ", this._texto_posicao[i][j])

                for (let index in this._alfabeto){

                    if(this._texto_posicao[i][j] == this._alfabeto[index]){
                        
                        var posicao_letra = parseInt(index);
                        console.log("Posição: ", posicao_letra) 
                        
                        
                        var soma = posicao_letra - this._posicao_alfa[aux]
                        if (soma < 0){
                            var letra_descifrada = soma + 26
                        }else{
                            var letra_descifrada = soma % 26
                        }

                        console.log("Chave: ", this._posicao_alfa[aux])
                        console.log("--")
                        console.log("Letra cifrada: ", letra_descifrada)
                        console.log("Correspondência: ", this._alfabeto[letra_descifrada])
                        console.log('--------------------------------')
                        
                        
                        //ATUALIZANDO O VALOR DO AUXILIAR
                        aux+=1 
                        if(aux > this._posicao_alfa[aux-1]){
                            aux = 0
                            console.log("Zerou!")
                        }
                        console.log("Posição Array da chave: ", aux)
                        console.log('--------------------------------')

                        this._textoDescriptogradado.push(this._alfabeto[letra_descifrada])
                
                    } 
                }       
            }
        }
        
        console.log(this._textoDescriptogradado)
        var junto = this._textoDescriptogradado.join(' ');
        this._listaDescriptografados.adiciona(junto);
        alert(junto)
        document.getElementById('mensagensView').innerHTML = junto;
    } 

    separador(texto, tamanho){
        const bloco = [];
        
        for(let i = 0; i < texto.length; i+=tamanho){
            bloco.push(texto.substring(i, i + tamanho));
        }

        return bloco;
        
    }
}