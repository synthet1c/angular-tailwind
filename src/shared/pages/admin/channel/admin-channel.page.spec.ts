import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChannelPage } from './admin-channel.page';

describe('ChannelPageComponent', () => {
  let component: AdminChannelPage;
  let fixture: ComponentFixture<AdminChannelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChannelPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
