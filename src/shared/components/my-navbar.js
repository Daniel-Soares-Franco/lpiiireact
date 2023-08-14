 export default function MyNavbar(props){
    return (
        <nav>
            <ul><li><img width={'100px'} src={props.logo} alt="test" /></li>
                <li>Home</li>
                <li>About</li>
                
            </ul>
        </nav>
    )
 }