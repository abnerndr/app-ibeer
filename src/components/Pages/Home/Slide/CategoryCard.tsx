import Link from 'next/link';
import { useMemo } from 'react';

interface CategoryCard {
  image: any;
  color: 'orange' | 'red' | 'blue' | 'green' | 'gray' | 'black' | 'purple';
  title: string;
  href: string | any;
}

export default function CategoryCard({ image, color, href, title }: CategoryCard) {
  const colorSelected = useMemo(
    () =>
      (color === 'orange' && 'bg-ibeer-900') ||
      (color === 'red' && 'bg-red-500') ||
      (color === 'blue' && 'bg-blue-500') ||
      (color === 'green' && 'bg-green-500') ||
      (color === 'gray' && 'bg-gray-300') ||
      (color === 'black' && 'bg-black') ||
      (color === 'purple' && 'bg-purple-500'),
    [color]
  );
  return (
    <Link href={href}>
      <div className='flex flex-col'>
        <div className={`w-40 flex justify-center h-36 pt-2 rounded-t-xl ${colorSelected}`}>
          <img src={image} alt={title} />
        </div>
        <div className='bg-gray-100 w-40 py-1 rounded-b-xl text-center'>
          <span className='text-md font-medium text-gray-600'>{title}</span>
        </div>
      </div>
    </Link>
  );
}
