import api from '@/common/utils/api';

// Login user
const login = async (userData) => {
  const response = await api().post('/Accounts/signin', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.data));
  }

  return response.data;
};

// Sign up user
// const signUp = async (userData) => {
//   userData.profilePicURL = "";
//   userData.dob = "2010-10-20T22:16:07.898Z";
//   userData.roleId = parseInt(userData.roleId, 10);

//   const response = await api.post("/Accounts/signup", userData);

//   if (response.data) {
//     localStorage.setItem("user", JSON.stringify(response.data.data));
//   }

//   return response.data;
// };

// Static User Login
// const login = async (userData) => {
//   const findUser = authenticateUser(userData);
//   if (findUser) {
//     localStorage.setItem(
//       "reia_user",
//       JSON.stringify({
//         email: findUser.email,
//         role: findUser.role,
//       })
//     );
//   } else {
//     throw new Error("Invalid Email or Password!");
//   }
//   return {
//     email: findUser.email,
//     role: findUser.role,
//   };
// };

// Logout user
const logout = () => localStorage.removeItem('user');

const authService = {
  logout,
  login
};

export default authService;
