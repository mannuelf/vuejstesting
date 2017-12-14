
import { mount } from 'vue-test-utils';
import Counter from '../src/Components/Counter.vue'; 
import expect from 'expect';

describe ('Counter', () => {
    
    let wrapper = mount(Counter); // mount the counter wrapper
    
    beforeEach(() => {
        wrapper = mount(Counter);
    });

    it ('defaults to a count of 0', () => {
        wrapper.vm.count // access the data properties on the vm
    });

    it ('increments the count when the increment button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('.increment').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it ('decrements the count the decrement button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('.increment').trigger('click'); // 1
        wrapper.find('.increment').trigger('click'); // 2
        wrapper.find('.decrement').trigger('click'); // 3
        expect(wrapper.vm.count).toBe(1);
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
    });

});