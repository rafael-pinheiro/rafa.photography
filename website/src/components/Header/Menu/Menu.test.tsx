import renderer from 'react-test-renderer';
import Menu from './Menu';

it('renders correctly', () => {
  const tree = renderer
    .create(<Menu />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
