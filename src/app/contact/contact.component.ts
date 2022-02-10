import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public titleShow: boolean = false;
  public tesztShow: boolean = false;
  public formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })

  constructor(
    public localeService: LocaleService,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }
  
  getErrorMessage(field: string): string {

    if (field === 'email') {
      //@ts-ignore
      if (this.formGroup.get(field).hasError('required')) {
        return this.localeService.currentLanguageData.contact.required
      } 
      //@ts-ignore
      return this.formGroup.get(field).hasError(field) ? this.localeService.currentLanguageData.contact.invalidEmail : '';
    } 
    
    //@ts-ignore
    return this.formGroup.get(field).hasError('required') ? this.localeService.currentLanguageData.contact.required : '';
  }
}
