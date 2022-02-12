import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';
import { DataService } from '../service/data.service';
import { Subscriber } from 'rxjs';

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
  submitted: boolean = false
  submitState: string = ""


  constructor(
    public localeService: LocaleService,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.submitState = "delivering"
    this.dataService.postFormData(this.formGroup.value).subscribe({
      next: (val) => {
        if (val.ok === true) {
          this.submitState = "delivered"
          this.submitted = true
        }
      },
      error: (e) => {
        console.log('http error :>> ', e.error);
        this.submitState = "error"
        this.submitted = true
      }
    })
    this.formGroup.reset()
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
