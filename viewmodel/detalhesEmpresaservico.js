$(document).ready(function(){
    
    params = (new URL(window.location)).searchParams;
    servico = params.get('servico');
    console.log("servico");
    console.log(servico);

    // Percorrer var artistasDB e descobrir info do artista
    function AppViewModel() {
        var self = this;

        self.empresa = ko.observable();

        for(i = 0; i<equipamentosBD.length; i++){
            for(j = 0; j<equipamentosBD[i]['pack'].length; j++){
                if(equipamentosBD[i]['servico'][j]['nome'] == servico){
                    console.log(equipamentosBD[i]);
                    self.empresa(equipamentosBD[i]);
                }
            }
        }
    }
    ko.applyBindings(new AppViewModel());
})