import { h } from 'preact';
import { LayoutStory } from './story';

// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { mount } from 'enzyme';

describe('Initial Test of the Layout', () => {
    it('Layout renders', () => {
        const wrapper = mount(<LayoutStory />);

        expect(wrapper.text()).toBe('Layout');
    });
});
