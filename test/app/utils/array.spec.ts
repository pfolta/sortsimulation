import { isSorted } from "@/app/utils/array";

describe("Array Utils", () => {
    describe("isSorted", () => {
        it("returns true for a sorted array", () => {
            expect(isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(true);
        });

        it("returns true for a sorted array containing duplicates", () => {
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
});
