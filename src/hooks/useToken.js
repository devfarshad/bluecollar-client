import { useEffect } from "react";
import { useState } from "react"

const useToken = user => {
    console.log(user);
    const [token, setToken] = useState('');
    useEffect( () => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        console.log(name);
        const currentUser = {email, name};
        console.log(currentUser);
        if(email){
            fetch(`http://localhost:4000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    }, [user]);
    return [token];
}

export default useToken;