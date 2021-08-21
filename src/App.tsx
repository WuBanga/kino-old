import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FilmsList } from './FilmsList';
import Menu from './Menu';
import { FilmPage, FilmPageProps } from './FilmPage';

const App = () => {
  const test: FilmPageProps = {
    id: 1,
    status: 'Realeased',
    title: 'Title',
    releaseDate: '01.01.2020',
    tagline: 'Subtitle',
    voteAverage: 8.1,
    voteCount: 2000,
    languages: ['English', 'Spanish'],
    country: 'UK',
    budget: 10000000,
    revenue: 15000000,
    genres: [
      {
        id: 1,
        name: 'Genre1',
      },
      {
        id: 2,
        name: 'Genre2',
      },
      {
        id: 3,
        name: 'Genre3',
      },
    ],
    runtime: 120,
    page: 'link',
    overview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis nostrum fuga ut. Earum aliquam soluta reiciendis? Voluptatum beatae, hic quia, ab nulla quae officiis dolore vel voluptate numquam molestiae.',
    posterLink: 'posterlink',
    backgroundLink: 'backlink',
  };
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/movie/:id">
          <FilmPage {...test}></FilmPage>
        </Route>
        <Route path="/">
          <FilmsList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
