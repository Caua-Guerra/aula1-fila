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

// export function removeItemQueue(queue){
//      if(queue[0] !== undefined){
//         queue[0] = undefined
//         for(let i = 1; i < queue.length; i++){
//              queue[i-1] = queue[i]
//          }
//          queue[queue.length - 1] = undefined
//          return
//     }
//      console.error("A fila está vazia")
//  }

//export function removeItemQueue(queue){
//    if(queue[0] !== undefined){
//        let primeiro = queue[0]
//       for(let i = 1; i < queue.length; i++){
//            queue[i-1] = queue[i]
//        }
//        queue[queue.length - 1] = undefined
//        return
//   }
//    console.error("A fila está vazia")
//}

export function esvaziarFila(pilha){
    for(let i = 1; i < pilha.length; ++i){
        pilha[i] = undefined
    }
    console.log("todos os itens da pilha foram deletados com sucesso", pilha)
    return
}
export function verTamanhoFila(fila =[]){
    let emptySpaces = (fila.length - fila.indexOf(undefined))
    let usedSpaces = emptySpaces
    let size = fila.length
    let subQueue = []
    for(let i = 0; i<fila.indexOf(undefined); i++){
        subQueue[i] = fila[i]
    }
        console.log(
        fila,
        {
            "emptySpaces": emptySpaces,
            "usedSpaces": usedSpaces,
            "size": size,
            "subQueue": subQueue,
        }
        )
}
