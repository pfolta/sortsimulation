// Create a sorted array from 1 to `size`, e.g. [1, 2, 3, 4, 5]
const createAlreadySorted = (size: number): number[] => range(1, size + 1);

// Create a randomly shuffled array containing all numbers from 1 to `size`, e.g. [3, 5, 1, 2, 4]
const createRandom = (size: number): number[] => shuffle(createAlreadySorted(size));

// Create an array from `size` down to 1 in descending order, e.g. [5, 4, 3, 2, 1]
const createReversed = (size: number): number[] => createAlreadySorted(size).reverse();

// Determine whether an array is sorted
const isSorted = <T>(array: T[]): boolean => {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }

    return true;
};

// Create a range from `start` to less than `end` (inclusive of `start` but not `end`): [start, end)
// If only one argument is passed, the range will start at 0: [0, end)
// If an array is passed, the range will contain the indices of the array provided: [0, array.length)
const range = <T>(start: number | T[], end?: number): number[] => {
    if (Array.isArray(start)) {
        return [...start.keys()];
    }

    if (end !== undefined) {
        return Array.from({ length: end - start }, (_, i) => start + i);
    }

    return [...Array(start).keys()];
};

// Shuffle an array in place using Fisher-Yates
// See https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffle = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        swap(array, i, Math.floor(Math.random() * (i + 1)));
    }

    return array;
};

// Swap two elements in an array in place
const swap = <T>(array: T[], i: number, j: number): T[] => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
};

export { createAlreadySorted, createRandom, createReversed, isSorted, range, shuffle, swap };
