/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import moviesSketchLarge from '../../../assets/images/movies_scatch_large.jpg';
import useSearch from '../../hooks/useSearch';
import Button from '../shared/button';
import ButtonGroup from '../shared/buttonGroup';
import InputField from '../shared/inputField';

const SearchFilter: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchBy, changeSearchBy, changeSearch } = useSearch();
  const location = useLocation();
  const history = useHistory();

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setSearchValue(target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (searchValue) {
      const { search } = location;
      const params = new URLSearchParams(decodeURIComponent(search.substring(1)));
      params.set('search', searchValue);
      history.push({
        pathname: '/search',
        search: encodeURIComponent(params.toString()),
      });
    }

    changeSearch(searchValue);
    setSearchValue('');
  }

  function handleSearchBy(value: string) {
    const { search } = location;
    const params = new URLSearchParams(decodeURIComponent(search.substring(1)));
    params.set('searchBy', value);
    history.push({
      pathname: '/search',
      search: encodeURIComponent(params.toString()),
    });

    changeSearchBy(value);
  }

  return (
    <div
      css={css`
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.9) 100%
          ),
          url(${moviesSketchLarge});
        background-position: center;
        background-repeat: no-repeat;
        height: 396px;
        overflow: hidden;
        padding-top: 70px;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
        `}
      >
        <h1
          css={css`
            font-weight: 300;
            font-size: 40px;
            text-transform: uppercase;
          `}
        >
          Find your movie
        </h1>
        <form
          css={css`
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 25px;
            margin-bottom: 25px;
          `}
          onSubmit={handleSubmit}
        >
          <InputField placeholder="Search" id="search" name="search" value={searchValue} onChange={handleChange} />
          <Button type="submit">Search</Button>
        </form>
        <div>
          <span
            css={css`
              text-transform: uppercase;
              margin: 25px;
            `}
          >
            Search by
          </span>
          <ButtonGroup>
            <Button
              variant={searchBy === 'title' ? '' : 'secondary'}
              size="small"
              onClick={() => handleSearchBy('title')}
            >
              Title
            </Button>
            <Button
              variant={searchBy === 'genres' ? '' : 'secondary'}
              size="small"
              onClick={() => handleSearchBy('genres')}
            >
              Genre
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
