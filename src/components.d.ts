/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CheckBox {
        "name": string;
    }
    interface CodeEditor {
        "doc": any;
        "url": string;
    }
    interface CustomTable {
        "clearSearch": any;
        "currentPage": number;
        "dataLength": string;
        "isLoading": boolean;
        "isLoadingError": boolean;
        "limit": number;
        "next": any;
        "prev": any;
        "rows": number[];
        "rowsHandler": any;
        "searchMethod": any;
        "tableBody": object[];
        "tableHeader": object[];
        "toggleSortMethod": any;
    }
    interface DropDown {
        "alias": string;
        "clearSearch": any;
        "searchMethod": any;
    }
    interface FluidContainer {
        "breakpoint": 'xl' | 'lg' | 'md';
    }
    interface IconButton {
        "addClass": string;
        "btnLabel": string;
        "iconPosition": 'right' | 'left';
        "type": 'outlined' | 'contained';
    }
    interface LoaderComponent {
    }
    interface MainComponent {
    }
    interface MenuDropDown {
        "list": number[];
        "listTitle": string;
    }
    interface MenuItems {
    }
    interface NavBar {
    }
    interface PlainButton {
        "addClass": string;
        "clickHandler": any;
        "color": string;
        "disabledHandler": boolean;
        "hoverColor": string;
        "type": 'contained' | 'outlined' | 'text';
        "width": 'full' | 'auto';
    }
    interface RadioButton {
        "align": 'vertical' | 'horizontal';
        "name": string;
    }
    interface ResEditor {
        "doc": any;
    }
    interface TableWrapper {
        "api": any;
        "autocompute": boolean;
        "headerList": object[];
        "rowPerPage": number[];
    }
    interface TestCom {
    }
    interface TextField {
        "addClass": string;
        "name": string;
        "onChange": any;
        "onClick": any;
        "placeholder": string;
        "type": 'email' | 'password' | 'text' | 'search';
    }
    interface TextFieldArea {
        "addClass": string;
        "width": 'full' | 'auto';
    }
}
declare global {
    interface HTMLCheckBoxElement extends Components.CheckBox, HTMLStencilElement {
    }
    var HTMLCheckBoxElement: {
        prototype: HTMLCheckBoxElement;
        new (): HTMLCheckBoxElement;
    };
    interface HTMLCodeEditorElement extends Components.CodeEditor, HTMLStencilElement {
    }
    var HTMLCodeEditorElement: {
        prototype: HTMLCodeEditorElement;
        new (): HTMLCodeEditorElement;
    };
    interface HTMLCustomTableElement extends Components.CustomTable, HTMLStencilElement {
    }
    var HTMLCustomTableElement: {
        prototype: HTMLCustomTableElement;
        new (): HTMLCustomTableElement;
    };
    interface HTMLDropDownElement extends Components.DropDown, HTMLStencilElement {
    }
    var HTMLDropDownElement: {
        prototype: HTMLDropDownElement;
        new (): HTMLDropDownElement;
    };
    interface HTMLFluidContainerElement extends Components.FluidContainer, HTMLStencilElement {
    }
    var HTMLFluidContainerElement: {
        prototype: HTMLFluidContainerElement;
        new (): HTMLFluidContainerElement;
    };
    interface HTMLIconButtonElement extends Components.IconButton, HTMLStencilElement {
    }
    var HTMLIconButtonElement: {
        prototype: HTMLIconButtonElement;
        new (): HTMLIconButtonElement;
    };
    interface HTMLLoaderComponentElement extends Components.LoaderComponent, HTMLStencilElement {
    }
    var HTMLLoaderComponentElement: {
        prototype: HTMLLoaderComponentElement;
        new (): HTMLLoaderComponentElement;
    };
    interface HTMLMainComponentElement extends Components.MainComponent, HTMLStencilElement {
    }
    var HTMLMainComponentElement: {
        prototype: HTMLMainComponentElement;
        new (): HTMLMainComponentElement;
    };
    interface HTMLMenuDropDownElement extends Components.MenuDropDown, HTMLStencilElement {
    }
    var HTMLMenuDropDownElement: {
        prototype: HTMLMenuDropDownElement;
        new (): HTMLMenuDropDownElement;
    };
    interface HTMLMenuItemsElement extends Components.MenuItems, HTMLStencilElement {
    }
    var HTMLMenuItemsElement: {
        prototype: HTMLMenuItemsElement;
        new (): HTMLMenuItemsElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLPlainButtonElement extends Components.PlainButton, HTMLStencilElement {
    }
    var HTMLPlainButtonElement: {
        prototype: HTMLPlainButtonElement;
        new (): HTMLPlainButtonElement;
    };
    interface HTMLRadioButtonElement extends Components.RadioButton, HTMLStencilElement {
    }
    var HTMLRadioButtonElement: {
        prototype: HTMLRadioButtonElement;
        new (): HTMLRadioButtonElement;
    };
    interface HTMLResEditorElement extends Components.ResEditor, HTMLStencilElement {
    }
    var HTMLResEditorElement: {
        prototype: HTMLResEditorElement;
        new (): HTMLResEditorElement;
    };
    interface HTMLTableWrapperElement extends Components.TableWrapper, HTMLStencilElement {
    }
    var HTMLTableWrapperElement: {
        prototype: HTMLTableWrapperElement;
        new (): HTMLTableWrapperElement;
    };
    interface HTMLTestComElement extends Components.TestCom, HTMLStencilElement {
    }
    var HTMLTestComElement: {
        prototype: HTMLTestComElement;
        new (): HTMLTestComElement;
    };
    interface HTMLTextFieldElement extends Components.TextField, HTMLStencilElement {
    }
    var HTMLTextFieldElement: {
        prototype: HTMLTextFieldElement;
        new (): HTMLTextFieldElement;
    };
    interface HTMLTextFieldAreaElement extends Components.TextFieldArea, HTMLStencilElement {
    }
    var HTMLTextFieldAreaElement: {
        prototype: HTMLTextFieldAreaElement;
        new (): HTMLTextFieldAreaElement;
    };
    interface HTMLElementTagNameMap {
        "check-box": HTMLCheckBoxElement;
        "code-editor": HTMLCodeEditorElement;
        "custom-table": HTMLCustomTableElement;
        "drop-down": HTMLDropDownElement;
        "fluid-container": HTMLFluidContainerElement;
        "icon-button": HTMLIconButtonElement;
        "loader-component": HTMLLoaderComponentElement;
        "main-component": HTMLMainComponentElement;
        "menu-drop-down": HTMLMenuDropDownElement;
        "menu-items": HTMLMenuItemsElement;
        "nav-bar": HTMLNavBarElement;
        "plain-button": HTMLPlainButtonElement;
        "radio-button": HTMLRadioButtonElement;
        "res-editor": HTMLResEditorElement;
        "table-wrapper": HTMLTableWrapperElement;
        "test-com": HTMLTestComElement;
        "text-field": HTMLTextFieldElement;
        "text-field-area": HTMLTextFieldAreaElement;
    }
}
declare namespace LocalJSX {
    interface CheckBox {
        "name"?: string;
    }
    interface CodeEditor {
        "doc"?: any;
        "url"?: string;
    }
    interface CustomTable {
        "clearSearch"?: any;
        "currentPage"?: number;
        "dataLength"?: string;
        "isLoading"?: boolean;
        "isLoadingError"?: boolean;
        "limit"?: number;
        "next"?: any;
        "prev"?: any;
        "rows"?: number[];
        "rowsHandler"?: any;
        "searchMethod"?: any;
        "tableBody"?: object[];
        "tableHeader"?: object[];
        "toggleSortMethod"?: any;
    }
    interface DropDown {
        "alias"?: string;
        "clearSearch"?: any;
        "searchMethod"?: any;
    }
    interface FluidContainer {
        "breakpoint"?: 'xl' | 'lg' | 'md';
    }
    interface IconButton {
        "addClass"?: string;
        "btnLabel"?: string;
        "iconPosition"?: 'right' | 'left';
        "type"?: 'outlined' | 'contained';
    }
    interface LoaderComponent {
    }
    interface MainComponent {
    }
    interface MenuDropDown {
        "list"?: number[];
        "listTitle"?: string;
    }
    interface MenuItems {
    }
    interface NavBar {
    }
    interface PlainButton {
        "addClass"?: string;
        "clickHandler"?: any;
        "color"?: string;
        "disabledHandler"?: boolean;
        "hoverColor"?: string;
        "type"?: 'contained' | 'outlined' | 'text';
        "width"?: 'full' | 'auto';
    }
    interface RadioButton {
        "align"?: 'vertical' | 'horizontal';
        "name"?: string;
    }
    interface ResEditor {
        "doc"?: any;
    }
    interface TableWrapper {
        "api"?: any;
        "autocompute"?: boolean;
        "headerList"?: object[];
        "rowPerPage"?: number[];
    }
    interface TestCom {
    }
    interface TextField {
        "addClass"?: string;
        "name"?: string;
        "onChange"?: any;
        "onClick"?: any;
        "placeholder"?: string;
        "type"?: 'email' | 'password' | 'text' | 'search';
    }
    interface TextFieldArea {
        "addClass"?: string;
        "width"?: 'full' | 'auto';
    }
    interface IntrinsicElements {
        "check-box": CheckBox;
        "code-editor": CodeEditor;
        "custom-table": CustomTable;
        "drop-down": DropDown;
        "fluid-container": FluidContainer;
        "icon-button": IconButton;
        "loader-component": LoaderComponent;
        "main-component": MainComponent;
        "menu-drop-down": MenuDropDown;
        "menu-items": MenuItems;
        "nav-bar": NavBar;
        "plain-button": PlainButton;
        "radio-button": RadioButton;
        "res-editor": ResEditor;
        "table-wrapper": TableWrapper;
        "test-com": TestCom;
        "text-field": TextField;
        "text-field-area": TextFieldArea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "check-box": LocalJSX.CheckBox & JSXBase.HTMLAttributes<HTMLCheckBoxElement>;
            "code-editor": LocalJSX.CodeEditor & JSXBase.HTMLAttributes<HTMLCodeEditorElement>;
            "custom-table": LocalJSX.CustomTable & JSXBase.HTMLAttributes<HTMLCustomTableElement>;
            "drop-down": LocalJSX.DropDown & JSXBase.HTMLAttributes<HTMLDropDownElement>;
            "fluid-container": LocalJSX.FluidContainer & JSXBase.HTMLAttributes<HTMLFluidContainerElement>;
            "icon-button": LocalJSX.IconButton & JSXBase.HTMLAttributes<HTMLIconButtonElement>;
            "loader-component": LocalJSX.LoaderComponent & JSXBase.HTMLAttributes<HTMLLoaderComponentElement>;
            "main-component": LocalJSX.MainComponent & JSXBase.HTMLAttributes<HTMLMainComponentElement>;
            "menu-drop-down": LocalJSX.MenuDropDown & JSXBase.HTMLAttributes<HTMLMenuDropDownElement>;
            "menu-items": LocalJSX.MenuItems & JSXBase.HTMLAttributes<HTMLMenuItemsElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "plain-button": LocalJSX.PlainButton & JSXBase.HTMLAttributes<HTMLPlainButtonElement>;
            "radio-button": LocalJSX.RadioButton & JSXBase.HTMLAttributes<HTMLRadioButtonElement>;
            "res-editor": LocalJSX.ResEditor & JSXBase.HTMLAttributes<HTMLResEditorElement>;
            "table-wrapper": LocalJSX.TableWrapper & JSXBase.HTMLAttributes<HTMLTableWrapperElement>;
            "test-com": LocalJSX.TestCom & JSXBase.HTMLAttributes<HTMLTestComElement>;
            "text-field": LocalJSX.TextField & JSXBase.HTMLAttributes<HTMLTextFieldElement>;
            "text-field-area": LocalJSX.TextFieldArea & JSXBase.HTMLAttributes<HTMLTextFieldAreaElement>;
        }
    }
}
