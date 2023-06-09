/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface NewButton {
        "buttonText": string;
        "color": 'normal' | 'warning' | 'error' | 'success';
        "icon"?: HTMLElement | HTMLImageElement;
        "isDisabled"?: boolean;
        "size": 'large' | 'medium' | 'small';
        "variant": 'primary' | 'outline' | 'text';
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNewButtonElement extends Components.NewButton, HTMLStencilElement {
    }
    var HTMLNewButtonElement: {
        prototype: HTMLNewButtonElement;
        new (): HTMLNewButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "new-button": HTMLNewButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface NewButton {
        "buttonText"?: string;
        "color"?: 'normal' | 'warning' | 'error' | 'success';
        "icon"?: HTMLElement | HTMLImageElement;
        "isDisabled"?: boolean;
        "size"?: 'large' | 'medium' | 'small';
        "variant"?: 'primary' | 'outline' | 'text';
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "new-button": NewButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "new-button": LocalJSX.NewButton & JSXBase.HTMLAttributes<HTMLNewButtonElement>;
        }
    }
}
