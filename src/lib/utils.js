

const obj1 = [
  {
    id:1, 
    nome:"leandro",
    peso:50
  },
 
  {
    id:5,
    nome:"paulo"
  },
  {
    id:3,
    nome:"iara"
  },
  {
    id:9,
    nome:"paulo"
    },
    {
      id:10,
      nome:"paulo"
      },
  ]

  const obj2 = [
  {
    id:1,
    
    cor:"amarelo"
  },
  
  {
    id:2,
  
    cor:"verde",
  },{
    id:7,
    
    cor:"vermelho"
  },
  {
    id:9,
    cor:"vermelho"

   
    },
    {
      id:10,
      cor:"vermelho"
      },
  ]

let obj3 = obj1.map(resultsObj1 => {

 let dadosObj2 = obj2.find(resultsObj2 =>resultsObj1.id === resultsObj2.id)

  return {...resultsObj1, ...dadosObj2}

  })

 a = delete obj3.cor



 const nome = "ola mundao sou string de muitos tamanhos diferentes e agor vou esta correta"
 
const  array = nome.split(" ")
 
const result = array.map((item) =>{
   if (item.length >= 5){
    return item.split("").reverse().join("")  
  }else{
    return item
  }
})
const ArrayString = result.toString().replace(/,/g, " ")
ArrayString


