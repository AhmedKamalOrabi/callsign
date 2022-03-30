import { useQuery } from 'react-query';

import { fetchUsers } from '@/services/users';

export const useUsers = () => {
  return useQuery('users', fetchUsers);
};
