import classes from './Bodyforsellingpage.module.css';
import { useContext, useState } from 'react';
import { UserIdContext } from '../../contexts/UserIdContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Bodyforsellingpage = () => {

    const { userId } = useContext(UserIdContext);

    const navigate = useNavigate();

    // const validate = values => {
    //     const errors = {};
    //     if(!values.category){
    //         errors.category = 'Category is required';
    //     }
    // }

    const initialValues = {
        category: "",       // name attribute from input fields
        pro_name: "",
        price: 0,
        dateOfBuying: "",
        description: "",
        hostel: "Siang Hostel",
        negotiable: false,
        sellerId: userId
    }

    const [values, setValues] = useState(initialValues);
    const [pro_image, setPro_image] = useState(null);

    const onChangehandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(values);

        if (pro_image) {
            const data = new FormData();
            const filename = Date.now() + pro_image.name;
            data.append("name", filename);
            data.append("file", pro_image);
            values.photo = filename;
            try {
                await axios.post('https://tame-blue-deer-tie.cyclic.cloud/ad-api/upload', data);
            } catch (err) {
                console.log("error in uploading file");
            }
        }
        try {
            const res = await axios.post('https://tame-blue-deer-tie.cyclic.cloud/ad-api/postAd', values);
        } catch (err) {
            console.log("error uploading text inputs");
        };

        alert("Ad posted!!");

        navigate("/profile-page");
    }

    function Handlereset() {
        if (window.confirm("Are you sure you want to Reset?")) {
            setValues(initialValues);
        }
    };

    return (
        <div className={classes.main}>
            <p className={classes.title}>
                Post Your Ad
            </p>
            <div>
                <form className={classes.form} encType='multipart/form-data' onSubmit={submitHandler}>
                    <div className={classes.category}>
                        <label htmlFor='Category'>Choose Category : </label>
                        <input
                            className={classes.input}
                            list='categories'
                            id='Category'
                            name='category'
                            required
                            onChange={onChangehandler} 
                            value={values.category} />
                        <datalist id='categories'>
                            <option value="Mobiles">Mobile Phones</option>
                            <option value="Laptops">Laptops of all type</option>
                            <option value="Cycles">Cycles of all type</option>
                            <option value="Books">Books across all academic year</option>
                            <option value="Mattresses">Mattresses</option>
                            <option value="Others">Others(please specify)</option>
                        </datalist>
                    </div>
                    <div className={classes.pro_name}>
                        <label htmlFor='Name'>Product Name : </label>
                        <input
                            className={classes.input}
                            type='text'
                            name='pro_name'
                            id='Name'
                            required
                            onChange={onChangehandler}
                            value={values.pro_name} />
                    </div>
                    <div className={classes.price}>
                        <label htmlFor='Price'>Price : </label>
                        <input
                            className={classes.input}
                            type='number'
                            id='Price'
                            name='price'
                            required
                            min='1'
                            onChange={onChangehandler}
                            value={values.price} />
                    </div>
                    <div className={classes.date}>
                        <label htmlFor='Date'>Purchase Date : </label>
                        <input
                            className={classes.input}
                            type='date'
                            id='Date'
                            name='dateOfBuying'
                            required
                            onChange={onChangehandler}
                            value={values.dateOfBuying} />
                    </div>
                    <div className={classes.upload}>
                        <label htmlFor='myfile'>Upload Photo : </label>
                        <input
                            className={classes.input}
                            type='file'
                            id='myfile'
                            name='pro_image'
                            onChange={(e) => setPro_image(e.target.files[0])}
                            required
                        />
                    </div>
                    <div className={classes.hostel}>
                        <label htmlFor='hostel'>Select your hostel : </label>
                        <select
                            className={classes.input}
                            id='hostel'
                            name='hostel'
                            onChange={onChangehandler}
                            value={values.hostel}>
                            <option value="Siang Hostel">Siang Hostel</option>
                            <option value="Brahmaputra Hostel">Brahmaputra Hostel</option>
                            <option value="Lohit Hostel">Lohit Hostel</option>
                            <option value="Disang Hostel">Disang Hostel</option>
                            <option value="Kapili Hostel">Kapili Hostel</option>
                            <option value="Kameng Hostel">Kameng Hostel</option>
                            <option value="Umiam Hostel">Umiam Hostel</option>
                            <option value="Barak Hostel">Barak Hostel</option>
                            <option value="Dihing Hostel">Dihing Hostel</option>
                            <option value="Dhansiri Hostel">Dhansiri Hostel</option>
                            <option value="Subhansiri Hostel">Subhansiri Hostel</option>
                            <option value="Disang(Girl's wing) Hostel">Disang(Girl's wing) Hostel</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='description'></label>
                        <textarea
                            placeholder='Briefly describe your product...'
                            required id='description'
                            name='description'
                            onChange={onChangehandler}
                            value={values.description}></textarea>
                    </div>
                    <div className={classes.nego}>
                        <input
                            className={classes.input}
                            type='checkbox'
                            id='Negotiation'
                            name='negotiable'
                            onChange={onChangehandler}
                            value={values.negotiable} />
                        <label htmlFor='Negotiation'> Negotiable</label>
                    </div>
                    <div className={classes.buttons}>
                        <button className={classes.reset} type='reset' id="resetbtn" onClick={Handlereset}>Reset</button>
                        <button className={classes.submit} type='submit' onClick={submitHandler}>PostAd</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Bodyforsellingpage;
