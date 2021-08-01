import renderer from 'react-test-renderer';
import App from './_app';

it('renders correctly', () => {
  const Component = (props) => <div {...props} />;
  const pageProps = {
    prop1: 'test',
    prop2: 'also test'
  };

  const tree = renderer
    .create(<App Component={Component} pageProps={pageProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
