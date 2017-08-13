import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxServiceComponent } from './sandbox-service.component';

describe('SandboxServiceComponent', () => {
  let component: SandboxServiceComponent;
  let fixture: ComponentFixture<SandboxServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
