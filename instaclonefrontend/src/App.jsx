import { RouterProvider } from 'react-router';
import './App.css';
import { routes } from './routes';
import { AuthProvider } from './features/auth/auth.context.jsx';

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
