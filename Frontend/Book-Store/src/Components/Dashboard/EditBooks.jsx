import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const { title, author, imageUrl, description, bookPdfUrl, category } =
    useLoaderData();

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

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObj = {
      title,
      author,
      imageUrl,
      category,
      description,
      bookPdfUrl,
    };

    //update book data

    fetch(`http://localhost:5000/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Updated Successfully");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-blue-700">Update a Book</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="title" value="Book Title" />
            <TextInput
              id="title"
              name="title"
              placeholder="Book Name"
              onChange={handleChange}
              required
              type="text"
              defaultValue={title}
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="author" value="Author Name" />
            <TextInput
              id="author"
              name="author"
              placeholder="Author Name"
              onChange={handleChange}
              required
              type="text"
              defaultValue={author}
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
              onChange={handleChange}
              required
              type="text"
              defaultValue={imageUrl}
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="inputState" value="Book Category" />
            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              onChange={handleChange}
              defaultValue={category}
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
            defaultValue={description}
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
            defaultValue={bookPdfUrl}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <Button type="submit" className="mt-5">
          Update My Book
        </Button>
      </form>
    </div>
  );
};
export default EditBooks;
