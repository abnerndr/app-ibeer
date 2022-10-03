import Link from 'next/link';
import Avatar from '@/components/Pages/Home/Header/Avatar';
import AvatarIcon from '@/assets/images/avatar.svg';
import { formatBrl } from '@/helper/utils';

import { ShoppingCartIcon } from '@heroicons/react/solid';

interface Profile {
  walletValue: number;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    profile_id: string;
    photo_url: string;
  };
}

export default function ProfileHeader({ walletValue = 0, user }: Profile) {
  return (
    <div className='w-full h-28 rounded-2xl shadow-md bg-white'>
      <div className='flex justify-between mx-2 items-center'>
        {/* profile info */}
        <div className='flex items-center'>
          <div className='pt-4 px-2'>
            <Link href='/private/profile'>
              <a className=''>
                <Avatar
                  src={user?.photo_url || AvatarIcon.src}
                  alt={'avatar'}
                  width={70}
                  height={70}
                  className='rounded-full object-cover w-[70px] h-[70px] hover:w-[72px] hover:h-[72px] hover:opacity-80 ease-out duration-300'
                />
              </a>
            </Link>
          </div>
          <div className='flex flex-col gap-y-1'>
            <span className='flex items-center gap-x-1 text-gray-500'>
              olá, <p className='font-bold text-md text-gray-700'>{user?.username}</p>
            </span>

            <div className='w-20 h-5 bg-ibeer-900 rounded-3xl flex justify-center items-center text-center font-bold text-sm'>
              <span className=''>{formatBrl(walletValue)}</span>
            </div>
          </div>
        </div>
        {/* cart */}
        <div>
          <span className='flex h-4 w-4 '>
            <span className='animate-ping absolute inline-flex h-4 w-4 rounded-full bg-ibeer-900 opacity-75 mt-1'></span>
            <span className='animate relative inline-flex rounded-full h-4 w-4 bg-ibeer-900 mt-1'></span>
          </span>
          <button className='bg-gray-800 flex items-center justify-center px-3 py-1.5 rounded-xl'>
            <ShoppingCartIcon className='h-9 w-9 text-white  text-center ' />
          </button>
        </div>
        {/* end cart */}
      </div>
    </div>
  );
}
