import { computed, Signal } from '@angular/core';

/**
 * Curried utility to create a computed signal that plucks a value using a dot-separated path.
 *
 * @param path The dot-separated path to the property (e.g., "chatter.name").
 * @param source (optional if curried) The signal containing the object to pluck from.
 * @returns A function if curried, or a plucked signal.
 */
export function computedPluck<
  TResult = unknown,
  TInput = unknown,
>(path: string, source?: Signal<TInput | undefined | null>): Signal<TResult> | ((source: Signal<TInput | undefined | null>) => Signal<TResult>) {
  if (arguments.length === 1) {
    return (source: Signal<TInput | undefined | null>): Signal<TResult> => {
      return computedPluck(path, source) as Signal<TResult>;
    };
  }
  return computed(() => {
    const obj = source!();
    if (obj == null) return undefined as TResult; // Handle null/undefined source gracefully
    // Split the path and traverse the object tree safely
    return path.split('.').reduce((acc: any, key) => acc?.[key], obj) as TResult;
  });
}
