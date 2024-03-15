import { useState, useSyncExternalStore } from "react";

function Question1()
{
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);

    const [newPrice, setNewPrice] = useState(0);

    function buttonClick(qty, price)
    {
        let tempPrice = qty*price;
        if (qty >= 30)
        {
            setNewPrice(tempPrice - (0.15 * tempPrice));
        }

        else if (qty > 20)
        {
            setNewPrice(tempPrice - (0.10 * tempPrice));
        }

        else if (qty > 10)
        {
            setNewPrice(tempPrice - (0.05 * tempPrice));
        }

        else
        {
            setNewPrice(tempPrice);
        }
    }

    return (
        <>
        <h1>Product Shopping Cart</h1>
        <hr/>

        <fieldset>
            <legend>Product Descriptions</legend> <br/>
            Product Name : <input type="text" value={pname} onChange={(e) => setPname(e.target.value)} /> <br/> <br/>
            Product Price : <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /> <br/> <br/>
            Product Quantity : <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} /> <br/> <br/>

            <input type="button" onClick={() => buttonClick(qty, price)} value="Discounted Price"/>

            <p>The Price after discount is {newPrice}</p>
        </fieldset>
        </>
    );
}

export default Question1;