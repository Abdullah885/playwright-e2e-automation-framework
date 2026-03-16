import { test, expect } from '@playwright/test';
import  {LoginPage} from '../pages/LoginPage';

test('User can login successfully', async ({ page }) => {

  const loginpage = new LoginPage(page);

  await loginpage.gotoLoginPage();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('/inventory/')



});