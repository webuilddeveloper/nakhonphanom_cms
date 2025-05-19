import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Organization2Lv0EditComponent } from './organization2-lv0-edit.component';

describe('Organization2Lv0EditComponent', () => {
  let component: Organization2Lv0EditComponent;
  let fixture: ComponentFixture<Organization2Lv0EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organization2Lv0EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Organization2Lv0EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
