import { mount } from 'vue-test-utils';
import expects from 'expect';

describe ('Reminders', () => {
    
    it.only ('hides the reminders list if there are none', () => {
        let wrapper = mount(Reminders);

        expect(wrapper.contains('ul')).toBe(false);
    });

    it ('can add new reminders', () => {
        // test the input vs the output
        let wrapper = mount(Reminders);
        let newReminder = wrapper.find('.new-reminder');

        newReminder.element.value = 'Study some algorithms  ';
        newReminder.trigger('input');

        wrapper.find('button'.trigger('click'));
        expect(wrapper.find('ul').text()).toContain('Go to the store');
    });

});