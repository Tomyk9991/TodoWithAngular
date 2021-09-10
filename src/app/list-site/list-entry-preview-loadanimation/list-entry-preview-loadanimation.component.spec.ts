import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntryPreviewLoadanimationComponent } from './list-entry-preview-loadanimation.component';

describe('ListEntryPreviewLoadanimationComponent', () => {
  let component: ListEntryPreviewLoadanimationComponent;
  let fixture: ComponentFixture<ListEntryPreviewLoadanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntryPreviewLoadanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntryPreviewLoadanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
