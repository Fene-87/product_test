import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useState } from 'react';

export default function AddProduct(){
  // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);

  // method to handle product
  const add = (event)=>{
    event.preventDefault();
    const formData = event.target;
    const newProduct = {
      product_name: formData.pdt_name.value,
      price: formData.price.value,
      quantity: formData.qty.value
    };
    
    //add a new product inside products array
    setProduct([...products,newProduct]);
  }


    return(
        <div>
          <Form onSubmit = {add}>
            <Form.Group className="mb-3" controlId="formBasicProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Name" name="pdt_name"/>
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price" name="price"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Quantity" name="qty"/>
            </Form.Group>

            

            <Button variant="primary" type="submit">
              Add to Inventory
            </Button>
          </Form>

          <Table striped bordered hover variant="dark">
           <thead>
             <tr>
               <th>index</th>
               <th>Product Name</th>
               <th>Price</th>
               <th>Quantity</th>
             </tr>
           </thead>

           <tbody>
            {
              products.map((item, index)=>{
                return(
                  <tr key = {index}>
                 <td>{index}</td>
                 <td>{item.product_name}</td>
                 <td>{item.price}</td>
                 <td>{item.quantity}</td>
                </tr>
                )
              })
            }
            
           </tbody>
         </Table>
        </div>
    );
}