$(document).ready(function ($) {

    function AppViewModel() {
        var self = this;

        self.carrinho = ko.observableArray(
            carrinhoBD
        );

    }

    ko.applyBindings(new AppViewModel());
});