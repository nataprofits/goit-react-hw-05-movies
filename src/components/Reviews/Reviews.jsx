import Loader from 'components/Loader/Loader';
import { fetchReview } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const response = await fetchReview(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>😕 Sorry, there are no reviews for this movie yet.</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
