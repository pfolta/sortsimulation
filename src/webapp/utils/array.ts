const isSorted = (array: number[]): boolean => {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }

    return true;
};

export { isSorted };
