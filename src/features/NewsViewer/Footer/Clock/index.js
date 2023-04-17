import { useEffect, useState } from 'react';

export const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        },1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return(
        <div>
            Aktualna godzina: {currentTime}
        </div>
    );
};