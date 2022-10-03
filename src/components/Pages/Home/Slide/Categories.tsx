import { classNames, fomatCategoryName, setColorCategory } from '@/helper/utils';
import { ReactNode } from 'react';

import Cerveja from '@/assets/images/drinks/cerveja.png';
import Refrigerante from '@/assets/images/drinks/refrig.png';
import Wiskys from '@/assets/images/drinks/jack.png';
import CategoryCard from './CategoryCard';

//
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ISlide {
  productImage: ReactNode;
  color: string;
  title: string;
  slideNumber: string;
}

type Category = {
  id: string;
  category_name: string;
  color: string;
  photo_url: string;
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function SlideCategories({ categories }: any) {
  // const [ref] = useKeenSlider<HTMLDivElement>({
  //   slides: {
  //     perView: 2,
  //     spacing: 15
  //   }
  // });

  return (
    <div className='flex flex-row items-center lowercase'>
      <Swiper
        slidesPerView={2}
        onSwiper={(swiper) => swiper}
        className='mySwiper flex items-center'
      >
        <SwiperSlide>
          <CategoryCard title='cervejas' image={Cerveja.src} color='orange' href={''} />
        </SwiperSlide>

        {/*  */}
        <SwiperSlide>
          {' '}
          <CategoryCard
            title='refrigerante'
            image={Refrigerante.src}
            color='red'
            href={''}
          />
        </SwiperSlide>

        {/*  */}
        <SwiperSlide>
          <CategoryCard title='Wiskys' image={Wiskys.src} color='gray' href={''} />
        </SwiperSlide>

        {/*  */}
        <SwiperSlide>
          <CategoryCard
            title='vinho e espumantes'
            image={
              'https://www.teclasap.com.br/wp-content/uploads/2011/08/tac%CC%A7a-de-vinho.png'
            }
            color='purple'
            href={''}
          />
        </SwiperSlide>

        {/*  */}
        <SwiperSlide>
          <CategoryCard
            title='vodka'
            image={
              'https://www.absolut.com/contentassets/36e622266f3d4f158729627194aa848a/avo-1750-ml-black-high-res.jpg?impolicy=imagecrop&width=1170&height=818'
            }
            color='black'
            href={''}
          />
        </SwiperSlide>

        {/*  */}
        <SwiperSlide>
          {' '}
          <CategoryCard
            title='agua'
            image={
              'https://i0.wp.com/maprint.com.br/wp-content/uploads/2017/08/garrafa-de-agua-mineral-500ml.png?fit=400%2C400&ssl=1'
            }
            color='gray'
            href={''}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
