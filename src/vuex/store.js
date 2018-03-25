import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    score: 0
}

export default new Vuex.Store({
    state
})