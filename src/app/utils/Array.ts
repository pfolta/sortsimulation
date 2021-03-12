import "@/app/utils/ArrayConstructor";

declare global {
    interface Array<T> {
        isSorted: () => boolean;
        shuffled: () => T[];
        swap: (i: number, j: number) => T[];
    }
}

/**
 * Determine whether an array is sorted
 */
Array.prototype.isSorted = function <T>(this: T[]): boolean {
    for (let i = 1; i < this.length; i++) {
        if (this[i - 1] > this[i]) {
            return false;
        }
    }

    return true;
};

/**
 * Returns a new array with the elements of this array randomly shuffled using Fisher-Yates
 *
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
Array.prototype.shuffled = function <T>(this: T[]): T[] {
    const array = [...this];

    for (let i = array.length - 1; i > 0; i--) {
        array.swap(i, Math.floor(Math.random() * (i + 1)));
    }

    return array;
};

/**
 * Swap two elements in an array in place
 */
Array.prototype.swap = function <T>(this: T[], i: number, j: number): T[] {
    const temp = this[i];
    this[i] = this[j];
    this[j] = temp;
    return this;
};

export {};
