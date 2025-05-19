import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from 'src/app/shared/service-provider.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-mobile-policy-application-list',
  templateUrl: './member-mobile-policy-application-list.component.html',
  styleUrls: ['./member-mobile-policy-application-list.component.css']
})
export class MemberMobilePolicyApplicationListComponent implements OnInit {

  @Input() messageInput: any = [];
  @Output() messageToEmit = new EventEmitter<any>();
  @Input() paginationModel: any = {}; // <----- Pagination
  category: any = {};
  permission: any;
  chkall: boolean = false;
  itemSelectedList: any = [];
  itemSelected: boolean = false;
  searchModel: any = {};

  constructor(private router: Router
            , private serviceProviderService: ServiceProviderService
            , private toastr: ToastrService) { }

  ngOnInit(): void {

    if (localStorage.getItem('category') != null) {
      this.category = JSON.parse(localStorage.getItem('category'));
    }
  }

  search() {
    this.searchModel.mode = 'search';
    this.messageToEmit.emit(this.searchModel);
  }

  create() {
    this.router.navigate(['member-mobile-policy-application-edit', ''], { skipLocationChange: true });
  }

  view(param) {
    this.router.navigate(['member-mobile-policy-application-edit', param], { skipLocationChange: true });
  }

  edit(param) {
    this.router.navigate(['member-mobile-policy-application-edit', param], { skipLocationChange: true });
  }

  filterPerPage(perPage) {
    // call read by perpage
  }

  setPerPage(param) {
    this.searchModel.mode = 'search';
    this.searchModel.limit = parseInt(param);
    this.messageToEmit.emit(this.searchModel);
  }
}