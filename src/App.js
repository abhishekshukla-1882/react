import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './component/navbar';
import ProductLists from './component/ProductLists';
import {useState} from 'react';
import Footer from './component/Footer';
const ProductsList = [
  {
    'name':'Moto G31',
    'price':'5656',
    'quantity':'1'

  },
  {
    'name':'Moto G51',
    'price':'7056',
    'quantity':'1'

  },
]
function App() {
 
  let [ProductList, setProductLists] = useState(ProductsList)
  let [totalamount, settotalamount] = useState(0)
  const increamentquanttity = (index)=>{
    let newProductList = [...ProductList]
    let newtotalamount = totalamount
    newProductList[index].quantity++
    newtotalamount += Number(newProductList[index].price)
    settotalamount(newtotalamount) 
    setProductLists(newProductList);
  }
  const decrementquanttity = (index)=>{
    let newProductList = [...ProductList]
    let newtotalamount = totalamount
    
    settotalamount(newtotalamount) 
    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--
      newtotalamount -= newProductList[index].price
    }
    settotalamount(newtotalamount) 
    setProductLists(newProductList);
  }
  const resettask = ()=>{
 
    let newProductList = [...ProductList]
    newProductList.map((product)=>{
      product.quantity =1
    })
    setProductLists([...newProductList])

  }
  return (
    <>
   <Navbar />
   <main className='container mt-5'>

   <ProductLists  ProductList={ProductList} increamentquanttity={increamentquanttity} decrementquanttity={decrementquanttity} />
   </main>
   <Footer newtotalamount={totalamount} resettask={resettask}/>
   </>
  );
}

export default App;
