import { Divider } from '@/components/atoms/Divider';
import { Image } from '@/components/atoms/Image';
import { Link } from '@/components/atoms/Link';
import { Typography } from '@/components/atoms/Typography';
import { WorkHistoryItem } from '@/components/features/WorkHistoryItem';
import { Fragment } from 'react';
import { TECHNOLOGIES, WORK_HISTORY_ITEMS } from './constants';
import { getWebsitePreviews } from './utils';

export default function Home() {
  return (
    <main className="flex flex-col w-full z-10">
      <div className="flex w-full py-3 px-8 md:bg-navbar-gradient md:bg-transparent bg-black md:absolute z-10 top-0 left-0 flex-wrap">
        <nav className="flex w-full max-w-[768px] md:gap-x-16 gap-x-4 gap-y-2">
          <Link href="#work-history" color="dark">
            Work History
          </Link>
          <Link href="#skills" color="dark">
            Skills
          </Link>
          <Link href="#contact" color="dark">
            Contact
          </Link>
        </nav>
      </div>
      <section className="flex justify-center relative min-h-[333px]">
        <div className="absolute top-[80px] left-[80px] z-10 w-[78px] h-[131px] lg:block hidden">
          <Image
            src="/assets/red_boxes_1.svg"
            alt="red boxes"
            ratio={78 / 131}
          />
        </div>
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
        <div className="flex flex-col sm:gap-y-5 gap-y-2 max-w-[506px] md:my-[80px] py-4 px-8 relative">
          <div className="flex flex-col gap-y-2">
            <Typography variant="header1" color="light">
              Devon Vaccarino
            </Typography>
            <Typography variant="caption" color="buttonDark">
              Senior Frontend Developer
            </Typography>
          </div>
          <Typography color="light">
            A React/Next.js specialist who enjoys writing clean maintainable
            code with a special knack for balancing maintainability with
            velocity. I build websites, web apps, and design systems from the
            ground up.
          </Typography>
          <Link href="#contact" color="dark">
            Hiring? Get in touch!
          </Link>
        </div>
      </section>
      <section
        className="relative flex flex-col items-center w-full my-20"
        id="work-history"
      >
        <div className="absolute top-[295px] right-[251px] z-10 w-[80px] h-[165px] lg:block hidden">
          <Image
            src="/assets/red_boxes_3.svg"
            alt="red boxes"
            ratio={80 / 165}
          />
        </div>
        <div className="absolute bottom-[230px] left-[268px] z-10 w-[138px] h-[128px] lg:block hidden">
          <Image
            src="/assets/red_boxes_2.svg"
            alt="red boxes"
            ratio={138 / 128}
          />
        </div>
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
        className="relative flex md:flex-row flex-col justify-center p-6 w-full gap-4 overflow-hidden"
        id="skills"
      >
        <div className="md:hidden block absolute top-0 md:-left-[100px] left-0 -z-10 w-[120vw] h-[250px] bg-primary"></div>
        <div className="absolute md:top-[130px] top-30% md:-left-[100px] left-0 -z-10 w-[120vw] h-[250px] md:rotate-[-20deg] bg-primary"></div>
        <div className="flex flex-col items-center gap-y-3 rounded-md w-full max-w-[520px] py-6 px-4 bg-white">
          <Typography variant="header2">Technologies</Typography>
          <div>
            <ul className="grid grid-cols-3 h-full gap-4">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech} className="overflow-hidden text-ellipsis">
                  <Typography variant="header4">{tech}</Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3 rounded-md w-full max-w-[520px] py-6 px-4 gap-4 bg-white">
          <Typography variant="header2">Websites</Typography>
          <ul className="flex flex-col h-full gap-4 w-full">
            {getWebsitePreviews()}
          </ul>
        </div>
      </section>
      <section className="relative flex justify-center" id="contact">
        <div className="absolute top-[36px] right-[166px] z-10 w-[138px] h-[128px] lg:block hidden">
          <Image
            src="/assets/red_boxes_2.svg"
            alt="red boxes"
            ratio={138 / 128}
          />
        </div>
        <div className="absolute top-0 left-0 w-full -z-30 max-h-[333px] h-full">
          <div className="relative md:bg-contact-section-gradient bg-contact-section-gradient-mobile w-full md:h-[333px] h-full z-10" />
          <div className="absolute top-0 left-0 max-w-[761px] w-full md:h-[333px] h-full">
            <Image
              src="/assets/background-pattern.webp"
              alt="background-image"
              sizes="(max-width: 375) 100vw"
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
