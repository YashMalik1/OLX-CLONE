import Horizontalbar from "../components/Horizontalbar/Horizontalbar";
import Headerbar from "../components/Headerthingys/Headerbar";
import MainBodyPosts from '../components/Adposts/MainBodyPosts';
import { useState } from "react";

const HomePage = () => {
    const [category, setCategory] = useState('All');
    const [filter, setFilter] = useState({
        sort: 'clear',
        min_price: 0,
        max_price: Number.MAX_SAFE_INTEGER
    });
    // {
    //     sort: "inc/dec/clear",            // inc means increasing, dec decreasing, clear means sorted by date(fresh reccoss)
    //     min_price: 0,
    //     max_price: Number.POSITIVE_INFINITY
    // }
    return (
        <div>
            <header>
                <Headerbar />
            </header>
            <div>
                <Horizontalbar setCategory={setCategory} setFilter={setFilter} filter={filter} />
            </div>
            <MainBodyPosts category={category} filter={filter} />
        </div>
    );
}
 
export default HomePage;