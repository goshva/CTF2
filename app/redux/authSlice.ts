import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const jwtToken = Cookies.get('jwt');
//@ts-ignore
const decodedToken: IUser = jwt.decode(jwtToken);
const initialState = {
  decodedToken: decodedToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
