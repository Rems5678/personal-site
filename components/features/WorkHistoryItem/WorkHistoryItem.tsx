import { FC, Fragment } from 'react';
import { WorkHistoryItemProps } from './types';
import { Typography } from '@/components/atoms/Typography';
import { Image } from '@/components/atoms/Image';

const WorkHistoryItem: FC<WorkHistoryItemProps> = ({
  className,
  yearStart,
  yearEnd,
  employer,
  employerImgSrc,
  employerImgAlt,
  positionTitle,
  description,
  skills,
}) => {
  const yearToRender =
    yearEnd === yearStart ? yearEnd : `${yearStart} - ${yearEnd}`;

  return (
    <div className={[className, 'flex flex-col w-full gap-y-4'].join(' ')}>
      <div className="flex justify-between gap-x-16 w-full items-center">
        <Typography>{yearToRender}</Typography>
        <div className="flex gap-x-4 items-center">
          <div className="w-[50px] h-[50px]">
            <Image src={employerImgSrc} alt={employerImgAlt} />
          </div>
          <div className="flex flex-col items-center">
            <Typography variant="header5">{employer}</Typography>
            <Typography variant="bodySmall">{positionTitle}</Typography>
          </div>
        </div>
      </div>
      <Typography>{description}</Typography>
      <div className="flex flex-wrap gap-x-3 items-center">
        {skills.map((skill, index) => {
          return (
            <Fragment key={skill}>
              {index !== 0 && <>&#8226;</>}
              <Typography variant="caption">{skill}</Typography>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default WorkHistoryItem;
