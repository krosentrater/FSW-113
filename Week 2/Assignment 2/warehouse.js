const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

];
//---------------------------------------------------------------------
let partNumber = '';
parts.forEach(function(parts){
    partNumber += `<div><input type='checkbox'> ${parts.qty} (${parts.partNbr}) - ${parts.partDescr}`;
});
document.querySelector('#detailsList').innerHTML = partNumber;

let b3 = parts.filter(function(aisle){
    return aisle.aisle === 'B3';
});
console.log(b3); //so I can see new array
let aisles = '<div>Special Packaging Required:';
b3.forEach(function(aisle){
    aisles += `<div> Item: (${aisle.partNbr}) / Qty: ${aisle.qty}`;
});
aisles += '</div>';
document.querySelector('#specialPackaging').innerHTML = aisles;
//---------------------------------------------------------------------
let j4 = parts.filter(function(aisle){
    return aisle.aisle === 'J4'
});
console.log(j4); //so I can see new array
let jaisle = '<div> Hazardious Parts Included: <br> <div>Get Gloves';
j4.forEach(function(aisle){
    jaisle += `<div> Item: (${aisle.partNbr}) / Qty: ${aisle.qty}`;
});
jaisle += '</div>';
document.querySelector('#hazardousMaterials').innerHTML = jaisle;
//---------------------------------------------------------------------
let smallParts = parts.filter(function(parts){
    return parts.aisle === 'H1';
});
console.log(smallParts); //see new array
let aisleh1 = '<div>Small Parts: <br> <div>(take basket go to aisle H1)';
smallParts.forEach(function(aisle){
    aisleh1 += `<div>Item: (${aisle.partNbr}) / ${aisle.qty}`;
});
aisleh1 += '</div>';
document.querySelector('#smallItemsOnly').innerHTML = aisleh1;
//---------------------------------------------------------------------
let largeItems = parts.filter(function(item){
    return item.aisle === 'S' && 'U' && 'T';
});
console.log(largeItems); //see array
let aislesut = '<div>Forklift: <br><div>(reserve forklift)';
if (largeItems.length >= 1){
    largeItems.forEach(function(item){
        aislesut = `<div> (${item.partNbr} / ${item.qty})`;
        aislesut += '</div>';
        document.querySelector('#forkiftNeeded').innerHTML = aislesut;
    });
}
else {
    document.querySelector('#forkiftNeeded').remove();
};
//---------------------------------------------------------------------
let totalItems = parts.reduce(function(currentTotal, quantity){
    return quantity.qty + currentTotal;
}, 0);
document.querySelector('#totalItems').innerHTML = `Total Items: ${totalItems}`;