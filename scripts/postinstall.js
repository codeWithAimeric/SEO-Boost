const fs = require('fs');
const path = require('path');

const myPackageJson = require(path.join(process.cwd(), 'package.json'));
const packageName = myPackageJson.name || 'seo-boost';

const rootPath = path.join(path.dirname(require.main.filename), '../../..');
const appPackageJsonPath = path.join(rootPath, 'package.json');

const packageJson = require(myPackageJson);

packageJson.scripts = packageJson.scripts || {};
packageJson.scripts['generate-sitemap'] = `ts-node node_modules/${packageName}/bin/createSitemap.ts`;

fs.writeFileSync(appPackageJsonPath, JSON.stringify(packageJson, null, 2));