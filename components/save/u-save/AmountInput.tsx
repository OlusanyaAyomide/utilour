import { cn } from "@/lib/utils"
import CurencyFlag from "@/components/utils/CurencyFlag"
import { Input } from "@/components/ui/input"

interface IAmountInput extends  React.InputHTMLAttributes<HTMLInputElement>{
    isNaira:boolean
    showFlag?:boolean
    value:string
    onAmountChange:(content:string)=>void
    shwoRefrence?:boolean
}


export default function AmountInput({className,isNaira,showFlag=false,value,onAmountChange,shwoRefrence=false,...props}:IAmountInput) {
  return (
    <div className={cn("px-2 py-2 rounded-md mb-2 bg-[#F0F1F1] flex-center",className)}>
        {showFlag && <span className='text-base text-shade sm:text-xl font-medium mr-2'>
            {isNaira?"₦":"$"}
        </span>}
        <Input onChange={(e)=>{
            onAmountChange(e.target.value)}} value={value} className='px-0 bg-transparent border-none sm:text-base' {...props}/>
        {showFlag && <CurencyFlag currency={isNaira?"NG":"US"}/>}
      </div>
  )
}