import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    getBooks,
  getBooksFailure,
  getBooksRequest,
  getBooksSuccess,
} from "../Redux/App/action";
import BooksList from "./BooksList";

const Books = () => {
  const books = useSelector((state) => state.app.books);

  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getBooks)
  }, []);

  console.log(books);

  return <div>
    <BooksList books={books} />
  </div>;
};

export default Books;
