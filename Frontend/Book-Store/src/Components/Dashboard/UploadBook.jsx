import React, { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non Fiction",
    "Mystery",
    "Programming",
    "Science",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Education",
    "Children Books",
    "Novel",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const initialBookData = {
    title: "",
    author: "",
    imageUrl: "",
    category: bookCategories[0],
    description: "",
    bookPdfUrl: "",
  };

  const [bookData, setBookData] = useState(initialBookData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleBookSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error("Failed to upload book.");
      }

      const responseData = await response.text();
      console.log("Response:", responseData); // Log the response text
      alert("Book Uploaded Successfully!!!");

      // Reset form data to initial values
      setBookData(initialBookData);
    } catch (error) {
      console.error("Error uploading book:", error.message);
      alert("Failed to upload book. Please try again later.");
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-blue-700">Upload a Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="title" value="Book Title" />
            <TextInput
              id="title"
              name="title"
              placeholder="Book Name"
              value={bookData.title}
              onChange={handleChange}
              required
              type="text"
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="author" value="Author Name" />
            <TextInput
              id="author"
              name="author"
              placeholder="Author Name"
              value={bookData.author}
              onChange={handleChange}
              required
              type="text"
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="imageUrl" value="Image URL" />
            <TextInput
              id="imageUrl"
              name="imageUrl"
              placeholder="Book Image URL"
              value={bookData.imageUrl}
              onChange={handleChange}
              required
              type="text"
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="inputState" value="Book Category" />
            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={bookData.category}
              onChange={handleChange}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="description" value="Book Description" />
          <Textarea
            id="description"
            name="description"
            placeholder="Enter Book Description here..."
            value={bookData.description}
            onChange={handleChange}
            required
            className="w-full"
            rows={6}
          />
        </div>

        <div>
          <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            placeholder="Book PDF URL"
            value={bookData.bookPdfUrl}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <Button type="submit" className="mt-5">
          Upload My Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
