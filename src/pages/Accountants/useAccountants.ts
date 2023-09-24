import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  AccountantResponseType,
  AccountantType,
  randomuserApiPath,
} from '../../utils/randomuser';
import { errorToast } from '../../utils/toast/toastNotify';

export const useAccountants = () => {
  const [accountants, setAccountants] = useState<AccountantType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMore = () => {
    if (loading) return;
    setLoading(true);

    axios
      .get(`${randomuserApiPath}&page=${page}`)
      .then((res) => {
        const newAccountants = (res.data as AccountantResponseType).results;
        setAccountants((accountants) => accountants.concat(newAccountants));
      })
      .catch((err) => {
        errorToast(err);
      })
      .finally(() => {
        setLoading(false);
        setPage((page) => page++);
      });
  };

  useEffect(() => {
    if (accountants.length) return;
    fetchMore();
  }, [accountants]);

  return { accountants, fetchMore, loading };
};
