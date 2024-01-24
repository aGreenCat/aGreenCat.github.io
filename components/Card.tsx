import Image from 'next/image';
import { Title } from './Title';
import { Description } from './Description';
import { Button } from './Button';
import { Date } from './Date';

interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    month: number;
    year: number;
}

const Card = ({title, description, image, link, month, year} : CardProps) => {
    return (
        <div className="flex flex-row bg-slate-50 bg-opacity-5 p-[35px] lg:p-[55px] rounded-2xl flex-wrap justify-between gap-4 lg:gap-0 mb-10">
            <Image src={image} alt="grey placeholder" width={200} height={150} className="rounded-xl"></Image>
            <div className="flex flex-col justify-between w-[250px] gap-3 lg:gap-0">
                <Title text={title}/>
                <Description text={description}/>
                <div className="flex flex-row gap-2 items-end justify-between">
                    <Button text="view" link={link}/>
                    <Date month={month} year={year}/>
                </div>
            </div>
        </div>
    );
}

export default Card;