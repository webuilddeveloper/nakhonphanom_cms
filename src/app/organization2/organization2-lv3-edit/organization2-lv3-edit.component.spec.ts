import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Organization2Lv3EditComponent } from './organization2-lv3-edit.component';

describe('Organization2Lv3EditComponent', () => {
  let component: Organization2Lv3EditComponent;
  let fixture: ComponentFixture<Organization2Lv3EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organization2Lv3EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Organization2Lv3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
