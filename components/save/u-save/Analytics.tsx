'use client'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js';
import { Line } from 'react-chartjs-2'
import { ChartOptions } from 'chart.js';
import { chartoptions, mockPortfolios } from '@/utils/constants';
import PortFolioList from './PortFolioList';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


export default function Analytics(){
    const labels = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const data ={
        labels,
        datasets:[{
            label:"Interests" ,   
            data:[30,25,40,20,31,60,70],
            lineTension: 0.4,
            borderColor:"#23C4E8",
            backgroundColor:"#E5F7FB"
        }]
    }

    return(
        <div className='pb-10'>
            <div className='w-full h-[300px] sm:h-[400px]'>
                <Line options={chartoptions} data={data}/>
            </div>
            {/* {mockPortfolios.map((item,key)=>(
                <PortFolioList key={key} {...item}/>
            ))} */}
        </div>

    )
    
}
