const path = require('path')
import nodeResolve from 'rollup-plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import typescript from "rollup-plugin-typescript";

export default {
    input: path.resolve(__dirname, './src/index.ts'),
    output: [
        {
            dir: path.resolve(__dirname, 'dist/esm'),
            format: 'esm',
        }
    ],
    // 关键属性，只有将其设置为 `true` 才能保证只编译、不打包
    preserveModules: true,
    plugins: [
        esbuild({
            target: 'es2018'
        }),
        nodeResolve(),
        json(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
            babelHelpers: "bundled"
        }),
    ]
};