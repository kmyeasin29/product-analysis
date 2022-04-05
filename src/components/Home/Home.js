import React from 'react';
import './Home.css'
import useLoad from '../Hooks/useLoad';
import ReviewsDetails from '../Review/ReviewDetails';
import { Link } from 'react-router-dom';

const Home = () => {
    const [review, setReview] = useLoad()
    console.log(review);

    const loadProduct = review.slice(0, 3);
    return (
        <div className='header-container'>
            <div className="text-container">
                <h1>Most Popular laptop</h1>
                <p>
                    HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graphics 620.Another way to locate the model of your HP laptop is by using the System Information screen. Press "FN-Esc" to open the HP System Information window. A lot of information will be displayed within this window, but all you'll need to look for is the "Product Number" heading
                </p>
            </div>
            <div className="header-image">
                <img width={700} height={350} src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/img-0224/X-Pro-2022.png" alt="" />
            </div>
            <div>
                <h1>Customers Reviews</h1>
                {
                    loadProduct.map(item => <ReviewsDetails key={review.id} item={item}></ReviewsDetails>)
                }
                <Link to='/review'>
                    <button>See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;