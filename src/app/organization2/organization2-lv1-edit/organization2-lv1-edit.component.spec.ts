import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Organization2Lv1EditComponent } from './organization2-lv1-edit.component';

describe('Organization2Lv1EditComponent', () => {
  let component: Organization2Lv1EditComponent;
  let fixture: ComponentFixture<Organization2Lv1EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organization2Lv1EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Organization2Lv1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
