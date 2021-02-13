const url = "https://kea-alt-del.dk/t7/api/products?brandname=adidas";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}
/*
<article class="smallProduct">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/1000/1529.webp"
            alt="Topwear Jackets Fall 2010 Sports Track Jacket"
          />
          <h3>Topwear Jackets Fall 2010 Sports Track Jacket</h3>
          
          <div>
            <p>Now DKK 1899,-</p>
            <p>-34%</p>
          </div>
          <a href="product.html">Read More</a>
        </article>
*/
function showProduct(product) {
  //console.log(product);
  //grab the template
  console.log(
    "I am" + product.productdisplayname + "and I have id" + product.id
  );
  const template = document.querySelector("#smallProductTemplate").content;

  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector("a").href = `product.html?id=${product.id}`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent = "DISCOUNT";
  }

  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
