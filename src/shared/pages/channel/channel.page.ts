import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {SelectComponent} from '#components/select/select.component';
import {ChatListComponent} from '#components/chat-list/chat-list.component';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {getParam} from '#utils/getParam';

@Component({
  selector: 'app-channel-page',
  imports: [
    SelectComponent,
    ChatListComponent,
  ],
  templateUrl: './channel.page.html',
  styleUrl: './channel.page.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelPage implements OnInit {

  private route = inject(ActivatedRoute);
  public channel$ = this.route.paramMap.pipe(getParam('channel'))

  constructor() {
  }

  ngOnInit() {
    this.channel$.subscribe(channel => {
      console.log('ChannelPage:ngOnInit', channel);
    });
  }


}
