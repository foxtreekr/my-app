// '/' 경로를 가지는 페이지
import Link from "next/link"

const Child = () => {
    return <a>Move to '/tomato'</a>;
};

const App = () =>{
    return(
        <div>
            <h2> Link to 'tomato' Page </h2>
            <Link href="/tomato">
                <Child />
            </Link> 
        </div>
    );
};  

export default App;