import renderer from 'react-test-renderer';
import Header from './index';
import MenuButton from './Menu/MenuButton';


it('renders correctly', () => {
  const component = renderer.create(<Header />);

  expect(component.toJSON()).toMatchSnapshot();

  const button = component.root.findByType(MenuButton);

  renderer.act(() => {
    button.props.onClick();
  });

  expect(component.toJSON()).toMatchSnapshot();
});
