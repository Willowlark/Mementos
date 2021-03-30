import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import AnnData from '../../assets/Anndata.json';
import { Sprite } from '../sprite/sprite.component';


@Component({
  selector: 'sprite-select',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
    chars = [
        {"name": "", "value": {}},
        {"name": "Ann", "value": AnnData}
    ];
    
    selections = {
        char: {},
        outfit : {},
        pose: []
    };
  
//   charChanged(selectedValue:[]) {
//       console.log(selectedValue);
//   }

  submit() {
    console.log("Boop");
  }
}