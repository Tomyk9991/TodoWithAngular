import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryContainerComponent} from './entry-container.component';

describe('EntryContainerComponent', () => {
  let component: EntryContainerComponent;
  let fixture: ComponentFixture<EntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
