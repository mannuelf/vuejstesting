
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
        // wrapper.find('.increment').trigger('click'); // 1
        // wrapper.find('.increment').trigger('click'); // 2

        // heres what i want the data on the vue model to be, instead of above lines ^
        wrapper.setData({
            count: 5
        });

        wrapper.find('.decrement').trigger('click');

        expect(wrapper.vm.count).toBe(4);
    });

    it ('never goes below 0', () => {
        expect(wrapper.vm.count).toBe(0);
        expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true);
        // wrapper.find('.increment').trigger('click'); // 1 or can do...
        wrapper.setData({ count: 1 });
        // i assert false that i see a display: none
        expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false);
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
    });

});