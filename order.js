var item=[]
function fun1() {

    // location.href = 'public/payment.html'
    var price = document.getElementById("priceid").innerText;
    var count = document.getElementById("itemid").value;
    var title = document.getElementById("item").innerText;
    item.push({'name':title,'price':price,'count':count})
    console.log(item)
    alert(`YOUR ORDER is ${title} price is ${price} with count of ${count}`)

    var productName = document.getElementById("productName");
    var produtPrice = document.getElementById("productPrice");
    document.getElementById("productName").innerHTML = "New text!";
    productName.innerHTML = title;
    produtPrice.innerHTML = price;
    // console.log(price,count,title);
}
function fun2() {
    alert("we will reach you soon. ")

}
function fun3() {
    alert("the review is saved. ")

}