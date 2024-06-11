import React from 'react'
import { useStateValue } from '../contextAPI/GlobelState'

export default function Home() {
    const [{ users, place }, dispatch] = useStateValue();
    // console.log(users,place);
    const Usercard = ({ data }) => {
        return (<div style={{ padding: '10px', margin: '10px', backgroundColor: '#fafafa' }}>
            <h3>Name:{data.name}</h3>
            <p>Age:{data.age}</p>
        </div>)
    }
    const adduserTo = () => {
        dispatch({ type: 'add', data: { name: 'Sonu', age: 12 } })
    }
    return (
        <div>Home
            <br />
            <button onClick={adduserTo}>Add user</button>
            {users.map((itm, i) => (
                <Usercard data={itm} key={i} />
            ))}
        </div>
    )
}
