const searchInput = (n, target) => {
    let lo = 0, h1 = n.length
    while (lo < h1) {
        let mid = lo + Math.floor((h1 - lo) / 2)
        target > n[mid] ? lo = mid + 1 : h1 = mid
    }

    return lo

}

console.log(searchInput([1, 3, 5, 6], 5))