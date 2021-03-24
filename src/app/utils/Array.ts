import "@/app/utils/ArrayConstructor";

declare global {
    interface Array<T> {
        chunked: (size: number) => T[][];
        isSorted: () => boolean;
        random: () => T;
        shuffled: () => T[];
        swap: (i: number, j: number) => T[];
    }
}

/**
 * Splits this array into an array of arrays each not exceeding the given size.
 * The last array in the resulting array may have fewer elements than the given size.
 */
Array.prototype.chunked = function <T>(this: T[], size: number): T[][] {
    if (!Number.isInteger(size)) {
        throw new TypeError(`size ${size} must be an integer.`);
    }

    if (size <= 0) {
        throw new RangeError(`size ${size} must be greater than zero.`);
    }

    return Array.range(Math.ceil(this.length / size)).map((_, i) => this.slice(i * size, i * size + size));
};

/**
 * Returns `true` if the array is sorted, `false` otherwise.
 */
Array.prototype.isSorted = function <T>(this: T[]): boolean {
    for (let i = 1; i < this.length; i++) {
        if (this[i - 1] > this[i]) {
            return false;
        }
    }

    return true;
};

/*
 * Returns a random element from this array.
 */
Array.prototype.random = function <T>(this: T[]): T {
    return this[Math.floor(Math.random() * this.length)];
};

/**
 * Returns a new array with the elements of this array randomly shuffled using Fisher-Yates.
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
 * Swap two elements in an array in place.
 */
Array.prototype.swap = function <T>(this: T[], i: number, j: number): T[] {
    [i, j].forEach((index) => {
        if (!Number.isInteger(index)) {
            throw new TypeError(`index ${index} must be an integer.`);
        }

        if (index < 0 || index >= this.length) {
            throw new RangeError(`index ${index} must be greater than zero and less than ${this.length}`);
        }
    });

    const temp = this[i];
    this[i] = this[j];
    this[j] = temp;
    return this;
};

export {};
