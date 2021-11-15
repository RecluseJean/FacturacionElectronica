import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillasDocumentosComponent } from './plantillas-documentos.component';

describe('PlantillasDocumentosComponent', () => {
  let component: PlantillasDocumentosComponent;
  let fixture: ComponentFixture<PlantillasDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillasDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillasDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
