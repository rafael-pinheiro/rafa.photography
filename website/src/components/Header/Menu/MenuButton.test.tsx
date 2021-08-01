import renderer from 'react-test-renderer';
import MenuButton from './MenuButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<MenuButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
