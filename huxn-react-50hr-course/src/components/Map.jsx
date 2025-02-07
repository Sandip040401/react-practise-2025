

export const Map = () => {
    const userInfo = [
        {
            username: 'sandip',
            age: 23
        },        
        {
            username: 'ankita',
            age: 24
        }
]

    // return <div>
    //     {userInfo.map(user => (
    //         <ul key={Math.random()}>
    //            <li>{user.username}</li> 
    //            <li>{user.age}</li> 
    //         </ul>
    //     ))}
    // </div>

    // destructuring array in js
    return <div>
    {userInfo.map(({username,age}) => (
        <ul key={Math.random()}>
        <li>{username}</li> 
        <li>{age}</li> 
        </ul>
    ))}
    </div>
}