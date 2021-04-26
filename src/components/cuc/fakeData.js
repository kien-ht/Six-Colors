const itemList = [
    {id:1,nameProduct:'product-1',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200
},
    {id:2,}
]

export default {
    getList() {
        return itemList
    },
    addItem (item) {
        return itemList.push(item)
    }
}