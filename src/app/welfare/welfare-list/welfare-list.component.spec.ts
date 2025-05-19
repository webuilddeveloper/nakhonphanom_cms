import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareListComponent } from './welfare-list.component';

describe('WelfareListComponent', () => {
  let component: WelfareListComponent;
  let fixture: ComponentFixture<WelfareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
