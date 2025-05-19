
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewEncapsulation, SimpleChanges, Inject, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';
import { FileUploadService } from 'src/app/shared/file-upload.service';
import { ServiceProviderService } from 'src/app/shared/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionService } from 'src/app/shared/permission.service';

@Component({
  selector: 'app-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.css']
})
export class NotificationEditComponent implements OnInit {
  listCategory: any = [];
  stringToken: string = '';
  editModel: any = {sequence: 10, language: 'th' };
  code: any = '';
  title = 'เพิ่มข้อมูลส่งแจ้งเตือนไปยังสมาชิก';
  organization: any; // <----- Organization เก็บค่า องกรค์
  category: any; // <----- Category เพื่ออ่านสิทธิ์ Organization ของ User ว่าสามารถเห็นระดับไหน
  permission: any; // <----- Permission ส่งเข้า Read เพื่อให้เห็นเฉพาะ Category ที่ถูกเซตไว้กับ Role สรุปคือ (Category Code List)
  permissionList: any; // <----- PermissionList ไว้สำหรับตรวจสอบว่า Category มีสิทธิ์ในการ Create Read Update Read หรือเปล่า
  isSelected: boolean = false;
  isSelectedLength: any = { page: 1, length: 0 };
  categorySelectList: any = [];
  isShow: string = '3';
  userList: any = [];
  userSelected: boolean = false;
  userSelectedList: any = [];
  categorySelected: string = '';
  languageSelected: string = '';
  filterList: any = [];
  filterSelected: string = 'ชาย';
  nameSelected: string = '';

  hiddenButtonUser: string = '';
  userCriteria: any = {};
  categoryCriteria: any = {};
  userSearchGender: string = '';
  notificationSendList: any = [];

  isAdvanceSearch: boolean = true;
  criteriaModel: any = {};

  userPaginationDiffer: KeyValueDiffer<string, any>; // <----- Pagination
  categoryPaginationDiffer: KeyValueDiffer<string, any>; // <----- Pagination
  userSelectedPaginationDiffer: KeyValueDiffer<string, any>; // <----- Pagination

  userPagination: any = { itemsPerPage: 5, currentPage: 1, totalItems: 0, itemsPerPageString: '5' };
  categoryPagination: any = { itemsPerPage: 10, currentPage: 1, totalItems: 0 };
  userSelectedPagination: any = { itemsPerPage: 10, currentPage: 1, totalItems: 0 };

  lv0Category: any = [{ value: '', display: 'ทั้งหมด' }]; // <----- Organization
  lv1Category: any = [{ value: '', display: 'ทั้งหมด' }]; // <----- Organization
  lv2Category: any = [{ value: '', display: 'ทั้งหมด' }]; // <----- Organization
  lv3Category: any = [{ value: '', display: 'ทั้งหมด' }]; // <----- Organization
  lv4Category: any = [{ value: '', display: 'ทั้งหมด' }]; // <----- Organization
  isReadOGLv0: boolean; // <----- Organization
  isReadOGLv1: boolean; // <----- Organization
  isReadOGLv2: boolean; // <----- Organization
  isReadOGLv3: boolean; // <----- Organization
  isReadOGLv4: boolean; // <----- Organization

  totalData: number = 0;
  totalMemberSelect: number = 0;
  objectData: any; // <----- ข้อมูลสมาชิกทั้งหมด
  objectData2: any; // <----- แสดงผลในตารางสมาชิก
  objectDataSelect: any = []; // <----- ข้อมูลสมาชิกที่เลือก ใช้ส่งเข้า service
  objectWhat: any = [];
  msg: string = '';

  listCategoryLv0: any;
  listCategoryLv1: any;
  listCategoryLv2: any;

  constructor(private fileuploadService: FileUploadService
    , private serviceProviderService: ServiceProviderService
    , private permissionService: PermissionService
    , private spinner: NgxSpinnerService
    , private toastr: ToastrService
    , private router: Router
    , public dialog: MatDialog
    , private differs: KeyValueDiffers
    , private activetedRoute: ActivatedRoute) {

      this.listCategory = [
        {
          value: 'mainPage',
          display: 'กำหนดเอง'
        },
        {
          value: 'newsPage',
          display: 'ข่าวประชาสัมพันธ์'
        },
        {
          value: 'eventPage',
          display: 'ปฎิทินกิจกรรม'
        },
        {
          value: 'contactPage',
          display: 'เบอร์โทรฉุกเฉิน'
        },
        {
          value: 'knowledgePage',
          display: 'คลังความรู้'
        },
        {
          value: 'privilegePage',
          display: 'สิทธิประโยชน์'
        },
        {
          value: 'poiPage',
          display: 'สถานที่น่าสนใจ'
        },
        {
          value: 'pollPage',
          display: 'แบบสำรวจ (Poll)'
        },
        {
          value: 'warningPage',
          display: 'อาสาเตือนภัย'
        }
      ];

    this.filterList = [
      {
        value: 'ชาย',
        display: 'ชาย',
        selected: false
      },
      {
        value: 'หญิง',
        display: 'หญิง',
        selected: false
      },
      {
        value: '',
        display: 'ทั้งหมด',
        selected: true
      }
    ]

  }

  ngOnInit(): void {

    this.permission = this.permissionService.readPermission('notificationPage');
    this.permissionList = this.permissionService.readLocalStorage('notificationPage');
    this.organization = this.permissionService.readLocalStorage('organization');
    this.category = this.permissionService.readLocalStorage('category');

    this.activetedRoute.queryParams.subscribe(params => {
      let model: any = this.activetedRoute.snapshot.params;
      this.code = model.code;
      this.userCriteria.limit = 10;
      this.userCriteria.skip = 0;
      if (this.code != '') {
        this.title = 'แก้ไขข้อมูลส่งแจ้งเตือนไปยังสมาชิก';
        this.read();
        // this.notificationSendRead();
      }
    });


    this.editModel.category = 'mainPage';
    this.hiddenButtonUser = 'ALL';

    this.readOrganization('lv0', '');

    this.userPaginationDiffer = this.differs.find(this.userPagination).create(); // <----- Pagination
    this.categoryPaginationDiffer = this.differs.find(this.categoryPagination).create(); // <----- Pagination
    this.userSelectedPaginationDiffer = this.differs.find(this.userSelectedPagination).create(); // <----- Pagination

  }
  
  search() {
    this.userPagination.currentPage = 1;
    this.userPagination.itemsPerPage = 5;
    this.criteriaModel.skip = 0;
    this.criteriaModel.limit = 5;
    this.totalMemberSelect = 0;
    this.objectData = [];
    this.readMember();
  }

  create() {

    let isValid = false;
    if (this.editModel.title == '') {
      this.toastr.warning('กรุณาใส่หัวข้อ', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (this.editModel.category == '') {
      this.toastr.warning('กรุณาเลือกหมวดหมู', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (isValid)
      return;

    this.spinner.show();

    this.editModel.items = this.objectData.filter(c => c.isSelected);

    this.serviceProviderService.post('notification/create', this.editModel).subscribe(async data => {
      let model: any = {};
      model = data;
      // let letPush = false;
      if (model.status === 'S') {

        this.spinner.hide();
        this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
        setTimeout(() => {
          this.back();
        }, 1000);

      } else {
        this.spinner.hide();
        this.toastr.warning('กรุณาใส่หัวข้อ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      }

    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });

    if (this.totalMemberSelect != 0)
      this.push();
  }

  push() {

    let selected = this.objectData.filter(c => c.isSelected && c.token != null && c.isOnline);

    this.stringToken = '';
    for (let index = 0; index < selected.length; index++) {

      if (index == 0) {
        this.stringToken = selected[index].token;
      }
      else {
        this.stringToken = this.stringToken + ',' + selected[index].token;
      }
    }
    // this.stringToken = '';
    // for (let index = 0; index < this.objectData.length; index++) {

    //   if (index == 0)
    //   {
    //     this.stringToken = this.objectData[index].token;
    //   }
    //   else
    //   {
    //     this.stringToken = this.stringToken + ',' + this.objectData[index].token;
    //   }

    // }

    let sendDataPush = {
      title: this.editModel.title,
      token: this.stringToken,
      body: this.editModel.description,
      data: {
        code: this.editModel.reference,
        page: this.editModel.category
      }
    }

    this.serviceProviderService.post('notification/push', sendDataPush).subscribe(data => {
      let model: any = {};
      model = data;

      if (model.status === 'E') {
        this.toastr.warning(model.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      }

    }, err => {
      // this.spinner.hide();

      this.serviceProviderService.post('notification/push', sendDataPush).subscribe(data => { }, err => { this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 }); });

    });
  }

  read() {
    this.spinner.show();
    this.serviceProviderService.post('notification/read', { code: this.code, permission: this.permission }).subscribe(data => {
      let model: any = {};
      model = data;
      this.editModel = model.objectData[0];
      this.languageSelected = this.editModel.language;
      if (this.editModel.reference != null || '') {
        this.categorySelected = this.editModel.category;
        this.checkCategory(this.editModel.reference);
      }
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });
  }

  readMember() {

    this.criteriaModel.skip = this.userPagination.currentPage == 1 ? 0 : (this.userPagination.currentPage * this.userPagination.itemsPerPage) - this.userPagination.itemsPerPage; // <----- Pagination
    this.criteriaModel.limit = this.userPagination.itemsPerPage;
    this.userPagination.itemsPerPageString = '5';

    if (this.criteriaModel.categoryLv0 != '') {

      this.criteriaModel.organization = 'manual';

      this.criteriaModel.lv0 = this.criteriaModel.categoryLv0;
      this.criteriaModel.lv1 = this.criteriaModel.categoryLv1;

      this.serviceProviderService.post('notification/member2/read', this.criteriaModel).subscribe(data => {
        let model: any = {};
        model = data;

        this.userPagination.totalItems = model.totalData;
        // this.totalMemberSelect = model.totalData;
        this.objectData2 = model.objectData;

        if (this.criteriaModel.status == '') {
          this.objectData.forEach(e => {

            let idx = this.objectData2.findIndex(item => item.code === e.code);
            if (idx != -1) {
              this.objectData2[idx].isSelected = true;
            }

          });
          this.checkUserSelectedAll();
        } else {
          this.userPagination.totalItems = model.totalData;
          this.totalMemberSelect = model.objectData.length;
          // this.totalMemberSelect = model.totalData;
          this.objectData = model.objectData;

          this.objectData.forEach(element => {
            element.isSelected = true;
          });
        }

      }, err => {
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
      });
    }
    else {
      this.serviceProviderService.post('notification/member/read', this.criteriaModel).subscribe(data => {
        let model: any = {};
        model = data;

        this.userPagination.totalItems = model.totalData;
        // this.totalMemberSelect = model.totalData;
        this.objectData2 = model.objectData;

        if (this.criteriaModel.status == '') {
          this.objectData.forEach(e => {
            let idx = this.objectData2.findIndex(item => item.code === e.code);
            if (idx != -1) {
              this.objectData2[idx].isSelected = true;
            }

          });
          this.checkUserSelectedAll();
        } else {
          this.userPagination.totalItems = model.totalData;
          this.totalMemberSelect = model.objectData.length;
          // this.totalMemberSelect = model.totalData;
          this.objectData = model.objectData;

          this.objectData.forEach(element => {
            element.isSelected = true;
          });
        }

        // this.objectData.forEach(e => {

        //   let idx = this.objectData2.findIndex(item => item.username === e.username);
        //   if (idx != -1) {
        //     this.objectData2[idx].isSelected = true;
        //   }

        // });

        // this.checkUserSelectedAll()

        // if (this.userSelected) {
        //   this.objectData.forEach(element => {
        //     element.isSelected = this.userSelected;
        //   });
        // }else{
        //   model.objectData.forEach(e => {
        //     this.objectDataSelect.forEach(o => {
        //       if(e.code == o.code)
        //         e.isSelected = o.isSelected
        //     });
        //   });

        // this.totalMemberSelect = this.objectDataSelect.length;
        // }

      }, err => {
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
      });
    }
  }

  readMemberAll() {

    this.criteriaModel.skip = this.userPagination.currentPage == 1 ? 0 : (this.userPagination.currentPage * this.userPagination.itemsPerPage) - this.userPagination.itemsPerPage; // <----- Pagination
    this.criteriaModel.limit = 999999;

    this.serviceProviderService.post('notification/member/read', this.criteriaModel).subscribe(data => {
      let model: any = {};
      model = data;

      this.userPagination.totalItems = model.totalData;
      this.totalMemberSelect = model.totalData;
      this.objectData = model.objectData;
      // this.objectDataSelect = model.objectData;

      this.objectData.forEach(element => {
        element.isSelected = true;
      });

    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });

  }
  

  readMemberByStatus() {
    this.criteriaModel.keySearch = '';
    this.criteriaModel.categoryLv0 = '';
    this.criteriaModel.categoryLv1 = '';
    this.criteriaModel.categoryLv2 = '';
    this.criteriaModel.categoryLv3 = '';
    this.criteriaModel.categoryLv4 = '';
    this.criteriaModel.lv0 = '';
    this.criteriaModel.lv1 = '';
    this.criteriaModel.lv2 = '';
    this.criteriaModel.lv3 = '';
    this.criteriaModel.lv4 = '';
    this.userPagination.currentPage = 1;
    this.userPagination.itemsPerPage = 5;
    this.criteriaModel.skip = 0;
    this.criteriaModel.limit = 9999999;
    this.userPagination.itemsPerPageString = '5';
    this.serviceProviderService.post('notification/member/read', this.criteriaModel).subscribe(data => {
      let model: any = {};
      model = data;

      this.userPagination.totalItems = model.totalData;
      // this.totalMemberSelect = model.totalData;
      this.objectData2 = model.objectData;

      if (this.criteriaModel.status == '') {
        this.objectData.forEach(e => {

          let idx = this.objectData2.findIndex(item => item.code === e.code);
          if (idx != -1) {
            this.objectData2[idx].isSelected = true;
          }

        });
        this.checkUserSelectedAll();
      } else {
        this.userPagination.totalItems = model.totalData;
        this.totalMemberSelect = model.objectData.length;
        // this.totalMemberSelect = model.totalData;
        this.objectData = model.objectData;

        this.objectData.forEach(element => {
          element.isSelected = true;
        });
      }

    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });
  
  }

  readOrganization(lv, param) {
    let criteriaModel: any = {};
    criteriaModel.organization = 'manual';
    criteriaModel.skip = 0;
    criteriaModel.limit = 999;
    criteriaModel.category = lv;

    if (lv == 'lv0') {

      this.criteriaModel.categoryLv0 = param;

      this.serviceProviderService.post('organization/category/read', criteriaModel).subscribe(data => {
        let model: any = {};
        model = data;

        this.lv0Category = [{ value: '', display: 'ทั้งหมด' }];
        model.objectData.forEach(element => {
          this.lv0Category.push({ value: element.code, display: element.title });
        });

        if (param != '') {
          criteriaModel.organization = 'manual';
          criteriaModel.skip = 0;
          criteriaModel.limit = 999;
          criteriaModel.category = 'lv1';
          criteriaModel.lv0 = param;

          this.serviceProviderService.post('organization/category/read', criteriaModel).subscribe(data => {
            let model: any = {};
            model = data;

            this.lv1Category = [{ value: '', display: 'ทั้งหมด' }];
            model.objectData.forEach(element => {
              this.lv1Category.push({ value: element.code, display: element.title });
            });

          }, err => {
            this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
          });
        }
        else {
          this.criteriaModel.categoryLv0 = '';
        }

      }, err => {
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
      });
    }
    else if (lv == 'lv1') {

      this.criteriaModel.categoryLv1 = param;

      if (param != '') {
        criteriaModel.organization = 'manual';
        criteriaModel.skip = 0;
        criteriaModel.limit = 999;
        criteriaModel.category = 'lv2';
        criteriaModel.lv1 = param;

        this.serviceProviderService.post('organization/category/read', criteriaModel).subscribe(data => {
          let model: any = {};
          model = data;

          this.lv2Category = [{ value: '', display: 'ทั้งหมด' }];
          model.objectData.forEach(element => {
            this.lv2Category.push({ value: element.code, display: element.title });
          });

        }, err => {
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }

    }
    else if (lv == 'lv2') {

      this.criteriaModel.categoryLv2 = param;

      if (param != '') {
        criteriaModel.organization = 'manual';
        criteriaModel.skip = 0;
        criteriaModel.limit = 999;
        criteriaModel.category = 'lv3';
        criteriaModel.lv2 = param;

        this.serviceProviderService.post('organization/category/read', criteriaModel).subscribe(data => {
          let model: any = {};
          model = data;

          this.lv3Category = [{ value: '', display: 'ทั้งหมด' }];
          model.objectData.forEach(element => {
            this.lv3Category.push({ value: element.code, display: element.title });
          });

        }, err => {
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }

    }
    else if (lv == 'lv3') {

      this.criteriaModel.categoryLv3 = param;

      if (param != '') {
        criteriaModel.organization = 'manual';
        criteriaModel.skip = 0;
        criteriaModel.limit = 999;
        criteriaModel.category = 'lv4';
        criteriaModel.lv3 = param;

        this.serviceProviderService.post('organization/category/read', criteriaModel).subscribe(data => {
          let model: any = {};
          model = data;

          this.lv4Category = [{ value: '', display: 'ทั้งหมด' }];
          model.objectData.forEach(element => {
            this.lv4Category.push({ value: element.code, display: element.title });
          });

        }, err => {
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }

    }
    else if (lv == 'lv4') {

      this.criteriaModel.categoryLv4 = param;

    }


  }

  selectedCategory(param) {
    if (this.editModel.category != param) {
      this.nameSelected = '';
      this.editModel.title = '';
      this.editModel.category = param;
    }
  }

  checkCategory(param) {
    let permissionPage = '';
    let page = '';

    if (this.editModel.category == 'mainPage') {
      this.isShow = '3';
      this.nameSelected = '';

    } else {
      if (this.editModel.category != '') {

        switch (this.editModel.category) {
          case 'mainPage':
            page = 'main'
            break;
          case 'newsPage':
            page = 'news'
            break;
          case 'eventPage':
            page = 'eventCalendar'
            break;
          case 'contactPage':
            page = 'contact'
            break;
          case 'privilegePage':
            page = 'privilege'
            break;
          case 'knowledgePage':
            page = 'knowledge'
            break;
          case 'poiPage':
            page = 'poi'
            break;
          case 'pollPage':
            page = 'poll'
            break;
          case 'suggestionPage':
            page = 'suggestion'
            break;
          case 'warningPage':
            page = 'warning'
            break;
          default:
            break;
        }

        if (localStorage.getItem(this.editModel.category) != null) {
          let model: any = [];
          model = JSON.parse(localStorage.getItem(this.editModel.category));

          for (let index = 0; index < model.length; index++) {
            if (index == 0)
              permissionPage = model[index].title;
            else
              permissionPage = permissionPage + "," + model[index].title;
          }
        }

        this.categoryCriteria.permission = permissionPage;
        this.categoryCriteria.language = this.editModel.language;
        this.serviceProviderService.post(page + '/read', this.categoryCriteria).subscribe(data => {
          let model: any = {};
          model = data;
          this.categoryPagination.totalItems = model.totalData; // <----- Pagination
          this.categoryPagination.itemsPerPage = this.categoryCriteria.limit || 10;
          this.categoryPagination.textPage = 'แสดง ' + (this.categoryCriteria.skip + 1) + ' ถึง ' + (this.categoryCriteria.skip + this.categoryPagination.itemsPerPage) + ' จาก ' + this.categoryPagination.totalItems + ' แถว';

          this.categorySelectList = model.objectData;
          if (param != '') {
            this.categorySelectList.forEach((res) => {
              if (param != '' && res.code == param) {
                res.isSelected = true;
                this.nameSelected = res.title;
              }
            })
          }
          this.spinner.hide();
        }, err => {
          this.spinner.hide();
        });
      }
    }
  }

  checkPermission(param, param2) {

    if (param2 == 'createAction') {
      let model = this.permissionList.filter(c => c.title == param);
      if (model.length > 0 && this.code == '') {
        return model[0].createAction;
      }
    }
    else if (param2 == 'updateAction') {
      let model = this.permissionList.filter(c => c.title == param);
      if (model.length > 0 && this.code != '') {
        return model[0].updateAction;
      }
    }
    else if (param2 == 'approveAction') {
      let model = this.permissionList.filter(c => c.title == param);
      if (model.length > 0) {
        if (!model[0].approveAction) {
          this.editModel.isActive = false;
        }

        return model[0].approveAction;
      }
    }

  }

  // <----- Organization
  checkOG(param, param2) {

    if (param2 == 'male') {
      this.editModel.organization = 'male';
      this.editModel.chkMale = param;
      this.editModel.chkFemale = false;
      this.editModel.chkAutoOG = false;
      this.editModel.chkManualOG = false;

      if (!this.editModel.chkMale && !this.editModel.chkFemale && !this.editModel.chkAutoOG && !this.editModel.chkManualOG)
        this.editModel.chkAutoOG = true;
    }
    else if (param2 == 'female') {
      this.editModel.organization = 'female';
      this.editModel.chkMale = false;
      this.editModel.chkFemale = param;
      this.editModel.chkAutoOG = false;
      this.editModel.chkManualOG = false;

      if (!this.editModel.chkMale && !this.editModel.chkFemale && !this.editModel.chkAutoOG && !this.editModel.chkManualOG)
        this.editModel.chkAutoOG = true;
    }
    else if (param2 == 'auto') {
      this.editModel.organization = 'auto';
      this.editModel.chkMale = false;
      this.editModel.chkFemale = false;
      this.editModel.chkAutoOG = param;
      this.editModel.chkManualOG = false;

      if (!this.editModel.chkMale && !this.editModel.chkFemale && !this.editModel.chkAutoOG && !this.editModel.chkManualOG)
        this.editModel.chkAutoOG = true;
    }
    else if (param2 == 'manual') {
      this.editModel.organization = 'manual';
      this.editModel.chkMale = false;
      this.editModel.chkFemale = false;
      this.editModel.chkAutoOG = false;
      this.editModel.chkManualOG = param;

      this.lv4Category = [];
      this.lv3Category = [];
      this.lv2Category = [];
      this.lv1Category = [];
      this.lv0Category = [];

      if (!this.editModel.chkMale && !this.editModel.chkFemale && !this.editModel.chkAutoOG && !this.editModel.chkManualOG) {
        this.editModel.chkAutoOG = true;
        this.editModel.organization = 'auto';
      }

    }

    this.organization.forEach(og => {
      if (og.lv4 != '') {
        // this.editModel.organization = 'lv4';
        this.serviceProviderService.post('organization/read', { category: 'lv4' }).subscribe(data => {
          let model: any = {};
          model = data;

          let arr: any = [];
          let split = og.lv4.split(',');
          split.forEach(element => {
            let idx = model.objectData.findIndex(item => item.code === element);
            if (idx != -1) {

              let display = '';
              if (this.lv3Category.length > 0) {
                let idxy = this.lv3Category.findIndex(item => item.code === model.objectData[idx].lv0);
                if (idxy != -1)
                  display = this.lv3Category[idxy] + ' - ';

              }

              model.objectData[idx].display = display + model.objectData[idx].title;

              let idxx = this.lv4Category.findIndex(item => item.code === model.objectData[idx].code);
              if (idxx == -1)
                this.lv4Category.push(model.objectData[idx]);
              // arr.push({ title: model.objectData[idx].title, display: model.objectData[idx].title, code: model.objectData[idx].code, check: false });
            }
          });

          // this.lv4Category = arr;

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          //debugger
          setTimeout(() => {
            if (this.isReadOGLv4) {
              let lvContent = this.editModel.lv4.split(',');
              lvContent.forEach(element => {
                let idx = this.lv4Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv4Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv4', this.lv4Category[idx]);
                }
              });
              this.isReadOGLv4 = false;
            }
          }, 2500);

          this.spinner.hide();
        }, err => {
          this.spinner.hide();
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }
      else if (og.lv3 != '') {
        // this.editModel.organization = 'lv3';
        this.serviceProviderService.post('organization/read', { category: 'lv3' }).subscribe(data => {
          let model: any = {};
          model = data;

          let arr: any = [];
          let split = og.lv3.split(',');
          split.forEach(element => {
            let idx = model.objectData.findIndex(item => item.code === element);
            if (idx != -1) {

              let display = '';
              if (this.lv2Category.length > 0) {
                let idxy = this.lv2Category.findIndex(item => item.code === model.objectData[idx].lv0);
                if (idxy != -1)
                  display = this.lv2Category[idxy] + ' - ';

              }

              model.objectData[idx].display = display + model.objectData[idx].title;

              let idxx = this.lv3Category.findIndex(item => item.code === model.objectData[idx].code);
              if (idxx == -1)
                this.lv3Category.push(model.objectData[idx]);
              // arr.push({ title: model.objectData[idx].title, display: model.objectData[idx].title, code: model.objectData[idx].code, check: false });
            }
          });


          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          //debugger
          setTimeout(() => {
            if (this.isReadOGLv3) {
              let lvContent = this.editModel.lv3.split(',');
              lvContent.forEach(element => {
                let idx = this.lv3Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv3Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv3', this.lv3Category[idx]);
                }
              });
              this.isReadOGLv3 = false;
            }
          }, 2000);

          this.spinner.hide();
        }, err => {
          this.spinner.hide();
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }
      else if (og.lv2 != '') {
        // this.editModel.organization = 'lv2';
        this.serviceProviderService.post('organization/read', { category: 'lv2' }).subscribe(data => {
          let model: any = {};
          model = data;

          let arr: any = [];
          let split = og.lv2.split(',');
          split.forEach(element => {
            let idx = model.objectData.findIndex(item => item.code === element);
            if (idx != -1) {

              let display = '';
              if (this.lv1Category.length > 0) {
                let idxy = this.lv1Category.findIndex(item => item.code === model.objectData[idx].lv0);
                if (idxy != -1)
                  display = this.lv1Category[idxy] + ' - ';

              }

              model.objectData[idx].display = display + model.objectData[idx].title;

              let idxx = this.lv2Category.findIndex(item => item.code === model.objectData[idx].code);
              if (idxx == -1)
                this.lv2Category.push(model.objectData[idx]);
              // arr.push({ title: model.objectData[idx].title, display: model.objectData[idx].title, code: model.objectData[idx].code, check: false });
            }
          });

          // this.lv2Category = arr;

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          //debugger
          setTimeout(() => {
            if (this.isReadOGLv2) {
              let lvContent = this.editModel.lv2.split(',');
              lvContent.forEach(element => {
                let idx = this.lv2Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv2Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv2', this.lv2Category[idx]);
                }
              });
              this.isReadOGLv2 = false;
            }
          }, 1500);

          this.spinner.hide();
        }, err => {
          this.spinner.hide();
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }
      else if (og.lv1 != '') {
        // this.editModel.organization = 'lv1';
        this.serviceProviderService.post('organization/read', { category: 'lv1' }).subscribe(data => {
          let model: any = {};
          model = data;

          let arr: any = [];
          let split = og.lv1.split(',');
          split.forEach(element => {
            let idx = model.objectData.findIndex(item => item.code === element);
            if (idx != -1) {

              let display = '';
              if (this.lv0Category.length > 0) {
                let idxy = this.lv0Category.findIndex(item => item.code === model.objectData[idx].lv0);
                if (idxy != -1)
                  display = this.lv0Category[idxy] + ' - ';

              }

              model.objectData[idx].display = display + model.objectData[idx].title;

              let idxx = this.lv1Category.findIndex(item => item.code === model.objectData[idx].code);
              if (idxx == -1)
                this.lv1Category.push(model.objectData[idx]);
              // arr.push({ title: model.objectData[idx].title, display: model.objectData[idx].title, code: model.objectData[idx].code, check: false });
            }
          });

          // this.lv1Category = arr;

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          //debugger
          setTimeout(() => {
            if (this.isReadOGLv1) {
              let lvContent = this.editModel.lv1.split(',');
              lvContent.forEach(element => {
                let idx = this.lv1Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv1Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv1', this.lv1Category[idx]);
                }
              });
              this.isReadOGLv1 = false;
            }
          }, 1000);

          this.spinner.hide();
        }, err => {
          this.spinner.hide();
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }
      else if (og.lv0 != '') {
        // this.editModel.organization = 'lv0';
        this.serviceProviderService.post('organization/read', { category: 'lv0' }).subscribe(data => {
          let model: any = {};
          model = data;

          // let arr: any = [];
          let split = og.lv0.split(',');
          split.forEach(element => {
            let idx = model.objectData.findIndex(item => item.code === element);
            if (idx != -1) {
              model.objectData[idx].display = model.objectData[idx].title;

              let idxx = this.lv0Category.findIndex(item => item.code === model.objectData[idx].code);
              if (idxx == -1)
                this.lv0Category.push(model.objectData[idx]);
              // arr.push({ title: model.objectData[idx].title, display: model.objectData[idx].title, code: model.objectData[idx].code, check: false });
            }
          });

          // this.lv0Category = arr;

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          //debugger
          setTimeout(() => {
            if (this.isReadOGLv0) {
              let lvContent = this.editModel.lv0.split(',');
              lvContent.forEach(element => {
                let idx = this.lv0Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv0Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv0', this.lv0Category[idx]);
                }
              });
              this.isReadOGLv0 = false;
            }
          }, 500);

          this.spinner.hide();
        }, err => {
          this.spinner.hide();
          this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
        });
      }
    });


  }

  readCategoryByLv(param, lv, param2) {

    // หน่วยงาน
    if (lv == 'lv0') {

      param2.check = param;

      if (param2.check) {

        // เอาค่าใส่ให้ใหม่ทุกครั้งที่ติ๊ก
        // let chk = this.lv0Category.filter(c => c.check);
        // for (let index = 0; index < chk.length; index++) {
        //   if (index == 0)
        //     this.editModel.lv0 = chk[index].code;
        //   else
        //     this.editModel.lv0 = this.editModel.lv0 + ',' + chk[index].code;
        // }

        this.serviceProviderService.postByPass('organization/category/read', { category: 'lv1', lv0: param2.code }).subscribe(data => {
          let model: any = {};
          model = data;

          model.objectData.forEach(element => {
            let idx = this.lv1Category.findIndex(item => item.code === element.code);
            if (idx == -1) {
              element.display = param2.title + ' - ' + element.title;
              this.lv1Category.push(element);
            }
          });

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          setTimeout(() => {
            if (this.isReadOGLv1) {
              let lvContent = this.editModel.lv1.split(',');
              lvContent.forEach(element => {
                let idx = this.lv1Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv1Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv1', this.lv1Category[idx]);
                }
              });
              this.isReadOGLv1 = false;
            }
          }, 500);

        }, err => { });
      }
      else {

        for (let index = 0; index < 20; index++) {
          let idx = this.lv1Category.findIndex(item => item.lv0 === param2.code);
          if (idx != -1) {
            this.lv1Category.splice(idx, 1);
          }
        }

        for (let index = 0; index < 20; index++) {
          let idx = this.lv2Category.findIndex(item => item.lv0 === param2.code);
          if (idx != -1) {
            this.lv2Category.splice(idx, 1);
          }
        }

        for (let index = 0; index < 20; index++) {
          let idx = this.lv3Category.findIndex(item => item.lv0 === param2.code);
          if (idx != -1) {
            this.lv3Category.splice(idx, 1);
          }
        }

        for (let index = 0; index < 20; index++) {
          let idx = this.lv4Category.findIndex(item => item.lv0 === param2.code);
          if (idx != -1) {
            this.lv4Category.splice(idx, 1);
          }
        }

      }

    }

    // เขต
    else if (lv == 'lv1') {

      param2.check = param;

      if (param2.check) {

        this.serviceProviderService.postByPass('organization/category/read', { category: 'lv2', lv1: param2.code }).subscribe(data => {
          let model: any = {};
          model = data;

          model.objectData.forEach(element => {
            let idx = this.lv2Category.findIndex(item => item.code === element.code);
            if (idx == -1) {
              element.display = param2.title + ' - ' + element.title;
              this.lv2Category.push(element);
            }
          });

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          setTimeout(() => {
            if (this.isReadOGLv2) {
              let lvContent = this.editModel.lv2.split(',');
              lvContent.forEach(element => {
                let idx = this.lv2Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv2Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv2', this.lv2Category[idx]);
                }
              });
              this.isReadOGLv2 = false;
            }
          }, 500);

        }, err => { });
      }
      else {

        for (let index = 0; index < 20; index++) {
          let idx = this.lv2Category.findIndex(item => item.lv1 === param2.code);
          if (idx != -1) {
            this.lv2Category.splice(idx, 1);
          }
        }

        for (let index = 0; index < 20; index++) {
          let idx = this.lv3Category.findIndex(item => item.lv1 === param2.code);
          if (idx != -1) {
            this.lv3Category.splice(idx, 1);
          }
        }

        for (let index = 0; index < 20; index++) {
          let idx = this.lv4Category.findIndex(item => item.lv1 === param2.code);
          if (idx != -1) {
            this.lv4Category.splice(idx, 1);
          }
        }

      }

    }

    // จังหวัด
    else if (lv == 'lv2') {
      param2.check = param;

      if (param2.check) {
        this.serviceProviderService.postByPass('organization/category/read', { category: 'lv3', lv2: param2.code }).subscribe(data => {
          let model: any = {};
          model = data;

          model.objectData.forEach(element => {
            let idx = this.lv3Category.findIndex(item => item.code === element.code);
            if (idx == -1) {
              element.display = param2.title + ' - ' + element.title;
              this.lv3Category.push(element);
            }
          });

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          setTimeout(() => {
            if (this.isReadOGLv3) {
              let lvContent = this.editModel.lv3.split(',');
              lvContent.forEach(element => {
                let idx = this.lv3Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv3Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv3', this.lv3Category[idx]);
                }
              });
              this.isReadOGLv3 = false;
            }
          }, 500);

        }, err => { });
      }
      else {
        for (let index = 0; index < 20; index++) {
          let idx = this.lv3Category.findIndex(item => item.lv2 === param2.code);
          if (idx != -1) {
            this.lv3Category.splice(idx, 1);
          }
        }

        for (let index = 0; index < 20; index++) {
          let idx = this.lv4Category.findIndex(item => item.lv2 === param2.code);
          if (idx != -1) {
            this.lv4Category.splice(idx, 1);
          }
        }
      }

    }

    // อำเภอ/เขต
    else if (lv == 'lv3') {
      param2.check = param;

      if (param2.check) {

        this.serviceProviderService.postByPass('organization/category/read', { category: 'lv4', lv3: param2.code }).subscribe(data => {
          let model: any = {};
          model = data;

          model.objectData.forEach(element => {
            let idx = this.lv4Category.findIndex(item => item.code === element.code);
            if (idx == -1) {
              element.display = param2.title + ' - ' + element.title;
              this.lv4Category.push(element);
            }
          });

          //เช็คเฉพาะตอน edit check ค่ากลับเข้าไป
          setTimeout(() => {
            if (this.isReadOGLv4) {
              let lvContent = this.editModel.lv4.split(',');
              lvContent.forEach(element => {
                let idx = this.lv4Category.findIndex(item => item.code === element);
                if (idx != -1) {
                  this.lv4Category[idx].check = true;
                  this.readCategoryByLv(true, 'lv4', this.lv4Category[idx]);
                }
              });
              this.isReadOGLv3 = false;
            }
          }, 500);

        }, err => { });
      }
      else {
        for (let index = 0; index < 20; index++) {
          let idx = this.lv4Category.findIndex(item => item.lv3 === param2.code);
          if (idx != -1) {
            this.lv4Category.splice(idx, 1);
          }
        }
      }

    }

    // ตำบล/แขวง
    else if (lv == 'lv4') {
      param2.check = param;
    }

  }
  // -----> Organization

  async selectedUser(param) {
    if(this.hiddenButtonUser == 'C' && param == 'C') {}
    else {
      this.stringToken = '';
      this.criteriaModel.status = '';
      this.hiddenButtonUser = param;
  
      if (this.hiddenButtonUser == 'ALL') {
        this.criteriaModel.keySearch = '';
        this.criteriaModel.categoryLv0 = '';
        this.criteriaModel.categoryLv1 = '';
        this.criteriaModel.categoryLv2 = '';
        this.criteriaModel.categoryLv3 = '';
        this.criteriaModel.categoryLv4 = '';
        this.criteriaModel.lv0 = '';
        this.criteriaModel.lv1 = '';
        this.criteriaModel.lv2 = '';
        this.criteriaModel.lv3 = '';
        this.criteriaModel.lv4 = '';
        this.criteriaModel.username = '';
        this.criteriaModel.firstName = '';
        this.criteriaModel.lastName = '';
        this.criteriaModel.sex = '';
  
        await this.readMemberAll(); // ไปหาจำนวน สมาชิก ทั้งหมด
        this.msg = '';
      }
      else {
  
        if (this.msg == '') {
          this.objectData = [];
          this.totalMemberSelect = 0;
        }
  
        if (this.hiddenButtonUser == 'C') {
          // this.totalMemberSelect = 0;
          // this.objectData = [];
        } else {
          this.criteriaModel.status = param;
        }
  
        this.readMemberByStatus();
      }
    }
  }

  isShowTable = (param) => {
    this.isShow = param; // แสดง ตาราง category
    if (param == '2') {
      this.checkCategory(this.editModel.reference);
    }
    if (param == '1') {

      this.userPagination.skip = 0
      this.userPagination.limit = 5;
      // this.readMember();

    }

  }

  selectMember() {

    this.isShow = '3';
    this.msg = 'set';
    // this.totalMemberSelect = this.objectData.length;
    // this.totalMemberSelect = this.objectDataSelect.length;
  }

  checkMember(param) {


    if (param.isSelected) {
      var clone = Object.assign({}, param);
      // let x = { username: param.username, category: param.category };
      this.objectData.push(clone);
      // this.objectWhat.push(clone);
      this.totalMemberSelect = this.objectData.length;

    }
    else {

      let idx = this.objectData.findIndex(item => item.code === param.code);
      if (idx != -1) {
        this.objectData.splice(idx, 1);
        this.totalMemberSelect = this.objectData.length;
      }

    }

    this.checkUserSelectedAll()
  }


  checkUncheckAll(param) {
    if (param) {
      this.objectData2.filter(c => c.isSelected = true);
      this.objectData2.forEach(c => {
        var clone = Object.assign({}, c);
        this.objectData.push(clone);
      });
      // check duplicate data
      this.objectData = this.objectData.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.code === thing.code
        ))
      )
      this.totalMemberSelect = this.objectData.length;

      this.checkUserSelectedAll();
    }
    else {
      this.objectData2.map(c => {
        let idx = this.objectData.findIndex(item => item.code === c.code);
        if (idx != -1) {
          this.objectData.splice(idx, 1);
          c.isSelected = false;
        }
      })
      // check duplicate data
      this.objectData = this.objectData.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.code === thing.code
        ))
      )
      this.totalMemberSelect = this.objectData.length;

      this.checkUserSelectedAll();
    }

  }

  checkUserSelectedAll() {

    if (this.userPagination.currentPage != this.isSelectedLength.page) {
      this.isSelectedLength.page = this.userPagination.currentPage
    }

    this.isSelectedLength.length = 0;
    this.objectData2.filter(c => {
      if (c.isSelected)
        this.isSelectedLength.length++;
    })

    if (this.isSelectedLength.length === this.objectData2.length)
      this.userSelected = true
    else
      this.userSelected = false
  }

  selectedAll() {
    this.criteriaModel.skip = 0; // <----- Pagination
    this.criteriaModel.limit = 999999;
    this.userPagination.currentPage = 1;
    this.serviceProviderService.post('notification/member/read', this.criteriaModel).subscribe(data => {
      let model: any = {};
      model = data;

      this.userPagination.totalItems = model.totalData;
      this.totalMemberSelect = model.totalData;
      this.objectData = model.objectData;
      this.userSelected = true;
      // this.objectDataSelect = model.objectData;

      this.objectData.forEach(element => {
        element.isSelected = true;
      });

      this.objectData2.forEach(element => {
        element.isSelected = true;
      });

    }, err => {
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });
  }

  async setPerPage(param) {
    this.userPagination.currentPage = 1;
    this.userPagination.itemsPerPage = parseInt(param);
    await this.readMember();
  }

  // เลือกข่าว
  categorySelect(param) {
    this.categorySelectList.forEach((item) => {
      if (item.code == param.code) {
        this.editModel.reference = item.code;
        this.nameSelected = item.title;
        this.editModel.title = item.title;
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    })
    this.editModel.reference = param.code;
  }

  // end select uxs

  back() {
    this.router.navigate(['notification'], { skipLocationChange: true });
  }

  // <----- Pagination
  paginationModelChanged(changes: KeyValueChanges<string, any>) {

    if (this.isShow == '1') {
      // this.userSelected = false;
      // this.userSelectedList = [];
      // this.userCriteria.skip = this.userPagination.currentPage == 1 ? 0 : (this.userPagination.currentPage * this.userPagination.itemsPerPage) - this.userPagination.itemsPerPage; // <----- Pagination
      this.readMember();
    }
    if (this.isShow == '2') {
      this.categorySelectList = [];
      this.categoryCriteria.skip = this.categoryPagination.currentPage == 1 ? 0 : (this.categoryPagination.currentPage * this.categoryPagination.itemsPerPage) - this.categoryPagination.itemsPerPage; // <----- Pagination
      this.categoryCriteria.limit = 10;
      this.checkCategory('');
    }
    // if (this.isShow == '3') {
    //   this.categorySelectList = [];
    //   this.categoryCriteria.skip = this.categoryPagination.currentPage == 1 ? 0 : (this.categoryPagination.currentPage * this.categoryPagination.itemsPerPage) - this.categoryPagination.itemsPerPage; // <----- Pagination
    //   this.categoryCriteria.limit = 10;
    //   this.userSelectedList
    // }
    /* If you want to see details then use
      changes.forEachRemovedItem((record) => ...);
      changes.forEachAddedItem((record) => ...);
      changes.forEachChangedItem((record) => ...);
    */
  }

  // <----- Pagination
  ngDoCheck(): void {

    const userChanges = this.userPaginationDiffer.diff(this.userPagination);
    const categoryChanges = this.categoryPaginationDiffer.diff(this.categoryPagination);
    const userSelectedChanges = this.userSelectedPaginationDiffer.diff(this.userSelectedPagination);
    if (userChanges) {
      this.paginationModelChanged(userChanges);
    }
    if (categoryChanges) {
      this.paginationModelChanged(categoryChanges);
    }
    if (userSelectedChanges) {
      this.paginationModelChanged(userSelectedChanges);
    }
  }


  reset() {
    this.criteriaModel.categoryLv0 = '';
    this.criteriaModel.categoryLv1 = '';
    this.criteriaModel.categoryLv2 = '';
    this.criteriaModel.categoryLv3 = '';
    this.criteriaModel.categoryLv4 = '';
    this.criteriaModel.username = '';
    this.criteriaModel.firstName = '';
    this.criteriaModel.lastName = '';
    this.criteriaModel.sex = '';
    this.readMember();
  }

}
