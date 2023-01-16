import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header>
        <div className="flex w-full p-6">
          <div className="flex items-center justify-between">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="mr-5"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white xs:hidden md:inline-block">
              Jack Taylor
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
