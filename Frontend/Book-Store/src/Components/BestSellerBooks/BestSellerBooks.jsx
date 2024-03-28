import React, { useEffect, useState } from "react";
import BookCards from "./BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Books retrieved from the database:", data.data);
        setBooks(data.data.slice(0, 6));
      })
      .catch((error) => {
        // console.error("Error retrieving books from the database:", error);
      });
  }, []);

  return (
    <div className="">
      <BookCards books={books} headline="Best Selling Books" />
    </div>
  );
};

export default BestSellerBooks;
