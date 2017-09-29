import { ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEM, CHECK_ITEM, DELETE_SELECTED} from '../constants';

const state = {
    list: []
};

const getters = {
    hasItem(state) {
        return state.list.length > 0;
    }
};

const actions = {
    doAddItem({commit, state, dispatch}, {value, select}) {
        commit(ADD_ITEM, {value, select});
    },
    checkItem({commit, state, dispatch}, index){
        commit(CHECK_ITEM, index);
    },
    doDeleteSelected({commit, state, dispatch}){
        commit(DELETE_SELECTED);
    },
    doDeleteAllItem({commit, state, dispatch}, index) {
        commit(DELETE_ALL_ITEM);
    },
    doDeleteItem({commit, state, dispatch}, index) {
        commit(DELETE_ITEM, index);
    }
};

const mutations = {
    [ADD_ITEM] (state, data) {
        state.list = [...state.list, data];
    },
    [CHECK_ITEM] (state, index) {
        let list = [...state.list];
        list[index] = Object.assign({}, state.list[index], {select: !state.list[index].select});
        state.list = list;
    },
    [DELETE_SELECTED] (state) {
        let list = [...state.list];
        list = list.filter(function(item){
            return !item.select;
        });
        state.list = list;
    },
    [DELETE_ALL_ITEM] (state) {
        state.list = [];
    },
    [DELETE_ITEM] (state, index) {
        let list = [...state.list];
        list.splice(index, 1);
        state.list = list;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};