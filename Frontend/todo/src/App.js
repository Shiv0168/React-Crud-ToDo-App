import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import ViewTodo from './Components/ViewTodo';
import AddTodo from './Components/AddTodo';
import EditTodo from './Components/EditTodo';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ViewTodo/>}/>
          <Route path='/edit/:id' element={<EditTodo/>}/>
          <Route path='/add' element={<AddTodo/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App