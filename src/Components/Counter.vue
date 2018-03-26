<template>
    <div>
        <span class="count" v-text="count"></span> 
        <button @click="count++" class="increment">Increment</button>
        <!-- only reduce the count if great than 0 -->
        <button @click="count > 0 && count--" class="decrement" v-show="count">Increment</button>
    </div>
</template>

<script> 
export default {
    data () {
        return {
            count: 0
        };
    }
}
</script>