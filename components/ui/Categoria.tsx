import { FC, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ICategotias as Props } from '@/utils';
import { UiContext } from '@/context';

export const Categoria: FC<Props> = ({ name, icon, link }) => {
  const { actualCategory, setActualCategory } = useContext(UiContext);
  const router = useRouter();

  return (
    <div
      className={`hover:cursor-pointer  border-t-[1px] border-red-950 gap-2 p-3 hover:bg-yellow-200 ${
        actualCategory === link && router.pathname === '/categoria/[category]'
          ? 'bg-yellow-200'
          : ''
      }`}
    >
      <Link
        className="text-xl font-bold flex items-center"
        href={`/categoria/${link}`}
        onClick={() => setActualCategory(link)}
      >
        <Image alt={name} width={75} height={75} src={icon} className="mr-5" />
        {name}
      </Link>
    </div>
  );
};
