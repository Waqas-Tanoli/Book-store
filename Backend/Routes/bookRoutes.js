import express from "express";
import Book from "../Models/bookModel.js";

const router = express.Router();

//Add a book in Database, for adding we are using .post
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.imageUrl ||
      !req.body.description ||
      !req.body.bookPdfUrl
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: title, author, imageUrl, description, bookPdfUrl",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      bookPdfUrl: req.body.bookPdfUrl,
    };

    const book = await Book.create(newBook);

    res.status(201).send(`${newBook.title} has been added successfully!`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "Internal Server Error", message: error.message });
  }
});

//In this route we will get all the books in our database. for this purpose i'll use .get method
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

//In this route we will find a specific book by _Id. For this purpose i will use .get method
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//In this route, we will update a book in our database, for updating we will use .put method
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.imageUrl ||
      !req.body.description ||
      !req.body.bookPdfUrl
    ) {
      return res.status(400).send({
        message: "All fields are required send all fields",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book Updated successfully!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Now we will delete a book and use .delete method

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "No Book found!" });
    } else {
      return res.status(200).send({ message: "Book deleted successfully!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

/*

router.get("/:id", async (req, res) => {
  const id = req.params._id;
  const filter = { _id: new ObjectId(id) };
  const result = await test.findOne(filter);
  res.send(result);
});

*/

export default router;
