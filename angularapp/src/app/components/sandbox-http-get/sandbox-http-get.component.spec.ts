import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxHttpGetComponent } from './sandbox-http-get.component';

describe('SandboxHttpGetComponent', () => {
  let component: SandboxHttpGetComponent;
  let fixture: ComponentFixture<SandboxHttpGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxHttpGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxHttpGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
