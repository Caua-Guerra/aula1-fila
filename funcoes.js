export function criarFila(tamanho = 5){
    return[...new Array(tamanho)]
}

export function inserirItem(fila = [], item){
    if(fila.indexOf(undefined) !== -1){
        fila[fila.indexOf(undefined)] = item
        return
    }
    console.log(`Fila está cheia, impossivel inserir ${item}`)
    
    
}

export function removerItem(fila){

    if (fila[0] !== undefined) {
        fila.shift()
        fila.push(undefined)
        return
    }
    console.log("A fila está vazia!")
        
}