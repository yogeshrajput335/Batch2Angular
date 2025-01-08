import { Component, Input } from "@angular/core";

@Component({
    selector:'dev-ads',
    templateUrl: './my-ads.component.html',
    styleUrls:['./my-ads.component.css']
})
export class MyAdsComponent{
    
    @Input() AdsName='';
}