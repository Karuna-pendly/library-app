import { useState } from "react";
import BookList from "./books";
import EditButton from "./Form";
import ModalForm from "./ModalForm";

const Home = () => {
  const [books, setBooks] = useState([
    {
      title: "The Fault in our stars",
      author: "John Green",
      subject:
        "The novel not only explores in which cancer affect those who are diagnosed but also shows the family,friends react to the diagnosed ",
    },
    {
      title: "After Life",
      author: "Kate Atkinson",
      subject:
        "The story of Ursula's lives, as with each new life she makes small changes that send her on a completely different path.",
    },
    {
      title: "Harry Potter",
      author: "J.K.Rowling",
      subject:
        "Its a fictional and where its created by popular novels and its play and a book its script appeared.",
    },
    {
      title: " The Rainbow",
      author: "DH Lawrence",
      subject:
        "This novel was showing him for the radical, protean, thoroughly modern writer he was.",
    },
  ]);
  const func = () => {
    setValue(!value);
  };
  const [value, setValue] = useState(false);
  const [edit, setEdit] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleDelete = (indexValue) => {
    const newBooks = books.filter((books, index) => index != indexValue);
    setBooks(newBooks);
  };
  const handleEdit = (book) => {
    setEditData(book);
    setEditForm(!editForm);
  };

  return (
    <div className="home">
      {editForm && (
        <EditButton
          books={books}
          setBooks={setBooks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setEdit={setEdit}
          setEditForm={setEditForm}
          editData={editData}
        />
      )}
      <button onClick={func} type="Done">
        New Data
      </button>
      <BookList
        books={books}
        setBooks={setBooks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setEdit={setEdit}
        setEditForm={setEditForm}
      />
      {value && <ModalForm books={books} setBooks={setBooks} func={func} />}
    </div>
  );
};

export default Home;
