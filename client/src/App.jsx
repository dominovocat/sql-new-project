
import { useEffect, useState } from 'react';
import { getProdList } from './api/products.api';
import './App.css';


function App() {

  const[prodList,setProdList]=useState([]);

  useEffect(()=>{
    const asyncWrapper = async ()=>{
      const products = await getProdList();
      setProdList(products);
    }
    asyncWrapper();
  },[]);

  return (<div className='App'>
    <main>
      <section>
        <h2>Product List</h2>
      </section>
    </main></div>
  );
}

export default App;
