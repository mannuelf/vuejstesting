export default {
    template: `
        <div>
            <span class="count" v-count="count"></span>
            <button @click="counter++">Add 1</button>
        </div>
    `,

    data () {
        return {
            count: 0
        }
    }
}