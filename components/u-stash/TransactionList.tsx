import { mockTransactions } from '@/utils/constants'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import { Button } from '../ui/button'
import { Icons } from '@/utils/Icons'
import { DialogContent, DialogTrigger ,Dialog, DialogClose} from '../ui/dialog'
import CloseButton from '../utils/CloseButton'
import TransactionDetail from './TransactionDetail'



export default function TransactionList() {
    return (
    <div className='full-shadow px-2 mt-12 mb-5 rounded-md overflow-hidden'>
        <div className="flex-center justify-between py-4 mb-2 px-2">
            <span className='text-main font-medium sm:text-lg'>Transactions</span>
            <Button className='px-3 flex-center bg-accent sm:px-5' variant={"ghost"} >
                <span>Filter</span>
                <Icons.filter className = "ml-1 text-xl text-main"/>
            </Button>
        </div>
        <Table>
            <TableHeader className='bg-page py-1'>
                <TableRow>
                    <TableHead>S/N</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className='max-sm:hidden'>Amount</TableHead>
                    <TableHead className='max-sm:hidden'>Status</TableHead>
                    <TableHead className=''></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mockTransactions.map((item,key)=>(
                    <TableRow className='border-b border-b-blue-500/20 py-1 hover:bg-page' key={key}>
                        <TableCell className='w-fit'>
                            <span className="text-shade relative top-4 font-medium">{key+1}</span>
                            <div className="h-8 w-[2px]"></div>
                        </TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell className='max-sm:hidden'>{item.category}</TableCell>
                        <TableCell>{item.Amount}</TableCell>
                        <TableCell  className={`${item.status === "Success"?"text-green-500":"text-red-500"} max-sm:hidden`}>
                            <span>{item.status}</span>
                        </TableCell>
                        <TableCell >
                            <Dialog>
                                <DialogTrigger asChild className='px-2 mt-1'>
                                    <Button variant={"ghost"} className='bg-acccent px-1 hover:bg-white text-shade'>View</Button>
                                </DialogTrigger>
                                <DialogContent className='px-0  min-h-[90vh] max-h-[96vh] overflow-auto default-scroll'>
                                    <div className="flex-center pt-2 px-2">
                                        <DialogClose>
                                            <div>
                                                <CloseButton/>
                                            </div>
                                        </DialogClose>
                                    </div>
                                    <TransactionDetail {...item}/>
                                </DialogContent>
                            </Dialog>
                            
                        </TableCell>
                    </TableRow>
                    
                ))}
            </TableBody>
        </Table>
    </div>

  )
}
