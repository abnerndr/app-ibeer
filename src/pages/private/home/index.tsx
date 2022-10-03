import { Notify } from '@/components/common/Notify/Notify';
import ProfileHeader from '@/components/common/ProfileHeader/ProfileHeader';
import SlideCategories from '@/components/Pages/Home/Slide/Categories';

import Cerveja from '@/assets/images/drinks/cerveja.png';
import Refrigerante from '@/assets/images/drinks/refrig.png';
import { IHome } from '@/pages/private/types';
import CompanyCard from '@/components/common/Company/CompanyCard/CompanyCard';
import CategoryCard from '@/components/Pages/Home/Slide/CategoryCard';

const slide = [
  {
    id: 'number-slide1',
    image: <img src={Cerveja.src} alt={'cervejas'} />,
    color: 'orange',
    title: 'cerveja'
  },
  {
    id: 'number-slide2',
    image: <img src={Refrigerante.src} alt={'cervejas'} />,
    color: 'red',
    title: 'refrigerantes'
  },
  {
    id: 'number-slide3',
    image: <img src={Refrigerante.src} alt={'cervejas'} />,
    color: 'red',
    title: 'refrigerantes'
  }
];

const company = [
  {
    id: '0e38b229-0a4d-445b-83de-a332e9b5a52f',
    company_name: 'fernando emporio de bebidas',
    delivery: true,
    ratign: 3.5,
    payment_types: {
      card: true,
      money: true,
      pix: true
    },
    photo_url:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    banner_url: null
  },
  {
    id: '039c3eb8-9c36-4942-89ed-217c967f2436',
    company_name: 'claudio empório de bebidas',
    delivery: true,
    ratign: 4.5,
    payment_types: {
      card: false,
      money: true,
      pix: false
    },
    photo_url: null,
    banner_url: null
  }
];

const categories = [
  {
    id: '41ee7964-2f09-40bd-9918-0f8a103744c3',
    category_name: 'beers',
    color: 'orange',
    photo_url:
      'https://png.pngtree.com/png-clipart/20220720/ourmid/pngtree-christmas-ornaments-3d-rendering-beer-png-image_6014644.png'
  },
  {
    id: '23d6be08-d6af-4a6a-a942-dfbea69c41e9',
    category_name: 'soda',
    color: 'red',
    photo_url: '@/assets/images/drinks/refrig.png'
  },
  {
    id: 'e5cc0a3e-5574-4fa5-baa5-cda930b62007number-slide3',
    category_name: 'whiks',
    color: 'black',
    photo_url: '@/assets/images/drinks/jack.png'
  }
];

export default function Home({ user, walletValue = 0, companies }: IHome) {
  const notif = () => {
    Notify({ type: 'google', message: 'teste' });
    Notify({ type: 'github', message: 'teste' });
  };

  return (
    <div>
      <ProfileHeader user={user} walletValue={walletValue} />
      {/*  */}
      <div className='mx-5 mt-10 mb-10'>
        <SlideCategories categories={categories} />
      </div>
      <div>
        {company.map((item: any) => (
          <div key={item.id}>
            <CompanyCard
              image={item.photo_url}
              delivery={item.delivery}
              title={item.company_name}
              rate={item.ratign}
              card={item.payment_types.card}
              pix={item.payment_types.pix}
              money={item.payment_types.money}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
