import renderer from 'react-test-renderer';

import Index from '../src/pages';

it('renders homepage unchanged', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
});
