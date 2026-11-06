const MAX_DEPTH = 3;

/** Limits `@/` import, dynamic import and re-export paths to three segments, e.g. `@/components/feature/theme`. */
const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: `Limit @/ import and export paths to ${MAX_DEPTH} segments.`
    },
    schema: [],
    messages: {
      tooDeep: `'{{path}}' has {{depth}} segments after '@/'. Use at most ${MAX_DEPTH} (for example '@/components/feature/theme') and import through the folder's index.ts barrel.`
    }
  },
  create(context) {
    function check(node) {
      const source = node.source;
      if (!source || typeof source.value !== 'string') return;
      if (!source.value.startsWith('@/')) return;
      const depth = source.value.slice(2).split('/').filter(Boolean).length;
      if (depth > MAX_DEPTH) {
        context.report({
          node: source,
          messageId: 'tooDeep',
          data: { path: source.value, depth }
        });
      }
    }
    return {
      ImportDeclaration: check,
      ExportNamedDeclaration: check,
      ExportAllDeclaration: check,
      ImportExpression: check
    };
  }
};

export default rule;
