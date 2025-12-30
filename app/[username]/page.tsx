import Link from "next/link";
import Image from "@/components/Image";
import Feed from "@/components/feed";

const UsePage=()=>{
    return(
        <div className={''}>
            {/*profile title*/}
            <div className={'flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/20'}>
                <Link href={'/'}>
                    <Image path={'icons/back.svg'} alt={'back'} w={24} h={24}/>
                </Link>
                <h1 className={'font-bold text-lg'}> masoumeh reazei</h1>
            </div>
            {/*info*/}
            <div className={''}>
                {/*cover and avatar container*/}
                <div className={'relative w-full'}>
                    {/*cover*/}
                    <div className={'w-full relative aspect-[3/1]'}>
                        <Image path={'general/bg-post.jpg'} alt={'post'} w={600} h={200} tr={true}/>
                    </div>
                    {/*avatar*/}
                    <div className={'w-1/6 aspect-square  rounded-full overflow-hidden border-5  border-black absolute left-4 -translate-y-1/2'}>
                        <Image path={'general/avatar.jpg'} alt={'post'} w={100} h={100} tr={true}/>
                    </div>
                </div>
                <div className={'flex w-full justify-end items-center gap-2 p-2'}>
                    <div className={'w-9 h-9 flex items-center  rounded-full justify-center border-[1px] border-gray-500 cursor-pointer'}>
                        <Image path={'icons/more.svg'} alt={'more'} w={20} h={20}/>
                    </div>
                    <div className={'w-9 h-9 flex items-center rounded-full justify-center border-[1px] border-gray-500 cursor-pointer'}>
                        <Image path={'icons/explore.svg'} alt={'more'} w={20} h={20}/>
                    </div>
                    <div className={'w-9 h-9 flex items-center rounded-full justify-center border-[1px] border-gray-500 cursor-pointer'}>
                        <Image path={'icons/message.svg'} alt={'more'} w={20} h={20}/>
                    </div>
                    <button className={'py-2 px-4 bg-white text-black font-bold rounded-full'}>Follow</button>
                </div>
                {/*user details*/}
                <div className="p-4 flex flex-col gap-2">
                    {/* USERNAME & HANDLE */}
                    <div className="">
                        <h1 className="text-2xl font-bold">Lama Dev</h1>
                        <span className="text-textGray text-sm">@lamaWebDev</span>
                    </div>
                    <p>Lama Dev Youtube Channel</p>
                    {/* JOB & LOCATION & DATE */}
                    <div className="flex gap-4 text-textGray text-[15px]">
                        <div className="flex items-center gap-2">
                            <Image
                                path="icons/userLocation.svg"
                                alt="location"
                                w={20}
                                h={20}
                            />
                            <span>USA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image path="icons/date.svg" alt="date" w={20} h={20} />
                            <span>Joined May 2021</span>
                        </div>
                    </div>
                    {/* FOLLOWINGS & FOLLOWERS */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">100</span>
                            <span className="text-textGray text-[15px]">Followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">100</span>
                            <span className="text-textGray text-[15px]">Followings</span>
                        </div>
                    </div>
            </div>
            </div>
            <Feed/>


        </div>
    )
}
export default UsePage