import { 
    Component, Input, OnChanges, OnInit
   } from '@angular/core';
  
  
  @Component({
    selector: 'text-field-component',
    styleUrls : ['./text-field.component.scss'],
    templateUrl: './text-field.component.html'
  })
  export class TextFieldComponent implements OnInit {

        @Input('name') name: String;
        @Input('title') title : String;
        @Input('value') value : String;
        @Input('type') type : String;
        @Input('rows') rows : number;
        @Input('cols') cols: number;
        @Input('disable') disable: boolean;
        public textArea: boolean = false;       
        constructor(){}
        ngOnInit(){
                switch((this.type||"").toLowerCase()){
                        case 'txt_mult' :
                           this.textArea = true;
                        break;
                        case 'txt_pwd' :
                          this.type = "password";
                          this.textArea = false;
                         break;
                    default:
                         this.type="text";
                         this.textArea = false; 
                                       }
        }    
  }