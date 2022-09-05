import React, {useEffect, useState} from "react";

export default function RegisterForm() {
    const [registered, setRegistered] = useState<boolean>(false);

    const onSubmit = (data: any) => {
        console.log(data);
        setRegistered(true);
    }

    if (registered) return <>Registered!</>

    return (
        <>
            <h3>RegisterForm</h3>
            <form>

            </form>
        </>
    );
}