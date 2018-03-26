import { mount } from 'vue-test-utils';
import expects from 'expect';

describe ('Reminders', () => {
    // describe the entire flow, think about how do reminders work
    it ('hides the reminders list if there are none', () => {
        let wrapper = mount(Reminders);

        expect(wrapper.contains('ul')).toBe(false);
    });

    it ('can add new reminders', () => {
        // test the input vs the output
        let wrapper = mount(Reminders);

        // we have a new reminder
        let newReminder = wrapper.find('.new-reminder');
        // set the value here
        newReminder.element.value = 'Study some algorithms';
        // trigger the input event so vue registers it
        newReminder.trigger('input');
        // then we click the button to add reminder
        wrapper.find('button').trigger('click');

        expect(wrapper.find('ul').text()).toContain('Study some algorithms');
    });

});