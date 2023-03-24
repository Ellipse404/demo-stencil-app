import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: 'new-button',
  styleUrl: 'new-button.scss',
  shadow: true,
})

export class ButtonComponent {
  //text
  @Prop() buttonText: string

  //variant
  @Prop() variant: 'primary' | 'outline' | 'text'

  //disabled
  @Prop() isDisabled?: boolean
  
  //icon
  @Prop() icon?: HTMLElement | HTMLImageElement
  
  //size
  @Prop() size: 'large' | 'medium' | 'small' = 'medium'
  
  //color
  @Prop() color: 'normal' | 'warning' | 'error' | 'success'


  render() {
    const { variant, size, color, isDisabled } = this
    const classes = {
      'c-btn': true,
      'c-btn--primary': variant === 'primary',
      'c-btn--outline': variant === 'outline',
      'c-btn--text': variant === 'text',
      'c-btn--large': size === 'large',
      'c-btn--medium': size === 'medium',
      'c-btn--small': size === 'small',
      'c-btn--normal': color === 'normal',
      'c-btn--warning': color === 'warning',
      'c-btn--error': color === 'error',
      'c-btn--success': color === 'success',
      'c-btn--disabled': isDisabled === true

    };

    return <Host>
      <button class={classes} disabled={this.isDisabled}>
        <div class="imageclass">
          {this.icon ?
            <span class="iconclass">
              {this.icon}
            </span>
            : null}
          <span>
            {this.buttonText}
          </span>
        </div>
      </button>
    </Host>
  }
}