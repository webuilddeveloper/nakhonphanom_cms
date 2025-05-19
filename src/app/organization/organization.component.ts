import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';
import { ServiceProviderService } from '../shared/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  listPage: any = [];
  editModel: any = {};
  code: any;
  category: any = {};
  lv0: any = [];
  lv1: any = [];
  lv2: any = [];
  lv3: any = [];

  constructor(private fileuploadService: FileUploadService, private serviceProviderService: ServiceProviderService, private spinner: NgxSpinnerService, private toastr: ToastrService, private router: Router, private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.read();
  }

  create() {
    
    this.spinner.show();

    this.lv0.filter(c => c.code == '').forEach(element => {
      this.serviceProviderService.post('organization/create', element).subscribe(data => { });
    });
    this.lv1.filter(c => c.code == '').forEach(element => {
      this.serviceProviderService.post('organization/create', element).subscribe(data => { });
    });
    this.lv2.filter(c => c.code == '').forEach(element => {
      this.serviceProviderService.post('organization/create', element).subscribe(data => { });
    });
    this.lv3.filter(c => c.code == '').forEach(element => {
      this.serviceProviderService.post('organization/create', element).subscribe(data => { });
    });

    this.spinner.hide();

    this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });

    // this.serviceProviderService.post('organization/create', this.lv0).subscribe(data => {
    //   let model: any = {}
    //   model = data;
    //   if (model.status === 'S') {
    //     this.spinner.hide();
    //     this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });

    //   } else {
    //     this.spinner.hide();
    //     this.toastr.error(model.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    //   }
    // }, err => {
    //   this.spinner.hide();
    //   this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    // });
  }

  read() {
    this.spinner.show();

    this.serviceProviderService.post('organization/read', { category: 'lv0' }).subscribe(data => {
      let model: any = {};
      model = data;
      this.lv0 = model.objectData;
    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });

    this.serviceProviderService.post('organization/read', { category: 'lv1' }).subscribe(data => {
      let model: any = {};
      model = data;
      this.lv1 = model.objectData;
    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });

    this.serviceProviderService.post('organization/read', { category: 'lv2' }).subscribe(data => {
      let model: any = {};
      model = data;
      this.lv2 = model.objectData;
    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });

    this.serviceProviderService.post('organization/read', { category: 'lv3' }).subscribe(data => {
      let model: any = {};
      model = data;
      this.lv3 = model.objectData;
    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });

    this.spinner.hide();
  }

  update() {
    let isValid = false;
    if (this.editModel.title == '') {
      this.toastr.warning('กรุณาใส่หัวข้อ', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (this.editModel.image.length == 0) {
      this.toastr.warning('กรุณาใส่รูปภาพ', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (isValid)
      return;

    this.spinner.show();
    if (this.editModel.image != undefined)
      this.editModel.imageLogoUrl = this.editModel.image[0].imageUrl;

    if (this.editModel.imageBg != undefined)
      this.editModel.imageBgUrl = this.editModel.imageBg[0].imageUrl;

    this.serviceProviderService.post('aboutUs/update', this.editModel).subscribe(data => {
      let model: any = {}
      model = data;
      if (model.status === 'S') {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 2000 });
        // setTimeout(() => {
        //   this.spinner.show();
        //   window.location.reload();
        // }, 1000)
      } else {
        this.spinner.hide();
        this.toastr.error(model.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      }
    }, err => {
      this.spinner.hide();
      this.toastr.error(err, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });
  }

  delete(param, idx, lv) {
    this.serviceProviderService.post('organization/delete', param).subscribe(data => {
      this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 2000 });

      if (lv == 0)
        this.lv0.splice(idx, 1);
      else if (lv == 1)
        this.lv1.splice(idx, 1);
      else if (lv == 2)
        this.lv2.splice(idx, 1);
      else if (lv == 3)
        this.lv3.splice(idx, 1);

    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });
  }

  addLv0(param) {

    if (param != '' && param != undefined)
      if (this.lv0.findIndex(item => item.title == param) === -1)
        this.lv0.push({ code: '', title: param, category: 'lv0' });

  }

  addLv1(param) {

    if (param != '' && param != undefined)
      if (this.lv1.findIndex(item => item.title == param) === -1)
        this.lv1.push({ code: '', title: param, category: 'lv1' });

  }

  addLv2(param) {
    
    if (param != '' && param != undefined)
      if (this.lv2.findIndex(item => item.title == param) === -1)
        this.lv2.push({ code: '', title: param, category: 'lv2' });

  }

  addLv3(param) {
    
    if (param != '' && param != undefined)
      if (this.lv3.findIndex(item => item.title == param) === -1)
        this.lv3.push({ code: '', title: param, category: 'lv3' });

  }

}
