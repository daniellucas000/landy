import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </div>
  );
}
