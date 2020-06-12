$(document).ready(function(){
    
    params = (new URL(window.location)).searchParams;
    equip = params.get('equip');
    console.log("equip");
    console.log(equip);

    // Percorrer var artistasDB e descobrir info do artista
    function AppViewModel() {
        var self = this;

        self.empresa = ko.observable();

        for(i = 0; i<equipamentosBD.length; i++){
            for(j = 0; j<equipamentosBD[i]['equip'].length; j++){
                if(equipamentosBD[i]['equip'][j]['id'] == equip){
                    console.log(equipamentosBD[i]);
                    self.empresa(equipamentosBD[i]);
                }
            }
        }
    }
    ko.applyBindings(new AppViewModel());
})