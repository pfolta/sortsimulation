import "@/app/utils/Array";

declare global {
    interface ArrayConstructor {
        almostSorted: (size: number, distance: number) => number[];
        fewUnique: (size: number, uniqueCount: number) => number[];
        random: (size: number) => number[];
        range: <T>(start: number | T[], end?: number) => number[];
        reversed: (size: number) => number[];
        sorted: (size: number) => number[];
    }
}

/**
 * Create an array where every element is at most `distance` places away from its sorted position
 */
Array.almostSorted = (size: number, distance: number): number[] =>
    Array.sorted(size)
        .chunked(distance + 1)
        .flatMap((chunk) => chunk.shuffled());

/**
 * Create a randomly shuffled array containing `uniqueCount` unique numbers from 1 to `size`, e.g. [7, 3, 8, 8, 7, 4, 3, 1, 3, 4]
 */
Array.fewUnique = (size: number, uniqueCount: number): number[] => {
    const uniques = Array.random(size).slice(0, uniqueCount);
    return Array.range(size).map(() => uniques[Math.floor(Math.random() * uniques.length)]);
};

/**
 * Create a randomly shuffled array containing all numbers from 1 to `size`, e.g. [3, 5, 1, 2, 4]
 */
Array.random = (size: number): number[] => Array.sorted(size).shuffled();

/**
 * Create a range from `start` to less than `end` (inclusive of `start` but not `end`): [start, end)
 * If only one argument is passed, the range will start at 0: [0, end)
 * If an array is passed, the range will contain the indices of the array provided: [0, array.length)
 */
Array.range = <T>(start: number | T[], end?: number): number[] => {
    if (Array.isArray(start)) {
        return [...start.keys()];
    }

    if (end !== undefined) {
        return Array.from({ length: end - start }, (_, i) => start + i);
    }

    return [...Array(start).keys()];
};

/**
 * Create an array from `size` down to 1 in descending order, e.g. [5, 4, 3, 2, 1]
 */
Array.reversed = (size: number): number[] => Array.sorted(size).reverse();

/**
 * Create a sorted array from 1 to `size`, e.g. [1, 2, 3, 4, 5]
 */
Array.sorted = (size: number): number[] => Array.range(1, size + 1);

export {};
