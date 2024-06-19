import React from 'react'
import { useStateValue } from '../contextAPI/GlobelState'
import Button from '../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
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
        <Wrapper>
            <h2 className='head-2'>Home</h2>
            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laborum minima reiciendis quidem iusto quod magnam quas vitae. Ut porro repudiandae eligendi suscipit non similique numquam consequuntur est perspiciatis repellendus?</Para>
            <h3>My h3</h3>
            <MyLink to="/products">products</MyLink>
            {/* <button onClick={adduserTo}>Add user</button><br/> */}
            {/* isInfo */}
            <Button name="Add user" type="success" onClick={adduserTo} /><br />
            <MyButton name="MyButton" type="success" />
            {users.map((itm, i) => (
                <Usercard data={itm} key={i} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-size: 14px;
        .head-2{
            color: red;
        }
        .head-2:hover{
            color: blue;
        }
        h3{
            color:blue
        }
    `;
const Para = styled.p`
        font-size: 20px;
    `
const MyLink = styled(Link)`
        text-decoration: none;
        color: green;
        text-transform:uppercase;
    `
const MyButton = styled(Button)`
    text-decoration: none;
    color: green;
    text-transform:uppercase;
`
// `;
// const Button = styled.button({
//      backgroundColor:'red'
// });