import { useRouter } from 'next/router';
import { useState } from 'react';

export const Navbar = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const onSearch = () => {
    if (searchInput.trim().length === 0) return;
    router.push(`/buscar/${searchInput}`);
  };
  return (
    <div className="flex items-center justify-end w-full px-7 gap-2">
      <input
        type="text"
        placeholder="Buscar"
        className="p-1 rounded-md border border-black"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <svg
        viewBox="0 0 120 120"
        width="40"
        height="40"
        stroke="currentColor"
        fill="currentColor"
      >
        <path d="M60 30a18.8 18.8 0 1 0 18.8 18.8 18.8 18.8 0 0 0-18.8-18.8Zm0 30a11.3 11.3 0 1 1 11.3-11.3 11.3 11.3 0 0 1-11.3 11.3Z" />
        <path d="M60 7.5a52.5 52.5 0 1 0 52.5 52.5A52.6 52.6 0 0 0 60 7.5Zm-22.5 91.4V93.8a11.3 11.3 0 0 1 11.3-11.3h22.4a11.3 11.3 0 0 1 11.3 11.3v5.1a44.6 44.6 0 0 1-45 0Zm52.5-5.4A18.8 18.8 0 0 0 71.3 75h-22.5a18.8 18.8 0 0 0-18.8 18.5 45 45 0 1 1 60 0Z" />
      </svg>
    </div>
  );
};
