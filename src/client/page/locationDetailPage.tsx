import { Rating } from "../component/rating";
import { RatingValue } from "../../type";

type LocationDetailPageProps = {
  name: string;
  formattedPhoneNumber: string;
  rating: RatingValue;
  reviews: any[];
};

const LocationDetailPage = ({
  formattedPhoneNumber,
  name,
  rating,
  reviews,
}: LocationDetailPageProps) => {
  return (
    <>
      <h3>Location Details</h3>
      <div className="mb-3">
        <b>{name}</b>
        <div>{formattedPhoneNumber}</div>
        <Rating rating={rating} doShowText />
      </div>
      {reviews && reviews.length ? (
        reviews.map((review: any, index: number) => {
          const key = `reviews-review-${index}`;
          const { author_name: authorName, rating, text } = review;
          return (
            <div className="mb-4 pt-3 border-top" key={key}>
              <div className="mb-3">{text}</div>
              <div className="d-flex justify-content-between">
                <b>- {authorName}</b>
                <Rating rating={rating} />
              </div>
            </div>
          );
        })
      ) : (
        <i>No Reviews</i>
      )}
    </>
  );
};

export { LocationDetailPage };
