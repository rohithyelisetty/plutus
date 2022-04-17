import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { db } from '../firebase.js';
import "./todo.css";
import { doc, deleteDoc } from "firebase/firestore";
import Modal from 'react-bootstrap/Modal'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={"Poll Question"} secondary={arr.item.todo} />
            </ListItem>
            <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'todos', arr.id)) }} />
            <Example />
        </List>
    )
};



function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="contained" color = "primary" onClick={handleShow}>
                View
            </Button>

            <Modal show={show} variant = "contained" color = "primary" size = "big" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Poll Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Yes: No:</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" color = "primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Todo;