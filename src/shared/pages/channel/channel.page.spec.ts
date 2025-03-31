import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPage } from './channel.page';

describe('ChannelPageComponent', () => {
  let component: ChannelPage;
  let fixture: ComponentFixture<ChannelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
