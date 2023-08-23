var num = [5, 2, 8, 9, 3]

console.log(`O vetor tem os elementos:${num}`)

console.log(`O vetor tem o total de: ${num.length}`)

console.log(`Na posição 2 do vetor temos o valor: ${num[1]}`)

console.log(`Podemos ter o vetor ${num} na ordem crescente: ${num.sort()}`)

num.push(1)

console.log(`O vetor tem os elementos:${num}`)

var pos = num.indexOf(4)

if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}