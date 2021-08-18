import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntryPreviewComponent } from './list-entry-preview.component';

describe('ListEntryPreviewComponent', () => {
  let component: ListEntryPreviewComponent;
  let fixture: ComponentFixture<ListEntryPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntryPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
