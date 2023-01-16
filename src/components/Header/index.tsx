export default function Header() {
  return (
    <>
      <header>
        <div className="flex w-full p-6">
          <div className="flex items-center justify-between">
            <img className="h-8 mr-5" src="/logo.svg" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white xs:hidden md:inline-block">
              Jack Taylor
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
