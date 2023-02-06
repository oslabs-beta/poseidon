import Image from 'next/image';
import Logo from '../../public/LOGO-FINAL.svg';

export default function Spinner() {
  return (
    <div>
      <Image
        className="mx-auto animate-[spin_6s_linear_infinite]"
        src={Logo}
        alt="Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
