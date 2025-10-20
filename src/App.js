import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, App as AntApp } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 6,
          },
        }}
      >
        <AntApp>
        <div className="App">
          <AppRoutes />
        </div>
        </AntApp>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
