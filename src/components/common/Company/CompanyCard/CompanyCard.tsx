import Image from 'next/image';
import PartnerAvatar from '@/assets/images/partner.svg';
import { TruckIcon } from '@heroicons/react/outline';
import { CashIcon, CreditCardIcon, StarIcon, SwitchHorizontalIcon } from '@heroicons/react/solid';
import { classNames } from '@/helper/utils';
import { ICompanyCards } from './types';

export default function CompanyCard({ image, delivery, title, rate, card, pix, money }: ICompanyCards) {
  return (
    <div className='px-5 mb-5'>
      <div className='absolute w-2/6 bg-ibeer-800 h-32 rounded-l-lg flex justify-center'>
        {image ? (
          <img src={image} className='w-24 h-24 rounded-full object-cover my-auto' />
        ) : (
          <Image src={PartnerAvatar.src} width={100} height={100} />
        )}
      </div>
      <div className='w-full mx-auto bg-gray-50 shadow-md h-32 rounded-lg pl-[135px] py-1.5'>
        <div>
          <h1 className='text-md font-semibold text-gray-700 lowercase truncate '>{title}</h1>
        </div>
        <div className='flex flex-col'>
          {delivery ? (
            <div className='flex items-center mt-2 '>
              <TruckIcon className='h-6 w-8 -ml-1 text-ibeer-900' />
              <span className='text-sm font-semibold text-gray-700'>delivery</span>
            </div>
          ) : (
            <div className='flex items-center mt-2 '>
              <TruckIcon className='h-6 w-8 -ml-1 text-red-500' />
              <span className='text-sm font-semibold text-gray-700 line-through'>delivery</span>
            </div>
          )}

          <div className='flex items-center mt-2 mr-3'>
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(rate > rating ? 'text-ibeer-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0')}
                aria-hidden='true'
              />
            ))}
          </div>
        </div>
        <div className='mt-3'>
          <div className='flex items-center gap-x-2 font-semibold text-sm'>
            {card ? (
              <div className='flex items-center gap-x-0.5'>
                <CreditCardIcon className='h-5 w-5 text-ibeer-900' />
                <span className='text-gray-500'>cartão</span>
              </div>
            ) : null}
            {money ? (
              <div className='flex items-center gap-x-0.5'>
                <CashIcon className='h-5 w-5 text-ibeer-900' />
                <span className='text-gray-500'>dinheiro</span>
              </div>
            ) : null}
            {pix ? (
              <div className='flex items-center gap-x-0.5'>
                <SwitchHorizontalIcon className='h-5 w-5 text-ibeer-900' />
                <span className='text-gray-500'>pix</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
