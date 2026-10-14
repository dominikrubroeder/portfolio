import path from 'node:path';

const COMPONENTS_DIR = `${path.sep}src${path.sep}components${path.sep}`;
const LAYERS = ['ui', 'feature'];

/**
 * Enforces the `src/components` structure:
 * - only `ui/` and `feature/` exist at the root
 * - every feature file lives in a feature directory (`feature/<name>/…`)
 * - every file in a feature directory is prefixed with the directory name (`<name>-…` or `<name>.…`);
 *   `index.*` barrels are exempt.
 */
const rule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce the ui/feature structure and the feature directory file prefix of src/components.'
    },
    schema: [],
    messages: {
      layer:
        "'src/components' may only contain 'ui' and 'feature'. Move this file into one of them.",
      featureRoot:
        "'{{file}}' must live in a feature directory: 'feature/<name>/{{file}}'.",
      prefix:
        "File '{{file}}' in feature '{{feature}}' must be prefixed with '{{feature}}-' (or be named '{{feature}}.*'). Rename it to '{{feature}}-{{file}}'."
    }
  },
  create(context) {
    const filename = context.filename ?? context.getFilename();
    const index = filename.lastIndexOf(COMPONENTS_DIR);
    if (index === -1) return {};

    const segments = filename
      .slice(index + COMPONENTS_DIR.length)
      .split(path.sep);
    const [layer, feature] = segments;
    const file = segments.at(-1);

    return {
      Program(node) {
        if (!LAYERS.includes(layer)) {
          context.report({ node, messageId: 'layer' });
          return;
        }
        if (layer !== 'feature') return;

        if (segments.length === 2) {
          context.report({ node, messageId: 'featureRoot', data: { file } });
          return;
        }
        if (/^index\.[cm]?[jt]sx?$/.test(file)) return;
        if (file.startsWith(`${feature}-`) || file.startsWith(`${feature}.`))
          return;

        context.report({
          node,
          messageId: 'prefix',
          data: { file, feature }
        });
      }
    };
  }
};

export default rule;
