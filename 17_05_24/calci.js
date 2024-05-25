// Cube Surface Area
function cubeSurfaceArea(side) {
    if (side <= 0) {
        return 'Side length must be a positive number';
    }
    return 6 * Math.pow(side, 2);
}

// Rectangular Prism Surface Area
function rectangularPrismSurfaceArea(length, width, height) {
    if (length <= 0 || width <= 0 || height <= 0) {
        return 'Dimensions must be positive numbers';
    }
    return 2 * (length * width + length * height + width * height);
}

// Sphere Surface Area
function sphereSurfaceArea(radius) {
    if (radius <= 0) {
        return 'Radius must be a positive number';
    }
    return 4 * Math.PI * Math.pow(radius, 2);
}

// Cylinder Surface Area
function cylinderSurfaceArea(radius, height) {
    if (radius <= 0 || height <= 0) {
        return 'Dimensions must be positive numbers';
    }
    return 2 * Math.PI * radius * (radius + height);
}

// Example usage:
console.log('Cube Surface Area:', cubeSurfaceArea(3)); // 54
console.log('Rectangular Prism Surface Area:', rectangularPrismSurfaceArea(2, 3, 4)); // 52
console.log('Sphere Surface Area:', sphereSurfaceArea(5)); // 314.1592653589793
console.log('Cylinder Surface Area:', cylinderSurfaceArea(3, 7)); // 188.49555921538757
