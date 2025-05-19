import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from 'src/app/shared/service-provider.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-mobile-policy-marketing-list',
  templateUrl: './member-mobile-policy-marketing-list.component.html',
  styleUrls: ['./member-mobile-policy-marketing-list.component.css']
})
export class MemberMobilePolicyMarketingListComponent implements OnInit {

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

    if (localStorage.getItem('memberMobilePolicyApplicationPage') != null) {
      let model: any = [];
      model = JSON.parse(localStorage.getItem('memberMobilePolicyApplicationPage'));

      for (let index = 0; index < model.length; index++) {
        if (index == 0)
          this.permission = model[index].title;
        else
          this.permission = this.permission + "," + model[index].title;
      }
    }

    if (localStorage.getItem('category') != null) {
      this.category = JSON.parse(localStorage.getItem('category'));
    }
  }

  search() {
    this.searchModel.mode = 'search';
    this.messageToEmit.emit(this.searchModel);
  }

  create() {
    this.router.navigate(['member-mobile-policy-marketing-edit', ''], { skipLocationChange: true });
  }

  view(param) {
    this.router.navigate(['member-mobile-policy-marketing-edit', param], { skipLocationChange: true });
  }

  edit(param) {
    this.router.navigate(['member-mobile-policy-marketing-edit', param], { skipLocationChange: true });
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