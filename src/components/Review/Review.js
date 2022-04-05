import useLoad from "../Hooks/useLoad";
import ReviewsDetails from "./ReviewDetails";
import './Reviews.css'

const Review = () => {
    const [review, setReview] = useLoad()
    return (
        <div>
            <h2>User Review</h2>
            <div className="single-product">
                {review.map(item => <ReviewsDetails key={review.id} item={item}></ReviewsDetails>
                )}
            </div>
        </div>

    );
};

export default Review;