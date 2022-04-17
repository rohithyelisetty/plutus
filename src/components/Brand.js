import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase.js';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import './Brand.css';

const brandName = "Nike";
var pollNum = 0;

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
function Brand() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [input]);
    const addTodo = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'todos'), {
            todo: input,
            timestamp: serverTimestamp()
        })
        setInput('')
        ++ pollNum;
    };
    return (
        <div className="App">
            <h2> Hello { brandName }</h2>
            <form>
                <TextField id="outlined-basic" label="Enter Poll Question (Y/N)" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={input}
                    onChange={e => setInput(e.target.value)} />
                <Button variant="contained" color="primary" onClick={addTodo}  >Add Poll</Button>
            </form>
            <ul>
                {todos.map(item => <Todo key={item.id} arr={item} />)}
            </ul>
        </div>
    );
}

export default Brand;
