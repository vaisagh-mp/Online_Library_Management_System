import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddBook from './Components/Admin/AddBook';
import RemoveBook from './Components/Admin/RemoveBook';
import IssueBook from './Components/Admin/IssueBook';
import ReturnBook from './Components/Admin/ReturnBook';
import BrowseCatalog from './Components/User/BrowseCatalog';
import TransactionHistory from './Components/User/TransactionHistory';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/admin/add-book" element={<AddBook />} />
            <Route path="/admin/remove-book" element={<RemoveBook />} />
            <Route path="/admin/issue-book" element={<IssueBook />} />
            <Route path="/admin/return-book" element={<ReturnBook />} />
            <Route path="/catalog" element={<BrowseCatalog />} />
            <Route path="/history" element={<TransactionHistory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/catalog" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
