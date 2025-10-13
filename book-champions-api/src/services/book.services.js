import { Book } from "../models/book.js";

export const findBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

export const findBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findOne({ where: { id: id } });

  if (!book)
    res.status(404).send({ message: "Libro no encontrado"});
  res.jason(book);
};

export const createBook = async (req, res) => {
  const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;

  if (!title || !author)
    return res.status(400).send({ message: "  Titulo o autor requeridos" });

  const newBook = await Book.create({
    title,
    author,
    rating,
    pageCount,
    summary,
    imageUrl,
    available
  });
  res.json(newBook);
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;

    if (!title || !author)
    return res.status(400).send({ message: "  Titulo o autor son requeridos" });

  const book = await Book.findByPk(id);

  await book.update({
    title,
    author,
    rating,
    pageCount,
    summary,
    imageUrl,
    available
  });

  await book.save();

  res.json(book);
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  await book.destroy();

  res.send(`Borrando libro con id: ${id}`);
};

