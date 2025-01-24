import { Plus, Minus, Trash2 } from "lucide-react";
import CartItem from "../types/CartItem";

type CartDetailProps = {
  cartItem: CartItem;
  updateQuantity: (bookId: number, change: number) => void;
  removeFromCart: (bookId: number) => void;
}

function CartDetail({ cartItem, updateQuantity, removeFromCart }: CartDetailProps) {
  return (
    <div className="flex  justify-between items-start py-2 border-b" >
      <div className="flex-col items-end gap-2 hidden md:flex">
        <img
          src={cartItem.coverUrl}
          alt={cartItem.title}
          className="h-20 object-cover rounded-t-lg mb-4 "
        />
      </div>
      <div className="flex-1">
        <p className="text-lg font-bold">{cartItem.title}</p>
        <p className="text-md text-gray-600">
          {cartItem.price}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 ms-6 border-orange-600 bg-white border-2 text-orange-600 rounded-lg  flex items-center justify-center "
              onClick={() => updateQuantity(cartItem.id, -1)}
            >
              <Minus size={20} />
            </button>
            <span className="w-8 text-center">{cartItem.quantity}</span>
            <button
              className="w-8 h-8  border-green-600 bg-white border-2 text-green-600 rounded-lg  flex items-center justify-center "
              onClick={() => updateQuantity(cartItem.id, 1)}
            >
              <Plus size={20} />
            </button>
          </div>
          <button className="hover:text-red-500" onClick={() => removeFromCart(cartItem.id)}>
            <Trash2 size={20} />
          </button>
        </div>
        <p className="text-sm font-bold">
          {cartItem.price * cartItem.quantity}
        </p>
      </div>
    </div>
  );
}

export default CartDetail;
