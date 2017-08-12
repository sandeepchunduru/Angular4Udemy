import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxthreeComponent } from './sandboxthree.component';

describe('SandboxthreeComponent', () => {
  let component: SandboxthreeComponent;
  let fixture: ComponentFixture<SandboxthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
