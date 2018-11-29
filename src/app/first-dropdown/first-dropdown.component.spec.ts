import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDropdownComponent } from './first-dropdown.component';

describe('FirstDropdownComponent', () => {
  let component: FirstDropdownComponent;
  let fixture: ComponentFixture<FirstDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });


});
