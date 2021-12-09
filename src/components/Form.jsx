import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const EditButton = ({ editData, books, setBooks, handleEdit, setEditForm }) => {
  const [modalform, setModalForm] = useState({
    title: "",
    author: "",
    subject: "",
  });

  const [close, setClose] = useState(true);
  const handleChange = (event) => {
    setModalForm({ ...modalform, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedItems = books.map((item) => {
      if (item.title === editData.title) {
        item.title = modalform.title;
        item.author = modalform.author;
        return item;
      } else {
        return item;
      }
    });
    console.log(editedItems);
    setBooks(editedItems);

    handleEdit();
  };
  return (
    <>
      <Modal isOpen={close} size="lg">
        <ModalHeader>Add Data</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="title"
              />
              <input
                type="text"
                name="author"
                onChange={handleChange}
                placeholder="author"
              />
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                placeholder="subject"
              />
              <input onClick={books} type="submit" name="Add Book" />
            </label>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditButton;
