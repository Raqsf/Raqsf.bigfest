$(document).ready(function(){
    
        params = (new URL(window.location)).searchParams;
        agente = params.get('agente');
        artista = params.get('artista');
        console.log("agente");
        console.log(agente);
        console.log("artista");
        console.log(artista);

        console.log(artistasBD);

        // Percorrer var artistasDB e descobrir info do artista
        function AppViewModel() {
            var self = this;
    
            self.artista = ko.observable();

            for(i = 0; i<artistasBD.length; i++){
                if(artistasBD[i]['email'] == agente){
                    for(j = 0; j<artistasBD[i]['artistas'].length; j++){
                        if(artistasBD[i]['artistas'][j]['email'] == artista){
                            self.artista(artistasBD[i]['artistas'][j]);
                         
                        }
                    }
                }
            }

            //console.log(self.artista());
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