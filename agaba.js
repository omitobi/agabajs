/**
 * Wrap around console.log to show a json formatted log value
 * @param val
 */
dumpd = function(val){
    console.log(arguments.length === 1
        ? JSON.parse(JSON.stringify(val))
        : JSON.parse(JSON.stringify(Array.apply(null, arguments)))
    );
};
