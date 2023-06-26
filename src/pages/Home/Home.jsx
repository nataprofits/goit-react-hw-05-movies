import { List, StyledLink, MovieItem, Title, StyledImg} from 'pages/Home/Home.styled';
import Loader from 'components/Loader/Loader';

import { fetchPopularMovies } from '../../services/api';
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
      <Title>Trending today</Title>
      <List>
        {data.map(({ id, title, poster_path }) => (
          <MovieItem key={id}>
            <StyledLink to={`movie/${id}`} state={{ from: location }}>
            <StyledImg
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://placehold.jp/300x450.png`
                }
                alt=""
                width="300"
              />
              {title}
            </StyledLink>
          </MovieItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;
