import { Item } from "../Item";
import { products } from "../../../../Utils/products";

const ItemList = ({ listProduct }) => {

    return(
        <>
            {listProduct.map(products => <Item key={products.id} products={products} />)}
        </>
    )
}

export { ItemList }