import {createStore} from 'vuex'

export default createStore({
  state: {
    validFields: [],
    buttonIsDisabled: true
  },
  mutations: {
    addField(state, elem) {
      if (state.validFields.indexOf(elem) === -1) {
        state.validFields.push(elem);
      }
    },
    removeField(state, elem) {
      if (state.validFields.indexOf(elem) != -1) {
        const indexElem = state.validFields.indexOf(elem);

        state.validFields.splice(indexElem, 1);
      }
    },
    buttonIsDisabled(state) {
      if (state.validFields.length === 4) {
        state.buttonIsDisabled = false;
      } else {
        state.buttonIsDisabled = true;
      }
    }
  },
  actions: {
    addField(context, elem) {
      context.commit('addField', elem);
    },
    removeField(context, elem) {
      context.commit('removeField', elem);
    },
    fieldsCompleted(context) {
      context.commit('buttonIsDisabled');
    }
  },
  modules: {}
});