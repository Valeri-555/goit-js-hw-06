const listCategory = document.getElementById('categories');


const listItem = document.querySelectorAll('.item').length;
console.log('Number of categories:', listItem);

// const h2 = document.querySelectorAll('li.item h2').textContent;
// console.log(h2);

const items = document.querySelectorAll("#categories .item");


items.forEach((item) => {
    const headerText = item.querySelector("h2").textContent;
    const numberofElements = item.lastElementChild.children.length;

    console.log('Categories:', headerText);
    console.log('Elements:', numberofElements);
});