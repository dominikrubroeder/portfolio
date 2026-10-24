import componentLayerOrder from './component-layer-order.mjs';
import componentStructure from './component-structure.mjs';
import importDepth from './import-depth.mjs';

const plugin = {
  meta: { name: 'local' },
  rules: {
    'component-layer-order': componentLayerOrder,
    'component-structure': componentStructure,
    'import-depth': importDepth
  }
};

export default plugin;
