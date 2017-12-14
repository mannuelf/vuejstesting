import { mount } from 'vue-test-utils';
import Counter from '../src/Components/Counter.js'; 
import expect from 'expect';

describe ('Counter', () => {

    it ('defaults to a count of 0', () => {
        let wrapper = mount(Counter); // mount the counter wrapper

        wrapper.vm.count // access the data properties on the vm
    });

});