import Book from '../types/Book';
import BookDetail from './BookDetail';

// ! เพิ่มหรือแก้ไข code ในส่วนที่มี TODO ตามที่โจทย์กำหนดจำนวน 3 จุด (TODO: 1 - 3)

interface BookListProps {
  books: Book[];
  addToCart: (book: Book) => (void);
}

// TODO: 2) รับ props มาจาก App.tsx เพื่อส่งต่อไปยัง BookDetail.tsx ดังนี้
// book ข้อมูลของหนังสือทั้งหมด
// addToCart เป็นฟังก์ชันที่ใช้ในการเพิ่มหนังสือลงในตะกร้า
function BookList({books,addToCart}:BookListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">รายการหนังสือ</h1>
      <div className="flex flex-wrap justify-center items-start">
        {books.map(book => (
          <BookDetail key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BookList;