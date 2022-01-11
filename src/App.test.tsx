import { App } from '../src/App';
import { shallow } from 'enzyme';

describe('App component', () => {
    it('shows grettings', () => {
        const wrapper = shallow(<App />); 
        const el = wrapper.find('.App');
        expect(el.exists()).toBe(true);
        expect(el.text()).toMatch(/Olá, Mundo!/i);
    })
})
