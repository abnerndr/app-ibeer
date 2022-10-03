import Rotate from '../Loader/Rotate/Rotate';

export default function LoadingScreen() {
  return (
    <div className='min-w-screen min-h-screen absolute'>
      <div className='bg-gray-50 flex justify-center items-center mx-auto my-auto'>
        <Rotate color='ibeer' />
      </div>
    </div>
  );
}
