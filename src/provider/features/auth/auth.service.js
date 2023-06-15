import api from '@/common/utils/api';

// Login user
const login = async (userData) => {
  const response = await api().post('/auth/login', userData);
  if (response.data.Succeeded) {
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
const logout = async () => {
  const response = await api().get('/users/logout');
  console.log('logout res', response);
  if (response.data.Succeeded) {
    localStorage.removeItem('user');
  }
};

const signUp = async (userData) => {
  const response = await api().post('/users/register', userData);
  return response.data;
};

const loginAndSignUpWithGoogle = async (userData) => {
  const response = await api().post('/auth/login-and-sign-up-with-google', userData);
  return response.data;
};

const authService = {
  logout,
  login,
  signUp,
  loginAndSignUpWithGoogle
};

export default authService;
