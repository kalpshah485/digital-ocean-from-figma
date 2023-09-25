import './App.css';
import { ConfigProvider } from 'antd';
import theme from './theme/theme'
import Header from './components/Header/Header';
import './styles/main.scss'

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={theme}>
        <Header />
      </ConfigProvider>
    </div>
  );
}

export default App;
