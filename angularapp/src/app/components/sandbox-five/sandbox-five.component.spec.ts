import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxFiveComponent } from './sandbox-five.component';

describe('SandboxFiveComponent', () => {
  let component: SandboxFiveComponent;
  let fixture: ComponentFixture<SandboxFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
