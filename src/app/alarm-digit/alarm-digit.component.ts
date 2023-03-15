import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { SpatialNavService } from '../services/spatial-nav.service';

@Component({
  selector: 'app-alarm-digit',
  templateUrl: './alarm-digit.component.html',
  styleUrls: ['./alarm-digit.component.scss'],
  animations:[trigger(
    'valueChanged',
    [
      transition('* => *', [
        style({ opacity: '0', transform: 'scale(1.2) translateY(10%)' }),
        animate(300, style({ opacity: '1', transform: 'scale(1) translateY(0)' })),
          ]),
    ]),]
})
export class AlarmDigitComponent implements OnInit {

  constructor(private spatial:SpatialNavService) { }
  activated=false;
  digit=0;
  awaitingKey=false;
  @Input() classname=''
  @Input() min:Number=0;
  @Input() max:number=12;
  ngOnInit(): void {
    this.spatial.SN.add({selector:'.'+this.classname})
  }

  activate(){
    this.activated=!this.activated;
    if(this.activated)
    this.spatial.SN.pause();
    else
    this.spatial.SN.resume();
  }

  kill(){
    this.activated=false;
  }
  
  digitUp(){
    if(this.activated)
    this.digit=(this.digit+1)%this.max;
  }

  digitDown(){
    if(this.activated)
    this.digit=(this.digit-1)%this.max;
  }

  genericKey(evt:any){
    //console.log(evt.key )
    if(isFinite(evt.key) && this.activated){
      let key=parseInt(evt.key)
      if(this.awaitingKey){
        let candidate=(this.digit*10)+key;
        console.log(candidate)
        if(candidate<=this.max && candidate>=this.min){
          this.digit=candidate;          
        }else{
          if(key<=this.max && key>=this.min){
            this.digit=key;
          }
        }
      }else{
        if(key<=this.max && key>=this.min){
          this.digit=key;
          this.awaitingKey=true;
          setTimeout(()=>this.awaitingKey=false,1000);
        }
      }
    }
    
  }

}
