import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

function Aside() {
  const [menuKey, setMenuKey] = useState(1);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuKey(getKey());
  }, [pathname]);

  function getKey() {
    const menuName = pathname === '/' ? 'accountInfo' : pathname.indexOf('/');
    let key;

    switch (menuName) {
      case 'accountCreate':
        key = '2';
        break;
      case 'accountDetails':
        key = '3';
        break;
      default:
        key = '1';
        break;
    }
    return key;
  }

  return (
    <Sider collapsible trigger={null} width={180}>
      <Menu theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">계좌 조회</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/accountCreate">계좌 생성</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/accountDetails">거래 내역</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Aside;
