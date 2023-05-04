import Link from 'next/link';
import { IFilterType } from '@/helpers/global.types';
import { soundScapeBold } from '@/assets/fonts/fonts';

type ICardProps = IFilterType;
const Card = ({ category, title, url, img }: ICardProps) => {
  return (
    <div className="card bottomToTop">
      <Link className={'card-link'} href={url}>
        <div className="card-header">
          <div className={'img-wrapper'}>
            <img src={img.src} alt={title} />
          </div>
        </div>
        <div className={`card-body `}>
          <h3 className={`${soundScapeBold.className}`}>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
