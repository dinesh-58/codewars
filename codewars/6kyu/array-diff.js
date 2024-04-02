function arrayDiff(a, b) {
    b.forEach(x => {
        while(a.includes(x)) {
            a.splice(a.indexOf(x),1);
        }
    });
    return a;
}
