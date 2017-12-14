export default {
    template: `
        <div>
            <span class="count" v-count="count"></span>
        </div>
    `,

    data () {
        return {
            count: 0
        }
    }
}