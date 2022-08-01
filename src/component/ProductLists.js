import React from "react";
import Product from "./Product";
export default function ProductLists(props){
    console.log('hhhh');
    console.log(props);
    return(
        props.ProductList.map((product,i)=>{
            return <Product product = {product} key={i} increamentquanttity={props.increamentquanttity} decrementquanttity={props.decrementquanttity} index={i}/>
        })
    )
}