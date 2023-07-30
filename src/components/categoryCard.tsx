'use client';
import Link from "next/link";
import Image from 'next/image'

const CategoryCard = (props:any) => {
  return (
    <Link href={props.url} target="_blank">
        <div className="card-zoom w-full p-5">
            <div className='absolute h-full w-full bg-black z-10 opacity-40 hover:opacity-0 transition-all duration-1000'></div>
            <div className={`card-zoom-image`} style={{backgroundImage:`url('${props.image}')`}}></div>
            <h1 className="card-zoom-text">{props.title}</h1>
        </div>
    </Link>
  );
};
export default CategoryCard;