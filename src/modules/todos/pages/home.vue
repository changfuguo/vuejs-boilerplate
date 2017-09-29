<template lang="html">
    <div class="todo-home">
    todo-home
    </div>
</template>
<script type="text/babel">
    import emitter from '../../../common/mixins/emitter';
    export default {
        name: 'home',
        mixins: [emitter],
        data() {
            return {
            };
        },
        components: {

        },
        methods: {

        },
        watch: {

        },
        computed: {

        },
        mounted: function(){
            alert(1123);
        }
    };
</script>