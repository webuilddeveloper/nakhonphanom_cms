import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Organization2Lv2EditComponent } from './organization2-lv2-edit.component';

describe('Organization2Lv2EditComponent', () => {
  let component: Organization2Lv2EditComponent;
  let fixture: ComponentFixture<Organization2Lv2EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organization2Lv2EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Organization2Lv2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
