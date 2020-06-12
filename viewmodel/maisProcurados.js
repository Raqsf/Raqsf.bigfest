$(document).ready(function ($) {
    function AppViewModel() {
        var self = this;
    
        self.maisProcurados = ko.observableArray([
            maisProcuradosBD
        ]);
    }

    self.adicionarCarrinho = function (){
        console.log(this);

        // Verificar se existe, caso n exista criar vazio
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