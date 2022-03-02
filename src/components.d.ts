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
        "isEditable": 'true' | 'false';
        "language": 'java' | 'json';
    }
    interface CustomTable {
        "currentPage": number;
        "limit": number;
        "next": any;
        "prev": any;
        "rows": number[];
        "rowsHandler": any;
        "tableBody": object[];
        "tableHeader": object[];
        "totalData": string;
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
    interface SignIn {
    }
    interface TableWrapper {
        "rowPerPage": number[];
        "url": string;
    }
    interface TextField {
        "addClass": string;
        "name": string;
        "type": 'email' | 'password' | 'text';
        "width": 'full' | 'auto';
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
    interface HTMLSignInElement extends Components.SignIn, HTMLStencilElement {
    }
    var HTMLSignInElement: {
        prototype: HTMLSignInElement;
        new (): HTMLSignInElement;
    };
    interface HTMLTableWrapperElement extends Components.TableWrapper, HTMLStencilElement {
    }
    var HTMLTableWrapperElement: {
        prototype: HTMLTableWrapperElement;
        new (): HTMLTableWrapperElement;
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
        "fluid-container": HTMLFluidContainerElement;
        "icon-button": HTMLIconButtonElement;
        "main-component": HTMLMainComponentElement;
        "menu-drop-down": HTMLMenuDropDownElement;
        "menu-items": HTMLMenuItemsElement;
        "nav-bar": HTMLNavBarElement;
        "plain-button": HTMLPlainButtonElement;
        "radio-button": HTMLRadioButtonElement;
        "sign-in": HTMLSignInElement;
        "table-wrapper": HTMLTableWrapperElement;
        "text-field": HTMLTextFieldElement;
        "text-field-area": HTMLTextFieldAreaElement;
    }
}
declare namespace LocalJSX {
    interface CheckBox {
        "name"?: string;
    }
    interface CodeEditor {
        "isEditable"?: 'true' | 'false';
        "language"?: 'java' | 'json';
    }
    interface CustomTable {
        "currentPage"?: number;
        "limit"?: number;
        "next"?: any;
        "prev"?: any;
        "rows"?: number[];
        "rowsHandler"?: any;
        "tableBody"?: object[];
        "tableHeader"?: object[];
        "totalData"?: string;
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
    interface SignIn {
    }
    interface TableWrapper {
        "rowPerPage"?: number[];
        "url"?: string;
    }
    interface TextField {
        "addClass"?: string;
        "name"?: string;
        "type"?: 'email' | 'password' | 'text';
        "width"?: 'full' | 'auto';
    }
    interface TextFieldArea {
        "addClass"?: string;
        "width"?: 'full' | 'auto';
    }
    interface IntrinsicElements {
        "check-box": CheckBox;
        "code-editor": CodeEditor;
        "custom-table": CustomTable;
        "fluid-container": FluidContainer;
        "icon-button": IconButton;
        "main-component": MainComponent;
        "menu-drop-down": MenuDropDown;
        "menu-items": MenuItems;
        "nav-bar": NavBar;
        "plain-button": PlainButton;
        "radio-button": RadioButton;
        "sign-in": SignIn;
        "table-wrapper": TableWrapper;
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
            "fluid-container": LocalJSX.FluidContainer & JSXBase.HTMLAttributes<HTMLFluidContainerElement>;
            "icon-button": LocalJSX.IconButton & JSXBase.HTMLAttributes<HTMLIconButtonElement>;
            "main-component": LocalJSX.MainComponent & JSXBase.HTMLAttributes<HTMLMainComponentElement>;
            "menu-drop-down": LocalJSX.MenuDropDown & JSXBase.HTMLAttributes<HTMLMenuDropDownElement>;
            "menu-items": LocalJSX.MenuItems & JSXBase.HTMLAttributes<HTMLMenuItemsElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "plain-button": LocalJSX.PlainButton & JSXBase.HTMLAttributes<HTMLPlainButtonElement>;
            "radio-button": LocalJSX.RadioButton & JSXBase.HTMLAttributes<HTMLRadioButtonElement>;
            "sign-in": LocalJSX.SignIn & JSXBase.HTMLAttributes<HTMLSignInElement>;
            "table-wrapper": LocalJSX.TableWrapper & JSXBase.HTMLAttributes<HTMLTableWrapperElement>;
            "text-field": LocalJSX.TextField & JSXBase.HTMLAttributes<HTMLTextFieldElement>;
            "text-field-area": LocalJSX.TextFieldArea & JSXBase.HTMLAttributes<HTMLTextFieldAreaElement>;
        }
    }
}
