import { Component, OnInit, Inject } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';
import { ServiceProviderService } from '../shared/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-organization2',
  templateUrl: './organization2.component.html',
  styleUrls: ['./organization2.component.css']
})
export class Organization2Component implements OnInit {

  editModel: any = {};
  lv0: any = [];
  lv1: any = [];
  lv2: any = [];
  lv3: any = [];
  lv4: any = [];

  checkAllLv0: boolean = false;
  checkAllLv1: boolean = false;
  checkAllLv2: boolean = false;
  checkAllLv3: boolean = false;
  checkAllLv4: boolean = false;
  searchModel: any = {};

  paginationLModelLv0: any = { itemsPerPage: 10, currentPage: 1, totalItems: 10, id: 'lv0' }; // <----- Pagination
  paginationLModelLv1: any = { itemsPerPage: 10, currentPage: 1, totalItems: 10, id: 'lv1' }; // <----- Pagination
  paginationLModelLv2: any = { itemsPerPage: 10, currentPage: 1, totalItems: 10, id: 'lv2' }; // <----- Pagination
  paginationLModelLv3: any = { itemsPerPage: 10, currentPage: 1, totalItems: 10, id: 'lv3' }; // <----- Pagination
  paginationLModelLv4: any = { itemsPerPage: 10, currentPage: 1, totalItems: 10, id: 'lv4' }; // <----- Pagination

  calLv0: string = ''; // <----- Pagination
  calLv1: string = ''; // <----- Pagination
  calLv2: string = ''; // <----- Pagination
  calLv3: string = ''; // <----- Pagination
  calLv4: string = ''; // <----- Pagination

  constructor(private serviceProviderService: ServiceProviderService, private spinner: NgxSpinnerService, private toastr: ToastrService, private router: Router, private activetedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.read();
  }

  create(lv) {

    this.router.navigate(['organization-'+ lv +'-edit', ''], { skipLocationChange: true });

    // if (lv == 'lv0')
    //   this.router.navigate(['organization-lv0-edit', ''], { skipLocationChange: true });

    // if (lv == 'lv1')
    //   this.router.navigate(['organization-lv1-edit', ''], { skipLocationChange: true });

    // if (lv == 'lv2')
    //   this.router.navigate(['organization-lv2-edit', ''], { skipLocationChange: true });

    // if (lv == 'lv3')
    //   this.router.navigate(['organization-lv3-edit', ''], { skipLocationChange: true });

    // if (lv == 'lv4')
    //   this.router.navigate(['organization-lv4-edit', ''], { skipLocationChange: true });

  }

  import(lv) {
    this.router.navigate(['organization-'+ lv +'-edit', 'import'], { skipLocationChange: true });
  }

  read(param, lv) {

    this.spinner.show();

    if (lv == 'lv0') {

      let skip = this.paginationLModelLv0.currentPage == 1 ? 0 : (this.paginationLModelLv0.currentPage * this.paginationLModelLv0.itemsPerPage) - this.paginationLModelLv0.itemsPerPage;
      let limit = this.paginationLModelLv0.itemsPerPage;
      let title = param;

      this.serviceProviderService.post('organization/read', { title: title, category: 'lv0', skip: skip, limit: limit }).subscribe(data => {
        let model: any = {};
        model = data;
        this.lv0 = model.objectData;
        this.paginationLModelLv0.totalItems = model.totalData;

        if ((skip + limit) > this.paginationLModelLv0.totalItems)
          this.calLv0 = 'แสดง ' + (skip + 1) + ' ถึง ' + this.paginationLModelLv0.totalItems + ' จาก ' + this.paginationLModelLv0.totalItems + ' รายการ';
        else
          this.calLv0 = 'แสดง ' + (skip + 1) + ' ถึง ' + (skip + limit) + ' จาก ' + this.paginationLModelLv0.totalItems + ' รายการ';
        
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      });
    }

    if (lv == 'lv1') {

      let skip = this.paginationLModelLv1.currentPage == 1 ? 0 : (this.paginationLModelLv1.currentPage * this.paginationLModelLv1.itemsPerPage) - this.paginationLModelLv1.itemsPerPage;
      let limit = this.paginationLModelLv1.itemsPerPage;
      let title = param;

      this.serviceProviderService.post('organization/read', { title: title, category: 'lv1', skip: skip, limit: limit }).subscribe(data => {
        let model: any = {};
        model = data;
        this.lv1 = model.objectData;
        this.paginationLModelLv1.totalItems = model.totalData;

        if ((skip + limit) > this.paginationLModelLv1.totalItems)
          this.calLv1 = 'แสดง ' + (skip + 1) + ' ถึง ' + this.paginationLModelLv1.totalItems + ' จาก ' + this.paginationLModelLv1.totalItems + ' รายการ';
        else
          this.calLv1 = 'แสดง ' + (skip + 1) + ' ถึง ' + (skip + limit) + ' จาก ' + this.paginationLModelLv1.totalItems + ' รายการ';
        
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      });
    }

    if (lv == 'lv2') {

      let skip = this.paginationLModelLv2.currentPage == 1 ? 0 : (this.paginationLModelLv2.currentPage * this.paginationLModelLv2.itemsPerPage) - this.paginationLModelLv2.itemsPerPage;
      let limit = this.paginationLModelLv2.itemsPerPage;
      let title = param;

      this.serviceProviderService.post('organization/read', { title: title, category: 'lv2', skip: skip, limit: limit }).subscribe(data => {
        let model: any = {};
        model = data;
        this.lv2 = model.objectData;
        this.paginationLModelLv2.totalItems = model.totalData;

        if ((skip + limit) > this.paginationLModelLv2.totalItems)
          this.calLv2 = 'แสดง ' + (skip + 1) + ' ถึง ' + this.paginationLModelLv2.totalItems + ' จาก ' + this.paginationLModelLv2.totalItems + ' รายการ';
        else
          this.calLv2 = 'แสดง ' + (skip + 1) + ' ถึง ' + (skip + limit) + ' จาก ' + this.paginationLModelLv2.totalItems + ' รายการ';
        
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      });
    }

    if (lv == 'lv3') {

      let skip = this.paginationLModelLv3.currentPage == 1 ? 0 : (this.paginationLModelLv3.currentPage * this.paginationLModelLv3.itemsPerPage) - this.paginationLModelLv3.itemsPerPage;
      let limit = this.paginationLModelLv3.itemsPerPage;
      let title = param;

      this.serviceProviderService.post('organization/read', { title: title, category: 'lv3', skip: skip, limit: limit }).subscribe(data => {
        let model: any = {};
        model = data;
        this.lv3 = model.objectData;
        this.paginationLModelLv3.totalItems = model.totalData;

        if ((skip + limit) > this.paginationLModelLv3.totalItems)
          this.calLv3 = 'แสดง ' + (skip + 1) + ' ถึง ' + this.paginationLModelLv3.totalItems + ' จาก ' + this.paginationLModelLv3.totalItems + ' รายการ';
        else
          this.calLv3 = 'แสดง ' + (skip + 1) + ' ถึง ' + (skip + limit) + ' จาก ' + this.paginationLModelLv3.totalItems + ' รายการ';

        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      });
    }

    if (lv == 'lv4') {

      let skip = this.paginationLModelLv4.currentPage == 1 ? 0 : (this.paginationLModelLv4.currentPage * this.paginationLModelLv4.itemsPerPage) - this.paginationLModelLv4.itemsPerPage;
      let limit = this.paginationLModelLv4.itemsPerPage;
      let title = param;

      this.serviceProviderService.post('organization/read', { title: title, category: 'lv4', skip: skip, limit: limit }).subscribe(data => {
        let model: any = {};
        model = data;
        this.lv4 = model.objectData;
        this.paginationLModelLv4.totalItems = model.totalData;

        if ((skip + limit) > this.paginationLModelLv4.totalItems)
          this.calLv4 = 'แสดง ' + (skip + 1) + ' ถึง ' + this.paginationLModelLv4.totalItems + ' จาก ' + this.paginationLModelLv4.totalItems + ' รายการ';
        else
          this.calLv4 = 'แสดง ' + (skip + 1) + ' ถึง ' + (skip + limit) + ' จาก ' + this.paginationLModelLv4.totalItems + ' รายการ';

        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      });
    }

  }

  readCurrentPage(param, lv) {

    if (lv == 'lv0') {
      this.paginationLModelLv0.currentPage = parseInt(param);
      this.read('', 'lv0');
    }

    if (lv == 'lv1') {
      this.paginationLModelLv1.currentPage = parseInt(param);
      this.read('', 'lv1');
    }

    if (lv == 'lv2') {
      this.paginationLModelLv2.currentPage = parseInt(param);
      this.read('', 'lv2');
    }

    if (lv == 'lv3') {
      this.paginationLModelLv3.currentPage = parseInt(param);
      this.read('', 'lv3');
    }

    if (lv == 'lv4') {
      this.paginationLModelLv4.currentPage = parseInt(param);
      this.read('', 'lv4');
    }

  }

  readPerPage(param, lv) {

    if (lv == 'lv0') {
      this.paginationLModelLv0.itemsPerPage = parseInt(param);
      this.read('', 'lv0');
    }

    if (lv == 'lv1') {
      this.paginationLModelLv1.itemsPerPage = parseInt(param);
      this.read('', 'lv1');
    }

    if (lv == 'lv2') {
      this.paginationLModelLv2.itemsPerPage = parseInt(param);
      this.read('', 'lv2');
    }

    if (lv == 'lv3') {
      this.paginationLModelLv3.itemsPerPage = parseInt(param);
      this.read('', 'lv3');
    }

    if (lv == 'lv4') {
      this.paginationLModelLv4.itemsPerPage = parseInt(param);
      this.read('', 'lv4');
    }

  }

  update(param, lv) {

    if (lv == 'lv0')
      this.router.navigate(['organization-lv0-edit', param], { skipLocationChange: true });

    if (lv == 'lv1')
      this.router.navigate(['organization-lv1-edit', param], { skipLocationChange: true });

    if (lv == 'lv2')
      this.router.navigate(['organization-lv2-edit', param], { skipLocationChange: true });

    if (lv == 'lv3')
      this.router.navigate(['organization-lv3-edit', param], { skipLocationChange: true });

    if (lv == 'lv4')
      this.router.navigate(['organization-lv4-edit', param], { skipLocationChange: true });

  }

  delete(lv) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialog, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {

        if (lv == 'lv0') {
          let code = '';

          this.lv0.filter(c => c.isSelected).forEach(element => {
            if (code == '')
              code = element.code;
            else
              code = code + ',' + element.code;
          });

          this.serviceProviderService.post('organization/delete', { code: code }).subscribe(data => {
            this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 1000 });
            this.read('', 'lv0');
            this.checkAllLv0 = false;
          }, err => {
            this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
          });
        }
        else if (lv == 'lv1') {
          let code = '';

          this.lv1.filter(c => c.isSelected).forEach(element => {
            if (code == '')
              code = element.code;
            else
              code = code + ',' + element.code;
          });

          this.serviceProviderService.post('organization/delete', { code: code }).subscribe(data => {
            this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 1000 });
            this.read('', 'lv1');
            this.checkAllLv1 = false;
          }, err => {
            this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
          });
        }
        else if (lv == 'lv2') {
          let code = '';

          this.lv2.filter(c => c.isSelected).forEach(element => {
            if (code == '')
              code = element.code;
            else
              code = code + ',' + element.code;
          });

          this.serviceProviderService.post('organization/delete', { code: code }).subscribe(data => {
            this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 1000 });
            this.read('', 'lv2');
            this.checkAllLv2 = false;
          }, err => {
            this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
          });
        }
        else if (lv == 'lv3') {
          let code = '';

          this.lv3.filter(c => c.isSelected).forEach(element => {
            if (code == '')
              code = element.code;
            else
              code = code + ',' + element.code;
          });

          this.serviceProviderService.post('organization/delete', { code: code }).subscribe(data => {
            this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 1000 });
            this.read('', 'lv3');
            this.checkAllLv3 = false;
          }, err => {
            this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
          });
        }
        else if (lv == 'lv4') {
          let code = '';

          this.lv4.filter(c => c.isSelected).forEach(element => {
            if (code == '')
              code = element.code;
            else
              code = code + ',' + element.code;
          });

          this.serviceProviderService.post('organization/delete', { code: code }).subscribe(data => {
            this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 1000 });
            this.read('', 'lv4');
            this.checkAllLv4 = false;
          }, err => {
            this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
          });
        }

      }
    });
  }

  checkAll(lv) {

    if (lv == 'lv0') {
      if (this.checkAllLv0) {
        this.lv0.forEach(element => {
          element.isSelected = true;
        });
      }
      else {
        this.lv0.forEach(element => {
          element.isSelected = false;
        });
      }
    }
    else if (lv == 'lv1') {
      if (this.checkAllLv1) {
        this.lv1.forEach(element => {
          element.isSelected = true;
        });
      }
      else {
        this.lv1.forEach(element => {
          element.isSelected = false;
        });
      }
    }
    else if (lv == 'lv2') {
      if (this.checkAllLv2) {
        this.lv2.forEach(element => {
          element.isSelected = true;
        });
      }
      else {
        this.lv2.forEach(element => {
          element.isSelected = false;
        });
      }
    }
    else if (lv == 'lv3') {
      if (this.checkAllLv3) {
        this.lv3.forEach(element => {
          element.isSelected = true;
        });
      }
      else {
        this.lv3.forEach(element => {
          element.isSelected = false;
        });
      }
    }
    else if (lv == 'lv4') {
      if (this.checkAllLv4) {
        this.lv4.forEach(element => {
          element.isSelected = true;
        });
      }
      else {
        this.lv4.forEach(element => {
          element.isSelected = false;
        });
      }
    }

  }

}

@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: 'confirm-delete-dialog.html',
})
export class ConfirmDeleteDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  cancel() {
    this.dialogRef.close(false);
  }

  ok() {
    this.dialogRef.close(true);
  }
}
