import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthStore } from './stores/authStore';

function App() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 안 했으면 로그인 페이지로 */}
        <Route
          path="/"
          element={accessToken ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
