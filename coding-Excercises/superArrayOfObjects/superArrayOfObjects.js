// Example data
const aobj = [
    {framework: 'React.JS', website: 'Paypal'},
    {framework: 'Angular.JS', website: 'Google'},
    {framework: 'Vue.JS', website: 'Facebook'},
    {framework: 'React.JS', website: 'Paypal'},
    {framework: 'Angular.JS', website: 'Google'},
    {framework: 'JavaScript', website: 'innblack67'},
]

const superAob = (data, victim) => {
    const obj = {};

    data.forEach(item => {
        if(item.hasOwnProperty(victim)) {
            if(obj[item[victim]]) {
                obj[item[victim]]++;
            } else {
                obj[item[victim]] = 1;
            }
        }
    });

    let superArrayOfObjects = [];

    for(const key in obj){
        superArrayOfObjects = [...superArrayOfObjects, {[victim]: key, count: obj[key]}];
    }

    return superArrayOfObjects;
}    

console.log(superAob(aobj, 'framework'));

// output
// [
//     {framework: 'React.JS', count: 2},
//     {framework: 'Angular.JS', count: 2},
//     {framework: 'Vue.JS', count: 1},
//     {framework: 'JavaScript', count: 1}
// ]