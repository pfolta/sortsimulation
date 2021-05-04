import "@/app/utils/Array";
import "@/app/utils/ArrayConstructor";

describe("Array Utils", () => {
    describe("chunked", () => {
        it("throws a TypeError if `size` is not an integer", () => {
            expect(() => [1, 2, 3, 4, 5].chunked(0.5)).toThrow(TypeError);
        });

        it("throws a RangeError if `size` is smaller than or equal to zero", () => {
            expect(() => [1, 2, 3, 4, 5].chunked(-4)).toThrow(RangeError);
        });

        it("returns a chunked array", () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9].chunked(3)).toEqual([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]);
        });

        it("returns a chunked array last element can be smaller", () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].chunked(4)).toEqual([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10]
            ]);
        });
    });

    describe("first", () => {
        it("returns the first element of an array", () => {
            expect([7, 4, 5].first()).toBe(7);
        });

        it("throws a RangeError if the array is empty", () => {
            expect(() => [].first()).toThrow(RangeError);
        });
    });

    describe("isEmpty", () => {
        it("returns `true` if the array is empty", () => {
            expect([].isEmpty()).toBeTrue();
        });

        it("returns `false` if the array is not empty", () => {
            expect([1].isEmpty()).toBeFalse();
        });
    });

    describe("isSorted", () => {
        it("returns true for a sorted array", () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].isSorted()).toBeTrue();
        });

        it("returns true for a sorted array with duplicates", () => {
            expect([0, 1, 2, 2, 3, 4, 4, 4].isSorted()).toBeTrue();
        });

        it("returns true for an array with only one element", () => {
            expect([5].isSorted()).toBeTrue();
        });

        it("returns true for an empty array", () => {
            expect([].isSorted()).toBeTrue();
        });

        it("returns false for an unsorted array", () => {
            expect([3, 1, 10, 2, 6, 7, 5, 4].isSorted()).toBeFalse();
        });
    });

    describe("last", () => {
        it("returns the last element of an array", () => {
            expect([7, 4, 5].last()).toBe(5);
        });

        it("throws a RangeError if the array is empty", () => {
            expect(() => [].last()).toThrow(RangeError);
        });
    });

    describe("random", () => {
        it("returns `undefined` for an empty array", () => {
            expect([].random()).toBeUndefined();
        });

        it("returns the only element from an array of size one", () => {
            expect(["banana"].random()).toEqual("banana");
        });

        it("returns an element from the array", () => {
            const array = ["strawberry", "orange", "banana", "lime", "mint"];
            expect(array.random()).toBeOneOf(array);
        });
    });

    describe("shuffled", () => {
        it("leaves an empty array unchanged", () => {
            expect([].shuffled()).toEqual([]);
        });

        it("leaves an array with only one element unchanged", () => {
            expect([3].shuffled()).toEqual([3]);
        });

        it("returns a shuffled array", () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].shuffled()).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });

        it("leaves the original array unchanged", () => {
            const array = [1, 2, 3, 4, 5];
            expect(array.shuffled()).not.toBe(array);
        });

        it("shuffles every element into every position", () => {
            const min = 1;
            const max = 25;

            let array = Array.range(min, max).shuffled();

            for (let i = 0; i < max - min; i++) {
                for (let j = min; j < max; j++) {
                    while (array[i] !== j) {
                        array = Array.range(min, max).shuffled();
                    }

                    expect(array[i]).toBe(j);
                }
            }
        });
    });

    describe("swap", () => {
        it("throws a TypeError if either index is not an integer", () => {
            expect(() => [1, 2, 3, 4, 5].swap(0.5, 1)).toThrow(TypeError);
            expect(() => [1, 2, 3, 4, 5].swap(1, 0.5)).toThrow(TypeError);
        });

        it("throws a RangeError if either index is out of bounds", () => {
            expect(() => [1, 2, 3, 4, 5].swap(-1, 4)).toThrow(RangeError);
            expect(() => [1, 2, 3, 4, 5].swap(1, 6)).toThrow(RangeError);
        });

        it("swaps the correct elements in an array", () => {
            expect([1, 2, 3, 4, 5].swap(1, 4)).toEqual([1, 5, 3, 4, 2]);
        });

        it("leaves an array unchanged if both indices are the same", () => {
            expect([1, 2, 3, 4, 5].swap(2, 2)).toEqual([1, 2, 3, 4, 5]);
        });

        it("swaps the elements in place", () => {
            const array = [1, 2, 3, 4, 5];
            expect(array.swap(2, 3)).toEqual(array);
        });
    });
});
