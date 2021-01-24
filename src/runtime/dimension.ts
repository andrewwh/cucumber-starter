export type Breakpoint = 'small' | 'medium' | 'large';
export type Orientation = 'landscape' | 'portrait';

export interface Dimension {
    name: Breakpoint;
    orientation: Orientation;
    width: number;
    height: number;
}

export type DimensionMap = Record<Breakpoint, Dimension>;