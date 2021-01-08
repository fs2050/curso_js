// var nome = "Fabio";
// var idade = 44;
// var idade2 = 33;
// const newLocal = "São Paulo é o melhor do mundo";
// var frase = newLocal;
// var n1 = 10;
// var n2 = 20;
// var multiplicacao = n1 * n2;
// //alert("Bem vindo " + nome);
// //alert("")
// // console.log(nome);
// // console.log(idade + idade2);
// // console.log(frase.replace("São Paulo", "Tricolor "));
// // alert(frase.replace("São Paulo ", "Tricolor "));
// // console.log("A multipllicação é: " + multiplicacao);

// var lista = ["maça", "pera", "laranja"];
// // // lista.push("uva");
// lista.pop("uva");
// console.log(lista);
// // console.log(lista.length);
// // //console.log(lista.reverse());
// // console.log(lista.toString());
// // console.log(lista[0]);
// console.log(lista.toString()[0]);
// // console.log(lista.join(" - "));
// //alert(lista[0]);



// var frutas = [{
//         nome: "maça",
//         cor: "vermelha"
//     },
//     {
//         nome: "uva",
//         cor: "roxa"
//     }
// ]
// console.log(frutas);
// alert(frutas[0].nome);




// var idade = prompt("Qaul sua idade? ");
// if (idade >= 18) {
//     alert
//         ("Maior de idade");
// } else {
//     alert("Menor de idade ");
// };



// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count = count + 1;
// };



// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count++;
//     alert(count);
// };


// var count;
// for (count = 0; count <= 5; count++) {

//     alert(count);
// };

// var d = new Date();
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());


// function soma(n1, n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }
// alert(soma(10, 20));
// alert(setReplace("Vai Tricolor", "Vai São Paulo", "Tricolor"));

function soma(n1, n2) {
    return n1 + n2;
}
var validar = 0;

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;

}
var idade = prompt("QUAL SUA IDADE?");
validaIdade(idade);
console.log(validar);