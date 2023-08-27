import classes from './Categories.module.css';

const Categories = (props) => {

    const ChangeHandler = (e) => {
        props.setCategory(e.target.value);
    }
    
    return (
            <span className={classes.dropdown}>
                <select onChange={ChangeHandler} id='categories' name='categories' className={classes.dropbtn}>
                    <option value="All" className={classes.categ}>All Categories</option>
                    <option value="Mobiles" className={classes.categ}>Mobiles</option>
                    <option value="Laptops" className={classes.categ}>Laptops</option>
                    <option value="Cycles" className={classes.categ}>Cycles</option>
                    <option value="Books" className={classes.categ}>Books</option>
                    <option value="Mattresses" className={classes.categ}>Mattresses</option>
                </select>
                
            </span>

    );
}
 
export default Categories;