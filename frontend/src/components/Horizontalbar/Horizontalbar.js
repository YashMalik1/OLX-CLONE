import Categories from './Categories';
import classes from './Categories.module.css';
import Filters from './Filters';

const Horizontalbar = (props) => {
    return (
        <div className={classes.supreme}>
            <Categories setCategory={props.setCategory} />
            <Filters setFilter={props.setFilter} filter={props.filter} />
        </div>
    );
}

export default Horizontalbar;