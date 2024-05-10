import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BooksIndex from './Pages/booksindex'
import Error404 from './Error404'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksIndex />} />
        <Route path="/" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
