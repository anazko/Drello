import { Header } from 'antd/lib/layout/layout';
import { Row } from 'antd';
import Logo from './Logo';
import UserBar from './UserBar.tsx';

const AppHeader = () => {
  return (
    <Header>
      <Row justify="space-between" style={{ height: "100%" }}>
        <Logo />
        <UserBar />
      </Row>
    </Header>
  )
}

export default AppHeader