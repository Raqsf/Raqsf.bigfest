carrinhoBD = [
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
}
]

console.log("Original data");
console.log(carrinhoBD);

// Documentação: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

if (window.localStorage.getItem('carrinhoBD') == null) {
    console.log("Not on storage");
    window.localStorage.setItem('carrinhoBD', JSON.stringify(carrinhoBD));
} else {
    console.log("On storage");
    carrinhoBD = JSON.parse(window.localStorage.getItem('carrinhoBD'));
}


console.log("Data after local storage check");
console.log(carrinhoBD);
