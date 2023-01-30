import RegisterForm from './registration';
import './tailwind.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import AboutPage from './about';
import ConfirmRegistrationPage from './confirm';

const App = () => {
  return (
    // <Router>
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="confirm" element={<ConfirmRegistrationPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Outlet />
    </div>
    // </Router>
  );
};

export default App;
