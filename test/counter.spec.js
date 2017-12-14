import { mount } from 'vue-test-utils';
import expect from 'expect';

import Counter from '../src/Components/Counter.js'; 


describe ('Counter', () => {

    it ('defaults to a count of 0', () => {
        let wrapper = mount(Counter); // mount the counter wrapper
        wrapper.vm.count // access the data properties on the vm
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html().toContain(0));
    });

});