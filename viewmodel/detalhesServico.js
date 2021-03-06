$(document).ready(function(){
    
    params = (new URL(window.location)).searchParams;
    empresa = params.get('empresa');
    servico = params.get('servico');
    console.log("empresa");
    console.log(empresa);
    console.log("servico");
    console.log(servico);

    // TODO
    // Percorrer var artistasDB e descobrir info do artista
    function AppViewModel() {
        var self = this;

        self.servico = ko.observable();

        for(i = 0; i<equipamentosBD.length; i++){
            if(equipamentosBD[i]['email'] == empresa){
                for(j = 0; j<equipamentosBD[i]['servico'].length; j++){
                    if(equipamentosBD[i]['servico'][j]['nome'] == servico){
                        console.log(equipamentosBD[i]['servico'][j]);
                        self.servico(equipamentosBD[i]['servico'][j]);
                    }
                }
            }
        }
    }

    self.adicionarCarrinho = function (){
        console.log(this);

        // Verificar se existe, caso n existac criar vazio
        if (window.localStorage.getItem('carrinho') == null) {
            window.localStorage.setItem('carrinho', JSON.stringify([this]));
            alert("Artista adicionado ao carrinho");
        } else {
            // Caso exista, ir buscar array, adicionar produto e atualizar
            carrinho = window.localStorage.getItem('carrinho');
            carrinho.push(this);
            window.localStorage.setItem('carrinho', JSON.stringify(carrinho));
            alert("Artista adicionado ao carrinho");
        }
    }
    

    ko.applyBindings(new AppViewModel());
});