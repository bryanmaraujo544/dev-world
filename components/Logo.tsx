import Image from 'next/image';
import Link from 'next/link';
import LogoLight from '../public/DevWorld.svg'
import LogoDark from '../public/DevWorld-1.svg'

type LogoProps = {
     isLight?: boolean
}

export const Logo = ({ isLight } : LogoProps) => {
     return (
          <Link href="/">
               <Image 
                    src={isLight ? LogoLight : LogoDark}
                    objectFit="contain"
                    width={200}
                    height={0}
               />
          </Link>
     );
}