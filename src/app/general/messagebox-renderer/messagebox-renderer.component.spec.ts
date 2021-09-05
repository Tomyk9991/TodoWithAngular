import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageboxRendererComponent } from './messagebox-renderer.component';

describe('MessageboxRendererComponent', () => {
  let component: MessageboxRendererComponent;
  let fixture: ComponentFixture<MessageboxRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageboxRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageboxRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
