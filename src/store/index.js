import * as Vuex from "vuex";
const store = Vuex.createStore({
    state() {
        return {
            editListNumber: 0,
            contentList: [],
            MdeList: []
        }
    },
    mutations: {
        addContent(state, task) {
            state.contentList.unshift(task)
        },
        updateContent(state, task) {
            state.contentList[state.editListNumber] = task
        },
        deleteContent(state, idx) {
            state.contentList.splice(idx, 1);
        },
        toUpdate(state, idx) {
            state.MdeList.unshift(state.contentList[idx])
            state.editListNumber = idx
        },
        deleteMdeList(state) {
            state.MdeList = [];
        }
    }
})

export default store;