import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from 'src/app/shared/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-organization2-lv3-edit',
  templateUrl: './organization2-lv3-edit.component.html',
  styleUrls: ['./organization2-lv3-edit.component.css']
})
export class Organization2Lv3EditComponent implements OnInit {

  title: string = 'เพิ่มข้อมูลอำเภอ/เขต';
  code: string = '';
  editModel: any = {};
  lv0Category: any = [];
  lv1Category: any = [];
  lv2Category: any = [];

  listData:any = []; // execl
  importExcel:boolean = false;

  constructor(private serviceProviderService: ServiceProviderService
    , private spinner: NgxSpinnerService
    , private toastr: ToastrService
    , private router: Router
    , private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.editModel.category = 'lv3';
    this.readCategory('lv0');

    this.activetedRoute.queryParams.subscribe(params => {
      let model: any = this.activetedRoute.snapshot.params;
      
      if (model.code == 'import') { // excel
        this.importExcel = true;
      } else {
        this.code = model.code;
      }

      if (this.code != '') {
        this.title = 'แก้ไขข้อมูลอำเภอ/เขต';
        this.read();
      }

    });

  }

  create() {
    let isValid = false;
    if (this.editModel.title == '') {
      this.toastr.warning('กรุณาใส่หัวข้อ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      isValid = true;
    }

    if (isValid) {
      return;
    }

    this.spinner.show();
    this.serviceProviderService.postByPass('organization/create', this.editModel).subscribe(data => {
      this.spinner.hide();
      this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      this.back();
    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });

  }

  read() {
    this.spinner.show();
    this.serviceProviderService.postByPass('organization/read', { code: this.code }).subscribe(data => {
      let model: any = {};
      model = data;
      this.editModel = model.objectData[0];

      // if (this.editModel.categoryList.length > 0)
      //   this.editModel.category = this.editModel.categoryList[0].code;

      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });
  }

  readCategory(lv) {

    this.serviceProviderService.postByPass('organization/category/read', { category: lv }).subscribe(data => {
      let model: any = {};
      model = data;

      this.lv0Category = [];
      model.objectData.forEach(element => {
        this.lv0Category.push({ value: element.code, display: element.title });
      });
    }, err => { });

  }

  readCategoryByLv(param, lv) {

    if (lv == 'lv0') {
      this.editModel.lv0 = param;
      this.serviceProviderService.postByPass('organization/category/read', { category: 'lv1', lv0: param }).subscribe(data => {
        let model: any = {};
        model = data;
        this.lv1Category = [];
        model.objectData.forEach(element => {
          this.lv1Category.push({ value: element.code, display: element.title });
        });
      }, err => { });
    }
    else if (lv == 'lv1') {
      this.editModel.lv1 = param;
      this.serviceProviderService.postByPass('organization/category/read', { category: 'lv2', lv1: param }).subscribe(data => {
        let model: any = {};
        model = data;
        this.lv2Category = [];
        model.objectData.forEach(element => {
          this.lv2Category.push({ value: element.code, display: element.title });
        });
      }, err => { });
    }

  }

  update() {
    let isValid = false;
    if (this.editModel.title == '') {
      this.toastr.warning('กรุณาใส่หัวข้อ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      isValid = true;
    }

    if (isValid) {
      return;
    }

    this.spinner.show();
    this.serviceProviderService.postByPass('organization/update', this.editModel).subscribe(data => {
      this.spinner.hide();
      this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      this.back();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });

  }

  // excel
  onFileChange(ev) {
    this.spinner.show();
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        this.listData = initial[name];
        initial[name].forEach((e, i) => {
          Object.entries(e).forEach(([, value], index) => {
            if(index == 0)
            this.listData[i].codeShort = value.toString();
            if(index == 1)
            this.listData[i].titleShort = value;
            if(index == 2)
            this.listData[i].title = value;
            if(index == 3)
            this.listData[i].titleEN = value;
          });
        });
        this.spinner.hide();
        // return initial;
      }, {});
    }
    reader.readAsBinaryString(file);
  }

  createImport() {
    if (this.listData.length == 0) {
      this.toastr.warning('กรุณาเลือกไฟล์', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      return;
    }

    this.spinner.show();
    this.listData.forEach(e => {
      this.editModel.codeShort = e.codeShort;
      this.editModel.titleShort = e.titleShort;
      this.editModel.title = e.title;
      this.editModel.titleEN = e.titleEN;
      this.serviceProviderService.postByPass('organization/create', this.editModel).subscribe(data => {
        this.spinner.hide();
        this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
        this.back();
      }, err => {
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
      });
    });
  }
  // end excel

  back() {
    this.router.navigate(['organization'], { skipLocationChange: true });
  }

}
