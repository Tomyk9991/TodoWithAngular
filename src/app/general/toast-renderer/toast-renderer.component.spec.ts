import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToastRendererComponent} from './toast-renderer.component';

describe('ToastRendererComponent', () => {
  let component: ToastRendererComponent;
  let fixture: ComponentFixture<ToastRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
