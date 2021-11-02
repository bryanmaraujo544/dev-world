import Image from 'next/image';
import Link from 'next/link';
// import { Link } from '@chakra-ui/react';
import LogoLight from '../public/DevWorld.svg'
import LogoDark from '../public/DevWorld-1.svg'

type LogoProps = {
     isLight?: boolean
}

export const Logo = ({ isLight } : LogoProps) => {
     return (
          <Link href="/">
               <a style={{ cursor: "pointer" }}>
                    <Image 
                         src={isLight ? LogoLight : LogoDark}
                         objectFit="contain"
                         width={200}
                         height={0}
                    />
               </a>
          </Link>
     );
}