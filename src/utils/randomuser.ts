export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
    medium: string;
  };
  login: {
    uuid: string;
  };
};

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

export const randomuserApiPath = `https://randomuser.me/api/?gender=female&results=5`;
