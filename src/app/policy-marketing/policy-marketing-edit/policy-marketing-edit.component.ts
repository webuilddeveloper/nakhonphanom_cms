import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileUploadService } from 'src/app/shared/file-upload.service';
import { ServiceProviderService } from 'src/app/shared/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiProviderService } from 'src/app/shared/api-provider.service';
import { ValidateService } from 'src/app/shared/validate.service';
import { OrganizationService } from 'src/app/shared/organization.service';
import { PermissionService } from 'src/app/shared/permission.service';

@Component({
  selector: 'app-policy-marketing-edit',
  templateUrl: './policy-marketing-edit.component.html',
  styleUrls: ['./policy-marketing-edit.component.css']
})
export class PolicyMarketingEditComponent implements OnInit {
  Editor = ClassicEditor;
  listCategory: any = [];
  editModel: any = {};
  code: any;
  title = 'เพิ่มข้อมูลนโยบายการตลาด';
  category: any; // <----- Category เพื่ออ่านสิทธิ์ Organization ของ User ว่าสามารถเห็นระดับไหน
  isSaveSuccess: boolean = false;

  url: any = {};

  constructor(private apiProviderService: ApiProviderService
    , private validService: ValidateService
    , private permissionService: PermissionService
    , private serviceProviderService: ServiceProviderService
    , private spinner: NgxSpinnerService
    , private toastr: ToastrService
    , private router: Router
    , private activetedRoute: ActivatedRoute) {

    this.url = {
      create: this.apiProviderService.policy.create,
      read: this.apiProviderService.policy.read,
      update: this.apiProviderService.policy.update,
      delete: this.apiProviderService.policy.delete,
      gallery: {
        create: this.apiProviderService.policy.gallery.create,
        read: this.apiProviderService.policy.gallery.read,
        update: this.apiProviderService.policy.gallery.update,
        delete: this.apiProviderService.policy.gallery.delete
      }
    }

  }

  ngOnInit(): void {
    this.category = this.permissionService.readLocalStorage('category');
    this.editModel.category = 'marketing';

    this.activetedRoute.queryParams.subscribe(params => {
      let model: any = this.activetedRoute.snapshot.params;
      this.code = model.code;

      if (this.code != '') {
        this.title = 'แก้ไขข้อมูลนโยบายการตลาด';
        this.read();
      }
    });

  }

  create() {

    if (this.code == '') {
      // <----- Validate title, image, category
      if (this.validService.isValidateCreate(this.editModel))
        return;

      if (this.editModel.language == '')
        return this.toastr.warning('กรุณาเลือกภาษา', 'แจ้งเตือนระบบ', { timeOut: 1000 });

      if (this.editModel.isRequired == null || this.editModel.isRequired == undefined)
        return this.toastr.warning('กรุณาเลือกข้อบังคับ', 'แจ้งเตือนระบบ', { timeOut: 1000 });

    } else {
      // <----- Validate title, category
      if (this.validService.isValidateUpdate(this.editModel))
        return;
    }
debugger
    this.editModel.isRequired = this.editModel.isRequired == 'true' ? true : false

    this.spinner.show();
    this.editModel.imageUrl = this.editModel.image[0].imageUrl;
    this.serviceProviderService.post(this.url.create, this.editModel).subscribe(data => {

      let model: any = {};
      model = data;

      this.isSaveSuccess = true;
      this.spinner.hide();
      this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });

      setTimeout(() => { this.back(); }, 2000);

    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });
  }

  read() {
    this.spinner.show();
    this.serviceProviderService.post(this.url.read, { code: this.code, category: 'marketing' }).subscribe(data => {
      let model: any = {};
      model = data;
      this.editModel = model.objectData[0];
      debugger
      this.editModel.isRequired = this.editModel.isRequired ? 'true' : 'false';

      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });
  }

  update() {
    this.spinner.show();
    this.serviceProviderService.post(this.url.update, { code: this.editModel.code, isActive: this.editModel.isActive }).subscribe(data => {
      let model: any = {};
      model = data;
      if (model.status === 'S') {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 2000 });

        setTimeout(() => {
          this.back();
        }, 2000);
      } else {
        this.spinner.hide();
        this.toastr.error(model.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      }
    }, err => {
      this.spinner.hide();
      this.toastr.error(err, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });
  }

  back() {
    this.router.navigate(['policy-marketing'], { skipLocationChange: true });
  }
}
