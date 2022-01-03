import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSelectComponent } from './cd-select.component';

describe('DropdownComponent', () => {
  let component: CdSelectComponent;
  let fixture: ComponentFixture<CdSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
