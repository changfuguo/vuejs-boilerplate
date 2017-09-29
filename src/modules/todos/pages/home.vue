<template lang="html">
    <div class="todo-home">
        <div class="todo-list-header">TodoList</div>
        <div class="todo-list-add">
            <input type="checkbox" id="checkbox" v-model="checked"> 
            <input type="text" id="text" placeholder="请输入添加内容" v-model.trim="inputValue">
        </div>
        <div class="todo-list-delete">
            <button @click="doAddItem({value:inputValue,select: checked})">添加新项目</button>
            <button @click="doDeleteSelected">删除所选项目</button> 
            <button @click="doDeleteAllItem">删除所有项目</button>  
        </div>
        <ul class="todo-list-wrapper">
            <template v-for="(item, index) in list">
                <li class="todo-list-item" :class="{'isChecked': item.select}" @click="checkItem(index)">
                    <span>{{item.value}}</span>
                    <span @click="_doDeleteItem($event, index)">X</span>
                </li>
            </template>
            <li class="todo-list-item no-item" v-if="!hasItem">没有更多项目</li>  
        </ul>  
    </div>
</template>
<script type="text/babel">
    import {mapActions, mapState, mapGetters} from 'vuex';
    import emitter from '../../../common/mixins/emitter';
    export default {
        name: 'home',
        mixins: [emitter],
        data() {
            return {
                inputValue: '',
                checked: false
            };
        },
        components: {

        },
        methods: {
            ...mapActions(['doAddItem', 'checkItem', 'doDeleteSelected', 'doDeleteItem', 'doDeleteAllItem']),
            _doDeleteItem(e, index){
                if ( e && e.stopPropagation ) {
                    e.stopPropagation();
                } else { 
                    window.event.cancelBubble = true;
                };
                this.doDeleteItem(index);
            }
        },
        watch: {

        },
        computed: {
            ...mapGetters(['hasItem']),
            ...mapState({
                list: state => {
                    return state.home.list;
                }
            })
        },
<<<<<<< HEAD
        mounted() {
=======
        mounted: function(){
>>>>>>> changfuguo/master
        }
    };
</script>