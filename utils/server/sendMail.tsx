import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: "gmail", 
    host: "smtp.gmail.com",
    port:587,
    secure: false,
    auth:{
        user:"johnwellaca@gmail.com",
        pass:process.env.TEST_EMAILKEY
    }
})

export const mailSender = async ({to,body,subject}:{to:string,body:string,subject:string})=>{

    try{
        const mailsender = await transporter.sendMail({
            from:process.env.TEST_EMAIL,
            to:[to],
            subject,
            html:`<h1>${body}</h1>`
        })
        console.log(mailsender.messageId,"mail sent")
    }
    catch(err){
        console.log(err)
    }
}
