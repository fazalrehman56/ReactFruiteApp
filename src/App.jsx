import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './fottter';
import AddItems from './additems';
import Items from './components/Items';
import { Outlet } from 'react-router-dom';

function App() {
 const  [render,setrender] = useState("AddItems");
const [Fruits, SetFruits] = useState(() => {
  try {
    const stored = localStorage.getItem("Fruits");
    return stored && stored !== "undefined"
      ? JSON.parse(stored)
      : [];
  } catch (error) {
    return [];
  }
});

 const  [Edit,SetEdit]= useState();

  return (
    <>
      <Header render={setrender}></Header>
      <Outlet  context={{ Fruits, SetFruits, Edit, SetEdit }} />
      <Footer></Footer>
    </>
  )
}

export default App
