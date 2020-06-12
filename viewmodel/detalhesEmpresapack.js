$(document).ready(function(){
    
    params = (new URL(window.location)).searchParams;
    pack = params.get('pack');
    console.log("pack");
    console.log(pack);

    // Percorrer var artistasDB e descobrir info do artista
    function AppViewModel() {
        var self = this;

        self.empresa = ko.observable();

        for(i = 0; i<equipamentosBD.length; i++){
            for(j = 0; j<equipamentosBD[i]['pack'].length; j++){
                if(equipamentosBD[i]['pack'][j]['nome'] == pack){
                    console.log(equipamentosBD[i]);
                    self.empresa(equipamentosBD[i]);
                }
            }
        }
    }
    ko.applyBindings(new AppViewModel());
})