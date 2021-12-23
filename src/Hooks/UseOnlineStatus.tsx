import React, { useEffect, useState } from "react";

export const useStatus = (userId: number) => {
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        fetch("https://yesno.wtf/api")
        .then(res=>res.json())
        .then(r=>{
            if(r.answer === "yes"){
                setIsOnline(true);
            }
        })
        .catch(console.error);

    }, []);
    return isOnline;
}