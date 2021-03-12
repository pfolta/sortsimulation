import "@/app/utils/ArrayConstructor";

describe("ArrayConstructor Utils", () => {
    describe("almostSorted", () => {
        const size = 25;
        const distance = 3;
        const array = Array.almostSorted(size, distance);

        it("returns an array with the specified size", () => {
            expect(array).toHaveLength(size);
        });

        it("returns an array of integers", () => {
            array.forEach((number) => expect(Number.isInteger(number)).toBe(true));
        });

        it("returns an array that contains every number in [1, size]", () => {
            Array.range(1, size + 1).forEach((number) => expect(array).toContain(number));
        });

        it("returns an array where every element is at most `distance` away from its sorted position", () => {
            const sorted = Array.sorted(size);
            array.forEach((number, position) => expect(Math.abs(position - sorted.indexOf(number))).toBeLessThanOrEqual(distance));
        });
    });

    describe("fewUnique", () => {
        const size = 25;
        const uniqueCount = 5;
        const array = Array.fewUnique(size, uniqueCount);

        it("returns an array with the specified size", () => {
            expect(array).toHaveLength(size);
        });

        it("returns an array of integers", () => {
            array.forEach((number) => expect(Number.isInteger(number)).toBe(true));
        });

        it("returns an array with the specified number of unique elements", () => {
            expect([...new Set(array)]).toHaveLength(uniqueCount);
        });

        it("returns an array where every number is in [1, size]", () => {
            array.forEach((number) => {
                expect(number).toBeGreaterThan(0);
                expect(number).toBeLessThanOrEqual(size);
            });
        });
    });

    describe("random", () => {
        const size = 10;
        const array = Array.random(size);

        it("returns an array with the specified size", () => {
            expect(array).toHaveLength(size);
        });

        it("returns an array of integers", () => {
            array.forEach((number) => expect(Number.isInteger(number)).toBe(true));
        });

        it("returns an array that contains every number in [1, size]", () => {
            Array.range(1, size + 1).forEach((number) => expect(array).toContain(number));
        });
    });

    describe("range", () => {
        describe("for `start` and `end`", () => {
            it("returns a range inclusive of `start` but not `end`", () => {
                expect(Array.range(5, 10)).toEqual([5, 6, 7, 8, 9]);
            });

            it("returns an empty range if `start` and `end` are equal", () => {
                expect(Array.range(3, 3)).toEqual([]);
            });

            it("returns an empty range if `start` > `end`", () => {
                expect(Array.range(7, 4)).toEqual([]);
            });
        });

        describe("without `start`", () => {
            it("returns a range from 0 to less than `end`", () => {
                expect(Array.range(7)).toEqual([0, 1, 2, 3, 4, 5, 6]);
            });

            it("returns an empty range if `end` is 0", () => {
                expect(Array.range(0)).toEqual([]);
            });
        });

        describe("from array", () => {
            it("returns a range containing the indices of the passed array", () => {
                expect(Array.range(["apple", "orange", "peach"])).toEqual([0, 1, 2]);
            });

            it("returns an empty range for an empty array", () => {
                expect(Array.range([])).toEqual([]);
            });
        });
    });

    describe("reversed", () => {
        it("returns a reverse-sorted array with the specified size", () => {
            expect(Array.reversed(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
        });
    });

    describe("sorted", () => {
        it("returns a sorted array with the specified size", () => {
            expect(Array.sorted(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    });
});
