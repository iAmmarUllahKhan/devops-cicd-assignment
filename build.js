const fs = require('node:fs');
const path = require('node:path');
const { version } = require('../package.json');
const source = path.join(__dirname, '..', 'src');
const destination = path.join(__dirname, '..', 'dist');
fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'sales.js']) {
  const input = fs.readFileSync(path.join(source, file), 'utf8');
  fs.writeFileSync(path.join(destination, file), input.replaceAll('__APP_VERSION__', version));
}
console.log(`Built version ${version} to dist/`);
