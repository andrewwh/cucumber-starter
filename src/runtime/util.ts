import { Breakpoint, Dimension } from './dimension';
import { dimensions } from './breakpoints';

/**
 * Get a window Dimension from scenario tags to test break points
 * 
 * Supported break points are:
 * - @large
 * - @medium
 * - @small
 * 
 * with corresponding orientation of:
 * - @landscape
 * - @portrait
 * 
 * The default is @large @landscape
 * 
 * @param tags
 */
export function getDimensionFromTags(tags: string[]): Dimension {
	let viewTag: string | undefined;
	let orientationTag: string | undefined;
	let view: Breakpoint = 'large';

	if (tags) {
		viewTag = tags.find((tag) => tag === '@large' || tag === '@medium' || tag === '@small');
		orientationTag = tags.find((tag) => tag === '@portrait' || tag === '@landscape');
		if (viewTag) {
			view = viewTag.substring(1) as Breakpoint;
		}
	}

	let orientation: string;
	if (orientationTag) {
		orientation = orientationTag.substring(1);
	} else if (view === 'small') {
		orientation = 'portrait';
	} else {
		orientation = 'landscape';
	}

	if (orientation === 'portrait') {
		return dimensions.portrait[view];
	}

	return dimensions.landscape[view];
}