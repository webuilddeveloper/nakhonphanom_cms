import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterEditComponent } from './reporter-edit.component';

describe('ReporterEditComponent', () => {
  let component: ReporterEditComponent;
  let fixture: ComponentFixture<ReporterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
