$(document).ready(function ($) {
    function AppViewModel() {
        var self = this;
    
        self.equipamentos = ko.observableArray([
            empresas = equipamentosBD
        ]);
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

    // Ver https://getbootstrap.com/docs/4.1/components/forms/#select-menu para escolher empresa e equipamento
    $("#escolhaEmpresa").click(function(){
        // Ir buscar valor do select da empresa
        // Percorrer var BD das empresas para selecionar serviços da empresa escolhida
        // Adicionar serviços da empresa ao select serviços
        $("#formComEmpresa").removeClass("d-none");
    });
});