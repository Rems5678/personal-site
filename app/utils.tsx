import { Image } from '@/components/atoms/Image';
import { Typography } from '@/components/atoms/Typography';
import Link from 'next/link';
import { WEBSITES } from './constants';

export const getWebsitePreviews = () => {
  return WEBSITES.map(({ href, imgSrc, siteName, description }) => {
    return (
      <li
        key={siteName}
        className="flex w-full hover:shadow-lg p-2 rounded-md transition-shadow"
      >
        <Link href={href} className="gap-x-4" target="_blank">
          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-[156px] h-[87px] rounded-md">
              <Image
                src={imgSrc}
                ratio={156 / 87}
                alt={`image for ${siteName}`}
              />
            </div>
            <div className="flex-1 flex flex-col gap-y-2 ">
              <Typography variant="header4" color="buttonLight">
                {siteName}
              </Typography>
              <Typography variant="bodySmall">{description}</Typography>
            </div>
          </div>
        </Link>
      </li>
    );
  });
};
