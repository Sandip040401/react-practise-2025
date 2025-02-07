

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


export const PractiseMap = () => {
    const users = [
        {id:1, name: "sandip", age: 23},
        {id:2, name: "ankita", age: 24},
    ]

    const products = [
        {id:1, name: "phone", price: 20000},
        {id:2, name: "laptop", price: 98550},
    ]
    return <div style={{display:"flex"}}>
        <div>
            <h4>users</h4>
            {users.map( user => (
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                </ul>
            ))}
        </div>
        <div>
            <h4>products</h4>
            {products.map( product => (
                <ul key={product.id}>
                    <li>{product.name}</li>
                    <li>{product.price}</li>
                </ul>
            ))}
        </div>
    </div>
}