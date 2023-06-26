import { BiArrowBack } from 'react-icons/bi';
import {
  AdditionalWrapper,
  BackLink,
  Wrapper,
} from './MovieInfo.styled';
import { StyledLink } from 'pages/Home/Home.styled';

const MovieInfo = ({ details, location }) => {
  const { title, vote_average, overview, poster_path, release_date } = details;
  const backLinkHref = location.state?.from ?? '/';
  console.log(backLinkHref);
  return (
    <>
      <BackLink to={backLinkHref}>
        <BiArrowBack />
        Go back
      </BackLink>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="title"
        />
        <div>
          <h1>
            {title}({release_date?.slice(0, 4)})
          </h1>
          <p>User Score: {(vote_average * 10).toFixed()}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{details.genres?.map(item => item.name).join(' ')}</p>
        </div>
      </Wrapper>
      <AdditionalWrapper>
        <p>Additional information</p>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </AdditionalWrapper>
    </>
  );
};
export default MovieInfo;
