import { Header } from 'antd/lib/layout/layout';
import { Row } from 'antd';
import Logo from './Logo';
import UserBar from './UserBar';

const AppHeader = () => {
  return (
    <Header>
      <Row justify="space-between">
        <Logo />
        <UserBar />
      </Row>
    </Header>
  )
}

export default AppHeader