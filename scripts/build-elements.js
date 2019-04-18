const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/apps/hello-world/runtime.js',
    './dist/apps/hello-world/polyfills.js',
    './dist/apps/hello-world/styles.js',
    './dist/apps/hello-world/vendor.js',
    './dist/apps/hello-world/main.js'
  ];

  await fs.ensureDir('elements/app');
  await concat(files, 'elements/app/elements.js');
})();
