import { AiOutlineUser,AiOutlineShoppingCart } from 'react-icons/ai';
import Image from "next/image"
import Link from "next/link"
import Search from '../components/Search';

function Header() {
  return (
    <header className="bg-white py-5 border-b">
    <div className="container">
       {/* {Header top area } */}
      <div className=" flex justify-between">
        {/* {logo } */}
        <div className="relative w-[160px] h-[55px] mx-4">
         <Link href="/">
          <a href="/">
            <Image
              src="/logo.svg"
              layout="fill"
              width="160"
              height="55"
              objectFit="contain"
            />
          </a>
         </Link>
        </div>
        {/* {Search } */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-2  lg:min-w-[700px]  ">
        <Search/>
          
        </div>
        {/* {contct } */}
        <div className="lg:flex flex-col hidden">
          <span className='text-2xl font-semibold '> +88 01978903878</span>
          <p className='self-end'>Support 24/7 </p>
        </div>
        {/* {icons } */}
        <div className="flex items-center gap-5">
         <Link href='/my-account'>
         <a href='/my-account'>
              <AiOutlineUser className='text-3xl text-title'/>
          </a>
         </Link>
         <Link href='/cart' className=''>
         <a href='/cart' className=' flex items-center gap-3 '>
             <div className="relative">
             <AiOutlineShoppingCart className='text-3xl text-title'/>
             <div className="bg-primary rounded  text-center absolute px-2 text-sm -right-3 -top-1 ">0</div>
             </div>
              <div className='hidden lg:block'>
                <span className='text-color text-sm'>Your Cart </span>
                <p className='text-color font-bold text-lg'> $0.00</p>
              </div>
          </a>
         </Link>
        </div>
      </div>
    </div>

    </header>
  )
}

export default Header