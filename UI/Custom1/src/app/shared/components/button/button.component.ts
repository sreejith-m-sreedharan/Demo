import { 
    Component, Input, OnInit
   } from '@angular/core';
  
  
  @Component({
    selector: 'button-component',
    styleUrls : ['./button.component.scss'],
    templateUrl: './button.component.html'
  })
  export class ButtonComponent implements OnInit {

        @Input('name') name: String;
        @Input('title') title : String;
        @Input('value') value : String;
        @Input('type') type : String;
        @Input('rows') rows : number;
        @Input('cols') cols: number;
        @Input('disable') disable: boolean;  
        constructor(){}
        ngOnInit(){
                switch((this.type||"").toLowerCase()){
                        case 'btn_sub' : this.type = "submit";
                        break;
                        case 'btn_rst' : this.type = "reset";
                        break;
                    default:
                         this.type = "reset";               }
        }    
  }