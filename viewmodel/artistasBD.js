artistasBD = [
    {
        nome: "Joaguim", 
        email: "joaquim@mas.pt", 
        sede: "Rua com nome, N.º 24, Cidade", 
        tel: "912345678",
        artistas: [
            {
                nome: "miguel",
                email: "miguel@sapo.pt",
                especialidade: "fadista",
                tempo: 60,
                preco: 100,
                disponibilidade: true,
                img: "https://s2.glbimg.com/WXe_Y0v2YzRdLuC7C6sIeNmYpXI=/smart/e.glbimg.com/og/ed/f/original/2019/03/07/jr-gq.jpg",
                comentarios: [{
                    autor: {
                        nome: "Amélia Ribeiro",
                        email: "amelia@sapo.pt"
                    },
                    classificacao: "5 estrelas"
                }],
                avaliacao: "5 estrelas",
                sobre: "Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
            },
            {
                nome: "sara",
                email: "sara@sapo.pt",
                especialidade: "comediante",
                tempo: 30,
                preco: 110,
                disponibilidade: false,
                img: "https://s2.glbimg.com/WXe_Y0v2YzRdLuC7C6sIeNmYpXI=/smart/e.glbimg.com/og/ed/f/original/2019/03/07/jr-gq.jpg",
                comentarios: [{
                    autor: {
                        nome: "Amélia Ribeiro",
                        email: "amelia@sapo.pt"
                    },
                    classificacao: "5 estrelas"
                }],
                avaliacao: "5 estrelas",
                sobre: "Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
            }
        ],
        sobre: "Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
    },
    {
        nome: "MMS", 
        email: "mms@teste.pt", 
        sede: "Avenida com nome, N.º 24, Cidade", 
        tel: "912345678",
        artistas: [
            {
                nome: "name",
                email: "name@sapo.pt",
                especialidade: "magico",
                tempo: 60, preco: 100,
                disponibilidade: true,
                img: "https://s2.glbimg.com/WXe_Y0v2YzRdLuC7C6sIeNmYpXI=/smart/e.glbimg.com/og/ed/f/original/2019/03/07/jr-gq.jpg",
                comentarios: [{
                    autor: {
                        nome: "Amélia Ribeiro",
                        email: "amelia@sapo.pt"
                    },
                    classificacao: "5 estrelas"
                }],
                avaliacao: "5 estrelas",
                sobre: "Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus."
            }

        ],
        sobre: "Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
    }
]

console.log("Original data");
console.log(artistasBD);

// Documentação: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

if (window.localStorage.getItem('artistasBD') == null) {
    console.log("Not on storage");
    window.localStorage.setItem('artistasBD', JSON.stringify(artistasDB));
} else {
    console.log("On storage");
    artistasDB = JSON.parse(window.localStorage.getItem('artistasBD'));
}


console.log("Data after local storage check");
console.log(artistasBD);


/*
// Utilização para adicionar novo artista
artista = {
    nome: "Agente adicionado dinâmicamente", 
    email: "mms@teste.pt", 
    sede: "Avenida com nome, N.º 24, Cidade", 
    tel: "912345678",
    artistas: [
        {
            nome: "name",
            especialidade: "fadista",
            tempo: 60, preco: 100,
            disponibilidade: true,
            img: "https://s2.glbimg.com/WXe_Y0v2YzRdLuC7C6sIeNmYpXI=/smart/e.glbimg.com/og/ed/f/original/2019/03/07/jr-gq.jpg",
            comentarios: [{
                autor: {
                    nome: "Amélia Ribeiro",
                    email: "amelia@sapo.pt"
                },
                classificacao: "5 estrelas"
            }],
            sobre: "Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
        }

    ],
    sobre: "Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
}
artistasDB.push(artista);
window.localStorage.setItem('artistasBD', JSON.stringify(artistasBD)); // VIPPPPPP

console.log("Value stored");
console.log(JSON.parse(window.localStorage.getItem('artistasBD')));
*/