import { AccountantTile } from '../../components/AccountantTile/AccountantTile';
import { Button } from '../../components/Button/Button';
import { ButtonWrapper, List } from './Accountants.styled';
import { useAccountants } from './useAccountants';

export const Accountants = () => {
  const { accountants, fetchMore, loading } = useAccountants();

  return (
    <div>
      <List>
        {accountants.map((accountant) => (
          <AccountantTile key={accountant.login.uuid} accountant={accountant} />
        ))}
      </List>

      <ButtonWrapper>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Button onClick={fetchMore}>Pokaż więcej </Button>
        )}
      </ButtonWrapper>
    </div>
  );
};
