import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<EmployeeTable />} />
      <Route path="/add" element={<EmployeeForm />} />
      <Route path="/edit/:id" element={<EditEmployeeForm />} />
    </Routes>
  </Router>
);

export default App;
