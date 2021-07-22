import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';
import { Addtodos } from "./MyComponents/Addtodos";

function App() {
  const onDelete = (todo) => {
    console.log('this is deleting', todo)
    setTodos(todos.filter(t => t !== todo))
  }
  const [todos, setTodos] = useState([
    {
      slno: 1,
      title: "Go to Market",
      desc: "Go to market to get the job done !"
    },
    {
      slno: 2,
      title: "Go to Mall",
      desc: "Go to mall to get the job done 2 !"
    },
    {
      slno: 3,
      title: "Go to Shop",
      desc: "Go to shop to get the job done 3 !"
    }
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Addtodos />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
