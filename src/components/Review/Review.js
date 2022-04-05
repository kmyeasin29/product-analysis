import useLoad from "../Hooks/useLoad";
import ReviewsDetails from "./ReviewDetails";

const Review = () => {
    const [review, setReview] = useLoad()
    return (

        <div className="review-content">
            <h2>User Review</h2>
            {review.map(item => <ReviewsDetails key={review.id} item={item}></ReviewsDetails>
            )}
        </div>
    );
};

export default Review;