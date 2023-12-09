import { Icons } from "./Icons";

export const navItems =[
    {
        text:"How it works",
        link:"/info"
    },
    {
        text:"About us",
        link:"/About"
    },
    {
        text:"Careers",
        link:"/careers"
    }
]

export const headerLinks = [
    'U-Save',
    'U-Bucks',
    'U-Vest',
    'U-Bugga',
    'Agriculture',
    'Real Estate',
    'E-Commerce',
    'Transportation'
  ];
  
export const Typography={
    hero:"Utilize Your Money Into Wealth",
    heroContent:"Invest in start ups is a great way to get exposure to new and innovative business, Our online platorm makes it easy to invest in startups and reap the reward",
    heroTag:"Talk about future growth",
    utilizeHeader:"Invest in start ups the smart way",
    utlizeContent:"Utilour unlocks the potentials of individuals and businesses to succeed by utilizing their incomes into wealth.",
    securityHeader:"Your GROWTH equals our SUCCES",
    securityContent:"At Utillour, we believe that everyone deserves the opportunity too achieve financial freedom. That is why we offer a variety of Investment products and services that are designed to help our customers grow their money over time" ,
    securityFooter:"More on our security measures",
    growthHeader:"Your GROWTH equals our SUCCESS",
    growthContent:"At Utillour, we believe that everyone deserves the opportunity too achieve financial freedom. That is why we offer a variety of Investment products and services that are designed to help our customers grow their money over time",
    unleashHeader:"Unleash your potential",
    unleashBase:"Say hello to organized digital solution that fits in your pocket"
}


export const sideBarMenu=[
    {
        text:"Home",
        url:"/home",
        icon:Icons.home,  
    },
    {
        text:"Save",
        url:"/save",
        icon:Icons.u_save,  
    },
    {
        text:"Invest",
        url:"/invest",
        icon:Icons.invest,  
    },
    // {
    //     text:"U-Bugga",
    //     url:"/u-bugga",
    //     icon:Icons.u_bugga,  
    // },
    // {
    //     text:"U-Vest",
    //     url:"/u-vest",
    //     icon:Icons.u_vest,  
    // },
    // {
    //     text:"U-Bucks",
    //     url:"/u-bucks",
    //     icon:Icons.u_bucks,  
    // },
    {
        text:"U-Stash",
        url:"/u-stash",
        icon:Icons.stash,  
    },
    // {
    //     text:"Transactions",
    //     url:"/transactions",
    //     icon:Icons.transactions,  
    // },
    {
        text:"Referrals",
        url:"/referrals",
        icon:Icons.gift,  
    },
    {
        text:"Support",
        url:"/support",
        icon:Icons.support,  
    },
    {
        text:"Settings",
        url:"/settings",
        icon:Icons.setting,  
    },
    {
        text:"Logout",
        url:"/logout",
        icon:Icons.signout,  
    },
   
]

export const chartoptions = {
    maintainAspectRatio: false,
    fill:'origin',
    responsive: true,
    plugins: {
      filler: {
        propagate: true
    },
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Last 7 days review',
      },
    },
    scales: {
    x: {
        grid: {
          display: false
        }
      },
    y: {
        // title:{
        //     display:true,
        //     text:"Amount Spent (₦)"
        // },
        min: 0
      }
    }
}



export const mockPortfolios=[
    {
        name:"Utilor UI Demo",
        depositedAt:"" ,
        maturedAt:"",
        firstWithdrawal:"",
        invested:"20,000",
        accumulated:"22,000",
        type:"for u"
    },
        {
        name:"Utilor UI Demo",
        depositedAt:"" ,
        maturedAt:"",
        firstWithdrawal:"",
        invested:"20,000",
        accumulated:"22,000",
        type:"for u"
    },
    {
        name:"Utilor UI Demo",
        depositedAt:"" ,
        maturedAt:"",
        firstWithdrawal:"",
        invested:"20,000",
        accumulated:"22,000",
        type:"for u"
    }
]


export const mockTransactions=[
    {
        date:"21/10/2023",
        category:"Transfer",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    },
    {
        date:"21/11/2023",
        category:"withdrawal",
        Amount:"₦4000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Failed",
        currency:"NGN",
        channel:"TUssd",
    },
    {
        date:"18/10/2023",
        category:"Deposit",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    },
    {
        date:"21/10/2023",
        category:"Interest",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    },
    {
        date:"21/10/2023",
        category:"Deposit",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Failed",
        currency:"NGN",
        channel:"Card",
    },
    {
        date:"21/10/2023",
        category:"Transfer",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    },
    {
        date:"21/10/2023",
        category:"transfer",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    },
]

export const oauthKey = '1087679368069-5ejfdtqodnd57e9d9se4vv36riqbaka2.apps.googleusercontent.com'