import { useEffect, useState } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';

import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';

export function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Home />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}
