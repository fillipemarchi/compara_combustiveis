let gas, alc, rel, denovo

while (denovo!='N') {

gas = Number(prompt('Insira o valor da gasolina: '))
alc = Number(prompt('Insira o valor do alcool: '))
rel = Number(alc/gas)

console.log (`A relação entre o valores foi: ${rel.toFixed(2)}`)

if (rel>0.75){
  console.log('Abasteça com a GASOLINA')
} else if (rel<0.7){
  console.log('Abasteça com o ALCOOL')
} else {
  console.log('Tanto faz GASOLINA ou ALCOOL')
}
  denovo = prompt ('Deseja repetir o cálculo? (S/N): ')
}   