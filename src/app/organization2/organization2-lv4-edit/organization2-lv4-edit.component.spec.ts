import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Organization2Lv4EditComponent } from './organization2-lv4-edit.component';

describe('Organization2Lv4EditComponent', () => {
  let component: Organization2Lv4EditComponent;
  let fixture: ComponentFixture<Organization2Lv4EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organization2Lv4EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Organization2Lv4EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
