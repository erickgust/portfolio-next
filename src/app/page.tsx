import { EmailButton } from "@/components/EmailButton";
import { ProjectLink } from "@/components/ProjectLink";
import { TechTag } from "@/components/TechTag";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="flex justify-between items-center text-[#DCD7CD] max-w-screen-lg mx-auto py-8 border-x border-[#1B1B1B]">
        <strong className="font-normal text-sm">Erick Gustavo</strong>

        <div className="flex gap-4 text-sm items-center">
          <a
            href="https://github.com/erickgust"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block rounded-full border p-2"
          >
            <Image
              src="/github.svg"
              alt="GitHub logo"
              width={16}
              height={16}
              className="size-4"
              priority
            />
          </a>

          <EmailButton />
        </div>
      </header>

      <main className="max-w-screen-lg mx-auto border-x border-[#1B1B1B]">
        <section className="min-h-[calc(100vh-90px)] grid place-items-center">
          <h1 className="text-5.5xl text-transparent bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text leading-tight">
            Passionate front-end developer, eager to use his skills on
            challenging projects that can have a positive impact on
            people&apos;s lives.
          </h1>
        </section>

        <section className="flex gap-4 justify-between relative">
          <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />

          <article className="h-72 grow-0 shrink basis-80 bg-opacity-90 bg-[#161616] rounded border p-8 border-[#DCD7CD] border-opacity-30 flex flex-col justify-between">
            <Image
              aria-hidden
              src="/dev.svg"
              alt="Development icon"
              width={32}
              height={32}
            />

            <div>
              <strong className="font-bold text-2xl mb-4 inline-block">
                Development
              </strong>
              <p>
                Building impactful, high-performance applications with
                cutting-edge technologies.
              </p>
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
              <strong className="font-bold text-2xl mb-4 inline-block">
                Web and Mobile apps
              </strong>
              <p>
                Turning your ideas into amazing mobile and web apps with
                responsiveness and accessibility.
              </p>
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
              <strong className="font-bold text-2xl mb-4 inline-block">
                Detail-Driven Design
              </strong>
              <p>
                Crafting interfaces with design fidelity, following the
                pixel-perfect concept.
              </p>
            </div>
          </article>

          <span className="block h-px absolute bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />
        </section>

        <section className="py-40 space-y-44 relative">
          <article>
            <div className="relative">
              <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />
              <Image
                src="/qsmp-bg.jpg"
                alt="QSMP.co website screenshot"
                width={1513}
                height={572}
                className="h-[25.5rem] w-full object-cover rounded"
                quality={100}
              />
              <span className="block h-px absolute bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />
            </div>

            <div className="mt-14 grid grid-cols-[1fr_230px_1fr] [&_p+p]:mt-2">
              <div>
                <strong className="font-semibold text-3.5xl text-[#DCD7CD] leading-none">
                  QSMP.co
                </strong>

                <p className="mt-4">
                  I was the developer responsible for QSMP.co, the official
                  portal of the QSMP project, the first multilingual Minecraft
                  server with real-time translation, connecting content creators
                  from different regions and languages.
                </p>
                <p>
                  The website&apos;s goal was to centralize the main information
                  about the server and its participants, offering a list of
                  current members with links to their social media profiles, as
                  well as sections dedicated to project updates.
                </p>

                <div className="flex gap-4 mt-8">
                  <ProjectLink type="live" href="https://qsmp.co/">
                    See live
                  </ProjectLink>

                  <ProjectLink
                    type="github"
                    href="https://github.com/erickgust/qsmp.co"
                  >
                    GitHub repository
                  </ProjectLink>
                </div>
              </div>
              <div />
              <div>
                <div className="flex gap-4 justify-end max-w-96 flex-wrap ml-auto">
                  <TechTag
                    color="#8AD3C8"
                    title="Tailwind"
                    img={{
                      src: "/techs/tailwind.svg",
                      alt: "Tailwind CSS icon",
                    }}
                  />

                  <TechTag
                    color="#72B5FF"
                    title="TypeScript"
                    img={{
                      src: "/techs/typescript.svg",
                      alt: "TypeScript icon",
                    }}
                  />

                  <TechTag
                    color="#FFF"
                    title="Next.js"
                    img={{ src: "/techs/nextjs.svg", alt: "Next.js icon" }}
                  />
                </div>
                <p className="mt-20">
                  For development, I chose Next.js due to my familiarity with
                  the tool and its ability to offer high performance and SEO
                  optimization, both essential for the project. For styling, I
                  used Tailwind CSS, ensuring flexibility and efficiency in
                  design.
                </p>
                <p>
                  These technologies were essential to ensuring productivity and
                  efficiency while delivering a responsive, multi-language
                  supported website with excellent performance.
                </p>
              </div>
            </div>
          </article>

          <article>
            <div className="relative">
              <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />
              <Image
                src="/mycontacts-bg.png"
                alt="MyContacts website screenshot"
                width={1920}
                height={726}
                className="h-[25.5rem] w-full object-cover rounded"
                quality={100}
              />
              <span className="block h-px absolute bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />
            </div>

            <div className="mt-14 grid grid-cols-[1fr_230px_1fr] [&_p+p]:mt-2">
              <div>
                <strong className="font-semibold text-3.5xl text-[#DCD7CD] leading-none">
                  MyContacts
                </strong>

                <p className="mt-4">
                  MyContacts was a project where I explored React and React
                  Router more in-depth by building a contact management feature
                  that lets you create, edit, delete, and view contacts, as well
                  as organize them by categories.
                </p>

                <div className="flex gap-4 mt-8">
                  <ProjectLink
                    type="github"
                    href="https://github.com/erickgust/my-contacts-front"
                  >
                    GitHub repository
                  </ProjectLink>
                </div>
              </div>
              <div />
              <div>
                <div className="flex gap-4 justify-end max-w-96 flex-wrap ml-auto">
                  <TechTag
                    color="#88E6FF"
                    title="React.js"
                    img={{ src: "/techs/react.svg", alt: "React icon" }}
                  />

                  <TechTag
                    color="#A6C6E0"
                    title="PostgreSQL"
                    img={{
                      src: "/techs/postgresql.svg",
                      alt: "PostgreSQL icon",
                    }}
                  />

                  <TechTag
                    color="#72B5FF"
                    title="TypeScript"
                    img={{
                      src: "/techs/typescript.svg",
                      alt: "TypeScript icon",
                    }}
                  />

                  <TechTag
                    color="#B0F45E"
                    title="Node.js"
                    img={{ src: "/techs/node.svg", alt: "Node.js icon" }}
                  />
                </div>

                <p className="mt-20">
                  I also had the opportunity to develop a REST API in Node.js
                  with Express, which connects to a Docker environment running
                  PostgreSQL.
                </p>
              </div>
            </div>
          </article>

          <article>
            <div className="relative">
              <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />

              <Image
                src="/tmdb-bg.png"
                alt="Calculator website screenshot"
                width={2160}
                height={816}
                className="h-[25.5rem] w-full object-cover rounded"
                quality={100}
              />

              <span className="block h-px absolute bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />
            </div>

            <div className="mt-14 grid grid-cols-[1fr_230px_1fr]">
              <div>
                <strong className="font-semibold text-3.5xl text-[#DCD7CD] leading-none">
                  TMDB Movies
                </strong>

                <p className="mt-4">
                  TMDB Movies is a project that lets you browse a list of
                  trending movies, filtered by various genres. By selecting a
                  movie, you can view details such as rating, synopsis, cast,
                  genres, and certification.
                </p>

                <div className="flex gap-4 mt-8">
                  <ProjectLink
                    type="live"
                    href="https://erickgust-tmdb.netlify.app/"
                  >
                    See live
                  </ProjectLink>

                  <ProjectLink
                    type="github"
                    href="https://github.com/erickgust/promobit-tmdb"
                  >
                    GitHub repository
                  </ProjectLink>
                </div>
              </div>
              <div />
              <div>
                <div className="flex gap-4 justify-end max-w-96 flex-wrap ml-auto">
                  <TechTag
                    color="#88E6FF"
                    title="React.js"
                    img={{ src: "/techs/react.svg", alt: "React icon" }}
                  />

                  <TechTag
                    color="#72B5FF"
                    title="TypeScript"
                    img={{
                      src: "/techs/typescript.svg",
                      alt: "TypeScript icon",
                    }}
                  />

                  <TechTag
                    color="#8AD3C8"
                    title="Tailwind"
                    img={{
                      src: "/techs/tailwind.svg",
                      alt: "Tailwind CSS icon",
                    }}
                  />
                </div>

                <p className="mt-20">
                  This project was built in TypeScript and React to explore
                  React Query features combined with React Router. It also uses
                  the Zod library to ensure type safety for data fetched from
                  the TMDB API.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-16 py-12 relative before:block before:h-px before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-screen before:bg-[#1B1B1B] after:block after:h-px after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-screen after:bg-[#1B1B1B]">
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

              <i className="text-[#DCD7CD] font-normal not-italic leading-none text-xl">
                October 2023 - April 2024
              </i>
            </div>

            <div className="max-w-prose">
              <p className="mt-4">
                As part of an international team, I contributed to multilingual
                projects built with Next.js and TypeScript, designed to handle
                high volumes of simultaneous users, with a strong focus on
                optimizing user experience and performance.
              </p>
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

              <i className="text-[#DCD7CD] font-normal not-italic leading-none text-xl">
                November 2022 - April 2023
              </i>
            </div>

            <div className="max-w-prose">
              <p className="mt-4">
                At UpBase, I demonstrated my expertise in NextJS, React Native
                and TypeScript by contributing to the development of mobile and
                web projects. I worked closely with client feedback to align
                with their needs and consistently deliver results.
              </p>
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

              <i className="text-[#DCD7CD] font-normal not-italic leading-none text-xl">
                July 2022 - January 2025
              </i>
            </div>

            <div className="max-w-prose">
              <p className="mt-4">
                I had the opportunity to learn various stages of software
                development and management, from planning and collecting
                requirements to deployment and maintenance. I also learnt how
                interface design is planned, from wireframes to low- and
                high-fidelity prototypes. Furthermore, I deepened my knowledge
                of algorithms and data structures using Java and C, as well as
                database management with MySQL.
              </p>
            </div>
          </article>
        </section>
      </main>

      <footer className="max-w-screen-lg mx-auto border-x border-[#1B1B1B]">
        <div className="text-[#DCD7CD] py-48 flex flex-col gap-8 items-center justify-center">
          <p className="text-2xl">Let’s work together!</p>
          <p className="text-5.5xl text-transparent bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text">
            erick.prussak@gmail.com
          </p>
        </div>

        <div className="group text-xs flex gap-1.5 text-[#57544E] items-center lowercase p-8 justify-center leading-none relative">
          <span className="block h-px absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-[#1B1B1B] -z-10" />

          <span className="pt-0.5">Developed by Erick</span>
          <Image
            aria-hidden
            src="/star.svg"
            alt="Star icon as a separator"
            width={14}
            height={14}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
          <span className="pt-0.5">
            Designed by{" "}
            <a
              href="https://maelle.works"
              rel="noopener noreferrer"
              target="_blank"
            >
              Maëlle
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
