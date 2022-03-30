import { $http } from '@/api/http-service';
import Endpoints from '@/constant/endpoint';
import type { IuserDetail } from '@/types/IuserDetail';

const imageUrl = 'https://www.w3schools.com/w3css/img_avatar4.png';

const normaliedUser = ({
  name,
  username,
  email,
  phone,
  id,
  website,
}: Omit<IuserDetail, 'imageUrl'>) => {
  return {
    name,
    username,
    email,
    phone,
    id,
    website,
    imageUrl,
  };
};

const fetchUsers = async (): Promise<IuserDetail[]> => {
  const users = await $http({ url: Endpoints.GET_USERS });

  if (Array.isArray(users)) {
    return users.map((user: Omit<IuserDetail, 'imageUrl'>) =>
      normaliedUser(user),
    );
  }

  return [];
};

export { fetchUsers };
