import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalForm = ({ books, setBooks, func }) => {
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
    setBooks([...books, modalform]);
    console.log(modalform);
    func();
  };

  return (
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
  );
};
export default ModalForm;
