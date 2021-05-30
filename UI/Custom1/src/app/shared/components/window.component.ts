import { 
  Component,
   ViewChild,
   ViewContainerRef,
   ComponentFactoryResolver,
   ComponentFactory,
   Type
 } from '@angular/core';

 import { UIRenderService } from '../../shared/services/UIRender.service';
import { MyElement } from '../models/MyElement';

import { TextFieldComponent } from './text-field/text-field.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'window-component',
  styleUrls : ['./window.component.scss'],
  templateUrl: './window.component.html'
})
export class WindowComponent {
  componentRef: any;
  title = 'Custom';
  @ViewChild('windowContainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver,private uiRender: UIRenderService ){
      this.uiRender.render('login').then((elems)=>{
        console.log("elements,",elems);
        this.entry.clear();
        elems.map((elem)=>{
          console.log("elem",elem);
            this.createComponent(elem);
        });
      })
    }

    createComponent(elem: MyElement) {
      
      let factory: ComponentFactory <TextFieldComponent | ButtonComponent>;
      switch(elem.type){
        case 'TXT_SNGL' : 
        case 'TXT_MULT' :
          factory = this.resolver.resolveComponentFactory(TextFieldComponent);
        break;
        case 'BTN_SUB':
        case 'BTN_RST':
          factory = this.resolver.resolveComponentFactory(ButtonComponent);
          break;
        default: 
          factory = this.resolver.resolveComponentFactory(TextFieldComponent);
      }
      

      const componentRef = this.entry.createComponent(factory);
      
      componentRef.instance.name = elem.name;
      componentRef.instance.type = elem.type;
      componentRef.instance.title = elem.title;
      componentRef.instance.rows = elem.rows;
      componentRef.instance.cols = elem.cols;
      componentRef.instance.disable = elem.disable;
      componentRef.instance.value = elem.value;
  }
  destroyComponent() {
    this.componentRef.destroy();
}
}