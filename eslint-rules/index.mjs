import componentLayerOrder from './component-layer-order.mjs';
import componentStructure from './component-structure.mjs';

const plugin = {
  meta: { name: 'local' },
  rules: {
    'component-layer-order': componentLayerOrder,
    'component-structure': componentStructure
  }
};

export default plugin;
