import { ShoppingBasket, Star } from 'lucide-react';
import Book from '../types/Book';

interface BookDetailProps {
  book: Book;
  addToCart: (book: Book) => void;
}

function BookDetail({ book, addToCart }: BookDetailProps) {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md hover:shadow-xl 
    transition-shadow w-64 flex flex-col">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-80 object-cover rounded-t-lg mb-4"
      />
      <h2 className="font-semibold mb-2">
        {book.title.length > 20 ? `${book.title.substring(0, 25)}... `: book.title}
      </h2>
      <p className="text-gray-700 mb-1">
        {book.author}
      </p>
      <div className="mb-2">
        {Rating(book.rating)}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-blue-600 font-medium">{book.price}</span>
        <span className="text-gray-500 text-sm">{book.pages}</span>
      </div>
      <button
        onClick={() => addToCart(book)}
        className="w-full font-semibold flex items-center justify-center gap-2 bg-blue-500 
        hover:text-red-600 hover:bg-sky-300 text-white rounded-md py-3 mt-4">
        <ShoppingBasket size={20} />
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}

function Rating(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      size={20}
      fill={index < rating ? '#FFD700' : '#E0E0E0'}
      className="inline-block mx-0.5"
    />
  ));
}

export default BookDetail;