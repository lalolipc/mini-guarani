
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import SubjectList from './components/SubjectList';
import EnrollmentList from './components/EnrollmentList';

function App() {
  const [token, setToken] = useState('');
  const [view, setView] = useState('login');

  const handleLogin = (t) => {
    setToken(t);
    setView('home');
  };

  const handleLogout = () => {
    setToken('');
    setView('login');
  };

  if (!token) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        {view === 'login' ? (
          <>
            <Login onLogin={handleLogin} />
            <p className="mt-4 text-sm">
              ¿No tenés cuenta? <button onClick={() => setView('register')} className="text-blue-600 underline">Registrate</button>
            </p>
          </>
        ) : (
          <>
            <Register onRegister={() => setView('login')} />
            <p className="mt-4 text-sm">
              ¿Ya tenés cuenta? <button onClick={() => setView('login')} className="text-blue-600 underline">Iniciar sesión</button>
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Mini Guaraní</h1>
      <button onClick={handleLogout} className="mb-6 bg-red-500 text-white px-4 py-2 rounded">Cerrar sesión</button>
      <SubjectList token={token} />
      <EnrollmentList token={token} />
    </div>
  );
}

export default App;
