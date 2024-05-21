import {configureStore} from "@reduxjs/toolkit"
import Countreducer from "./Reducer"

const store=configureStore({
  reducer:{
    count:Countreducer
  }
})


export default store