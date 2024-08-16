(function one() {
    // named IIFE
    console.log(`hello world`);

})();

((name) => {
    //unnamed IIFE with parameter
    console.log(`hello world two ${name}`);
})("Jignesh")