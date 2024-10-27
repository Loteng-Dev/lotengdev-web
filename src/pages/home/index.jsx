import TelegramIcon from '@/assets/icons/telegram.svg';
import GithubIcon from '@/assets/icons/github.svg'

export function HomePage() {
    return (
        <div className="flex justify-center items-center h-[80vh]" id="home">
            <div className="lg:flex justify-center p-[32px]">
                <img src="./images/rafiki.png" className="lg:w-[30%] lg:h-[30%]" />
                <div className="lg:w-[50%] lg:mt-0 mt-[25px]">
                    <div className="lg:mb-[16px] mb-[14px]">
                        <span className="lg:text-[60px] text-[28px] font-extrabold lg:leading-[62px] leading-[40px]">Beriuk Berajah dan
                            Berkembang</span>
                    </div>
                    <div className="mb-[32px]">
                        <span className="lg:text-[20px] text-[12px] text-[#5C5C5C]">Komunitas programmer di Lombok Tengah yang membahas
                            hal seputar IT,
                            Programming, dan masih banyak lagi. </span>
                    </div>
                    <div className="flex">
                        <button className="flex items-center bg-blue-600 px-4 py-3 mr-4 rounded text-white text-[12px]">
                            <img className="inline mr-3 lg:w-auto lg:h-auto h-[12px] w-[12px]" src={TelegramIcon} />Join Group
                        </button>
                        <button className="flex items-center bg-neutral-100 border border-solid border-grey px-4 py-2 rounded">
                            <img className="inline mr-3 lg:w-auto lg:h-auto h-[12px] w-[12px]" src={GithubIcon} />Contribute
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}