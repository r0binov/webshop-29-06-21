import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEidtComponent } from './item-eidt.component';

describe('ItemEidtComponent', () => {
  let component: ItemEidtComponent;
  let fixture: ComponentFixture<ItemEidtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEidtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEidtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
