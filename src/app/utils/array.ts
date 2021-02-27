// Determine whether an array is sorted
const isSorted = (array: number[]): boolean => {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }

    return true;
};

// Shuffle an array in-place using Fisher-Yates
// See https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffle = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
        swap(array, i, Math.floor(Math.random() * i));
    }

    return array;
};

// Swap two elements in an array in-place
const swap = (array: number[], i: number, j: number): number[] => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
};

export { isSorted };
export { shuffle };
export { swap };
