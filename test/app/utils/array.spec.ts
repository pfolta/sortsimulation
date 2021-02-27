import { isSorted, shuffle, swap } from "@/app/utils/array";

describe("Array Utils", () => {
    describe("isSorted", () => {
        it("returns true for a sorted array", () => {
            expect(isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(true);
        });

        it("returns true for a sorted array with duplicates", () => {
            expect(isSorted([0, 1, 2, 2, 3, 4, 4, 4])).toBe(true);
        });

        it("returns true for an array with only one element", () => {
            expect(isSorted([5])).toBe(true);
        });

        it("returns true for an empty array", () => {
            expect(isSorted([])).toBe(true);
        });

        it("returns false for an unsorted array", () => {
            expect(isSorted([3, 1, 10, 2, 6, 7, 5, 4])).toBe(false);
        });
    });

    describe("shuffle", () => {
        it("leaves an empty array untouched", () => {
            expect(shuffle([])).toEqual([]);
        });

        it("leaves an array with only one element untouched", () => {
            expect(shuffle([3])).toEqual([3]);
        });

        it("returns a shuffled array", () => {
            expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });

        it("shuffles the array in-place", () => {
            const array = [1, 2, 3, 4, 5];
            expect(shuffle(array)).toEqual(array);
        });
    });

    describe("swap", () => {
        it("swaps the correct elements in an array", () => {
            expect(swap([1, 2, 3, 4, 5], 1, 4)).toEqual([1, 5, 3, 4, 2]);
        });

        it("swaps the elements in-place", () => {
            const array = [1, 2, 3, 4, 5];
            expect(swap(array, 2, 3)).toEqual(array);
        });
    });
});
