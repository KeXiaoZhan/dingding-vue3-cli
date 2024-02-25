/// <reference types="vite/client" />
/**
 * 这段代码是 TypeScript 中用于声明 Vue 单文件组件（.vue 文件）模块的声明文件。

    在 TypeScript 中，当导入一个模块时，需要为该模块提供一个类型声明，以便编辑器能够正确地推断和检查模块的类型。

    在这段代码中，通过 `declare module '*.vue'` 声明了一个模块，该模块的路径以 `.vue` 结尾。这样的声明告诉 TypeScript，在导入以 `.vue` 结尾的模块时，应该使用下面的定义。

    在定义部分，通过 `import { DefineComponent } from "vue"` 导入了 `DefineComponent` 类型，该类型是 Vue 3 中定义组件的类型。

    然后，使用 `const component: DefineComponent<{}, {}, any>` 定义了一个名为 `component` 的常量，类型为 `DefineComponent<{}, {}, any>`。这个类型表示组件的 props、组件实例的方法和组件的任意额外属性。

    最后，通过 `export default component` 导出了这个模块，使得在其他地方导入这个模块时，可以获得正确的类型推断。

    总结起来，这段代码是为了声明 Vue 单文件组件的类型，在使用 Vue 单文件组件时，TypeScript 可以正确推断和检查组件的类型信息。
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
