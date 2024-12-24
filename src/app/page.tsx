import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center text-[#DCD7CD] max-w-screen-lg mx-auto py-8">
        <strong className="font-normal text-sm">Erick Gustavo</strong>

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

      <main className="">
        <section className="max-w-screen-lg mx-auto min-h-[calc(100vh-100px)] grid place-items-center">
          <h1 className="text-5.5xl text-transparent bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text leading-tight">
            Passionate front-end developer, eager to 
            use his skills on challenging projects that 
            can have a positive impact on people&apos;s lives.
          </h1>
        </section>

        <section className="max-w-screen-lg mx-auto flex gap-4 justify-between">
          <article className="h-72 grow-0 shrink basis-80 bg-opacity-90 bg-[#161616] rounded border p-8 border-[#DCD7CD] border-opacity-30 flex flex-col justify-between">
            <Image
              aria-hidden
              src="/dev.svg"
              alt="Development icon"
              width={32}
              height={32}
            />

            <div>
              <strong className="font-bold text-2xl mb-4 inline-block">Development</strong>
              <p>Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis.</p>
            </div>
          </article>
          <article className="h-72 grow-0 shrink basis-80 bg-opacity-90 bg-[#161616] rounded border p-8 border-[#DCD7CD] border-opacity-30 flex flex-col justify-between">
            <Image
              aria-hidden
              src="/app.svg"
              alt="Web and Mobile apps icon"
              width={32}
              height={32}
            />

            <div>
              <strong className="font-bold text-2xl mb-4 inline-block">Web and Mobile apps</strong>
              <p>Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis.</p>
            </div>
          </article>
          <article className="h-72 grow-0 shrink basis-80 bg-opacity-90 bg-[#161616] rounded border p-8 border-[#DCD7CD] border-opacity-30 flex flex-col justify-between">
            <Image
              aria-hidden
              src="/tools.svg"
              alt="Tools icon"
              width={32}
              height={32}
            />

            <div>
              <strong className="font-bold text-2xl mb-4 inline-block">Attention to details</strong>
              <p>Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis.</p>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div className="flex flex-col gap-2">
              <strong className="font-semibold text-2.5xl text-[#DCD7CD] leading-none">
                <span>Front-end Developer at</span>
                <Image
                  aria-hidden
                  src="/quackity.svg"
                  alt="Quackity Studios logo"
                  width={26}
                  height={26}
                  className="inline-block ml-3 mr-2 rotate-[4deg] rounded mb-0.5"
                />
                <span>Quackity Studios</span>
              </strong>

              <i className="text-[#DCD7CD] font-normal not-italic leading-none text-xl">June 2023 - March 2024</i>
            </div>

            <div className="max-w-prose">
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur. Id parturient nisl accumsan euismod sit morbi pulvinar. Accumsan elit in dictum suspendisse varius. Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.</p>
            </div>
          </article>
        </section>
      </main>
      
      <footer>
        <div className="text-[#DCD7CD] py-48 flex flex-col gap-8 items-center justify-center">
          <p className="text-2xl">Let’s work together!</p>
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
