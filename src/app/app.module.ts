import { DropzoneSingleFileComponent } from './component/dropzone-single-file/dropzone-single-file.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { NgxDropzoneModule } from "ngx-dropzone";
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule
} from "ngx-mat-datetime-picker";
import {
  MatMomentDateModule,
  MomentDateModule,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RoutingComponent } from "./demo/routing/routing.component";
import { RoutingParamComponent } from "./demo/routing-param/routing-param.component";
import { RoutingParamsComponent } from "./demo/routing-params/routing-params.component";
import { RoutingObjectComponent } from "./demo/routing-object/routing-object.component";
import { FileUploadComponent } from "./demo/file-upload/file-upload.component";
import {
  ModalComponent,
  ModalDialogComponent,
  ModalAlertComponent
} from "./demo/modal/modal.component";
import { SpinnerComponent } from "./demo/spinner/spinner.component";
import { ToastComponent } from "./demo/toast/toast.component";
import { FormComponent } from "./demo/form/form.component";
import { DatetimepickerComponent } from "./demo/datetimepicker/datetimepicker.component";
import { ApplicationComponent } from "./demo/application/application.component";
import { ListComponent } from "./demo/application/list/list.component";
import { CriteriaComponent } from "./demo/application/criteria/criteria.component";
import { ViewComponent } from "./demo/application/view/view.component";
import { EditComponent } from "./demo/application/edit/edit.component";
import { LoginComponent } from "./demo/login/login.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsComponent } from "./news/news.component";
import { NewsCriteriaComponent } from "./news/news-criteria/news-criteria.component";
import { NewsEditComponent } from "./news/news-edit/news-edit.component";
import { SplashComponent } from "./splash/splash.component";
import { SplashListComponent } from "./splash/splash-list/splash-list.component";
import { SplashEditComponent } from "./splash/splash-edit/splash-edit.component";
import { SplashCriteriaComponent } from "./splash/splash-criteria/splash-criteria.component";
import { PersonalComponent } from "./personal/personal.component";
import { BannerComponent } from "./banner/banner.component";
import { BannerListComponent } from "./banner/banner-list/banner-list.component";
import { BannerCriteriaComponent } from "./banner/banner-criteria/banner-criteria.component";
import { BannerEditComponent } from "./banner/banner-edit/banner-edit.component";
import { EventComponent } from "./event/event.component";
import { EventListComponent } from "./event/event-list/event-list.component";
import { EventCriteriaComponent } from "./event/event-criteria/event-criteria.component";
import { EventEditComponent } from "./event/event-edit/event-edit.component";
import { DropZoneComponent } from "./demo/drop-zone/drop-zone.component";
import { MainPopupComponent } from "./main-popup/main-popup.component";
import { MainPopupCriteriaComponent } from "./main-popup/main-popup-criteria/main-popup-criteria.component";
import { MainPopupListComponent } from "./main-popup/main-popup-list/main-popup-list.component";
import { MainPopupEditComponent } from "./main-popup/main-popup-edit/main-popup-edit.component";
import { SelectOptionComponent } from "./demo/select-option/select-option.component";
import { InputTextComponent } from "./component/input-text/input-text.component";
import { ButtonComponent } from "./component/button/button.component";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { ButtonEditComponent } from "./component/button-edit/button-edit.component";
import { ButtonViewComponent } from "./component/button-view/button-view.component";
import { ButtonDeleteComponent } from "./component/button-delete/button-delete.component";
import { DateFormatPipe } from "./date-format.pipe";
import { DatetimeFormatPipe } from "./datetime-format.pipe";
import { SelectOptionsComponent } from "./component/select-option/select-option.component";
import { TextAreaComponent } from "./component/text-area/text-area.component";
import { DropzoneSingleComponent } from "./component/dropzone-single/dropzone-single.component";
import { DropzoneMultiComponent } from "./component/dropzone-multi/dropzone-multi.component";
import { DatepickerComponent } from "./component/datepicker/datepicker.component";
import { PrivilegeComponent } from "./privilege/privilege.component";
import { PrivilegeCriteriaComponent } from "./privilege/privilege-criteria/privilege-criteria.component";
import { PrivilegeEditComponent } from "./privilege/privilege-edit/privilege-edit.component";
import { PrivilegeListComponent } from "./privilege/privilege-list/privilege-list.component";
import { CustomDatetimepickerComponent } from "./component/custom-datetimepicker/custom-datetimepicker.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { InputTextBorderComponent } from "./component/input-text-border/input-text-border.component";
import { SuggestionComponent } from "./suggestion/suggestion.component";
import { SuggestionCriteriaComponent } from "./suggestion/suggestion-criteria/suggestion-criteria.component";
import { SuggestionEditComponent } from "./suggestion/suggestion-edit/suggestion-edit.component";
import { SuggestionListComponent } from "./suggestion/suggestion-list/suggestion-list.component";
import { SwitchComponent } from "./component/switch/switch.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CustomCheckboxComponent } from "./component/custom-checkbox/custom-checkbox.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { PollComponent } from "./poll/poll.component";
import { PollCriteriaComponent } from "./poll/poll-criteria/poll-criteria.component";
import { PollEditComponent } from "./poll/poll-edit/poll-edit.component";
import { PollListComponent } from "./poll/poll-list/poll-list.component";
import { PrivilegeCategoryComponent } from "./privilege-category/privilege-category.component";
import { PrivilegeCategoryCriteriaComponent } from "./privilege-category/privilege-category-criteria/privilege-category-criteria.component";
import { PrivilegeCategoryEditComponent } from "./privilege-category/privilege-category-edit/privilege-category-edit.component";
import { PrivilegeCategoryListComponent } from "./privilege-category/privilege-category-list/privilege-category-list.component";
import { SuggestionCategoryComponent } from "./suggestion-category/suggestion-category.component";
import { SuggestionCategoryCriteriaComponent } from "./suggestion-category/suggestion-category-criteria/suggestion-category-criteria.component";
import { SuggestionCategoryEditComponent } from "./suggestion-category/suggestion-category-edit/suggestion-category-edit.component";
import { SuggestionCategoryListComponent } from "./suggestion-category/suggestion-category-list/suggestion-category-list.component";
import { PoiComponent } from "./poi/poi.component";
import { PoiCriteriaComponent } from "./poi/poi-criteria/poi-criteria.component";
import { PoiEditComponent } from "./poi/poi-edit/poi-edit.component";
import { PoiListComponent } from "./poi/poi-list/poi-list.component";
import { PoiCategoryComponent } from "./poi-category/poi-category.component";
import { PoiCategoryListComponent } from "./poi-category/poi-category-list/poi-category-list.component";
import { PoiCategoryCriteriaComponent } from "./poi-category/poi-category-criteria/poi-category-criteria.component";
import { PoiCategoryEditComponent } from "./poi-category/poi-category-edit/poi-category-edit.component";
import { MatTabsModule } from "@angular/material/tabs";
import { DropzoneSingleLargeComponent } from "./component/dropzone-single-large/dropzone-single-large.component";
import { ButtonLargeComponent } from "./component/button-large/button-large.component";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PollCategoryComponent } from "./poll-category/poll-category.component";
import { PollCategoryEditComponent } from "./poll-category/poll-category-edit/poll-category-edit.component";
import { PollCategoryListComponent } from "./poll-category/poll-category-list/poll-category-list.component";
import { PollCategoryCriteriaComponent } from "./poll-category/poll-category-criteria/poll-category-criteria.component";
import { MultiSelectedOptionComponent } from "./component/multi-selected-option/multi-selected-option.component";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TextEditorComponent } from './component/text-editor/text-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EventCategoryListComponent } from './event-category/event-category-list/event-category-list.component';
import { EventCategoryComponent } from './event-category/event-category.component';
import { EventCategoryCriteriaComponent } from './event-category/event-category-criteria/event-category-criteria.component';
import { EventCategoryEditComponent } from './event-category/event-category-edit/event-category-edit.component';
import { RotationComponent } from './rotation/rotation.component';
import { RotationCriteriaComponent } from './rotation/rotation-criteria/rotation-criteria.component';
import { RotationListComponent } from './rotation/rotation-list/rotation-list.component';
import { RotationEditComponent } from './rotation/rotation-edit/rotation-edit.component';
import { ForceAdsComponent } from './force-ads/force-ads.component';
import { ForceAdsCriteriaComponent } from './force-ads/force-ads-criteria/force-ads-criteria.component';
import { ForceAdsEditComponent } from './force-ads/force-ads-edit/force-ads-edit.component';
import { ForceAdsListComponent } from './force-ads/force-ads-list/force-ads-list.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { KnowledgeCriteriaComponent } from './knowledge/knowledge-criteria/knowledge-criteria.component';
import { KnowledgeEditComponent } from './knowledge/knowledge-edit/knowledge-edit.component';
import { KnowledgeListComponent } from './knowledge/knowledge-list/knowledge-list.component';
import { KnowledgeCategoryComponent } from './knowledge-category/knowledge-category.component';
import { KnowledgeCategoryCriteriaComponent } from './knowledge-category/knowledge-category-criteria/knowledge-category-criteria.component';
import { KnowledgeCategoryEditComponent } from './knowledge-category/knowledge-category-edit/knowledge-category-edit.component';
import { KnowledgeCategoryListComponent } from './knowledge-category/knowledge-category-list/knowledge-category-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCriteriaComponent } from './contact/contact-criteria/contact-criteria.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactCategoryComponent } from './contact-category/contact-category.component';
import { ContactCategoryCriteriaComponent } from './contact-category/contact-category-criteria/contact-category-criteria.component';
import { ContactCategoryEditComponent } from './contact-category/contact-category-edit/contact-category-edit.component';
import { ContactCategoryListComponent } from './contact-category/contact-category-list/contact-category-list.component';
import { InputNumberComponent } from './component/input-number/input-number.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { NewsCategoryCriteriaComponent } from './news-category/news-category-criteria/news-category-criteria.component';
import { NewsCategoryListComponent } from './news-category/news-category-list/news-category-list.component';
import { NewsCategoryEditComponent } from './news-category/news-category-edit/news-category-edit.component';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberCriteriaComponent } from './member/member-criteria/member-criteria.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserRoleCriteriaComponent } from './user-role/user-role-criteria/user-role-criteria.component';
import { UserRoleEditComponent } from './user-role/user-role-edit/user-role-edit.component';
import { UserRoleListComponent } from './user-role/user-role-list/user-role-list.component';
import { LogoComponent } from './logo/logo.component';
import { LogoEditComponent } from './logo/logo-edit/logo-edit.component';
import { LogoListComponent } from './logo/logo-list/logo-list.component';
import { LogoCriteriaComponent } from './logo/logo-criteria/logo-criteria.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationCriteriaComponent } from './notification/notification-criteria/notification-criteria.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationEditComponent } from './notification/notification-edit/notification-edit.component';
import { NotificationCategoryComponent } from './notification-category/notification-category.component';
import { NotificationCategoryCriteriaComponent } from './notification-category/notification-category-criteria/notification-category-criteria.component';
import { NotificationCategoryListComponent } from './notification-category/notification-category-list/notification-category-list.component';
import { NotificationCategoryEditComponent } from './notification-category/notification-category-edit/notification-category-edit.component';
import { MemberMobileComponent } from './member-mobile/member-mobile.component';
import { MemberMobileListComponent } from './member-mobile/member-mobile-list/member-mobile-list.component';
import { MemberMobileEditComponent } from './member-mobile/member-mobile-edit/member-mobile-edit.component';
import { MemberMobileCriteriaComponent } from './member-mobile/member-mobile-criteria/member-mobile-criteria.component';
import { OrganizationComponent } from './organization/organization.component';
import { WelfareComponent } from './welfare/welfare.component';
import { WelfareCriteriaComponent } from './welfare/welfare-criteria/welfare-criteria.component';
import { WelfareListComponent } from './welfare/welfare-list/welfare-list.component';
import { WelfareEditComponent } from './welfare/welfare-edit/welfare-edit.component';
import { WelfareCategoryComponent } from './welfare-category/welfare-category.component';
import { WelfareCategoryCriteriaComponent } from './welfare-category/welfare-category-criteria/welfare-category-criteria.component';
import { WelfareCategoryListComponent } from './welfare-category/welfare-category-list/welfare-category-list.component';
import { WelfareCategoryEditComponent } from './welfare-category/welfare-category-edit/welfare-category-edit.component';
import { TrainingComponent } from './training/training.component';
import { TrainingCriteriaComponent } from './training/training-criteria/training-criteria.component';
import { TrainingEditComponent } from './training/training-edit/training-edit.component';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { TrainingCategoryComponent } from './training-category/training-category.component';
import { TrainingCategoryCriteriaComponent } from './training-category/training-category-criteria/training-category-criteria.component';
import { TrainingCategoryListComponent } from './training-category/training-category-list/training-category-list.component';
import { TrainingCategoryEditComponent } from './training-category/training-category-edit/training-category-edit.component';
import { ReporterComponent } from './reporter/reporter.component';
import { ReporterCriteriaComponent } from './reporter/reporter-criteria/reporter-criteria.component';
import { ReporterEditComponent } from './reporter/reporter-edit/reporter-edit.component';
import { ReporterListComponent } from './reporter/reporter-list/reporter-list.component';
import { ReporterCategoryComponent } from './reporter-category/reporter-category.component';
import { ReporterCategoryCriteriaComponent } from './reporter-category/reporter-category-criteria/reporter-category-criteria.component';
import { ReporterCategoryEditComponent } from './reporter-category/reporter-category-edit/reporter-category-edit.component';
import { ReporterCategoryListComponent } from './reporter-category/reporter-category-list/reporter-category-list.component';
import { LineComponent } from './line/line.component';
import { Organization2Component } from './organization2/organization2.component';
import { Organization2Lv0EditComponent } from './organization2/organization2-lv0-edit/organization2-lv0-edit.component';
import { Organization2Lv1EditComponent } from './organization2/organization2-lv1-edit/organization2-lv1-edit.component';
import { Organization2Lv2EditComponent } from './organization2/organization2-lv2-edit/organization2-lv2-edit.component';
import { Organization2Lv3EditComponent } from './organization2/organization2-lv3-edit/organization2-lv3-edit.component';
import { Organization2Lv4EditComponent } from './organization2/organization2-lv4-edit/organization2-lv4-edit.component';
import { WarningComponent } from './warning/warning.component';
import { WarningCriteriaComponent } from './warning/warning-criteria/warning-criteria.component';
import { WarningListComponent } from './warning/warning-list/warning-list.component';
import { WarningEditComponent } from './warning/warning-edit/warning-edit.component';
import { WarningCategoryComponent } from './warning-category/warning-category.component';
import { WarningCategoryCriteriaComponent } from './warning-category/warning-category-criteria/warning-category-criteria.component';
import { WarningCategoryEditComponent } from './warning-category/warning-category-edit/warning-category-edit.component';
import { WarningCategoryListComponent } from './warning-category/warning-category-list/warning-category-list.component';
import { PolicyApplicationComponent } from './policy-application/policy-application.component';
import { PolicyApplicationListComponent } from './policy-application/policy-application-list/policy-application-list.component';
import { PolicyApplicationCriteriaComponent } from './policy-application/policy-application-criteria/policy-application-criteria.component';
import { PolicyApplicationEditComponent } from './policy-application/policy-application-edit/policy-application-edit.component';
import { PolicyMarketingComponent } from './policy-marketing/policy-marketing.component';
import { PolicyMarketingCriteriaComponent } from './policy-marketing/policy-marketing-criteria/policy-marketing-criteria.component';
import { PolicyMarketingEditComponent } from './policy-marketing/policy-marketing-edit/policy-marketing-edit.component';
import { PolicyMarketingListComponent } from './policy-marketing/policy-marketing-list/policy-marketing-list.component';
import { MemberMobilePolicyApplicationComponent } from './member-mobile-policy-application/member-mobile-policy-application.component';
import { MemberMobilePolicyApplicationCriteriaComponent } from './member-mobile-policy-application/member-mobile-policy-application-criteria/member-mobile-policy-application-criteria.component';
import { MemberMobilePolicyApplicationListComponent } from './member-mobile-policy-application/member-mobile-policy-application-list/member-mobile-policy-application-list.component';
import { MemberMobilePolicyMarketingComponent } from './member-mobile-policy-marketing/member-mobile-policy-marketing.component';
import { MemberMobilePolicyMarketingCriteriaComponent } from './member-mobile-policy-marketing/member-mobile-policy-marketing-criteria/member-mobile-policy-marketing-criteria.component';
import { MemberMobilePolicyMarketingListComponent } from './member-mobile-policy-marketing/member-mobile-policy-marketing-list/member-mobile-policy-marketing-list.component';
import { FundComponent } from './fund/fund.component';
import { FundListComponent } from './fund/fund-list/fund-list.component';
import { FundCriteriaComponent } from './fund/fund-criteria/fund-criteria.component';
import { FundEditComponent } from './fund/fund-edit/fund-edit.component';
import { FundCategoryComponent } from './fund-category/fund-category.component';
import { FundCategoryCriteriaComponent } from './fund-category/fund-category-criteria/fund-category-criteria.component';
import { FundCategoryListComponent } from './fund-category/fund-category-list/fund-category-list.component';
import { FundCategoryEditComponent } from './fund-category/fund-category-edit/fund-category-edit.component';
import { CooperativeFormComponent } from './cooperative-form/cooperative-form.component';
import { CooperativeFormCriteriaComponent } from './cooperative-form/cooperative-form-criteria/cooperative-form-criteria.component';
import { CooperativeFormEditComponent } from './cooperative-form/cooperative-form-edit/cooperative-form-edit.component';
import { CooperativeFormListComponent } from './cooperative-form/cooperative-form-list/cooperative-form-list.component';
import { CooperativeFormCategoryComponent } from './cooperative-form-category/cooperative-form-category.component';
import { CooperativeFormCategoryCriteriaComponent } from './cooperative-form-category/cooperative-form-category-criteria/cooperative-form-category-criteria.component';
import { CooperativeFormCategoryListComponent } from './cooperative-form-category/cooperative-form-category-list/cooperative-form-category-list.component';
import { CooperativeFormCategoryEditComponent } from './cooperative-form-category/cooperative-form-category-edit/cooperative-form-category-edit.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ComingSoonCriteriaComponent } from './coming-soon/coming-soon-criteria/coming-soon-criteria.component';
import { ComingSoonEditComponent } from './coming-soon/coming-soon-edit/coming-soon-edit.component';
import { ComingSoonListComponent } from './coming-soon/coming-soon-list/coming-soon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    RoutingParamComponent,
    RoutingParamsComponent,
    RoutingObjectComponent,
    FileUploadComponent,
    ModalComponent,
    ModalDialogComponent,
    ModalAlertComponent,
    SpinnerComponent,
    ToastComponent,
    FormComponent,
    DatetimepickerComponent,
    ApplicationComponent,
    ListComponent,
    CriteriaComponent,
    ViewComponent,
    EditComponent,
    LoginComponent,
    NewsComponent,
    NewsCriteriaComponent,
    NewsListComponent,
    NewsEditComponent,
    SplashComponent,
    SplashListComponent,
    SplashEditComponent,
    SplashCriteriaComponent,
    PersonalComponent,
    BannerComponent,
    BannerListComponent,
    BannerCriteriaComponent,
    BannerEditComponent,
    EventComponent,
    EventListComponent,
    EventCriteriaComponent,
    EventEditComponent,
    DropZoneComponent,
    MainPopupComponent,
    MainPopupCriteriaComponent,
    MainPopupListComponent,
    MainPopupEditComponent,
    SelectOptionComponent,
    InputTextComponent,
    ButtonComponent,
    ButtonEditComponent,
    ButtonViewComponent,
    ButtonDeleteComponent,
    DateFormatPipe,
    DatetimeFormatPipe,
    SelectOptionsComponent,
    TextAreaComponent,
    DropzoneSingleComponent,
    DropzoneMultiComponent,
    DatepickerComponent,
    PrivilegeComponent,
    PrivilegeCriteriaComponent,
    PrivilegeEditComponent,
    PrivilegeListComponent,
    CustomDatetimepickerComponent,
    InputTextBorderComponent,
    SuggestionComponent,
    SuggestionCriteriaComponent,
    SuggestionEditComponent,
    SuggestionListComponent,
    SwitchComponent,
    CustomCheckboxComponent,
    AboutUsComponent,
    PollComponent,
    PollCriteriaComponent,
    PollEditComponent,
    PollListComponent,
    PrivilegeCategoryComponent,
    PrivilegeCategoryCriteriaComponent,
    PrivilegeCategoryEditComponent,
    PrivilegeCategoryListComponent,
    SuggestionCategoryComponent,
    SuggestionCategoryCriteriaComponent,
    SuggestionCategoryEditComponent,
    SuggestionCategoryListComponent,
    PoiComponent,
    PoiCriteriaComponent,
    PoiEditComponent,
    PoiListComponent,
    PoiCategoryComponent,
    PoiCategoryListComponent,
    PoiCategoryCriteriaComponent,
    PoiCategoryEditComponent,
    DropzoneSingleLargeComponent,
    ButtonLargeComponent,
    DashboardComponent,
    PollCategoryComponent,
    PollCategoryEditComponent,
    PollCategoryListComponent,
    PollCategoryCriteriaComponent,
    MultiSelectedOptionComponent,
    TextEditorComponent,
    EventCategoryEditComponent,
    EventCategoryListComponent,
    EventCategoryComponent,
    EventCategoryCriteriaComponent,
    ContactComponent,
    ContactCriteriaComponent,
    ContactEditComponent,
    ContactListComponent,
    ContactCategoryComponent,
    ContactCategoryCriteriaComponent,
    ContactCategoryEditComponent,
    ContactCategoryListComponent,
    ForceAdsComponent,
    ForceAdsCriteriaComponent,
    ForceAdsEditComponent,
    ForceAdsListComponent,
    KnowledgeComponent,
    KnowledgeCriteriaComponent,
    KnowledgeEditComponent,
    KnowledgeListComponent,
    KnowledgeCategoryComponent,
    KnowledgeCategoryCriteriaComponent,
    KnowledgeCategoryEditComponent,
    KnowledgeCategoryListComponent,
    RotationComponent,
    RotationCriteriaComponent,
    RotationListComponent,
    RotationEditComponent,
    InputNumberComponent,
    NewsCategoryComponent,
    NewsCategoryCriteriaComponent,
    NewsCategoryListComponent,
    NewsCategoryEditComponent,
    MemberComponent,
    MemberListComponent,
    MemberCriteriaComponent,
    MemberEditComponent,
    UserRoleComponent,
    UserRoleCriteriaComponent,
    UserRoleEditComponent,
    UserRoleListComponent,
    LogoComponent,
    LogoEditComponent,
    LogoListComponent,
    LogoCriteriaComponent,
    NotificationComponent,
    NotificationCriteriaComponent,
    NotificationListComponent,
    NotificationEditComponent,
    NotificationCategoryComponent,
    NotificationCategoryCriteriaComponent,
    NotificationCategoryListComponent,
    NotificationCategoryEditComponent,
    MemberMobileComponent,
    MemberMobileListComponent,
    MemberMobileCriteriaComponent,
    MemberMobileEditComponent,
    OrganizationComponent,
    WelfareComponent,
    WelfareCriteriaComponent,
    WelfareListComponent,
    WelfareEditComponent,
    WelfareCategoryComponent,
    WelfareCategoryCriteriaComponent,
    WelfareCategoryListComponent,
    WelfareCategoryEditComponent,
    TrainingComponent,
    TrainingCriteriaComponent,
    TrainingEditComponent,
    TrainingListComponent,
    TrainingCategoryComponent,
    TrainingCategoryCriteriaComponent,
    TrainingCategoryListComponent,
    TrainingCategoryEditComponent,
    ReporterComponent,
    ReporterCriteriaComponent,
    ReporterEditComponent,
    ReporterListComponent,
    ReporterCategoryComponent,
    ReporterCategoryCriteriaComponent,
    ReporterCategoryEditComponent,
    ReporterCategoryListComponent,
    LineComponent,
    Organization2Component,
    Organization2Lv0EditComponent,
    Organization2Lv1EditComponent,
    Organization2Lv2EditComponent,
    Organization2Lv3EditComponent,
    Organization2Lv4EditComponent,
    WarningComponent,
    WarningCriteriaComponent,
    WarningListComponent,
    WarningEditComponent,
    WarningCategoryComponent,
    WarningCategoryCriteriaComponent,
    WarningCategoryEditComponent,
    WarningCategoryListComponent,
    PolicyApplicationComponent,
    PolicyApplicationListComponent,
    PolicyApplicationCriteriaComponent,
    PolicyApplicationEditComponent,
    PolicyMarketingComponent,
    PolicyMarketingCriteriaComponent,
    PolicyMarketingEditComponent,
    PolicyMarketingListComponent,
    MemberMobilePolicyApplicationComponent,
    MemberMobilePolicyApplicationCriteriaComponent,
    MemberMobilePolicyApplicationListComponent,
    MemberMobilePolicyMarketingComponent,
    MemberMobilePolicyMarketingCriteriaComponent,
    MemberMobilePolicyMarketingListComponent,
    FundComponent,
    FundListComponent,
    FundCriteriaComponent,
    FundEditComponent,
    FundCategoryComponent,
    FundCategoryCriteriaComponent,
    FundCategoryListComponent,
    FundCategoryEditComponent,
    CooperativeFormComponent,
    CooperativeFormCriteriaComponent,
    CooperativeFormEditComponent,
    CooperativeFormListComponent,
    CooperativeFormCategoryComponent,
    CooperativeFormCategoryCriteriaComponent,
    CooperativeFormCategoryListComponent,
    CooperativeFormCategoryEditComponent,
    DropzoneSingleFileComponent,
    ComingSoonComponent,
    ComingSoonCriteriaComponent,
    ComingSoonEditComponent,
    ComingSoonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatMomentDateModule,
    NgxDropzoneModule,
    MatSlideToggleModule,
    NgxChartsModule,
    AngularEditorModule,
    CKEditorModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatRadioModule,
    GalleryModule,
    LightboxModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
