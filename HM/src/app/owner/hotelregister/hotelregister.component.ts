import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {


  hotelregister!: FormGroup;
  showPassword: boolean = false;
  hotelEndPoint = 'hotelDetails';
  dataById: any;
  constructor(private formBuilder: FormBuilder, private apicallService: ApicallService,
    private router: Router) { }

  ngOnInit() {
    this.dataById = this.apicallService.dataById
    this.hotelDetailsForm()
  }

  hotelDetailsForm() {
    this.hotelregister = this.formBuilder.group({
      ownerName: [this.dataById ? this.dataById?.ownerName : '', [Validators.required],],
      mob: [this.dataById ? this.dataById?.mob : '', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      hotelName: [this.dataById ? this.dataById?.hotelName : '', [Validators.required]],
      address: [this.dataById ? this.dataById?.address : '', [Validators.required]],
      rooms: [this.dataById ? this.dataById?.rooms : ''],
      hotelcontact: [this.dataById ? this.dataById?.hotelcontact : '', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      password: [this.dataById ? this.dataById?.password : ''],
      imageField: []
    })
  }

  submit() {
    this.apicallService.postApiCall(this.hotelEndPoint, this.hotelregister.value).subscribe(respo => {
      this.router.navigateByUrl('/owner/ownersuccess')
    })

  }
  async update() {
    let respo = await this.apicallService.updateData('hotelDetails', this.dataById?.id, this.hotelregister.value).toPromise()
    this.router.navigateByUrl('/owner/ownersuccess');
  }
  showPass() {
    this.showPassword = !this.showPassword;
  }
  openInput() {
    document?.getElementById("fileInput")?.click();
  }
  fileChange(file: any) {
    let imgName = "assets/Images/" + file.target.value.slice(12)
    this.hotelregister.patchValue({ imageField: imgName })
  }
}

