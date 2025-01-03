import { EmailButton } from "@/components/EmailButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="flex justify-between items-center text-[#DCD7CD] max-w-screen-lg mx-auto py-8 border-x border-white border-opacity-5">
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

          <EmailButton />
        </div>
      </header>

      <main>
        <section className="max-w-screen-lg mx-auto border-x border-white border-opacity-5 min-h-[calc(100vh-90px)] grid place-items-center">
          <h1 className="text-5.5xl text-transparent bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text leading-tight">
            Passionate front-end developer, eager to
            use his skills on challenging projects that
            can have a positive impact on people&apos;s lives.
          </h1>
        </section>

        <div className="border-y border-white border-opacity-5">
          <section className="max-w-screen-lg mx-auto border-x border-white border-opacity-5 flex gap-4 justify-between">
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
                <p>Building impactful, high-performance applications with cutting-edge technologies.</p>
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
                <p>Turning your ideas into amazing mobile and web apps with responsiveness and accessibility.</p>
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
                <strong className="font-bold text-2xl mb-4 inline-block">Detail-Driven Design</strong>
                <p>Crafting interfaces with design fidelity, following the pixel-perfect concept.</p>
              </div>
            </article>
          </section>
        </div>

        <section className="max-w-screen-lg mx-auto border-x border-white border-opacity-5 py-40 space-y-44 relative">
          <article>
            <div className="relative">
              <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-white opacity-5" />
              <Image
                src="/qsmp-bg.jpg"
                alt="QSMP.co website screenshot"
                width={1080}
                height={408}
                className="h-[25.5rem] w-full object-cover rounded"
              />
              <span className="block h-px absolute bottom-0 left-1/2 -translate-x-1/2 w-screen bg-white opacity-5" />
            </div>

            <div className="mt-14 grid grid-cols-[1fr_230px_1fr]">
              <div>
                <strong className="font-semibold text-3.5xl text-[#DCD7CD] leading-none">QSMP.co</strong>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur. Id parturient nisl accumsan euismod sit morbi pulvinar. Accumsan elit in dictum suspendisse varius.  <br />
                  Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://qsmp.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#E7BE6C] border-[#E7BE6C]"
                  >
                    <Image
                      aria-hidden
                      src="/arrow.svg"
                      alt="Link icon"
                      width={14}
                      height={14}
                    />
                    <span className="pt-0.5">
                      See live
                    </span>
                  </a>

                  <a
                    href="https://github.com/erickgust/qsmp.co"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#8E9AE1] border-[#8E9AE1]"
                  >
                    <Image
                      aria-hidden
                      src="/repository.svg"
                      alt="Link icon"
                      width={14}
                      height={14}
                    />

                    <span className="pt-0.5">
                      GitHub repository
                    </span>
                  </a>
                </div>
              </div>
              <div />
              <div>
                <div className="flex gap-4 justify-end max-w-96 flex-wrap ml-auto">
                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#8AD3C8] border-[#8AD3C8]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/tailwind.svg"
                      alt="Tailwind CSS icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      Tailwind
                    </span>
                  </span>

                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#88E6FF] border-[#88E6FF]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/react.svg"
                      alt="React icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      React.js
                    </span>
                  </span>
                </div>

                <p className="mt-20">
                  Lorem ipsum dolor sit amet consectetur. Id parturient nisl accumsan euismod sit morbi pulvinar. Accumsan elit in dictum suspendisse varius. <br />
                  Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius. <br />
                  Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.
                </p>
              </div>
            </div>
          </article>

          <article>
            <div className="relative">
              <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-white opacity-5" />
              <Image
                src="/mycontacts-bg.jpg"
                alt="MyContacts website screenshot"
                width={1080}
                height={408}
                className="h-[25.5rem] w-full object-cover rounded"
              />
              <span className="block h-px absolute bottom-0 left-1/2 -translate-x-1/2 w-screen bg-white opacity-5" />
            </div>

            <div className="mt-14 grid grid-cols-[1fr_230px_1fr]">
              <div>
                <strong className="font-semibold text-3.5xl text-[#DCD7CD] leading-none">MyContacts</strong>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur. Id parturient nisl accumsan euismod sit morbi pulvinar. Accumsan elit in dictum suspendisse varius.  <br />
                  Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#E7BE6C] border-[#E7BE6C]"
                  >
                    <Image
                      aria-hidden
                      src="/arrow.svg"
                      alt="Link icon"
                      width={14}
                      height={14}
                    />
                    <span className="pt-0.5">
                      See live
                    </span>
                  </a>

                  <a
                    href="https://github.com/erickgust/my-contacts-front"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#8E9AE1] border-[#8E9AE1]"
                  >
                    <Image
                      aria-hidden
                      src="/repository.svg"
                      alt="Link icon"
                      width={14}
                      height={14}
                    />

                    <span className="pt-0.5">
                      GitHub repository
                    </span>
                  </a>
                </div>
              </div>
              <div />
              <div>
                <div className="flex gap-4 justify-end max-w-96 flex-wrap ml-auto">
                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#88E6FF] border-[#88E6FF]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/react.svg"
                      alt="React icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      React.js
                    </span>
                  </span>

                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#A6C6E0] border-[#A6C6E0]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/postgresql.svg"
                      alt="PostgreSQL icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      PostgreSQL
                    </span>
                  </span>

                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#72B5FF] border-[#72B5FF]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/typescript.svg"
                      alt="TypeScript icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      TypeScript
                    </span>
                  </span>

                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#B0F45E] border-[#B0F45E]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/node.svg"
                      alt="Node.js icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      Node.js
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="relative">
              <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-white opacity-5" />
              <span className="block h-px absolute top-20 left-1/2 -translate-x-1/2 w-screen bg-white opacity-5 -z-10" />

              <Image
                src="/calculator-bg.jpg"
                alt="Calculator website screenshot"
                width={1080}
                height={408}
                className="h-[25.5rem] w-full object-cover rounded"
              />

              <span className="block h-px absolute bottom-0 left-1/2 -translate-x-1/2 w-screen bg-white opacity-5" />
            </div>

            <div className="mt-14 grid grid-cols-[1fr_230px_1fr]">
              <div>
                <strong className="font-semibold text-3.5xl text-[#DCD7CD] leading-none">Calculator</strong>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur. Id parturient nisl accumsan euismod sit morbi pulvinar. Accumsan elit in dictum suspendisse varius.  <br />
                  Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://erickgust.github.io/calculator-js/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#E7BE6C] border-[#E7BE6C]"
                  >
                    <Image
                      aria-hidden
                      src="/arrow.svg"
                      alt="Link icon"
                      width={14}
                      height={14}
                    />
                    <span className="pt-0.5">
                      See live
                    </span>
                  </a>

                  <a
                    href="https://github.com/erickgust/calculator-js"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#8E9AE1] border-[#8E9AE1]"
                  >
                    <Image
                      aria-hidden
                      src="/repository.svg"
                      alt="Link icon"
                      width={14}
                      height={14}
                    />

                    <span className="pt-0.5">
                      GitHub repository
                    </span>
                  </a>
                </div>
              </div>
              <div />
              <div>
                <div className="flex gap-4 justify-end max-w-96 flex-wrap ml-auto">
                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#FF8753] border-[#FF8753]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/html.svg"
                      alt="HTML icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      HTML
                    </span>
                  </span>

                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#7BA2FF] border-[#7BA2FF]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/css.svg"
                      alt="CSS icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      CSS
                    </span>
                  </span>

                  <span
                    className="inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm text-[#FFEE64] border-[#FFEE64]"
                  >
                    <Image
                      aria-hidden
                      src="/techs/javascript.svg"
                      alt="JavaScript icon"
                      width={16}
                      height={16}
                    />
                    <span className="pt-0.5">
                      JavaScript
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="max-w-screen-lg mx-auto border-x border-white border-opacity-5 space-y-16 py-12 relative before:block before:h-px before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-screen before:bg-white before:opacity-5 after:block after:h-px after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-screen after:bg-white after:opacity-5">
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

          <article>
            <div className="flex flex-col gap-2">
              <strong className="font-semibold text-2.5xl text-[#DCD7CD] leading-none">
                <span>Front-end Intern at</span>
                <Image
                  aria-hidden
                  src="/upbase.svg"
                  alt="UpBase Consultoria logo"
                  width={26}
                  height={26}
                  className="inline-block ml-3 mr-2 rotate-[4deg] rounded mb-0.5"
                />
                <span>UpBase Consultoria</span>
              </strong>

              <i className="text-[#DCD7CD] font-normal not-italic leading-none text-xl">November 2022 - May 2023</i>
            </div>

            <div className="max-w-prose">
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur. Id parturient nisl accumsan euismod sit morbi pulvinar. Accumsan elit in dictum suspendisse varius. Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.</p>
            </div>
          </article>

          <article>
            <div className="flex flex-col gap-2">
              <strong className="font-semibold text-2.5xl text-[#DCD7CD] leading-none">
                <span>Student in Analysis and Development of Systems at</span>
                <Image
                  aria-hidden
                  src="/unicesumar.svg"
                  alt="Universidade Cesumar logo"
                  width={26}
                  height={26}
                  className="inline-block ml-3 mr-2 rotate-[4deg] rounded mb-0.5"
                />
                <span>Universidade Cesumar</span>
              </strong>

              <i className="text-[#DCD7CD] font-normal not-italic leading-none text-xl">November 2022 - December 2024</i>
            </div>

            <div className="max-w-prose">
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur. Id parturient nisl accumsan euismod sit morbi pulvinar. Accumsan elit in dictum suspendisse varius. Integer eget neque faucibus nulla eget sit diam. Volutpat phasellus nec venenatis massa turpis varius.</p>
            </div>
          </article>
        </section>
      </main>

      <footer className="max-w-screen-lg mx-auto border-x border-white border-opacity-5">
        <div className="text-[#DCD7CD] py-48 flex flex-col gap-8 items-center justify-center">
          <p className="text-2xl">Let’s work together!</p>
          <p className="text-5.5xl text-transparent bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text">erickgus@gmail.com</p>
        </div>

        <div className="group text-xs flex gap-1.5 text-[#57544E] items-center lowercase p-8 justify-center leading-none">
          <span className="pt-0.5">Developed by Erick</span>
          <Image
            aria-hidden
            src="/star.svg"
            alt="Star icon as a separator"
            width={14}
            height={14}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
          <span className="pt-0.5">Designed by <a href="https://bento.me/miel" rel="noopener noreferrer" target="_blank">Miel</a></span>
        </div>
      </footer>
    </div>
  );
}
