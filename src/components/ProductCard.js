import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductCard = () =>{

    const products = useSelector((state) => state.allProduct.products)
    const renderList = products.map((product) =>{
        const {id, title,category,price,image} = product
        return (
        <div key={id} className="four column wide" style={{border:'solid 1px gray', width:'200px', float:'left', padding:10, margin:5}}>
            <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="cards" >
                    <div className="image" >
                        <img src={image} style={{width:'100px', height:'100px'}} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title }</div>
                        <div className="header">$ {price}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            </Link>
    </div>
        )
    }) 
return(
    <>{renderList}</>
)
}

export default ProductCard