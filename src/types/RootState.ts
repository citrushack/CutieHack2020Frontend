import { RegisterFormState } from 'app/containers/RegisterForm/types';
import { AuthPageState } from 'app/containers/AuthPage/types';
import { AccountState } from 'app/containers/Account/types';
import { LogOutState } from 'app/containers/LogOut/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  registerForm?: RegisterFormState;
  authPage?: AuthPageState;
  account?: AccountState;
  logOut?: LogOutState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
