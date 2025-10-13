import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmDeleteBook = ({ show, onHide, onConfirm, bookTitle }) => {


  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta seguro que desea eliminar el libro? <strong>{bookTitle}</strong></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Sí, deseo eliminarlo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmDeleteBook;