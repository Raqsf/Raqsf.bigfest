$(document).ready(function(){
    
    params = (new URL(window.location)).searchParams;
    empresa = params.get('empresa');
    equip = params.get('equip');
    console.log("empresa");
    console.log(empresa);
    console.log("equip");
    console.log(equip);

    // Percorrer var artistasDB e descobrir info do artista
    function AppViewModel() {
        var self = this;

        self.equip = ko.observable();

        for(i = 0; i<equipamentosBD.length; i++){
            if(equipamentosBD[i]['email'] == empresa){
                for(j = 0; j<equipamentosBD[i]['equip'].length; j++){
                    if(equipamentosBD[i]['equip'][j]['id'] == equip){
                        console.log(equipamentosBD[i]['equip'][j]);
                        self.equip(equipamentosBD[i]['equip'][j]);
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