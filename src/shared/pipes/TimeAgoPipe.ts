import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'timeAgo',
  // Mark as impure for change detection
  pure: false,
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private currentTimeObservable: Observable<Date>;
  private subscription: Subscription | null = null;
  private currentValue!: string;

  constructor(private cd: ChangeDetectorRef) {
    // Observable that emits the current date every second
    this.currentTimeObservable = interval(5000).pipe(map(() => new Date()));
  }

  transform(value: string | Date): string {
    if (!this.subscription) {
      // Subscribe to the observable to trigger change detection
      this.subscription = this.currentTimeObservable.subscribe(() => {
        this.cd.markForCheck(); // Mark the pipe for change detection
        this.currentValue = this.calculateTimeAgo(value);
      });
    }

    if (!this.currentValue) {
      // Calculate the time difference on the first run
      this.currentValue = this.calculateTimeAgo(value);
    }

    return this.currentValue;
  }

  private calculateTimeAgo(date: string | Date): string {
    const now = new Date().getTime();
    const givenTime = new Date(date).getTime();
    const diffInSeconds = Math.round((now - givenTime) / 1000);

    if (diffInSeconds < 60) {
      return diffInSeconds <= 1 ? 'just now' : `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return minutes === 1 ? 'a min ago' : `${minutes} mins ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return hours === 1 ? 'an hour ago' : `${hours} hours ago`;
    } else {
      return new Date(date).toLocaleString();
    }
  }

  ngOnDestroy(): void {
    // Cleanup the subscription on destroy
    this.subscription?.unsubscribe();
  }
}
