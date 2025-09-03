/**
 * TypeScript utility types and type guards
 */

// Common utility types for the wiki
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Navigation types
export interface NavigationLink {
    title: string;
    path: string;
}

// Content types
export interface ContentItem {
    id: string;
    title: string;
    type: 'character' | 'concept' | 'god' | 'place' | 'book';
    path: string;
}

/**
 * Type guard to check if a value is not null or undefined
 */
export function isDefined<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

/**
 * Type guard to check if a value is a non-empty string
 */
export function isNonEmptyString(value: any): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Type guard to check if an object has a specific property
 */
export function hasProperty<T, K extends string>(
    obj: T,
    prop: K
): obj is T & Record<K, unknown> {
    return obj !== null && obj !== undefined && prop in (obj as Record<string, unknown>);
}

/**
 * Type guard to check if a value is an array with at least one element
 */
export function isNonEmptyArray<T>(value: unknown): value is [T, ...T[]] {
    return Array.isArray(value) && value.length > 0;
}

/**
 * Type guard to check if a value is a valid NavigationLink
 */
export function isNavigationLink(value: any): value is NavigationLink {
    return (
        typeof value === 'object' &&
        value !== null &&
        isNonEmptyString(value.title) &&
        isNonEmptyString(value.path)
    );
}

/**
 * Safely gets a nested property from an object
 */
export function safeGet<T>(
    obj: any,
    path: string,
    defaultValue?: T
): T | undefined {
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
        if (current === null || current === undefined || !(key in current)) {
            return defaultValue;
        }
        current = current[key];
    }
    
    return current as T;
}

/**
 * Creates a type-safe key-value pair
 */
export function createKeyValuePair<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    key: K
): { key: K; value: T[K] } {
    return { key, value: obj[key] };
}

/**
 * Filters out null and undefined values from an array
 */
export function filterDefined<T>(array: (T | null | undefined)[]): T[] {
    return array.filter(isDefined);
}

/**
 * Type-safe Object.keys that preserves key types
 */
export function typedKeys<T extends Record<string, any>>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

/**
 * Type-safe Object.entries that preserves key and value types
 */
export function typedEntries<T extends Record<string, any>>(
    obj: T
): Array<[keyof T, T[keyof T]]> {
    return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}
