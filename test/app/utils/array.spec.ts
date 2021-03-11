import { createAlreadySorted, createFewUnique, createRandom, createReversed, isSorted, range, shuffle, swap } from "@/app/utils/array";

describe("Array Utils", () => {
    describe("createAlreadySorted", () => {
        it("returns a presorted array with the specified size", () => {
            expect(createAlreadySorted(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    });

    describe("createFewUnique", () => {
        const size = 25;
        const uniqueCount = 5;

        it("returns an array of integers", () => {
            createFewUnique(size, uniqueCount).forEach((number) => expect(Number.isInteger(number)).toBe(true));
        });

        it("returns an array with the specified size", () => {
            expect(createFewUnique(size, uniqueCount)).toHaveLength(size);
        });

        it("returns an array with the specified number of unique elements", () => {
            expect([...new Set(createFewUnique(size, uniqueCount))]).toHaveLength(uniqueCount);
        });

        it("returns an array where every number is in [1, size]", () => {
            createFewUnique(size, uniqueCount).forEach((number) => {
                expect(number).toBeGreaterThan(0);
                expect(number).toBeLessThanOrEqual(size);
            });
        });
    });

    describe("createRandom", () => {
        const size = 10;
        const array = createRandom(size);

        it("returns an array of integers", () => {
            array.forEach((number) => expect(Number.isInteger(number)).toBe(true));
        });

        it("returns a random array with the specified size", () => {
            expect(array).toHaveLength(size);
        });

        it("returns an array that contains every number in [1, size]", () => {
            range(1, size + 1).forEach((number) => expect(array).toContain(number));
        });
    });

    describe("createReversed", () => {
        it("returns a reverse-sorted array with the specified size", () => {
            expect(createReversed(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
        });
    });

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

    describe("range", () => {
        describe("for `start` and `end`", () => {
            it("returns a range inclusive of `start` but not `end`", () => {
                expect(range(5, 10)).toEqual([5, 6, 7, 8, 9]);
            });

            it("returns an empty range if `start` and `end` are equal", () => {
                expect(range(3, 3)).toEqual([]);
            });

            it("returns an empty range if `start` > `end`", () => {
                expect(range(7, 4)).toEqual([]);
            });
        });

        describe("without `start`", () => {
            it("returns a range from 0 to less than `end`", () => {
                expect(range(7)).toEqual([0, 1, 2, 3, 4, 5, 6]);
            });

            it("returns an empty range if `end` is 0", () => {
                expect(range(0)).toEqual([]);
            });
        });

        describe("from array", () => {
            it("returns a range containing the indices of the passed array", () => {
                expect(range(["apple", "orange", "peach"])).toEqual([0, 1, 2]);
            });

            it("returns an empty range for an empty array", () => {
                expect(range([])).toEqual([]);
            });
        });
    });

    describe("shuffle", () => {
        it("leaves an empty array unchanged", () => {
            expect(shuffle([])).toEqual([]);
        });

        it("leaves an array with only one element unchanged", () => {
            expect(shuffle([3])).toEqual([3]);
        });

        it("returns a shuffled array", () => {
            expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });

        it("shuffles the array in place", () => {
            const array = [1, 2, 3, 4, 5];
            expect(shuffle(array)).toEqual(array);
        });

        it("shuffles every element into every position", () => {
            const min = 1;
            const max = 25;

            let array = shuffle(range(min, max));

            for (let i = 0; i < max - min; i++) {
                for (let j = min; j < max; j++) {
                    while (array[i] !== j) {
                        array = shuffle(range(min, max));
                    }

                    expect(array[i]).toBe(j);
                }
            }
        });
    });

    describe("swap", () => {
        it("swaps the correct elements in an array", () => {
            expect(swap([1, 2, 3, 4, 5], 1, 4)).toEqual([1, 5, 3, 4, 2]);
        });

        it("leaves an array unchanged if both indices are the same", () => {
            expect(swap([1, 2, 3, 4, 5], 2, 2)).toEqual([1, 2, 3, 4, 5]);
        });

        it("swaps the elements in place", () => {
            const array = [1, 2, 3, 4, 5];
            expect(swap(array, 2, 3)).toEqual(array);
        });
    });
});
