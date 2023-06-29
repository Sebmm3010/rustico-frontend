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
      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="Buscar"
          className="p-1 rounded-md border border-black"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        />
        <button
          className="border border-black rounded-md p-1 bg-white"
          type="button"
          onClick={onSearch}
        >
          <svg
            viewBox="0 0 32 32"
            width="20"
            height="20"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M12.5 5.3c3.9 0 7.1 3.2 7 7.1 0 1.5-0.5 2.9-1.3 4.2l-0.7 0.9-0.9 0.7c-1.2 0.9-2.6 1.3-4.1 1.4-3.9 0-7.1-3.2-7.1-7.2s3.2-7.1 7.1-7.1zM12.5 1.8c-5.9 0-10.6 4.8-10.6 10.6s4.7 10.7 10.6 10.7c2.3 0 4.4-0.7 6.1-2l8.5 8.6c0.3 0.3 0.8 0.5 1.3 0.5s0.9-0.2 1.2-0.5c0.7-0.7 0.7-1.8 0-2.5l-8.5-8.6c1.2-1.7 2-3.9 2-6.2 0-5.9-4.7-10.7-10.6-10.6v0z" />
          </svg>
        </button>
      </div>
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
