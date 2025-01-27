import { EmailButton } from '@/components/EmailButton'
import { ProjectLink } from '@/components/ProjectLink'
import { TechTag } from '@/components/TechTag'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <header className='mx-auto flex max-w-screen-lg items-center justify-between border-x border-[#1B1B1B] py-8 text-[#DCD7CD]'>
        <strong className='text-sm font-normal'>Erick Gustavo</strong>

        <div className='flex items-center gap-4 text-sm'>
          <a
            href='https://github.com/erickgust'
            rel='noopener noreferrer'
            target='_blank'
            className='inline-block rounded-full border p-2'
          >
            <Image
              src='/github.svg'
              alt='GitHub logo'
              width={16}
              height={16}
              className='size-4'
              priority
            />
          </a>

          <EmailButton />
        </div>
      </header>

      <main className='mx-auto max-w-screen-lg border-x border-[#1B1B1B]'>
        <section className='grid min-h-[calc(100vh-90px)] place-items-center'>
          <h1 className='bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text text-5.5xl leading-tight text-transparent'>
            Passionate front-end developer, eager to use his skills on
            challenging projects that can have a positive impact on
            people&apos;s lives.
          </h1>
        </section>

        <section className='relative flex justify-between gap-4'>
          <span className='absolute left-1/2 top-0 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />

          <article className='flex h-72 shrink grow-0 basis-80 flex-col justify-between rounded border border-[#DCD7CD] border-opacity-30 bg-[#161616] bg-opacity-90 p-8'>
            <Image
              aria-hidden
              src='/dev.svg'
              alt='Development icon'
              width={32}
              height={32}
            />

            <div>
              <strong className='mb-4 inline-block text-2xl font-bold'>
                Development
              </strong>
              <p>
                Building impactful, high-performance applications with
                cutting-edge technologies.
              </p>
            </div>
          </article>
          <article className='flex h-72 shrink grow-0 basis-80 flex-col justify-between rounded border border-[#DCD7CD] border-opacity-30 bg-[#161616] bg-opacity-90 p-8'>
            <Image
              aria-hidden
              src='/app.svg'
              alt='Web and Mobile apps icon'
              width={32}
              height={32}
            />

            <div>
              <strong className='mb-4 inline-block text-2xl font-bold'>
                Web and Mobile apps
              </strong>
              <p>
                Turning your ideas into amazing mobile and web apps with
                responsiveness and accessibility.
              </p>
            </div>
          </article>
          <article className='flex h-72 shrink grow-0 basis-80 flex-col justify-between rounded border border-[#DCD7CD] border-opacity-30 bg-[#161616] bg-opacity-90 p-8'>
            <Image
              aria-hidden
              src='/tools.svg'
              alt='Tools icon'
              width={32}
              height={32}
            />

            <div>
              <strong className='mb-4 inline-block text-2xl font-bold'>
                Detail-Driven Design
              </strong>
              <p>
                Crafting interfaces with design fidelity, following the
                pixel-perfect concept.
              </p>
            </div>
          </article>

          <span className='absolute bottom-0 left-1/2 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
        </section>

        <section className='relative space-y-44 py-40'>
          <article>
            <div className='relative'>
              <span className='absolute left-1/2 top-0 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
              <Image
                src='/qsmp-desktop.png'
                alt='QSMP.co website'
                width={1063}
                height={408}
                className='h-[25.5rem] w-full rounded object-cover'
                quality={100}
              />
              <span className='absolute bottom-0 left-1/2 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
            </div>

            <div className='mt-14 grid grid-cols-[1fr_230px_1fr] [&_p+p]:mt-2'>
              <div>
                <strong className='text-3.5xl font-semibold leading-none text-[#DCD7CD]'>
                  QSMP.co
                </strong>

                <p className='mt-4'>
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

                <div className='mt-8 flex gap-4'>
                  <ProjectLink type='live' href='https://qsmp.co/'>
                    See live
                  </ProjectLink>

                  <ProjectLink
                    type='github'
                    href='https://github.com/erickgust/qsmp.co'
                  >
                    GitHub repository
                  </ProjectLink>
                </div>
              </div>
              <div />
              <div>
                <div className='ml-auto flex max-w-96 flex-wrap justify-end gap-4'>
                  <TechTag
                    color='#8AD3C8'
                    title='Tailwind'
                    img={{
                      src: '/techs/tailwind.svg',
                      alt: 'Tailwind CSS icon',
                    }}
                  />

                  <TechTag
                    color='#72B5FF'
                    title='TypeScript'
                    img={{
                      src: '/techs/typescript.svg',
                      alt: 'TypeScript icon',
                    }}
                  />

                  <TechTag
                    color='#FFF'
                    title='Next.js'
                    img={{ src: '/techs/nextjs.svg', alt: 'Next.js icon' }}
                  />
                </div>
                <p className='mt-20'>
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
            <div className='relative'>
              <span className='absolute left-1/2 top-0 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
              <Image
                src='/mycontacts-desktop.png'
                alt='MyContacts website'
                width={1063}
                height={408}
                className='h-[25.5rem] w-full rounded object-cover'
                quality={100}
              />
              <span className='absolute bottom-0 left-1/2 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
            </div>

            <div className='mt-14 grid grid-cols-[1fr_230px_1fr] [&_p+p]:mt-2'>
              <div>
                <strong className='text-3.5xl font-semibold leading-none text-[#DCD7CD]'>
                  MyContacts
                </strong>

                <p className='mt-4'>
                  MyContacts was a project where I explored React and React
                  Router more in-depth by building a contact management feature
                  that lets you create, edit, delete, and view contacts, as well
                  as organize them by categories.
                </p>

                <div className='mt-8 flex gap-4'>
                  <ProjectLink
                    type='github'
                    href='https://github.com/erickgust/my-contacts-front'
                  >
                    GitHub repository
                  </ProjectLink>
                </div>
              </div>
              <div />
              <div>
                <div className='ml-auto flex max-w-96 flex-wrap justify-end gap-4'>
                  <TechTag
                    color='#88E6FF'
                    title='React.js'
                    img={{ src: '/techs/react.svg', alt: 'React icon' }}
                  />

                  <TechTag
                    color='#A6C6E0'
                    title='PostgreSQL'
                    img={{
                      src: '/techs/postgresql.svg',
                      alt: 'PostgreSQL icon',
                    }}
                  />

                  <TechTag
                    color='#72B5FF'
                    title='TypeScript'
                    img={{
                      src: '/techs/typescript.svg',
                      alt: 'TypeScript icon',
                    }}
                  />

                  <TechTag
                    color='#B0F45E'
                    title='Node.js'
                    img={{ src: '/techs/node.svg', alt: 'Node.js icon' }}
                  />
                </div>

                <p className='mt-20'>
                  I also had the opportunity to develop a REST API in Node.js
                  with Express, which connects to a Docker environment running
                  PostgreSQL.
                </p>
              </div>
            </div>
          </article>

          <article>
            <div className='relative'>
              <span className='absolute left-1/2 top-0 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />

              <Image
                src='/tmdb-desktop.png'
                alt='TMDB Movies website'
                width={1063}
                height={408}
                className='h-[25.5rem] w-full rounded object-cover'
                quality={100}
              />

              <span className='absolute bottom-0 left-1/2 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
            </div>

            <div className='mt-14 grid grid-cols-[1fr_230px_1fr]'>
              <div>
                <strong className='text-3.5xl font-semibold leading-none text-[#DCD7CD]'>
                  TMDB Movies
                </strong>

                <p className='mt-4'>
                  TMDB Movies is a project that lets you browse a list of
                  trending movies, filtered by various genres. By selecting a
                  movie, you can view details such as rating, synopsis, cast,
                  genres, and certification.
                </p>

                <div className='mt-8 flex gap-4'>
                  <ProjectLink
                    type='live'
                    href='https://erickgust-tmdb.netlify.app/'
                  >
                    See live
                  </ProjectLink>

                  <ProjectLink
                    type='github'
                    href='https://github.com/erickgust/promobit-tmdb'
                  >
                    GitHub repository
                  </ProjectLink>
                </div>
              </div>
              <div />
              <div>
                <div className='ml-auto flex max-w-96 flex-wrap justify-end gap-4'>
                  <TechTag
                    color='#88E6FF'
                    title='React.js'
                    img={{ src: '/techs/react.svg', alt: 'React icon' }}
                  />

                  <TechTag
                    color='#72B5FF'
                    title='TypeScript'
                    img={{
                      src: '/techs/typescript.svg',
                      alt: 'TypeScript icon',
                    }}
                  />

                  <TechTag
                    color='#8AD3C8'
                    title='Tailwind'
                    img={{
                      src: '/techs/tailwind.svg',
                      alt: 'Tailwind CSS icon',
                    }}
                  />
                </div>

                <p className='mt-20'>
                  This project was built in TypeScript and React to explore
                  React Query features combined with React Router. It also uses
                  the Zod library to ensure type safety for data fetched from
                  the TMDB API.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className='relative space-y-16 py-12 before:absolute before:left-1/2 before:top-0 before:block before:h-px before:w-screen before:-translate-x-1/2 before:bg-[#1B1B1B] after:absolute after:bottom-0 after:left-1/2 after:block after:h-px after:w-screen after:-translate-x-1/2 after:bg-[#1B1B1B]'>
          <article>
            <div className='flex flex-col gap-2'>
              <strong className='text-2.5xl font-semibold leading-none text-[#DCD7CD]'>
                <span>Front-end Developer at</span>
                <Image
                  aria-hidden
                  src='/quackity.svg'
                  alt='Quackity Studios logo'
                  width={26}
                  height={26}
                  className='mb-0.5 ml-3 mr-2 inline-block rotate-[4deg] rounded'
                />
                <span>Quackity Studios</span>
              </strong>

              <i className='text-xl font-normal not-italic leading-none text-[#DCD7CD]'>
                October 2023 - April 2024
              </i>
            </div>

            <div className='max-w-prose'>
              <p className='mt-4'>
                As part of an international team, I contributed to multilingual
                projects built with Next.js and TypeScript, designed to handle
                high volumes of simultaneous users, with a strong focus on
                optimizing user experience and performance.
              </p>
            </div>
          </article>

          <article>
            <div className='flex flex-col gap-2'>
              <strong className='text-2.5xl font-semibold leading-none text-[#DCD7CD]'>
                <span>Front-end Intern at</span>
                <Image
                  aria-hidden
                  src='/upbase.svg'
                  alt='UpBase Consultoria logo'
                  width={26}
                  height={26}
                  className='mb-0.5 ml-3 mr-2 inline-block rotate-[4deg] rounded'
                />
                <span>UpBase Consultoria</span>
              </strong>

              <i className='text-xl font-normal not-italic leading-none text-[#DCD7CD]'>
                November 2022 - April 2023
              </i>
            </div>

            <div className='max-w-prose'>
              <p className='mt-4'>
                At UpBase, I demonstrated my expertise in NextJS, React Native
                and TypeScript by contributing to the development of mobile and
                web projects. I worked closely with client feedback to align
                with their needs and consistently deliver results.
              </p>
            </div>
          </article>

          <article>
            <div className='flex flex-col gap-2'>
              <strong className='text-2.5xl font-semibold leading-none text-[#DCD7CD]'>
                <span>Student in Analysis and Development of Systems at</span>
                <Image
                  aria-hidden
                  src='/unicesumar.svg'
                  alt='Universidade Cesumar logo'
                  width={26}
                  height={26}
                  className='mb-0.5 ml-3 mr-2 inline-block rotate-[4deg] rounded'
                />
                <span>Universidade Cesumar</span>
              </strong>

              <i className='text-xl font-normal not-italic leading-none text-[#DCD7CD]'>
                July 2022 - January 2025
              </i>
            </div>

            <div className='max-w-prose'>
              <p className='mt-4'>
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

      <footer className='mx-auto max-w-screen-lg border-x border-[#1B1B1B]'>
        <div className='flex flex-col items-center justify-center gap-8 py-48 text-[#DCD7CD]'>
          <p className='text-2xl'>Let’s work together!</p>
          <p className='bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text text-5.5xl text-transparent'>
            erick.prussak@gmail.com
          </p>
        </div>

        <div className='group relative flex items-center justify-center gap-1.5 p-8 text-xs lowercase leading-none text-[#57544E]'>
          <span className='absolute left-1/2 top-0 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />

          <span className='pt-0.5'>Developed by Erick</span>
          <Image
            aria-hidden
            src='/star.svg'
            alt='Star icon as a separator'
            width={14}
            height={14}
            className='transition-transform duration-300 group-hover:rotate-90'
          />
          <span className='pt-0.5'>
            Designed by{' '}
            <a
              href='https://maelle.works'
              rel='noopener noreferrer'
              target='_blank'
            >
              Maëlle
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
