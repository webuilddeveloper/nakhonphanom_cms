import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterListComponent } from './reporter-list.component';

describe('ReporterListComponent', () => {
  let component: ReporterListComponent;
  let fixture: ComponentFixture<ReporterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
