import logo from './logo.svg';
import './App.css';

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';

import jokesData from "./JokesData"
import productsData from "./vschoolProducts"
import Product from './components/Product';

function App() {
    const productComponents = productsData.map(product => 
            <Product key={product.id} name={product.name} price={product.price} description={product.description} />
        );

    return(
        <div>
            {productComponents}
        </div>
    )
    // const JokeComponents = jokesData.map(joke => 
    //     <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    // )

    // return(
    //     <div>
    //         {JokeComponents}
    //     </div>
    // )
}

export default App;
