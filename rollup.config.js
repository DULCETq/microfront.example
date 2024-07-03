import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

const externalLibs = ['vue','vue-router','@mcdis/app'];

export default [
  {
    input: './src/microfronts/emptyFront/api/interface/index.ts',
    output: {
      file: './lib/index.esm.js',
      format: 'esm',
    },
    external: externalLibs,
    plugins: [typescript({
      useTsconfigDeclarationDir: true
    }),
    ],
  },
  {
    input: './src/microfronts/emptyFront/api/interface/index.ts',
    output: {
      file: './lib/index.ts',
      format: 'cjs',
    },
    external: externalLibs,
    plugins: [
      typescript({useTsconfigDeclarationDir: true}),
    ],
  },
  {
    input: './src/microfronts/emptyFront/api/interface/index.ts',
    external: externalLibs,
    output: {
      file: './lib/index.d.ts',
      format: 'es',
    },
    plugins: [
      dts({
        compilerOptions: {
          preserveSymlinks: false
        }
      }),
    ],
  }
]
