import { mount } from 'vue-test-utils';
import Counter from '../src/Components/Counter.js'; 
import expect from 'expect';

describe ('Counter', () => {

    it ('defaults to a count of 0', () => {
        let wrapper = mount(Counter); // mount the counter wrapper
        wrapper.vm.count // access the data properties on the vm
    });

    it ('increments the count when the button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html().toContain(0));
    });

});