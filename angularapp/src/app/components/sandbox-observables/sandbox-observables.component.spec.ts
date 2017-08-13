import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxObservablesComponent } from './sandbox-observables.component';

describe('SandboxObservablesComponent', () => {
  let component: SandboxObservablesComponent;
  let fixture: ComponentFixture<SandboxObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
