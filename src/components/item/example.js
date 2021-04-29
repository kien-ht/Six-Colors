const variants = [
    {
        name: "size",
        options: [
            "36",
            "37",
            "38",
            "39",
            "40",
            "41"
        ]
    },
    {
        name: "color",
        options: [
            "red",
            "yellow",
            "blue",
        ]
    },
    {
        name: "material",
        options: [
            "bronze",
            "gold",
            "silver",
        ]
    },
],

const selectedVariant13 = [
    {
        name: "size",
        selectedOption: '36'
    },
    {
        name: "color",
        selectedOption: 'red'
    },
    {
        name: "material",
        selectedOption: 'silver'
    },
]
const selectedVariant4 = [
    {
        name: "size",
        selectedOption: '36'
    },
    {
        name: "material",
        selectedOption: 'silver'
    },
    {
        name: "color",
        selectedOption: 'red'
    },
]
 
function checkEqual (arr, brr) {
    return arr.every(a => {
         const found = brr.find(b => b.name === a.name)
         return a.selectedOption === found.selectedOption
    })
}