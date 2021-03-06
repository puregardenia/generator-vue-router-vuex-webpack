/**
 * Created by douxc on 2016/10/23.
 */
import actions from './actions';
import modules from './modules';
import getters from './getters';
export default function(Vuex) {
  const store = new Vuex.Store({
    actions,
    getters,
    modules
  });
  // 启用热替换
  if (module.hot) {
    module.hot.accept(['./actions'], () => {
      store.hotUpdate({
        actions: require('./actions/login'),
        modules: require('./modules')
      });
    });
  }
  return store;
}
