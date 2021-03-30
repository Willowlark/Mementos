import { Component, OnInit } from '@angular/core';
import AnnData from '../../assets/Anndata.json';

export interface Sprite {

    "outfitname": String;
    "outfitnum": String;
    "posename":  String;
    "posenum": String;
    "base": String;
    "eyes": String[];
    "eyespos": Number;
    "mouth":  String[];
    "mouthpos": Number;
}

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {

    sprites: Sprite[] = AnnData['8000'];
    
    outfitnum = '0000';
    posenum = '01';
    
    sprite = this.sprites[0];
    
    constructor() { }
    
  ngOnInit(): void {
      console.log(AnnData)
  }

}
