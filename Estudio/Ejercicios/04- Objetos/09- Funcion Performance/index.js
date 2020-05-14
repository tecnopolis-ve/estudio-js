function perf(fn, times) {
    let t0 = window.performance.now(); 

    for (let i = 0; i < times, i++) {
        fn();
    }

    let t1 = window.performance.now(); 
    return t1 - t0;
}

