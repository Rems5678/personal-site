import { Divider } from '@/components/atoms/Divider';
import { Image } from '@/components/atoms/Image';
import { Link } from '@/components/atoms/Link';
import { Typography } from '@/components/atoms/Typography';
import { WorkHistoryItem } from '@/components/features/WorkHistoryItem';
import { TECHNOLOGIES, WEBSITES, WORK_HISTORY_ITEMS } from './constants';
import { Fragment } from 'react';

export default function Home() {
  return (
    <main className="flex flex-col w-full z-10">
      <div className="flex w-full py-3 px-[200px] gap-x-16 bg-navbar-gradient absolute z-10 top-0 left-0">
        <Link href="#work-history" color="dark">
          Work History
        </Link>
        <Link href="#skills" color="dark">
          Skills
        </Link>
        <Link href="#contact" color="dark">
          Contact
        </Link>
      </div>
      <section className="flex justify-center relative min-h-[333px]">
        <div className="absolute top-0 left-0 w-full -z-30">
          <div className="relative bg-hero-gradient w-full h-[333px] z-10"></div>
          <div className="absolute top-0 right-0 w-[761px] h-[333px]">
            <Image
              src="/assets/background-pattern.webp"
              alt="background-image"
              ratio={761 / 333}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 max-w-[506px] my-[80px] relative">
          <div className="flex flex-col gap-y-2">
            <Typography variant="header2" color="light">
              Devon Vaccarino
            </Typography>
            <Typography variant="caption" color="light">
              Senior Frontend Developer
            </Typography>
          </div>
          <Typography color="light">
            I&apos;m a React/Next.js specialist who enjoys writing clean
            maintainable code with a special knack for balancing maintainability
            with velocity. I build websites, web apps, and design systems from
            the ground up.
          </Typography>
          <Typography color="light">Have an idea? Get in touch!</Typography>
          {/* TODO: create a CTA button */}
        </div>
      </section>
      <section
        className="flex flex-col items-center w-full my-20"
        id="work-history"
      >
        <div className="flex flex-col gap-y-4 max-w-[500px] w-full items-center">
          <Typography variant="header2">Work History</Typography>
          <div className="flex flex-col w-full px-8 py-4 items-center gap-y-8">
            {WORK_HISTORY_ITEMS.map((workHistoryItemProps, index) => {
              const isLastItem = index === WORK_HISTORY_ITEMS.length - 1;

              return (
                <Fragment key={index}>
                  <WorkHistoryItem {...workHistoryItemProps} />
                  {!isLastItem && <Divider className="max-w-[380px] w-full" />}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="relative flex justify-center p-6 w-full gap-4 overflow-hidden"
        id="skills"
      >
        <div className="absolute top-[130px] -left-[100px] -z-10 w-[120vw] h-[250px] rotate-[-20deg] bg-primary"></div>
        <div className="flex flex-col items-center gap-y-3 rounded-md w-full max-w-[520px] py-6 px-4 bg-white">
          <Typography variant="header2">Technologies</Typography>
          <div>
            <ul className="grid grid-cols-3 h-full gap-4">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech}>
                  <Typography variant="header4">{tech}</Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3 rounded-md w-full max-w-[520px] py-6 px-4 gap-4 bg-white">
          <Typography variant="header2">Websites</Typography>
          <div>
            <ul className="flex flex-col h-full gap-4">
              {WEBSITES.map((website) => (
                <li key={website}>
                  <Link color="light" href={website}>
                    {website}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="relative flex justify-center" id="contact">
        <div className="absolute top-0 left-0 w-full -z-30">
          <div className="relative bg-contact-section-gradient w-full h-[333px] z-10" />
          <div className="absolute top-0 left-0 w-[761px] h-[333px]">
            <Image
              src="/assets/background-pattern.webp"
              alt="background-image"
              ratio={761 / 333}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-5 max-w-[506px] my-[80px]">
          <Typography variant="header2" color="light">
            Contact
          </Typography>
          <Typography color="light" variant="header3">
            devonev92@gmail.com
          </Typography>
          <div className="flex gap-x-3">
            <Link
              href="https://www.linkedin.com/in/devon-vaccarino/"
              target="_blank"
              color="dark"
            >
              Linkedin
            </Link>
            <Divider orientation="vertical" color="white" />
            <Link
              href="https://github.com/Rems5678"
              target="_blank"
              color="dark"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
