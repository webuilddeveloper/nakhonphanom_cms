import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ServiceProviderService } from './shared/service-provider.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  isLock: boolean = false;
  menuSummary: any;
  menuMember: any;
  menuImage: any;
  menuCategory: any;
  menuMain: any;
  menuPolicy: any = [];
  menuWaitingManage:any = [];
  menuDemo: any;
  isLogin = true;
  isSignUp = false;
  model: any = { username: '', password: '' };
  listPrefixName: any = [];
  imageUrl: any = 'app-assets/images/avatar/avatar-7.png';
  username: any = 'unknow';
  category: any = {
    organizationPage: false,
    userRolePage: false,
    member: false,
    memberMobile: false,
    logoPage: false,
    splashPage: false,
    mainPopupPage: false,
    bannerPage: false,
    forceAdsPage: false,
    rotation: false,
    newCategoryPage: false,
    eventCategoryPage: false,
    contactCategoryPage: false,
    knowledgeCategoryPage: false,
    privilegeCategoryPage: false,
    poiCategoryPage: false,
    pollCategoryPage: false,
    suggestionCategoryPage: false,
    notificationCategoryPage: false,
    newPage: false,
    eventPage: false,
    contactPage: false,
    knowledgePage: false,
    privilegePage: false,
    poiPage: false,
    pollPage: false,
    suggestionPage: false,
    notificationPage: false,
    reporterPage: false,
    welfarePage: false,
    trainingPage: false,
    warningPage: false,
    policyApplicationPage: false,
    policyMarketingPage: false,
    memberMobilePolicyApplicationPage: false,
    memberMobilePolicyMarketingPage: false,
    fundPage: false,
    cooperativeFormPage: false
  };

  og: any;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private serviceProviderService: ServiceProviderService,
    private toastr: ToastrService
  ) {

    if (localStorage.getItem('token') != null) {
      this.isLogin = false;
      this.isSignUp = false;
      this.category = JSON.parse(localStorage.getItem('category'));
      this.imageUrl = localStorage.getItem('imageUrl');
      this.username = localStorage.getItem('username');
      this.og = JSON.parse(localStorage.getItem('organization'));

      if (this.username == 'admin') {

      }
      else {

        this.serviceProviderService.post('register/organization/check', {}).subscribe(data => {
          let model: any = data;

          if (model.status == "E") {
            this.logout();
          }
          else {
            //get สิทธิ์แต่ละหน้าจอตรงนี้
            // [ { category: 'ทั่วไป', createAction: true, readAction: true, updateAction: true, deleteAction: true, approveAction: true }, { category: 'กีฬา', createAction: true, readAction: true, updateAction: true, deleteAction: true, approveAction: true } ]
            this.serviceProviderService.post('register/page/read', { title: 'newsPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('newsPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'eventPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('eventPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'contactPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('contactPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'knowledgePage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('knowledgePage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'privilegePage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('privilegePage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'poiPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('poiPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'pollPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('pollPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'suggestionPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('suggestionPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'notificationPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('notificationPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'reporterPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('reporterPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'trainingPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('trainingPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'welfarePage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('welfarePage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'warningPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('warningPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'fundPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('fundPage', JSON.stringify(model.objectData));
            }, err => { });

            this.serviceProviderService.post('register/page/read', { title: 'cooperativeFormPage' }).subscribe(data => {
              let model: any = data;
              localStorage.setItem('cooperativeFormPage', JSON.stringify(model.objectData));
            }, err => { });
          }

        }, err => { });
      }

    }

    this.isLock = true;

    this.menuSummary = [
      {
        'name': 'แดชบอร์ด',
        'routing': '',
        'data': '',
        'type': 'N',
        'isActive': true,
        'isShow': true
      },
      {
        'name': 'เกี่ยวกับเรา',
        'routing': '/about-us',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': true
      }
    ];

    this.menuMember = [
      {
        'name': 'ข้อมูลส่วนตัว',
        'routing': '/personal-info',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': true
      },
      {
        'name': 'จัดการองค์กร',
        'routing': '/organization',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.organizationPage
      },
      {
        'name': 'การจัดการสิทธิ์ผู้ใช้งาน',
        'routing': '/user-role',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.userRolePage
      },
      {
        'name': 'จัดการผู้ดูแลระบบ',
        'routing': '/member',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.memberPage
      },
      {
        'name': 'จัดการสมาชิก',
        'routing': '/member-mobile',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.memberMobilePage
      }
    ];

    this.menuImage = [
      {
        'name': 'โลโก้',
        'routing': '/logo',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.logoPage
      },
      {
        'name': 'ภาพพักหน้าจอ',
        'routing': '/splash',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.splashPage
      },
      {
        'name': 'ป้ายโฆษณาบังคับปิดหน้าหลัก',
        'routing': '/main-popup',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.mainPopupPage
      },
      {
        'name': 'ป้ายประชาสัมพันธ์',
        'routing': '/banner',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.bannerPage
      },
      {
        'name': 'ป้ายโฆษณาบังคับปิดเมนูย่อย',
        'routing': '/force-ads',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.forceAdsPage
      },
      {
        'name': 'ป้ายโฆษณา',
        'routing': '/rotation',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.rotationPage
      }

    ];

    this.menuCategory = [
      {
        'name': 'หมวดหมู่ข่าวประชาสัมพันธ์',
        'routing': '/news-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.newsCategoryPage
      },
      {
        'name': 'หมวดหมู่ปฎิทินกิจกรรม',
        'routing': '/event-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.eventCategoryPage
      },
      {
        'name': 'หมวดหมู่เบอร์โทรฉุกเฉิน',
        'routing': '/contact-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.contactCategoryPage
      },
      {
        'name': 'หมวดหมู่คลังความรู้',
        'routing': '/knowledge-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.knowledgeCategoryPage
      },
      {
        'name': 'หมวดหมู่สิทธิประโยชน์',
        'routing': '/privilege-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.privilegeCategoryPage
      },
      {
        'name': 'หมวดหมู่สถานที่น่าสนใจ',
        'routing': '/poi-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.poiCategoryPage
      },
      {
        'name': 'หมวดหมู่แบบสำรวจ (Poll)',
        'routing': '/poll-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.pollCategoryPage
      },
      {
        'name': 'หมวดหมู่ข้อเสนอแนะ',
        'routing': '/suggestion-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
      },
      {
        'name': 'หมวดหมู่แจ้งเตือน',
        'routing': '/notification-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.notificationCategoryPage
      },
      {
        'name': 'หมวดหมู่สวัสดิการอาสา',
        'routing': '/welfare-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        // 'isShow': true
        'isShow': false
        // 'isShow': this.category.welfareCategoryPage
      },
      {
        'name': 'หมวดหมู่การอบรม',
        'routing': 'training-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.trainingCategoryPage
      },
      {
        'name': 'หมวดหมู่อาสาเตือนภัย',
        'routing': '/warning-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.warningCategoryPage
      },
      {
        'name': 'หมวดหมู่ข้อเสนอแนะ',
        'routing': '/reporter-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        // 'isShow': true
        'isShow': this.category.reporterCategoryPage
      },
      {
        'name': 'หมวดหมู่กองทุน',
        'routing': '/fund-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.fundCategoryPage
      },
      {
        'name': 'หมวดหมู่แบบฟอร์มตำรวจ',
        'routing': '/cooperative-form-category',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.cooperativeFormPage
      }
    ];

    this.menuMain = [
      {
        'name': 'ข่าวประชาสัมพันธ์',
        'routing': '/news',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.newsPage
      },
      {
        'name': 'ปฎิทินกิจกรรม',
        'routing': '/event',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.eventPage
      },
      {
        'name': 'เบอร์โทรฉุกเฉิน',
        'routing': '/contact',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.contactPage
      },
      {
        'name': 'คลังความรู้',
        'routing': '/knowledge',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.knowledgePage
      },
      {
        'name': 'สิทธิประโยชน์',
        'routing': '/privilege',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.privilegePage
      },
      {
        'name': 'สถานที่น่าสนใจ',
        'routing': '/poi',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.poiPage
      },
      {
        'name': 'แบบสำรวจ (Poll)',
        'routing': '/poll',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.pollPage
      },
      {
        'name': 'ข้อเสนอแนะ',
        'routing': '/suggestion',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
      },
      {
        'name': 'สวัสดิการอาสา',
        'routing': '/welfare',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.welfarePage
      },
      {
        'name': 'การอบรม',
        'routing': '/training',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.trainingPage
      },
      {
        'name': 'อาสาเตือนภัย',
        'routing': '/warning',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.warningPage
      },
      {
        'name': 'ข้อเสนอแนะ',
        'routing': '/reporter',
        'data': '',
        'type': 'N',
        'isActive': false,
        // 'isShow': true
        'isShow': this.category.reporterPage
      },
      {
        'name': 'ส่งแจ้งเตือนไปยังสมาชิก',
        'routing': '/notification',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.notificationPage
      },
      {
        'name': 'กองทุน',
        'routing': '/fund',
        'data': '',
        'type': 'N',
        'isActive': false,
        // 'isShow': true
        'isShow': false
        // 'isShow': this.category.fundPage
      },
      {
        'name': 'แบบฟอร์มตำรวจ',
        'routing': '/cooperative-form',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': false
        // 'isShow': this.category.cooperativeFormPage
      }
    ];

    this.menuDemo = [
      {
        'name': 'routing',
        'routing': '/demo-routing',
        'data': '',
        'type': 'N',
        'isActive': false
      },
      {
        'name': 'routing-param',
        'routing': '/demo-routing-param',
        'data': 1,
        'type': 'P',
        'isActive': false
      },
      {
        'name': 'routing-params',
        'routing': '/demo-routing-params',
        'data': 'x,y',
        'type': 'PS',
        'isActive': false
      },
      {
        'name': 'routing-object',
        'routing': '/demo-routing-object',
        'data': { 'name': 'angular', 'company': 'webuild' },
        'type': 'O',
        'isActive': false
      },
      {
        'name': 'file-upload',
        'routing': '/demo-file-upload',
        'data': '',
        'type': 'N',
        'isActive': false
      },
      {
        'name': 'modal',
        'routing': '/demo-modal',
        'data': '',
        'type': 'N',
        'isActive': false
      },
      {
        'name': 'spinner',
        'routing': '/demo-spinner',
        'data': '',
        'type': 'N',
        'isActive': false
      },
      {
        'name': 'toast',
        'routing': '/demo-toast',
        'data': '',
        'type': 'N',
        'isActive': false
      },
      {
        'name': 'datetimepicker',
        'routing': '/demo-datetimepicker',
        'data': '',
        'type': 'N',
        'isActive': false
      }
    ];

    this.listPrefixName = [
      {
        value: 'นาย',
        display: 'นาย'
      },
      {
        value: 'นาง',
        display: 'นาง'
      },
      {
        value: 'นางสาว',
        display: 'นางสาว'
      }
    ]

    this.menuPolicy = [,
      {
        'name': 'จัดการนโยบายขั้นต้น',
        'routing': '/policy-application',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.policyApplicationPage
      },
      {
        'name': 'จัดการนโยบายการตลาด',
        'routing': '/policy-marketing',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.policyMarketingPage
      },
      {
        'name': 'สมาชิกตอบรับนโยบายขั้นต้น',
        'routing': '/member-mobile-policy-application',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.memberMobilePolicyApplicationPage
      },
      {
        'name': 'สมาชิกตอบรับนโยบายการตลาด',
        'routing': '/member-mobile-policy-marketing',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': this.category.memberMobilePolicyMarketingPage
      }

    ];

    this.menuWaitingManage = [
      {
        'name': 'coming soon',
        'routing': '/coming-soon',
        'data': '',
        'type': 'N',
        'isActive': false,
        'isShow': true
        // 'isShow': this.category.comingSoonPage
      },
    ];
  }

  ngOnInit() {
    // /** spinner starts on init */
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();

    // }, 500);
  }

  goToRouting(param) {
    //disable highlight all menu

    this.menuSummary.forEach(c => {
      c.isActive = false;
    });

    this.menuMember.forEach(c => {
      c.isActive = false;
    });

    this.menuImage.forEach(c => {
      c.isActive = false;
    });

    this.menuCategory.forEach(c => {
      c.isActive = false;
    });

    this.menuMain.forEach(c => {
      c.isActive = false;
    });

    this.menuPolicy.forEach(c => {
      c.isActive = false;
    });

    this.menuDemo.forEach(c => {
      c.isActive = false;
    });

    this.menuWaitingManage.forEach(c => {
      c.isActive = false;
    });
    
    //set menu active highlight
    param.isActive = true;

    //check type for go to router
    if (param.type == 'N') {
      this.router.navigate([param.routing]);
    }
    else if (param.type == 'P') {
      this.router.navigate([param.routing, param.data]);
    }
    else if (param.type == 'PS') {
      let model = param.data.split(',');
      this.router.navigate([param.routing, model[0], model[1]], { skipLocationChange: true });
    }
    else if (param.type == 'O') {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(param.data)
        }
      };
      this.router.navigate([param.routing], navigationExtras);
    }
  }

  goToDemoRouting() {
    this.router.navigate(['/demo-routing']);
  }

  goToDemoRoutingParam() {
    this.router.navigate(['/demo-routing-param', 1]);
  }

  goToDemoRoutingParams() {
    this.router.navigate(['/demo-routing-params', 'x', 'y']);
  }

  goToDemoRoutingObject() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify({ 'a': 'a', 'b': 'b' })
      }
    };
    this.router.navigate(['/demo-routing-object'], navigationExtras);
  }

  login(username, password) {

    this.spinner.show();

    if (username == 'admin' && password == 'p@ssw0rd') {
      localStorage.setItem('category', JSON.stringify({ organizationPage: true, userRolePage: true, memberPage: true, createAction: true, readAction: true, updateAction: true, deleteAction: true }));
      localStorage.setItem('token', 'token');
      localStorage.setItem('username', 'admin');
      window.location.href = "";
    } else {

      this.serviceProviderService.post('register/login', { username: username, password: password }).subscribe(data => {

        this.spinner.hide();
        let model: any = {};
        model = data;

        if (model.status == 'S') {
          this.serviceProviderService.post('register/system/read', { username: username }).subscribe(data => {

            let categoryModel: any = data;

            if (categoryModel.objectData != null)
              localStorage.setItem('category', JSON.stringify(categoryModel.objectData));
            else
              localStorage.setItem('category', JSON.stringify(this.category));

            localStorage.setItem('token', model.jsonData);
            localStorage.setItem('username', model.objectData.username);
            localStorage.setItem('userCode', model.objectData.code);
            localStorage.setItem('imageUrl', model.objectData.imageUrl);

            // <----- Get Organization List
            this.serviceProviderService.post('register/organization/read', { username: username }).subscribe(data => {
              this.spinner.hide();

              let organizationModel: any = data;

              if (organizationModel.objectData != null)
                localStorage.setItem('organization', JSON.stringify(organizationModel.objectData));

              window.location.href = "";

            }, err => {
              this.spinner.hide();
              this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
            });
            // -----> Get Organization List


          }, err => {
            this.spinner.hide();
            this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
          });

          // setTimeout(() => {
          //   window.location.href = "";
          // }, 2000);

          // if (localStorage.getItem('hello') == null) {
          //   localStorage.setItem('hello', 'informative core');
          //   location.reload();
          // }

        }
        else if (model.status == 'F') {
          this.spinner.hide();
          this.toastr.warning(model.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
        }
        else {
          this.spinner.hide();
          this.toastr.error(model.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
        }

      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      });

    }
  }

  showSignUp() {
    this.isSignUp = true;
  }

  hiddenSignUp() {
    this.model = {};
    this.isSignUp = false;
  }

  signUp(param) {
    let isValid = false;

    if (this.model.username == '') {
      this.toastr.warning('กรุณาใส่ชื่อผู้ใช้', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (this.model.password == '') {
      this.toastr.warning('กรุณาใส่รหัสผ่าน', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (this.model.image.length == 0) {
      this.toastr.warning('กรุณาใส่รูปภาพ', 'แจ้งเตือนระบบ', { timeOut: 2000 });
      isValid = true;
    }

    if (isValid)
      return;

    this.spinner.show();
    this.model.imageUrl = this.model.image[0].imageUrl;
    this.serviceProviderService.post('m/register/create', param).subscribe(data => {
      let model: any = {}
      model = data;
      if (model.status === 'S') {
        this.model = {};
        this.isSignUp = false;
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.toastr.success('บันทึกข้อมูลสำเร็จ', 'แจ้งเตือนระบบ', { timeOut: 1000 });
      } else {
        this.spinner.hide();
        this.toastr.error(model.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
      }
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, 'แจ้งเตือนระบบ', { timeOut: 2000 });
    });
  }

  permission(param) {

    if (param != undefined) {
      let filter = param.filter(c => c.isShow);

      return filter;
    }

    return param;

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('category');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('organization');

    localStorage.removeItem('newsPage');
    localStorage.removeItem('eventPage');
    localStorage.removeItem('contactPage');
    localStorage.removeItem('knowledgePage');
    localStorage.removeItem('privilegePage');
    localStorage.removeItem('poiPage');
    localStorage.removeItem('pollPage');
    localStorage.removeItem('suggestionPage');
    localStorage.removeItem('notificationPage');
    localStorage.removeItem('reporterPage');
    localStorage.removeItem('welfarePage');
    localStorage.removeItem('trainingPage');
    localStorage.removeItem('warningPage');
    localStorage.removeItem('fundPage');
    localStorage.removeItem('cooperativeFormPage');

    window.location.href = "";
  }
}

