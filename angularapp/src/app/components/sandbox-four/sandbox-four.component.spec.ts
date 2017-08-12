import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxFourComponent } from './sandbox-four.component';

describe('SandboxFourComponent', () => {
  let component: SandboxFourComponent;
  let fixture: ComponentFixture<SandboxFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
