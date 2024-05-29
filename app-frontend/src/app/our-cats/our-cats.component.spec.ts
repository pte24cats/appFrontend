import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCatsComponent } from './our-cats.component';

describe('SearchCatsComponent', () => {
  let component: OurCatsComponent;
  let fixture: ComponentFixture<OurCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
