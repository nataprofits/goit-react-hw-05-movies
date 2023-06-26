import { List, StyledLink, MovieItem, StyledImg } from 'pages/Home/Home.styled';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from 'pages/Movie/Movie.styled';
import { fetchAnyMovie } from '../../services/api';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Loader from 'components/Loader/Loader';
import { Container } from 'components/Container/Container.styled';

const Movie = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  console.log(name);
  useEffect(() => {
    if (!name) return;
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchAnyMovie(name);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [name]);
  const handlerOnSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (!form.elements.name.value.trim()) {
      return toast.warn('Please, fill the field.');
    }
    const nextParams = name !== '' ? { name: form.elements.name.value } : {};
    setSearchParams(nextParams);
    form.reset();
  };

  return (
    <Container>
      <SearchForm onSubmit={handlerOnSubmit}>
        <SearchFormInput
          name="name"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <ToastContainer />
        <SearchFormButton>
          <ImSearch width={30} height={30} />
        </SearchFormButton>
      </SearchForm>
      {loading && <Loader />}
      <List>
        {movies.map(({ title, id, poster_path }) => (
          <MovieItem key={id}>
            <StyledLink to={`${id}`} state={{ from: location }}>
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

export default Movie;