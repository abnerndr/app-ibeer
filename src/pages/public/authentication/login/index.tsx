import { useCallback, useContext, useState } from 'react';

import FormLogin from '@/components/Pages/Authentication/FormLogin';
import LoginHeader from '@/components/common/AuthBody/LoginHeader';

export default function Login() {
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false);

  const onSubmit = useCallback(async (formData: any) => {
    setLoadingScreen(true);
    setLoadingLogin(true);
    const email = formData.email;
    const password = formData.password;
    setTimeout(() => {
      setLoadingLogin(false);
      setLoadingScreen(false);
    }, 1000);
  }, []);
  return (
    <div className='min-h-full flex flex-col justify-center  sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <LoginHeader />
      </div>

      <FormLogin loading={loadingLogin} onSubmit={onSubmit} />
    </div>
  );
}
