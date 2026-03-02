import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {

    const { cartQuantity, cart } = useContext(CartContext)
    return (
        <div>
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="44"
  height="44"
  fill="none"
  stroke="#774f38"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" />
  
  <circle cx="9" cy="20" r="1.5" />
  <circle cx="18" cy="20" r="1.5" />
</svg>
{
    cart.length> 0 && <span style={{
    color: "#c5e0dc",
    backgroundColor: "#774f38",
    padding: "2px 6px",
    borderRadius: "12px",
    fontWeight: "bold",
    marginLeft: "1px"
  }}>{cartQuantity()}</span>
}

        </div>
    )
}

export default CartWidget