/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useContext, useState } from 'react';
import LoginFooter from '@/components/common/AuthBody/LoginFooter';
import LoginHeader from '@/components/common/AuthBody/LoginHeader';
import FormCreate from '@/components/Pages/Authentication/FormCreate';
import { Notify } from '@/components/common/Notify/Notify';

export default function Index({ create = true }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback((formData: any) => {
    setLoading(true);
    const username = formData.username;
    const email = formData.email;
    const password = formData.password;
  }, []);
  return (
    <div className='min-h-full flex flex-col justify-center sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <LoginHeader />
      </div>

      <FormCreate onSubmit={onSubmit} loading={loading} />
    </div>
  );
}
