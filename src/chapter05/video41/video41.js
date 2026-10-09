console.log("Video 41")

const ages = [10,20,30,25,12,19];

const agesX2 = ages.map((item, index) =>{
    return item * 2;
})

const agesGreatthan18 = ages.filter((item, index ) => {
    return item > 18;
})

console.log("orginal: ", ages);
console.log("agesX2: ", agesX2);
console.log("agesGreatthan18: ", agesGreatthan18);