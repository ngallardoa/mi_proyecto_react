import { Item } from "../Item";
import { db } from "../../../../Firebase/firebase";
import { collection } from "firebase/firestore";

const ItemList = ({ listProduct }) => {

    const productsCollection = collection(db, "productsList");

    return(
        <>
            {listProduct.map(products => <Item key={products.id} products={products} />)}
        </>
    )
}

export { ItemList }