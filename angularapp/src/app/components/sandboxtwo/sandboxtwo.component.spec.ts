import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxtwoComponent } from './sandboxtwo.component';

describe('SandboxtwoComponent', () => {
  let component: SandboxtwoComponent;
  let fixture: ComponentFixture<SandboxtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
