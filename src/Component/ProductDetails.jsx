import React, { useEffect, useState } from "react";
import useCustomHook from "./useCustomHook";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { List, Loading, Err } = useCustomHook(
    "https://dummyjson.com/products"
  );
  const { ID } = useParams();
  const [prod, setProd] = useState(null);
  const [expand,setExpand]=useState()
  console.log("ID in productDetails:", ID);
  console.log("in Navbar List:", List, ", Loading ", Loading, ", Error:", Err);

  useEffect(() => {
    if (List && List.length > 0) {
      const selectedProduct = List.find((p) => p.id === parseInt(ID));
      setProd(selectedProduct);
    }
  }, [List, ID]);

  if (Loading) return <p>Loading....</p>;
  if (Err) return <p>Error....</p>;

 
  return (
    <>
      <div className="mx-auto">
      <h1>Product Details</h1>
      {prod ? (
        <div className="d-md-flex ">
          <img className="my-auto" style={{height:"200px"}} src={prod.thumbnail} alt="product Image" />
         <div  > <p className="p-0"> <span className="fw-bold p-0" >product Name:</span> {prod.title}</p>
          <p className="p-0"><span className="fw-bold " >Description:</span>{expand==ID ? `${prod.description}` : `${prod.description.slice(0,35)}....`}<button className="btn btn-link" onClick={()=>setExpand(expand==ID ? true : ID)}>{expand==ID ?`Read Less`:`Read More`}</button></p>
         <div className="d-md-flex justify-content-evenly" > <p className="p-0"><span className="fw-bold p-0" >Price:</span> $ {prod.price}</p>
         <p className="p-0"><span className="fw-bold p-0" >Rating:</span> {prod.rating}</p></div>
          <div className="d-md-flex justify-content-evenly" ><p className="p-0"><span className="fw-bold p-0" >Discount:</span>  {prod.discountPercentage} %</p>
          <p className="p-0"><span className="fw-bold p-0" >Stock:</span>{prod.stock} Nos</p></div>
          <div className="d-md-flex justify-content-evenly" ><p className="p-0"><span className="fw-bold p-0" >Warranty:</span>  {prod.warrantyInformation} </p>
          <p className="p-0"><span className="fw-bold p-0" > Availability:</span> {prod.availabilityStatus} </p>
          
          </div>
          <p className="p-0"><span className="fw-bold p-0" >Shipping Information:</span> {prod.shippingInformation} </p>
          </div>
        </div>
       
      ) : (
        <p>No ID found from Given Id</p>
      )}
      </div>
    </>
  );
};

export default ProductDetails;
