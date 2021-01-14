/**
 * 
 * Custom Module NodeJS
 * Author : Waleed Ali Sarwar @2021
 * 
 */
console.log('Custom Module');
// function
function avg(_ar){
    let sum = 0;
    // For EachLoop
    _ar.forEach(el => {
        sum += el;
    });
    return sum/_ar.length;
}
// Export the My Custom Module Function
module.exports = {
     name : 'Waleed',
     repo : 'GitHub'
};
// Object
module.exports = {
    average : avg
}
// Module Second Object
module.exports.lang = 'Javascript';