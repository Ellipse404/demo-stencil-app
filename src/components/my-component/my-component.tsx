import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
  assetsDirs: ['assets']
})


export class MyComponent {

  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {

    return <div >Hello, World! I'm {this.getText()}
    <br />
    <pre>Type Variants </pre>
    <div class="container">
    <new-button buttonText='Primary' variant='primary'></new-button>
    <new-button buttonText='Outlined' variant='outline'></new-button>
    <new-button buttonText='Text' variant='text'></new-button>
    </div>

    <pre>Size Variants </pre>
    <div class="container">
    <new-button buttonText='Large' size='large' color='normal'></new-button>
    <new-button buttonText='Medium' size='medium' color='normal'></new-button>
    <new-button buttonText='Small' size='small' color='normal'></new-button>
    </div>
    
    <pre>Color Variants </pre>
    <div class="container">
    <new-button buttonText='Normal' size='medium' color='normal'></new-button>
    <new-button buttonText='Success' size='medium' color='success'></new-button>
    <new-button buttonText='Warning' size='medium' color='warning'></new-button>
    <new-button buttonText='Error !' size='medium' color='error'></new-button>
    </div>
    
    <pre>Disabled</pre>
    <new-button buttonText='Disabled' isDisabled={true} size='medium'></new-button>

    <pre>Icon Button</pre>
    
    <new-button buttonText='Icon' icon={<img style={{width:'22px'}}  src={getAssetPath('../../assets/sample2.png')} />} size='medium' color='normal'></new-button>

    </div>
  }
}
