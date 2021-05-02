/* Hotelski program ima cijene hotelskih soba smještene u slijedećem formatu:
[
{from: ‘2020-01-01’, to: ‘2020-02-01’, price: 34.5},
{from: ‘2020-02-02’, to: ‘2020-03-01’, price: 37.0},
{from: ‘2020-03-02’, to: ‘2020-05-15’, price: 39.0},
{from: ‘2020-05-16’, to: ‘2020-06-15’, price: 37.0},
]

Vaš zadatak je napisati funkciju koja prima gore specificiran podatak te na konzolu, 
za potrebe logiranja, ispisuje istu u slijedećem formatu:
Cijena : lista perioda na koje se primjenjuje (sortirano od manje do veće cijene)
34.5 : 2020-01-01 do 2020-02-01
37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15
39.0 : ‘2020-03-02 do 2020-05-15 */

let ar = [
    {from: "2020-01-01", to: "2020-02-01", price: 34.5},
    {from: "2020-02-02", to: "2020-03-01", price: 37.0},
    {from: "2020-03-02", to: "2020-05-15", price: 39.0},
    {from: "2020-02-02", to: "2020-03-01", price: 37.0},
    ]


function priceListFromatter(priceList) {
    
    if( !(priceList instanceof Object) ) throw Error()

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#grouping_objects_by_a_property
    // grouping_objects_by_a_property
    let reduced = priceList.reduce( (accumulator, val) => {
        if( !accumulator[val.price] ){
            accumulator[val.price] = []
        }
        accumulator[val.price].push(val)
        return accumulator
    }, {} )

    let L = []

    Object.getOwnPropertyNames(reduced).forEach( (price) => {
        L.push(price + ' : ' + reduced[price].map(x => x.from + ' do ' + x.to).join(' , '))
    })
    
    return L.sort()

}


console.log(priceListFromatter(ar))

module.exports = {priceListFromatter, ar}