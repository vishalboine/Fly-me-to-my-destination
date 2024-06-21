function minimum(fuelArray) {
    let n = fuelArray.length;
    if (n === 0) return -1;

    let maxReach = 0;
    let steps = 0;
    let lastReach = 0;

    for (let i = 0; i < n; i++) {
        if (i > lastReach) {
            if (maxReach <= lastReach) return -1; // Not possible to reach further
            lastReach = maxReach;
            steps++;
        }
        maxReach = Math.max(maxReach, i + fuelArray[i]);
    }

    return lastReach >= n - 1 ? steps : -1;
}

// Example usage:
console.log(minimum([2, 1, 2, 3, 1])); // Output: 2
console.log(minimum([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
console.log(minimum([1, 0, 0, 0, 0])); // Output: -1 (not possible)
