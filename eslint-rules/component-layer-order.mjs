const LAYERS = ['ui', 'feature'];
const PATTERN = /^@\/components\/(ui|feature)(\/|$)/;

/** Requires `@/components/*` value imports ordered ui → feature. */
const rule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce layer order of @/components imports (ui, feature).'
    },
    schema: [],
    messages: {
      order:
        "'@/components/{{current}}' import must come before '@/components/{{previous}}' imports."
    }
  },
  create(context) {
    let highest = -1;
    let highestLayer = '';
    return {
      ImportDeclaration(node) {
        // Type-only imports are grouped separately at the end of the file.
        if (node.importKind === 'type') return;
        const match = PATTERN.exec(node.source.value);
        if (!match) return;
        const layer = match[1];
        const rank = LAYERS.indexOf(layer);
        if (rank < highest) {
          context.report({
            node,
            messageId: 'order',
            data: { current: layer, previous: highestLayer }
          });
          return;
        }
        highest = rank;
        highestLayer = layer;
      }
    };
  }
};

export default rule;
