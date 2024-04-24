import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammatoriComponentComponent } from './programmatori-component.component';

describe('ProgrammatoriComponentComponent', () => {
  let component: ProgrammatoriComponentComponent;
  let fixture: ComponentFixture<ProgrammatoriComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammatoriComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammatoriComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
