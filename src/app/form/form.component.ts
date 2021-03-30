import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import AnnData from '../../assets/Anndata.json';


@Component({
  selector: 'sprite-select',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;
  chars = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      chars: ['']
    });
    
    this.chars = this.getChars();
  }
  
  getChars() {
      return [
          {"name": "Ann", "value": AnnData}
      ];
  }
  
  charChanged(selectedValue:string) {
      console.log(selectedValue);
  }

  submit() {
    console.log(this.form.value);
  }
}