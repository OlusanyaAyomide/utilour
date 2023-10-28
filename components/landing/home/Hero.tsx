import { Button } from '@/components/ui/button'
import { Icons } from '@/utils/Icons'
import { Typography } from '@/utils/constants'
import Image from 'next/image'


export default function Hero() {
  return (
    <div className='flex-center flex-wrap min-h-[80vh]'>
      <div className="w-full lg:w-6/12 lg:pr-2">
        <div className="bg-green-200 mb-6 max-lg:mx-auto rounded-2xl font-semibold text-xs py-[6px] px-6 text-shade w-fit">{Typography.heroTag}</div>
        <h1 className="text-3xl xs:text-4xl mb-4 my-4 sm:text-5xl md:text-5xl max-lg:text-center  font-semibold animate-fadeUp">{Typography.hero}
        </h1>
        <h1 className="text-shade mb-12 text-sm max-lg:text-center animate-fadeUpDelay">{Typography.heroContent}</h1>
        <Button className='group px-6 h-10 max-lg:mx-auto hover:pr-12 transiton-all duraton-300 rounded-2xl'>
          <span>Start invest now</span>

          <span className='transition-all ml-2 group-hover:translate-x-8 duration-200'>
            <Icons.arrowRight className = "text-white text-lg"/>
          </span>
        </Button>
      </div>
      <div className="lg:pl-2 w-full animate-custombounce lg:w-6/12 mt-8 xs:mt-12 lg:mt-0">
        <div className="max-w-[265px] animate-popinDelay xs:max-w-[300px] sm:max-w-[440px] mx-auto  relative h-[412px] z-20">
          <Image src={'/Happy.jpg'} alt='happy' fill className='object-contain relative z-20 rounded-2xl overflow-hidden sm:border-[4px] border-white'/>
          <div className="absolute z-10 h-[300px] -bottom-20 w-[120%] -left-[10%] bg-white/80 rounded-md "></div>
          <div className='absolute max-xs:top-24 animate-fadeUpDelay1 -left-4 sm:-left-10 top-16  w-[100px] sm:w-[150px] z-20 h-[50px]'>
          <Image src={'/util.png'} alt='utilze-funds' fill className='object-contain rounded-md'/>
        </div>
        <div className='absolute animate-fadeUpDelay2 -left-2 sm:-left-10 -bottom-10 sm:-bottom-20  w-[140px] sm:w-[200px] z-20 h-[300px]'>
          <Image src={'/usave.png'} alt='utilze-funds' fill className='object-contain rounded-md'/>
        </div>
        <div className='absolute animate-fadeUpDelay3 right-0 bottom-0 sm:right-2 sm:bottom-2 w-[100px] sm:w-[140px] z-20 h-[160px]'>
          <Image src={'/products.png'} alt='utilze-funds' fill className='object-contain rounded-md'/>
        </div>
        </div>

      </div>
    </div>
  )
}
