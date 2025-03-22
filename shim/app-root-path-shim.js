// app-root-path-shim.js
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Calculate the project root path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootPath = resolve(__dirname, '../'); // Adjust as needed to reach your project root

// Export an object that mimics app-root-path
export default {
  path: rootPath,
  resolve: function(relativePath) {
    return resolve(rootPath, relativePath);
  },
  require: function(relativePath) {
    return import(resolve(rootPath, relativePath));
  },
  toString: function() {
    return rootPath;
  }
};
