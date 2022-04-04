import { useEffect, useState } from 'react';
import moment from 'moment';
import { useRequestApi } from '../../hooks';
import { Card, Button } from 'antd';
import 'moment/locale/ko';
import '../../assets/css/AccountInfo.scss';

const USER_NAME = 'HONG GIL DONG';

const GET_API_PARAMS = {
  url: '/accounts',
  method: 'GET',
  params: {
    userName: USER_NAME,
  },
};

function AccountInfo() {
  const [accountList, setAccountList] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const { response, onApiRequest } = useRequestApi(GET_API_PARAMS);

  useEffect(() => {
    if (!response) {
      return;
    }

    if (!isCreate) {
      const list = response.reduce((acc, value) => {
        acc.push({
          userName: value.userName,
          accountId: value.accountId,
          balance: value.balance,
          interestRate: value.interestRate,
          transactionDetails: value.transactionDetails,
        });
        return acc;
      }, []);
      setAccountList(list);
    } else {
      setIsCreate(false);
      onApiRequest(GET_API_PARAMS);
    }
  }, [response]);

  function getBeautifiedNum(val) {
    return val < 1000
      ? val
      : val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function createAccountId() {
    const idList = accountList.map((item) => item.accountId);
    const randId = Math.floor(Math.random() * 1000) + 10000;

    if (idList.includes(randId)) {
      let newRandId = Math.floor(Math.random() * 1000) + 10000;
      while (idList.includes(newRandId)) {
        newRandId = Math.floor(Math.random() * 1000) + 10000;
      }
      return newRandId;
    } else return randId;
  }

  function createAccount() {
    const interestRate = Math.floor(Math.random() * 10);
    const id = createAccountId();

    const createAccountParams = {
      url: '/accounts',
      method: 'POST',
      params: {
        id: id,
        userName: USER_NAME,
        accountId: `220-1234-${id}`,
        createDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        balance: 0,
        interestRate: interestRate * 0.01,
      },
    };

    setIsCreate(true);
    onApiRequest(createAccountParams);
  }

  return (
    <div className="account-info">
      <Card
        title="HONG GIL DONG"
        extra={<Button onClick={() => createAccount()}>계좌 생성</Button>}
      >
        {accountList.map((item, idx) => (
          <Card
            key={idx}
            type="inner"
            title={item.accountId}
            extra={
              <>
                <Button>거래 내역</Button>
                <Button>출금</Button>
                <Button>입금</Button>
                <Button>이체</Button>
              </>
            }
          >
            {`잔고 : ${getBeautifiedNum(item.balance)} 원`}
          </Card>
        ))}
      </Card>
    </div>
  );
}

export default AccountInfo;
