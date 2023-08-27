import classes from './Filters.module.css';

const Filters = ({ setFilter, filter }) => {

    const handleChange = e => {
        setFilter({ ...filter, sort: e.target.value });
        console.log(filter.sort);
        console.log(e.target.value);
    }

    const handleminPriceChange = e => {
        setFilter({ ...filter, min_price: e.target.value })
    }
    const handlemaxPriceChange = e => {
        setFilter({ ...filter, max_price: e.target.value })
    }

    return (
        <span className={classes.dropdown}>
            <button className={classes.dropbtn}>
                <span>Filters</span>
                <img src='https://www.svgrepo.com/show/61952/filter-filled-tool-symbol.svg' width={20} height={20} />
            </button>
            <div className={classes.dropdowncontent} >
                <ul>
                    <li className={classes.li1}>
                        <form className={classes.form1}>
                            <span className={classes.criteria}>
                                Sort items by price :
                            </span>
                            <div>
                                <input type='radio' value='inc' id='increasing' name='sort' onClick={handleChange} />
                                <label htmlFor='increasing'>Increasing</label>
                            </div>
                            <div>
                                <input type='radio' value='dec' id='increasing' name='sort' onClick={handleChange} />
                                <label htmlFor='decreasing'>Decreasing</label>
                            </div>
                            <div>
                                <input type='radio' value='clear' id='clear' name='sort' onClick={handleChange} />
                                <label htmlFor='clear'>Clear</label>
                            </div>
                        </form>
                    </li>
                    <li className={classes.li2}>
                        <label className={classes.form2}>
                            <span className={classes.criteria}>
                                Enter the price range:
                            </span>
                            <span>
                                <input type='number' min='1' value={filter.min_price} onChange={handleminPriceChange} />
                            </span>
                            <div>
                                To
                            </div>

                            <span>
                                <input type='number' value={filter.max_price} onChange={handlemaxPriceChange} />
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
        </span>
    );
}

export default Filters;