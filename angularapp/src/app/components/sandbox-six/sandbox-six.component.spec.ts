import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxSixComponent } from './sandbox-six.component';

describe('SandboxSixComponent', () => {
  let component: SandboxSixComponent;
  let fixture: ComponentFixture<SandboxSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
