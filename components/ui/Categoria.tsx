import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ICategotias as Props } from '@/utils';
import Link from 'next/link';

export const Categoria: FC<Props> = ({ name, icon, link }) => {
  const router = useRouter();
  const onChangeCategory = (cat: string) => {
    router.push(`/categoria/${cat}`);
  };
  return (
    <div
      className={`hover:cursor-pointer  border-t-[1px] border-red-950 gap-2 p-3 hover:bg-yellow-200 ${
        router.pathname === `/categoria/${link}` ? 'bg-yellow-200' : ''
      }`}
    >
      {/* <button
        onClick={() => onChangeCategory(name.toLowerCase())}
        className="text-xl font-bold"
        type="button"
        disabled={router.pathname === `/categoria/${name.toLowerCase()}`}
        >
        {name}
      </button> */}
      <Link
        className="text-xl font-bold flex items-center"
        href={`/categoria/${link}`}
      >
        <Image alt={name} width={75} height={75} src={icon} className="mr-5" />
        {name}
      </Link>
    </div>
  );
};
