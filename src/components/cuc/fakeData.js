const itemList = [
    {id:1,nameProduct:'product-1',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:2},
    {id:2,nameProduct:'product-2',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:5},
    {id:3,nameProduct:'product-3',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:4},
    {id:4,nameProduct:'product-4',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:2},
    {id:5,nameProduct:'product-5',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:5},
    {id:6,nameProduct:'product-6',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:5},
    {id:7,nameProduct:'product-7',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:3},
    {id:8,nameProduct:'product-8',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:5},
    {id:9,nameProduct:'product-9',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:2},
    {id:10,nameProduct:'product-10',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:1},
    {id:11,nameProduct:'product-11',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:5},
    {id:12,nameProduct:'product-12',img:'https://i.pinimg.com/originals/5b/81/10/5b81101fea242d5bc6ad36d2ab802b85.jpg',nameShop:"deptrai1102",price: 1000,quantitySold:1200,review:5}
]

export default {
    getList() {
        return itemList
    },
    addItem (item) {
        return itemList.push(item)
    }
}