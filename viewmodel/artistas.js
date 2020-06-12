$(document).ready(function ($) {

    function AppViewModel() {
        var self = this;

        self.artistas = ko.observableArray([
            agentes = artistasBD
        ]);

    }

    self.adicionarCarrinho = function (){
        console.log(this);

        // Verificar se existe, caso n exista criar vazio
        if (window.localStorage.getItem('carrinhoBD') == null) {
            window.localStorage.setItem('carrinhoBD', JSON.stringify([this]));
            alert("Artista adicionado ao carrinho");
        } else {
            // Caso exista, ir buscar array, adicionar produto e atualizar
            carrinho = window.localStorage.getItem('carrinhoBD');
            carrinho.push(this);
            window.localStorage.setItem('carrinhoBD', JSON.stringify(carrinho));
            alert("Artista adicionado ao carrinho");
        }
    }

    ko.applyBindings(new AppViewModel());
});