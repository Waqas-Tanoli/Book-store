import { useState, useEffect } from "react";
import BookCards from "../BestSellerBooks/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Books retrieved from the database:", data.data);
        setBooks(data.data.slice(0, 5));
      })
      .catch((error) => {
        // console.error("Error retrieving books from the database:", error);
      });
  }, []);

  return (
    <div className="">
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};
export default OtherBooks;
