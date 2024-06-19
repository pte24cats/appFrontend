import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatsComponent } from './edit-cats.component';

describe('EditCatsComponent', () => {
  let component: EditCatsComponent;
  let fixture: ComponentFixture<EditCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
