<template>
  <div>
      <!-- Bind what ever the user puts into this input to the newReminder property -->
      <input type="text" class="new-reminder" v-model="newReminder">
      <button @click="reminders.push(newReminder)">Add Reminder</button>

      <ul v-if="reminders.length">
          <li v-for="reminder in reminders" v-text="reminder" :key="reminder"></li>
      </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                newReminder: '',
                reminders: []
            }
        },
        methods: {
            add () {
                this.reminders.push(this.newReminder);
                this.newReminder = '';
            }
        }
    }
</script>