import { List, StyledLink, MovieItem } from 'components/Home/Home.styled';
import Loader from 'components/Loader/Loader';

import { fetchPopularMovies } from '../services/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'components/Container/Container.styled';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    async function getPopularMovies() {
      try {
        setLoading(true);
        const { data } = await fetchPopularMovies();
        setData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPopularMovies();
  }, []);
  return (
    <Container>
      {loading && <Loader />}
      <List>
        {data.map(({ id, title }) => (
          <MovieItem key={id}>
            <StyledLink to={`movie/${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </MovieItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;
