import { axiosAdminInstance } from '../axios';
export const getAllClientDetails = async (token) => {
 try {
    
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get('/getallclientdetails', config);
    return data;
 } catch (error) {
    return error
 }
  
};
export const deleteClient = async (token,id) => {
 
    try {
        const config = {
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            },
          };
          const { data } = await axiosAdminInstance.get(`/deleteClient/${id}`, config);
          
            return data;
    } catch (error) {
        return error
    }
    
  };