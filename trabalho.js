const prompt = require("prompt-sync")({sigint: true});
var nome = prompt(`Digite seu nome:`)
var nota = parseInt(prompt(`Digite sua nota:`))

if(nota>=7){
    console.log(`O aluno ${nome} esta aprovado!`)
}else{
    console.log(`O aluno ${nome} esta reprovado!`)
}
/////////////////////////////////////////////////////
var nomeAluno = prompt(`Digite o nome o aluno:`)
var idadeAluno = prompt(`Digite a idade do aluno:`)
var cursoAluno = prompt(`Digite o curso do aluno:`)
var nota1Aluno = prompt(`Digite a primeira nota do aluno:`)
var nota2Aluno = prompt(`Digite a segunda nota do aluno:`)

console.log(`O aluno ${nomeAluno}, tem ${idadeAluno} anos, cursa ${cursoAluno} e suas notas foram ${nota1Aluno} e ${nota2Aluno}`)
/////////////////////////////////////////////////////
const cliente = {
    nomeCliente: prompt(`Digite o nome do clinte:`),
    receitaCliente: parseFloat(prompt(`Digite a receita do cliente:`)),
    despesasCliente: parseFloat(prompt(`Digite as despesas do cliente:`))
}
var saldoCliente = cliente.receitaCliente - cliente.despesasCliente

console.log(`O cliente ${cliente.nomeCliente} possui saldo de ${saldoCliente}`)