import { axiosClientInstance } from '../axios';
export const getProfile = async (token) => {
 
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
export const updateUserInfo = async (token,value) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
      Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosClientInstance.post(
      '/updateUserDetails',
      value,
      config
    );
    return data;
  } catch (error) {
    return error;
  }
};
