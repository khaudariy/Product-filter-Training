import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ProductFilter from './components/ProductFilter'
import ProductList from './components/ProductList'

function App() {
  

  return ( 
    
      <div className='container my-4'>
        <div className='row'>
          <div className='col-lg-3 border'>
             <ProductFilter/>
          </div>
           <div className='col-lg-9 border'>
             <ProductList />
           </div>
          </div>
      </div>  
    
  )
}
 
export default App
