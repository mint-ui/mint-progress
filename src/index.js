const MintProgress = require('./index.vue');

module.exports = {
  MintProgress,
  install(Vue) {
    Vue.component(MintProgress.name, MintProgress);
  }
};
