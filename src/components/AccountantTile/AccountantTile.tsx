import { AccountantType } from '../../utils/randomuser';
import { Button } from '../Button/Button';
import {
  Currency,
  CurrencyWrapper,
  Header,
  Image,
  Name,
  Text,
  Tile,
  Title,
} from './AccountantTile.styled';

interface AccountantTileProps {
  accountant: AccountantType;
}

export const AccountantTile = ({
  accountant: { cell, email, name, picture },
}: AccountantTileProps) => {
  return (
    <Tile>
      <Header>
        <Image src={picture.medium} alt={name.first} />
        <div>
          <Title>Twoja księgowa</Title>
          <Name>
            {name.first}&nbsp;{name.last}
          </Name>
        </div>
      </Header>

      <div>
        <Title>E-mail</Title>
        <Text>{email}</Text>
      </div>

      <div>
        <Title>Telefon</Title>
        <Text>+{cell}</Text>
      </div>

      <div>
        <Title>Średnia cenna netto usługi / m-c</Title>
        <CurrencyWrapper>
          <Text>350,00</Text>
          <Currency>PLN</Currency>
        </CurrencyWrapper>
      </div>

      <Button>Dowiedz się więcej</Button>
    </Tile>
  );
};
