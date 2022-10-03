import Input from '@/components/common/Input/Input';
import { ArrowLeftIcon, RefreshIcon } from '@heroicons/react/outline';
import { Controller, useForm } from 'react-hook-form';
import { FormValues, IProfileForm } from './types';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useContext, useState } from 'react';

export default function ProfileForm({
  loading,
  setLoading,
  urlPicture,
  signOut,
  profileData
}: IProfileForm) {
  console.log(urlPicture);

  const validationSchema = Yup.object().shape({
    // fullname: InputSchema.fullname,
    // email: InputSchema.email
    // phone: InputSchema.phone
  });
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors }
  } = useForm<FormValues | any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      // email: profile?.email
    }
  });

  const onSubmit = useCallback(async ({ formData }: any) => {
    setLoading(true);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <Controller
          control={control}
          name='username'
          defaultValue={profileData?.username}
          render={({ field: { onChange, ...rest } }) => (
            <Input
              id='username'
              type='text'
              label='nome completo'
              register={register('username')}
              errors={''}
              loading={loading}
              placeholder='ex: Lucas Tavares'
              {...rest}
            />
          )}
        />
      </div>

      <div className='mb-4'>
        <Controller
          control={control}
          name='email'
          defaultValue={profileData?.email}
          render={({ field: { onChange, ...rest } }) => (
            <Input
              id='email'
              type='text'
              label='e-mail'
              onChange={onChange}
              register={register('email')}
              errors={undefined}
              loading={loading}
              placeholder='meuemail@mail.com'
              {...rest}
            />
          )}
        />
      </div>

      <div className='mb-10'>
        <Controller
          control={control}
          name='phone'
          defaultValue={''}
          render={({ field: { onChange, ...rest } }) => (
            <Input
              id='phone'
              type='text'
              label='telefone/celular'
              register={register('phone')}
              errors={undefined}
              loading={loading}
              placeholder='ex: (11) 9 0000-0000'
              {...rest}
            />
          )}
        />
      </div>

      <div className='flex justify-end h-full flex-1'>
        {!loading ? (
          <button
            type='submit'
            className='w-full flex text-md font-semibold justify-center uppercase py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-ibeer-900 hover:bg-ibeer-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ibeer-900'
          >
            salvar
          </button>
        ) : (
          <button
            type='submit'
            className='w-full flex items-center gap-x-2 text-md font-semibold justify-center uppercase py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-400'
          >
            salvando
            <RefreshIcon className='h-5 w-5 animate-spin' />
          </button>
        )}
      </div>

      <button
        type='button'
        onClick={async () => signOut()}
        className='mt-3 w-full flex text-md font-semibold justify-center items-center gap-x-1 uppercase py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
      >
        <ArrowLeftIcon className='w-5 h-5' />
        <span>deslogar</span>
      </button>
    </form>
  );
}
