import CartDetail from "./CartDetail";
import CartItem from "../types/CartItem";

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (bookId: number, change: number) => void;
  totalPrice: number;
  removeFromCart: (bookId: number) => void;
}

function Cart({ cartItems, updateQuantity, totalPrice, removeFromCart }: CartProps) {
  return (

    <div className="container mx-auto px-4 py-8 border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow w-5/6">
      <h1 className="text-3xl font-bold text-center mb-8 ">
        รายการหนังสือในตระกร้า
      </h1>
      <div className="flex flex-wrap justify-center items-start">
        <div className="mt-4">
          {cartItems.length === 0 ?  EmptyCart() : BooksInCart(cartItems, updateQuantity, totalPrice, removeFromCart)}
          <div className="mt-4 text-right">
            <p className="text-lg font-bold">
              รวมทั้งหมด: {new Intl.NumberFormat('en-US').format(totalPrice)} บาท
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return <div className="flex flex-col items-center text-center justify-center">
    <img src="/images/emptycart.png" width={200} alt="Empty Cart" className="mx-auto mb-4" />
    <p className="text-red-500 text-2xl font-semibold">ไม่มีสินค้าในตะกร้า</p>
  </div>;
}

function BooksInCart(cartItems: CartItem[], updateQuantity: (bookId: number, change: number) => void, totalPrice: number,
  removeFromCart: (bookId: number) => void) {
  return <>
    {cartItems.map((item) => (
      <CartDetail
        key={item.id}
        cartItem={item}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart} />
    ))}
  </>;
}

export default Cart;


