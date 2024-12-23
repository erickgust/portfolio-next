import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center text-[#DCD7CD] max-w-screen-lg mx-auto py-8">
        <strong>Erick Gustavo</strong>

        <div className="flex gap-4 text-sm items-center">
          <a href="https://github.com/erickgust" rel="noopener noreferrer" target="_blank" className="inline-block rounded-full border p-2">
            <Image
              src="/github.svg"
              alt="GitHub logo"
              width={16}
              height={16}
              className="size-4"
            />
          </a>

          <button className="flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none">
            <Image
              aria-hidden
              src="/email.svg"
              alt="Email icon"
              width={14}
              height={14}
            />
            <span className="pt-0.5">erick.gus@gmail.com</span>
          </button>
        </div>
      </header>

      <main>
      </main>
      
      <footer>
        <div className="text-[#DCD7CD] text-center py-48">
          <p className="text-2xl mb-8">Let’s work together!</p>
          <p className="text-5.5xl text-transparent bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text">erickgus@gmail.com</p>
        </div>

        <div className="text-xs flex gap-1.5 text-[#57544E] items-center lowercase p-8 justify-center leading-none">
          <span className="pt-0.5">Developed by Erick</span>
          <Image
            aria-hidden
            src="/star.svg"
            alt="Star icon as a separator"
            width={14}
            height={14}
          />
          <span className="pt-0.5">Designed by <a href="https://bento.me/miel" rel="noopener noreferrer" target="_blank">Miel</a></span>
        </div>
      </footer>
    </div>
  );
}
