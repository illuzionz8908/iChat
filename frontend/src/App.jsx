import { WallpaperProvider } from './context/WallpaperContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navigate, Route, Routes } from 'react-router';
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import { useAuth } from "@clerk/react";

function App() {

  const { isSignedIn, isLoaded } = useAuth();

  if(!isLoaded) return <p> Loading... </p>;

  return (
    <>
      <ThemeProvider>
        <WallpaperProvider>
          <Routes>

            //is user is signed in then show them the chat page, else redirect to the auth page
            <Route path="/" element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"}  replace /> } />

            //if user is not signed in then show them auth page, else redirect to chat page
            <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"}  replace /> } />

          </Routes>
        </WallpaperProvider>
      </ThemeProvider>
    </>
  )
}

export default App
