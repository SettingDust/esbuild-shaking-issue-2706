import {buildSync} from 'esbuild';

buildSync({
  entryPoints: ['index.ts'],
  outfile: 'dist/output.js',
  bundle: true,
  minifySyntax: true,
  format: 'esm',
  define: {
    'TEST': 'true'
  }
})
