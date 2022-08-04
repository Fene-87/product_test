import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function AddProduct(){
    return(
        <div>
          <Form>
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
        </div>
    );
}