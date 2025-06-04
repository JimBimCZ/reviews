import reviews from './data/data.ts'
import {Card} from "./components/Card.tsx";
import {useState} from "react";


const App = () => {
    const [position, setPosition] = useState(0);

    const onPrevClick = () => {
         if (position > 0) {
             setPosition(position - 1);
         } else {
             setPosition(reviews.length - 1);
         }
    }

    const onNextClick = () => {
        if (position < (reviews.length - 1)) {
            setPosition(position + 1);
        } else {
            setPosition(0);
        }
    }

    const onSurpriseClick = () => {
        setPosition(Math.floor(Math.random() * (reviews.length)));
    }

    return (<main>
        <Card {...reviews[position]} />
        <div className='btn-container'>
            <div onClick={onPrevClick} className="btn">prev</div>
            <div onClick={onNextClick} className="btn">next</div>
        </div>
        <div className="btn-container"> <div onClick={onSurpriseClick} className="btn">Surprise me</div> </div>
    </main>)
};
export default App;
