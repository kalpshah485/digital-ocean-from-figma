import './App.css';
import { ConfigProvider } from 'antd';
import theme from './theme/theme'
import Header from './components/Header/Header';
import './styles/main.scss'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={theme}>
        <Header />
        <Home />
      </ConfigProvider>
    </div>
  );
}

export default App;
