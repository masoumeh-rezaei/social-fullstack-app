'use client'

import Feed from "@/components/feed";
import Share from "@/components/Share";
import Link from "next/link";


export default function Home() {
  return (
    <div >
        <div className={'px-4 pt-4 flex justify-between text-textGray border-b-[1px] border-borderGray'}>
            <Link href={'/'} className={'pb-3 flex items-center border-b-4 border-iconBlue '}>for you</Link>
            <Link href={'/'} className={'pb-3 flex items-center'}>Following</Link>
            <Link href={'/'} className={'hidden pb-3 md:flex items-center'}>ReactJs</Link>
            <Link href={'/'} className={'hidden pb-3 md:flex items-center'}>Javascript</Link>
        </div>
        <Share/>
       <Feed/>
    </div>
  );
}
