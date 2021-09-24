import { Layout } from 'antd'
import AppHeader from './components/AppHeader'
import AppRouter from './components/AppRouter'

import './App.css'

const { Content } = Layout

function App() {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader/>
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
}

export default App
