equipamentosBD = [
    {
        nome:"FestaOutdoors",
        email:"empresa@mas.pt",
        sede:"Rua com nome, N.º 24, Cidade",
        tel:"912345678", 
        especialidade:"concertos",
        img:"images/empresa.jpg",
        equip: [
            {nome:"coluna", id:0, preco: 20, categoria: "audio&Com", quantidade: 0, disponibilidade:true,avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
            {nome:"micro", id:1, preco: 10, categoria: "audio&Com", quantidade: 10, disponibilidade:true,avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
            {nome:"projetor", id:2, preco: 30, categoria: "luz", quantidade: 4, disponibilidade:false,avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
        ],
        pack:[
            {equip:"coluna,micro,projetor", nome:"pack1", preco:100, disponibilidade: true,avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
        ],
        servico:[
            {nome: "servico1", preco: 200, dimensao: 200, disponibilidade: true,avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
        ],
        sobre:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
    },
    {
        nome:"BigSound",
        email:"bigsound@teste.pt",
        sede:"Rua com nome, N.º 24, Cidade",
        tel:"912345678", 
        especialidade:"animação de rua",
        img:"images/empresa.jpg",
        equip: [
            {nome:"coluna", id:3, preco: 20, categoria: "audio&Com", quantidade: 2, disponibilidade:true, avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
            {nome:"micro", id:4, preco: 20, categoria: "audio&Com", quantidade: 0, disponibilidade:false, avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
            {nome:"projetor", id:5, preco: 20, categoria: "luz", quantidade: 7, disponibilidade:true, avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
        ],
        pack:[
            {equip:"coluna,micro,projetor", nome:"pack", preco:100, disponibilidade: false,avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
        ],
        servico:[
            {nome: "servico", preco: 200, dimensao: 200, disponibilidade: true,avaliacao: "5 estrelas", img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
        ],
        sobre:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
    }
]

console.log("Original data");
console.log(equipamentosBD);

// Documentação: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

if (window.localStorage.getItem('equipamentosBD') == null) {
    console.log("Not on storage");
    window.localStorage.setItem('equipamentosBD', JSON.stringify(equipamentosBD));
} else {
    console.log("On storage");
    equipamentosBD = JSON.parse(window.localStorage.getItem('equipamentosBD'));
}


console.log("Data after local storage check");
console.log(equipamentosBD);


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
window.localStorage.setItem('artistasBD', JSON.stringify(artistasDB)); // VIPPPPPP

console.log("Value stored");
console.log(JSON.parse(window.localStorage.getItem('artistasBD')));
*/