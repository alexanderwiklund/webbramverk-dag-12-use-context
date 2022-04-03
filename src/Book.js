import React, { useContext } from "react";
import { LanguageContext } from "./App";

export const Book = () => {
  const language = useContext(LanguageContext);

  return <div>Book {language}</div>;
};
