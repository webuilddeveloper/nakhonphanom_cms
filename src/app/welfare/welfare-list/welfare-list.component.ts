import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from 'src/app/shared/service-provider.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/shared/excel.service';

@Component({
  selector: 'app-welfare-list',
  templateUrl: './welfare-list.component.html',
  styleUrls: ['./welfare-list.component.css']
})
export class WelfareListComponent implements OnInit {

  @Input() messageInput: any = [];
  @Output() messageToEmit = new EventEmitter<any>();
  @Input() paginationModel: any = {}; // <----- Pagination
  category: any = {};
  permission: any;
  permissionStr:any;
  chkall: boolean = false;
  itemSelectedList: any = [];
  itemSelected: boolean = false;
  searchModel: any = {};

  constructor(private router: Router, private serviceProviderService: ServiceProviderService  , private excelService: ExcelService, public dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    
    if (localStorage.getItem('category') != null) {
      this.category = JSON.parse(localStorage.getItem('category'));
    }

    if (localStorage.getItem('welfarePage') != null) {
      let model: any = [];
      this.permission = JSON.parse(localStorage.getItem('welfarePage'));


      // convert permission list to string
      for (let index = 0; index < this.permission.length; index++) {
        if (index == 0)
          this.permissionStr = this.permission[index].title;
        else
          this.permissionStr = this.permissionStr + "," + this.permission[index].title;
      }
    }

  }

  search() {
    this.searchModel.mode = 'search';
    this.messageToEmit.emit(this.searchModel);
  }
  
  create() {
    this.router.navigate(['welfare-edit', ''], { skipLocationChange: true });
  }

  view(param) {
    this.router.navigate(['welfare-edit', param], { skipLocationChange: true });
  }

  edit(param) {
    this.router.navigate(['welfare-edit', param], { skipLocationChange: true });
  }

  delete(param, idx) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialog, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {
        this.serviceProviderService.post('welfare/delete', { code: param.code }).subscribe(data => {
          this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 2000 });
          this.messageInput.splice(idx, 1);
        }, err => {
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
        });
      }
    });
  }

  reOrder() {
    let model = '';
    let chk = this.messageInput.filter(c => c.isSelected);

    if (chk.length == 0) {
      this.toastr.warning('กรุณาเลือกรายการที่ต้องการ Re Order', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      return;
    }else if(chk.length > 20) {
      this.toastr.warning('สามารถ Re Order ได้สูงสุด 20 รายการ', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDeleteDialog, { disableClose: true, data: { title: "ต้องการ Re Order รายการที่เลือกใช่หรือไม่?" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {
        // check permission
        let chk = this.messageInput.filter(c => c.isSelected);

        chk.forEach(c => {
          // this.checkPermission(c.category, 'deleteAction');
          if (model == '') {
            model = c.code;
          }
          else {
            model = model + ',' + c.code;
          }
        })

        this.serviceProviderService.post('welfare/reorder', { code: model }).subscribe(data => {
          this.toastr.success('Re Order เรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 2000 });
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }, err => {
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
        });
      }
    });
  }

  deleteAll() {
    let model = '';

    const dialogRef = this.dialog.open(ConfirmDeleteDialog, { disableClose: true, data: { title: "ต้องการลบรายการที่เลือกใช่หรือไม่?" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {
        // check permission

        let chk = this.messageInput.filter(c => c.isSelected);

        chk.forEach(c => {
          // this.checkPermission(c.category, 'deleteAction');
          if (model == '') {
            model = c.code;
          }
          else {
            model = model + ',' + c.code;
          }
        })
        
        this.serviceProviderService.post('welfare/delete', { code: model }).subscribe(data => {
          this.toastr.success('ลบรายการเรียบร้อย', 'แจ้งเตือนระบบ', { timeOut: 2000 });
          setTimeout(() => {
            window.location.reload()
          },2000)
        }, err => {
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
        });
      }
    });
  }

  checkPermission(param, param2) {

    if (param2 == 'updateAction') {
      let model = this.permission.filter(c => c.title == param);
      if (model.length > 0) {
        return model[0].updateAction;
      }
    }
    else if (param2 == 'readAction') {
      let model = this.permission.filter(c => c.title == param);
      if (model.length > 0) {
        return model[0].readAction;
      }
    }
    else if (param2 == 'deleteAction') {
      let model = this.permission.filter(c => c.title == param);
      if (model.length > 0) {
        return model[0].deleteAction;
      }
    }

  }

  // start select user
  async isAllSelected(param, param2) {
    let status = await this.checkPermission(param, param2)
    if(status) {
      this.itemSelected = await this.messageInput.every(function (item: any) {
        return item.isSelected == true;
      })
    }
    this.getCheckedItemList();
  }

  async checkUncheckAll() {
    for (var i = 0; i < this.messageInput.length; i++) {
      let status = await this.checkPermission(this.messageInput[i].category, 'deleteAction');
      
      if(status) {
        this.messageInput[i].isSelected = this.itemSelected;
      }
    }
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.itemSelectedList = [];
    for (var i = 0; i < this.messageInput.length; i++) {
      if (this.messageInput[i].isSelected)
        this.itemSelectedList.push(this.messageInput[i]);
    }
  }
  // end select uxs

  filterPerPage(perPage) {
    // call read by perpage
  }

  setPerPage(param) {
    this.searchModel.mode = 'search';
    this.searchModel.limit = parseInt(param);
    this.messageToEmit.emit(this.searchModel);
  }

  exportAsXLSX(): void {

    this.serviceProviderService.post('welfare/read', {'skip':0,'limit':999999,'permission':this.permissionStr}).subscribe(data => {
      let model: any = {};
      let result: any = [];
      model = data;
      // this.data = model.objectData; // <----- Pagination
      model.objectData.forEach((e, index) => {

        var status = ''
        if(e.isActive)
          status = 'ตรวจสอบแล้ว';
        else
        status = 'รอตรวจสอบ';


        result.push({
          'ลำดับ': index + 1,
          'หัวข้อ': e.title,
          'หมวดหมู่': e.categoryList[0].title,
          'สร้างโดย': e.createBy,
          'สร้างวันที่': e.createDate,
          'อัพเดทโดย': e.updateBy,
          'อัพเดทวันที่': e.updateDate,
          // 'รหัส': e.code,
          // 'สถานะ': status,
        })
      });

      this.excelService.exportAsExcelFile(result, 'รายงานสวัสดิการอาสา');
    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });
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
