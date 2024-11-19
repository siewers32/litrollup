import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: ['src/main.js', 'src/htmx.js'], // Entry point van je project
  output: {
    dir: 'output', // Output map
    format: 'es', // Gebruik ES-modules
    sourcemap: true, // Optioneel: sourcemaps
  },
  plugins: [
    // Vind en gebruik modules in node_modules
    nodeResolve(),
    // Minify JavaScript
    terser(),
    // Kopieer alle overige bestanden zoals afbeeldingen en CSS
    copy({
      targets: [
        { src: 'src/**/*.html', dest: 'output' }, // Kopieer en behoud structuur
        { src: 'src/**/*.css', dest: 'output' },  // Kopieer CSS
        { src: 'src/assets/**/*.{png,jpg,jpeg,gif,svg}', dest: 'output/assets' }, // Kopieer afbeeldingen
      ],
      flatten: false, // Behoud de originele folderstructuur
    }),
  ],
};
