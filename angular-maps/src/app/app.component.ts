import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SERVER MAPS';
  strC='';
  strR='';
  lat: number = 45.539208;
  lng: number = 9.243017;
  lat1:number =45.5064503;
  lgn1:number=9.1911141;
  colorC:String='';
  colorR:String='';

  changeColor(strC)
  {
    this.colorC=strC;
  }

  changeRect(strR)
  {
    this.colorR=strR;
  }
    public icon =  {
    url:'./assets/img/cat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  public control =  {
    url:'./assets/img/x.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  public  compu=  {
    url:'./assets/img/comp.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  public  chiave=  {
    url:'./assets/img/chiave.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

  rectangle: Array<Point> =
  [
    {lng:9.35, lat:45.54},
    {lng:9.55, lat:45.54},
    {lng:9.55, lat:45.44},
    {lng:9.35, lat:45.44}
  ]

}
