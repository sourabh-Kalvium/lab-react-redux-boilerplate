 

 let types={
 INCREMENT:"increment",
  DECREMENT:"decrement"
 }



let incrementLike=()=>{
   return {
      type:types.INCREMENT
   }
}

let decrementLike =()=>{
     return{
        type:types.DECREMENT
     }
}

export {incrementLike,decrementLike,types}


