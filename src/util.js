const sortByName = (a,b) => {
    var A = a.name.toLowerCase();
    var B = b.name.toLowerCase();
    if (A < B) {
        return -1;
    } else if (A > B) {
        return 1;
    } else {
        return 0;
    }
}
const sortByUser = (a,b) => {
    return a.scannedByUserId - b.scannedByUserId;
}
const sortByElevation = (a,b) => {
    return a.elevationMin - b.elevationMin;
}

export { sortByName, sortByUser, sortByElevation }