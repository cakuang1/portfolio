import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';



export default function Sideelements({link,pic}) {
    const router = useRouter()
    const [active, setActive] = useState(false);
    console.log(router.pathname)
    return (
        <div className='flex justify-end'>
        <Link path href={link} >
          <div className='bg-300 w-14  h-14 mx-10 mb-5 flex  items-center  text-center rounded-full'>
            {pic}
          </div>
        </Link>
        </div>

)}