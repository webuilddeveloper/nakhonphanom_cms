import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceProviderService } from './../../shared/service-provider.service';
import { Component, OnInit, Inject, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-role-edit',
  templateUrl: './user-role-edit.component.html',
  styleUrls: ['./user-role-edit.component.css']
})
export class UserRoleEditComponent implements OnInit {

  title = 'เพิ่มข้อมูลสิทธิ์ผู้ใช้งาน';
  editModel: any = {};
  code: any;
  category: any;

  lv0Category: any = [];
  lv1Category: any = [];
  lv2Category: any = [];
  lv3Category: any = [];
  lv4Category: any = [];

  lv0: any = [];
  lv1: any = [];
  lv2: any = [];
  lv3: any = [];
  lv4: any = [];
  lvModel: any = [];

  newsCategory: any = [];
  eventCategory: any = [];
  contactCategory: any = [];
  knowledgeCategory: any = [];
  privilegeCategory: any = [];
  poiCategory: any = [];
  pollCategory: any = [];
  suggestionCategory: any = [];
  notificationCategory: any = [];
  welfareCategory: any = [];
  trainingCategory: any = [];
  reporterCategory: any = [];
  warningCategory: any = [];
  fundCategory: any = [];
  cooperativeFormCategory: any = [];
  cooperativeCategory: any = [];
  messageInput: any = [];
  messageInputSlice: any = []

  paginationModelDiffer: KeyValueDiffer<string, any>; // <----- Pagination
  paginationModel: any = { itemsPerPage: 5, currentPage: 1, totalItems: 0, itemsPerPageString: '5' }; // <----- Pagination

  constructor(private serviceProviderService: ServiceProviderService
    , private spinner: NgxSpinnerService
    , private toastr: ToastrService
    , private router: Router
    , private activetedRoute: ActivatedRoute
    , private differs: KeyValueDiffers) { }

  ngOnInit(): void {

    this.readCategory('lv0');

    // this.readOrganization('lv0');
    // this.readOrganization('lv1');
    // this.readOrganization('lv2');
    // this.readOrganization('lv3');

    this.readNewsCategory();
    this.readEventCategory();
    this.readContactCategory();
    this.readKnowledgeCategory();
    this.readPrivilegeCategory();
    this.readPoiCategory();
    this.readPollCategory();
    this.readSuggestionCategory();
    this.readWelfareCategory();
    this.readTrainingCategory();
    this.readReporterCategory();
    this.readWarningCategory();
    // this.readFundCategory();
    // this.readCooperativeFormCategory();
    // this.readNotificationCategory();

    // this.editModel.image = [];
    this.activetedRoute.queryParams.subscribe(params => {
      let model: any = this.activetedRoute.snapshot.params;
      this.code = model.code;

      // this.user = JSON.parse(localStorage.currentUser)

      if (this.code != '') {
        this.read();
        this.title = 'แก้ไขข้อมูลสิทธิ์ผู้ใช้งาน';
      }

    });

    if (localStorage.getItem('category') != null) {
      this.category = JSON.parse(localStorage.getItem('category'));
    }

    this.paginationModel = { itemsPerPage: 10, currentPage: 1, totalItems: 0, itemsPerPageString: '10' };
    this.paginationModelDiffer = this.differs.find(this.paginationModel).create(); // <----- Pagination
  }

  create() {

    let isValid = false;

    if (this.editModel.title == '') {
      this.toastr.warning('กรุณาใส่หัวข้อ', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (isValid)
      return;


    for (let index = 0; index < this.lvModel.length; index++) {
      if (index == 0) {
        this.editModel.lv0 = this.lvModel[index].lv0;
        this.editModel.lv1 = this.lvModel[index].lv1;
        this.editModel.lv2 = this.lvModel[index].lv2;
        this.editModel.lv3 = this.lvModel[index].lv3;
        this.editModel.lv4 = this.lvModel[index].lv4;
      }
      else {
        if (this.lvModel[index].lv0 != '')
          this.editModel.lv0 = this.editModel.lv0 + ',' + this.lvModel[index].lv0;

        if (this.lvModel[index].lv1 != '')
          this.editModel.lv1 = this.editModel.lv1 + ',' + this.lvModel[index].lv1;

        if (this.lvModel[index].lv2 != '')
          this.editModel.lv2 = this.editModel.lv2 + ',' + this.lvModel[index].lv2;

        if (this.lvModel[index].lv3 != '')
          this.editModel.lv3 = this.editModel.lv3 + ',' + this.lvModel[index].lv3;

        if (this.lvModel[index].lv4 != '')
          this.editModel.lv4 = this.editModel.lv4 + ',' + this.lvModel[index].lv4;
      }

    }

    if (this.lvModel.length == 0) {
      this.editModel.lv0 = '';
      this.editModel.lv1 = '';
      this.editModel.lv2 = '';
      this.editModel.lv3 = '';
      this.editModel.lv4 = '';
    }

    this.spinner.show();

    this.serviceProviderService.postByPass('register/category/create', this.editModel).subscribe(data => {

      let model: any = {};
      model = data;

      if (model.status === 'S') {
        this.messageInput.forEach(element => {
          element.reference = model.objectData.code;
          this.serviceProviderService.postByPass('register/permission/create', element).subscribe(data => { }, err => { });
        });

        this.spinner.hide();
        this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
        setTimeout(() => {
          this.back();
        }, 1000);

      } else {
        this.spinner.hide();
        this.toastr.warning(model.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
      }

    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });
  }

  createOrganization() {
    this.lvModel.push({ lv0: '', lv1: '', lv2: '', lv3: '', lv4: '', lv0Category: this.lv0Category });
  }

  read() {
    this.serviceProviderService.postByPass('register/category/read', { code: this.code }).subscribe(data => {
      let model: any = {};
      model = data;
      this.editModel = model.objectData[0];


      setTimeout(() => {

        let lv0 = this.editModel.lv0.split(',');
        lv0.forEach(element => {
          if (element != '')
            this.lvModel.push({ lv0: element, lv0Category: this.lv0Category });
          // this.lv0.push({ title: element, category: 'lv0' });
        });

        let lv1 = this.editModel.lv1.split(',');
        for (let index = 0; index < lv1.length; index++) {
          if (lv1 != '')
            this.lvModel[index].lv1 = lv1[index];
        }

        let lv2 = this.editModel.lv2.split(',');
        for (let index = 0; index < lv2.length; index++) {
          if (lv2 != '')
            this.lvModel[index].lv2 = lv2[index];
        }

        let lv3 = this.editModel.lv3.split(',');
        for (let index = 0; index < lv3.length; index++) {
          if (lv3 != '')
            this.lvModel[index].lv3 = lv3[index];
        }

        let lv4 = this.editModel.lv4.split(',');
        for (let index = 0; index < lv4.length; index++) {
          if (lv4 != '')
            this.lvModel[index].lv4 = lv4[index];
        }

      }, 2000);
      // let lv1 = this.editModel.lv1.split(',');
      // lv1.forEach(element => {
      //   if (element != '')
      //   this.lvModel.push({ lv1: element });
      // });

      // let lv2 = this.editModel.lv2.split(',');
      // lv2.forEach(element => {
      //   if (element != '')
      //     this.lvModel.push({ lv2: element });
      // });

      // let lv3 = this.editModel.lv3.split(',');
      // lv3.forEach(element => {
      //   if (element != '')
      //     this.lvModel.push({ lv3: element });
      // });

      this.spinner.hide();

      this.serviceProviderService.postByPass('register/permission/read', { code: this.code }).subscribe(data => {
        let item: any;
        item = data;

        this.messageInput = item.objectData || [];

        this.messageInput.forEach(element => {
          if (element.newsPage)
            element.title = element.newsCategoryList[0].title;
          if (element.eventPage)
            element.title = element.eventCategoryList[0].title;
          if (element.contactPage)
            element.title = element.contactCategoryList[0].title;
          if (element.knowledgePage)
            element.title = element.knowledgeCategoryList[0].title;
          if (element.privilegePage)
            element.title = element.privilegeCategoryList[0].title;
          if (element.poiPage)
            element.title = element.poiCategoryList[0].title;
          if (element.pollPage)
            element.title = element.pollCategoryList[0].title;
          if (element.suggestionPage)
            element.title = element.suggestionCategoryList[0].title;
          if (element.notificationPage)
            element.title = element.notificationCategoryList[0].title;
          if (element.welfarePage)
            element.title = element.welfareCategoryList[0].title;
          if (element.trainingPage)
            element.title = element.trainingCategoryList[0].title;
          if (element.reporterPage)
            element.title = element.reporterCategoryList[0].title;
          if (element.warningPage)
            element.title = element.warningCategoryList[0].title;
          if (element.fundPage)
            element.title = element.fundCategoryList[0].title;
          if (element.cooperativeFormPage)
            element.title = element.cooperativeFormCategoryList[0].title;

        });

        this.setLocalTable(0, 10);

      }, err => { });

    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });
  }

  update() {

    let isValid = false;
    if (this.editModel.title == '') {
      this.toastr.warning('กรุณาใส่หัวข้อ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      isValid = true;
    }

    if (isValid)
      return;

    for (let index = 0; index < this.lvModel.length; index++) {
      if (index == 0) {
        this.editModel.lv0 = this.lvModel[index].lv0;
        this.editModel.lv1 = this.lvModel[index].lv1;
        this.editModel.lv2 = this.lvModel[index].lv2;
        this.editModel.lv3 = this.lvModel[index].lv3;
        this.editModel.lv4 = this.lvModel[index].lv4;
      }
      else {
        if (this.lvModel[index].lv0 != '')
          this.editModel.lv0 = this.editModel.lv0 + ',' + this.lvModel[index].lv0;

        if (this.lvModel[index].lv1 != '')
          this.editModel.lv1 = this.editModel.lv1 + ',' + this.lvModel[index].lv1;

        if (this.lvModel[index].lv2 != '')
          this.editModel.lv2 = this.editModel.lv2 + ',' + this.lvModel[index].lv2;

        if (this.lvModel[index].lv3 != '')
          this.editModel.lv3 = this.editModel.lv3 + ',' + this.lvModel[index].lv3;

        if (this.lvModel[index].lv4 != '')
          this.editModel.lv4 = this.editModel.lv4 + ',' + this.lvModel[index].lv4;
      }

    }

    if (this.lvModel.length == 0) {
      this.editModel.lv0 = '';
      this.editModel.lv1 = '';
      this.editModel.lv2 = '';
      this.editModel.lv3 = '';
      this.editModel.lv4 = '';
    }


    this.spinner.show();

    this.serviceProviderService.postByPass('register/category/update', this.editModel).subscribe(data => {

      let model: any = {}
      model = data;

      if (model.status === 'S') {

        this.serviceProviderService.post('register/permission/delete', this.editModel).subscribe(data => {
          if (this.messageInput.length > 0) {
            this.messageInput.forEach(element => {
              element.reference = model.objectData.code;
              this.serviceProviderService.post('register/permission/create', element).subscribe(data => { }, err => { });
            });
          }
        }, err => { });

        this.spinner.hide();
        this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
        setTimeout(() => {
          this.back();
        }, 1000);

      } else {
        this.spinner.hide();
        this.toastr.warning(model.message, 'แจ้งเตือนระบบ', { timeOut: 1000 });
      }

    }, err => {
      this.spinner.hide();
      this.toastr.error(err, 'แจ้งเตือนระบบ', { timeOut: 1000 });
    });
  }

  checkAllAction() {
    this.editModel.createAction = true;
    this.editModel.readAction = true;
    this.editModel.updateAction = true;
    this.editModel.deleteAction = true;
    this.editModel.approveAction = true;
  }

  checkAllPolicy() {
    this.editModel.policyApplicationPage = true;
    this.editModel.policyMarketingPage = true;
  }

  checkAllMemberPolicy() {
    this.editModel.memberMobilePolicyApplicationPage = true;
    this.editModel.memberMobilePolicyMarketingPage = true;
  }

  checkAllMember() {
    this.editModel.organizationPage = true;
    this.editModel.userRolePage = true;
    this.editModel.memberPage = true;
    this.editModel.memberMobilePage = true;
  }

  checkAllImage() {
    this.editModel.logoPage = true;
    this.editModel.splashPage = true;
    this.editModel.mainPopupPage = true;
    this.editModel.bannerPage = true;
    this.editModel.forceAdsPage = true;
    this.editModel.rotationPage = true;
  }

  checkAllCategory() {
    this.editModel.newsCategoryPage = true;
    this.editModel.eventCategoryPage = true;
    this.editModel.contactCategoryPage = true;
    this.editModel.knowledgeCategoryPage = true;
    this.editModel.privilegeCategoryPage = true;
    this.editModel.poiCategoryPage = true;
    this.editModel.pollCategoryPage = true;
    this.editModel.suggestionCategoryPage = true;
    // this.editModel.notificationCategoryPage = true;
    this.editModel.welfareCategoryPage = true;
    this.editModel.trainingCategoryPage = true;
    this.editModel.reporterCategoryPage = true;
    this.editModel.warningCategoryPage = true;
    // this.editModel.fundCategoryPage = true;
    // this.editModel.cooperativeFormCategoryPage = true;
  }

  checkAllMain() {
    this.editModel.newsPage = true;
    this.editModel.eventPage = true;
    this.editModel.contactPage = true;
    this.editModel.knowledgePage = true;
    this.editModel.privilegePage = true;
    this.editModel.poiPage = true;
    this.editModel.pollPage = true;
    this.editModel.suggestionPage = true;
    this.editModel.notificationPage = true;
    this.editModel.welfarePage = true;
    this.editModel.trainingPage = true;
    this.editModel.reporterPage = true;
    this.editModel.warningPage = true;
    // this.editModel.fundPage = true;
    // this.editModel.cooperativeFormPage = true;
  }

  readNewsCategory() {
    this.serviceProviderService.post('m/news/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.newsCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readEventCategory() {
    this.serviceProviderService.post('m/eventCalendar/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.eventCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readContactCategory() {
    this.serviceProviderService.post('m/contact/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.contactCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readKnowledgeCategory() {
    this.serviceProviderService.post('m/knowledge/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.knowledgeCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readPrivilegeCategory() {
    this.serviceProviderService.post('m/privilege/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.privilegeCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readPoiCategory() {
    this.serviceProviderService.post('m/poi/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.poiCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readPollCategory() {
    this.serviceProviderService.post('m/poll/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.pollCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readSuggestionCategory() {
    this.serviceProviderService.post('m/suggestion/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.suggestionCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readNotificationCategory() {
    this.serviceProviderService.post('m/notification/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('model', model);
      model.objectData.forEach(element => {
        this.notificationCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readWelfareCategory() {
    this.serviceProviderService.post('m/welfare/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('welfare', model);
      model.objectData.forEach(element => {
        this.welfareCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readTrainingCategory() {
    this.serviceProviderService.post('m/training/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('training', model);
      model.objectData.forEach(element => {
        this.trainingCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readReporterCategory() {
    this.serviceProviderService.post('m/reporter/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('reporter', model);
      model.objectData.forEach(element => {
        this.reporterCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readWarningCategory() {
    this.serviceProviderService.post('m/warning/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('warning', model);
      model.objectData.forEach(element => {
        this.warningCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readFundCategory() {
    this.serviceProviderService.post('m/fund/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('fund', model);
      model.objectData.forEach(element => {
        this.fundCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  readCooperativeFormCategory() {
    this.serviceProviderService.post('m/cooperativeForm/category/read', {}).subscribe(data => {
      let model: any = {};
      model = data;
      console.log('cooperativeForm', model);
      model.objectData.forEach(element => {
        this.cooperativeFormCategory.push({ value: element.code, display: element.title });
      });
      // console.log('list', this.newCategory);
    }, err => { });
  }

  deleteItem(param) {
    this.messageInput.splice(param + (this.paginationModel.itemsPerPage * (this.paginationModel.currentPage - 1)), 1);
    this.setLocalTable((this.paginationModel.currentPage - 1) * this.paginationModel.itemsPerPage, this.paginationModel.itemsPerPage + (this.paginationModel.currentPage - 1) * this.paginationModel.itemsPerPage);
  }


  chooseAllEvertThing() {
    // if(this.editModel.cooperativeFormPage)
    // this.chooseAllCooperativeForm();

    // if(this.editModel.fundPage)
    // this.chooseAllFund();

    if(this.editModel.warningPage)
    this.chooseAllWarning();

    if(this.editModel.reporterPage)
    this.chooseAllReporter();

    if(this.editModel.trainingPage)
    this.chooseAllTraining();

    if(this.editModel.notificationPage)
    this.chooseAllWelfare();

    if(this.editModel.notificationPage)
    this.chooseAllNotification();

    if(this.editModel.suggestionPage)
    this.chooseAllSuggestion();

    if(this.editModel.pollPage)
    this.chooseAllPoll();

    if(this.editModel.poiPage)
    this.chooseAllPoi();

    if(this.editModel.privilegePage)
    this.chooseAllPrivilege();

    if(this.editModel.knowledgePage)
    this.chooseAllKnowledge();

    if(this.editModel.contactPage)
    this.chooseAllContact();

    if(this.editModel.eventPage)
    this.chooseAllEvent();
    
    if(this.editModel.newsPage)
    this.chooseAllNews();
  }
  
  async chooseAllNews() {
    await this.newsCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'ข่าวสารและประชาสัมพันธ์') === -1) {
        this.messageInput.splice(0, 0, { page: 'ข่าวสารและประชาสัมพันธ์', category: element.value, title: element.display, newsPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllEvent() {
    await this.eventCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'กิจกรรม') === -1) {
        this.messageInput.splice(0, 0, { page: 'กิจกรรม', category: element.value, title: element.display, eventPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllContact() {
    await this.contactCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'เบอร์ติดต่อ') === -1) {
        this.messageInput.splice(0, 0, { page: 'เบอร์ติดต่อ', category: element.value, title: element.display, contactPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllKnowledge() {
    await this.knowledgeCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'คลังความรู้') === -1) {
        this.messageInput.splice(0, 0, { page: 'คลังความรู้', category: element.value, title: element.display, knowledgePage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllPrivilege() {
    await this.privilegeCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'สิทธิประโยชน์') === -1) {
        this.messageInput.splice(0, 0, { page: 'สิทธิประโยชน์', category: element.value, title: element.display, privilegePage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllPoi() {
    await this.poiCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'สถานที่น่าสนใจ') === -1) {
        this.messageInput.splice(0, 0, { page: 'สถานที่น่าสนใจ', category: element.value, title: element.display, poiPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllPoll() {
    await this.pollCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'แบบสำรวจ') === -1) {
        this.messageInput.splice(0, 0, { page: 'แบบสำรวจ', category: element.value, title: element.display, pollPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllSuggestion() {
    await this.suggestionCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'ข้อเสนอแนะ') === -1) {
        this.messageInput.splice(0, 0, { page: 'ข้อเสนอแนะ', category: element.value, title: element.display, suggestionPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllNotification() {
    await this.notificationCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'แจ้งเตือน') === -1) {
        this.messageInput.splice(0, 0, { page: 'แจ้งเตือน', category: element.value, title: element.display, notificationPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllWelfare() {
    await this.welfareCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'สวัสดิการ') === -1) {
        this.messageInput.splice(0, 0, { page: 'สวัสดิการ', category: element.value, title: element.display, welfarePage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllTraining() {
    await this.trainingCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'ฝึกอบรม') === -1) {
        this.messageInput.splice(0, 0, { page: 'ฝึกอบรม', category: element.value, title: element.display, trainingPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllReporter() {
    await this.reporterCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'รายงาน') === -1) {
        this.messageInput.splice(0, 0, { page: 'รายงาน', category: element.value, title: element.display, reporterPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllWarning() {
    await this.warningCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'ข่าวเตือนภัย') === -1) {
        this.messageInput.splice(0, 0, { page: 'ข่าวเตือนภัย', category: element.value, title: element.display, warningPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllFund() {
    await this.fundCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'กองทุน') === -1) {
        this.messageInput.splice(0, 0, { page: 'กองทุน', category: element.value, title: element.display, fundPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  async chooseAllCooperativeForm() {
    await this.cooperativeFormCategory.forEach(element => {

      if (this.messageInput.findIndex(item => item.category == element.value && item.page == 'แบบฟอร์มตำรวจ') === -1) {
        this.messageInput.splice(0, 0, { page: 'แบบฟอร์มตำรวจ', category: element.value, title: element.display, cooperativeFormPage: true });
        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }

    });
    this.setLocalTable(0, 10);
  }

  chooseCategory(page, category, param) {

    if (category != '') {
      if (this.messageInput.findIndex(item => item.category == category && item.page == page) === -1) {

        if (param == 'newsPage') {
          if (this.newsCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.newsCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.newsCategory[idx].display, newsPage: true });
          }
        }
        else if (param == 'eventPage') {
          if (this.eventCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.eventCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.eventCategory[idx].display, eventPage: true });
          }
        }
        else if (param == 'contactPage') {
          if (this.contactCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.contactCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.contactCategory[idx].display, contactPage: true });
          }
        }
        else if (param == 'knowledgePage') {
          if (this.knowledgeCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.knowledgeCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.knowledgeCategory[idx].display, knowledgePage: true });
          }
        }
        else if (param == 'privilegePage') {
          if (this.privilegeCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.privilegeCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.privilegeCategory[idx].display, privilegePage: true });
          }
        }
        else if (param == 'poiPage') {
          if (this.poiCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.poiCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.poiCategory[idx].display, poiPage: true });
          }
        }
        else if (param == 'pollPage') {
          if (this.pollCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.pollCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.pollCategory[idx].display, pollPage: true });
          }
        }
        else if (param == 'suggestionPage') {
          if (this.suggestionCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.suggestionCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.suggestionCategory[idx].display, suggestionPage: true });
          }
        }
        else if (param == 'notificationPage') {
          if (this.notificationCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.notificationCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.notificationCategory[idx].display, notificationPage: true });
          }
        }
        else if (param == 'welfarePage') {
          if (this.welfareCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.welfareCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.welfareCategory[idx].display, welfarePage: true });
          }
        }
        else if (param == 'trainingPage') {
          if (this.trainingCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.trainingCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.trainingCategory[idx].display, trainingPage: true });
          }
        }
        else if (param == 'reporterPage') {
          if (this.reporterCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.reporterCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.reporterCategory[idx].display, reporterPage: true });
          }
        }
        else if (param == 'warningPage') {
          if (this.warningCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.warningCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.warningCategory[idx].display, warningPage: true });
          }
        }
        else if (param == 'fundPage') {
          if (this.fundCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.fundCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.fundCategory[idx].display, fundPage: true });
          }
        }
        else if (param == 'cooperativeFormPage') {
          if (this.cooperativeFormCategory.findIndex(item => item.value == category) != -1) {
            let idx = this.cooperativeFormCategory.findIndex(item => item.value == category);
            this.messageInput.splice(0, 0, { page: page, category: category, title: this.cooperativeFormCategory[idx].display, cooperativeFormPage: true });
          }
        }

        // console.log("element doesn't exist");
      }
      else {
        // console.log("element found");
      }
    }

    this.editModel.category = '';

    this.setLocalTable(0, 10);
  }

  readOrganization(param) {

    this.serviceProviderService.post('organization/read', { category: param }).subscribe(data => {
      let model: any = {};
      model = data;

      model.objectData.forEach(element => {

        if (param == 'lv0')
          this.lv0Category.push({ value: element.title, display: element.title });
        else if (param == 'lv1')
          this.lv1Category.push({ value: element.title, display: element.title });
        else if (param == 'lv2')
          this.lv2Category.push({ value: element.title, display: element.title });
        else if (param == 'lv3')
          this.lv3Category.push({ value: element.title, display: element.title });
        else if (param == 'lv4')
          this.lv4Category.push({ value: element.title, display: element.title });

      });

    }, err => { });
  }

  chooseOrganization(param, category) {

    if (param != '') {

      if (category == 'lv0') {
        if (this.lv0.findIndex(item => item.category == category && item.title == param) === -1) {
          this.lv0.splice(0, 0, { title: param, category: category });
        }
      }
      else if (category == 'lv1') {
        if (this.lv1.findIndex(item => item.category == category && item.title == param) === -1) {
          this.lv1.splice(0, 0, { title: param, category: category });
        }
      }
      else if (category == 'lv2') {
        if (this.lv2.findIndex(item => item.category == category && item.title == param) === -1) {
          this.lv2.splice(0, 0, { title: param, category: category });
        }
      }
      else if (category == 'lv3') {
        if (this.lv3.findIndex(item => item.category == category && item.title == param) === -1) {
          this.lv3.splice(0, 0, { title: param, category: category });
        }
      }
      else if (category == 'lv4') {
        if (this.lv4.findIndex(item => item.category == category && item.title == param) === -1) {
          this.lv4.splice(0, 0, { title: param, category: category });
        }
      }

      // console.log("element doesn't exist");
    }
    else {
      // console.log("element found");
    }
  }

  deleteOrganizationItem(param) {

    this.lvModel.splice(param, 1);

    // if (category == 'lv0')
    //   this.lv0.splice(param, 1);
    // else if (category == 'lv1')
    //   this.lv1.splice(param, 1);
    // else if (category == 'lv2')
    //   this.lv2.splice(param, 1);
    // else if (category == 'lv3')
    //   this.lv3.splice(param, 1);
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

  readCategoryByLv(param, lv, param2) {

    if (lv == 'lv0') {
      param2.lv0 = param;
      this.serviceProviderService.postByPass('organization/category/read', { category: 'lv1', lv0: param }).subscribe(data => {
        let model: any = {};
        model = data;
        param2.lv1Category = [];

        if (param != '') // <----- ต้องดักไม่งั้น lv จะเลือกได้
        {
          model.objectData.forEach(element => {
            param2.lv1Category.push({ value: element.code, display: element.title });
          });
        }

      }, err => { });
    }
    else if (lv == 'lv1') {
      param2.lv1 = param;
      this.serviceProviderService.postByPass('organization/category/read', { category: 'lv2', lv1: param }).subscribe(data => {
        let model: any = {};
        model = data;
        param2.lv2Category = [];

        if (param != '') // <----- ต้องดักไม่งั้น lv จะเลือกได้
        {
          model.objectData.forEach(element => {
            param2.lv2Category.push({ value: element.code, display: element.title });
          });
        }

      }, err => { });
    }
    else if (lv == 'lv2') {
      param2.lv2 = param;
      this.serviceProviderService.postByPass('organization/category/read', { category: 'lv3', lv2: param }).subscribe(data => {
        let model: any = {};
        model = data;
        param2.lv3Category = [];

        if (param != '') // <----- ต้องดักไม่งั้น lv จะเลือกได้
        {
          model.objectData.forEach(element => {
            param2.lv3Category.push({ value: element.code, display: element.title });
          });
        }

      }, err => { });
    }
    else if (lv == 'lv3') {
      param2.lv3 = param;
      this.serviceProviderService.postByPass('organization/category/read', { category: 'lv4', lv3: param }).subscribe(data => {
        let model: any = {};
        model = data;
        param2.lv4Category = [];

        if (param != '') // <----- ต้องดักไม่งั้น lv จะเลือกได้
        {
          model.objectData.forEach(element => {
            param2.lv4Category.push({ value: element.code, display: element.title });
          });
        }

      }, err => { });
    }
    else if (lv == 'lv4') {
      param2.lv4 = param;
    }

  }

  setPerPage(param) {
    this.paginationModel.currentPage = 1;
    this.paginationModel.itemsPerPage = parseInt(param); // <----- Pagination
    this.setLocalTable(this.paginationModel.currentPage - 1, this.paginationModel.itemsPerPage)
  }

  setLocalTable(skip, limit) {
    this.messageInputSlice = this.messageInput.slice(skip, limit);
    this.paginationModel.totalItems = this.messageInput.length - 1;

    if ((skip + this.paginationModel.itemsPerPage) > this.paginationModel.totalItems)
      this.paginationModel.textPage = this.paginationModel.totalItems != 0 ? 'แสดง ' + (skip + 1) + ' ถึง ' + this.paginationModel.totalItems + ' จาก ' + this.paginationModel.totalItems + ' แถว' : 'แสดง 0 ถึง 0 จาก 0 แถว';
    else
      this.paginationModel.textPage = 'แสดง ' + (skip + 1) + ' ถึง ' + (skip + this.paginationModel.itemsPerPage) + ' จาก ' + this.paginationModel.totalItems + ' แถว';

  }

  // <----- Pagination
  paginationModelChanged(changes: KeyValueChanges<string, any>) {

    // let skip = this.paginationModel.currentPage == 1 ? 0 : (this.paginationModel.currentPage * this.paginationModel.itemsPerPage) - this.paginationModel.itemsPerPage; // <----- Pagination

    let skip = this.paginationModel.currentPage == 1 ? 0 : this.paginationModel.currentPage - 1;
    let limit = this.paginationModel.itemsPerPage; // <----- Pagination
    this.setLocalTable(skip * limit, limit + (skip * limit));
  }

  // <----- Pagination 
  ngDoCheck(): void {

    const changes = this.paginationModelDiffer.diff(this.paginationModel);
    if (changes) {
      this.paginationModelChanged(changes);
    }
  }

  back() {
    this.router.navigate(['user-role'], { skipLocationChange: true });
  }

}
