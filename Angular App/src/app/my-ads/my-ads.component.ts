import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector:'dev-ads',
    templateUrl: './my-ads.component.html',
    styleUrls:['./my-ads.component.css'],
    imports:[CommonModule]
})
export class MyAdsComponent{
    
    @Input() AdsName='';
    today: number = Date.now();
}