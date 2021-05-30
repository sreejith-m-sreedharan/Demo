import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { MyElement } from '../models/MyElement';
import { __await } from 'tslib';
import { environment as $ENV } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UIRenderService {
  constructor(public http: HttpClient) {}
    async getPageConfiguration(pName: String):Promise<any[]> {
      return await this.http.get<any[]>(`${$ENV.uiServiceBaseHref}/pageConfig/${pName}`).toPromise();      
        
    }
    async render(pName: String){
        const pConfig: any = await this.getPageConfiguration(pName);
        return pConfig.elems.map((elem)=>{
           return new MyElement(elem.name,elem.type,elem.value,elem.dsiable,elem.rows,elem.cols,elem.title);
                
        });         
    }
   
  
}
