import { axiosClientInstance } from '../axios';
export const getProfile = async (token) => {
  console.log(token);
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.get('/getprofile', config);
  if (data.status) {
    return data;
  }
};
