'use client'
import { useEffect } from "react"
import { signOut } from "next-auth/react"
//window events that terminates the setTime out
const events = ["load","mousemove","mousedown","click","scroll","keypress"]

export default function AutoLogOut() {
    let timer:NodeJS.Timeout
    const logOutTimer = 10000
    // const logOutTimer = 180000
    const handleLogoutTimer = ()=>{
        if(!window){return}
          timer = setTimeout(() => {
         // clears any pending timer.
         resetTimer();
         // Listener clean up. Removes the existing event listener from the window
         Object.values(events).forEach((item) => {
           window.removeEventListener(item, resetTimer);
         });
         // logs out user
         logoutAction();
    },logOutTimer); 
    }

    //remove timer if it exists
    const resetTimer = () => {
        if (timer) clearTimeout(timer);
    };
    
    const logoutAction = () => {
        console.log("logout Triggered")
        signOut({callbackUrl:"/user/signin"})
    };

    useEffect(() => {
        Object.values(events).forEach((item) => {
            window.addEventListener(item, () => {
                resetTimer();
                handleLogoutTimer();
                });
            });
        
        return ()=>{
            Object.values(events).forEach((item) => {
                window.removeEventListener(item, resetTimer);
            });
        }
    },[]);

    return null
}
