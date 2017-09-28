import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from '../constants';

const state = {
    list: []
};

const getters = {
    hasItem(state) {
        return state.list.length > 0;
    }
};

const actions = {
    doAddItem({commit, state, dispatch}, {name, finished}) {
        commit(ADD_ITEM, {name, finished});
    },
    doUpdateItem({commit, state, dispatch}, {name, finished}) {
        commit(UPDATE_ITEM, {name, finished});
    },
    doDeleteItem({commit, state, dispatch}, {name, finished}) {
        commit(DELETE_ITEM, {name});
    }
};

const mutations = {
    [ADD_ITEM] (state, data) {
        let list = state.list;
        let {name, finished} = data;
        if (list.findIndex(item => item.name == data.name) == -1) {
            list.push({
                name,
                finished
            });
        }
    },
    [UPDATE_ITEM] (state, index, data) {
        let list = state.list;
        let item = list[index];
        if (item) {
            item.name = data.name;
            item.finished = data.finished;
        }

        state.list = list.slice(0);
    },
    [DELETE_ITEM] (state, index) {
        state.list.splice(index, 1);
        state.list = list.slice(0);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};