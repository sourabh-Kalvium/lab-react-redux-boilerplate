import './App.css'
import { Provider } from 'react-redux';
import store from './redux/LikeCounter';
import Counter from './Components/counter'
Counter
function App() {


  return (
   <Provider store={store}>
      <>
       <Counter/> 
     </>
   </Provider>
    
  )
}

export default App
