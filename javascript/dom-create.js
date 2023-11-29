// var newElement=document.createElement("p");
// var newText=document.createTextNode("this is just text");
// var newComment=document.createComment("This is just a comment")
// // var newComment=document.createComment("this is comment");
// newElement.appendChild(newText);
// document.getElementById("test").appendChild("newElement");
// console.log(newElement);
// console.log(newText);

// var target=document.getElementById("test");
// target.insertBefore(newElement.target.childNode[2])

// newElement.appendChild(newText);

// var newElement=document.createElement("h2");
// var newText=document.createTextNode("This is just text");
// var target=document.getElementById("test");
// var newElement="<h2>This is heading</h2>"
// var newText="This is heading"
// // target.insertAdjacentElement("beforebegin",newElement);
// target.insertAdjacentHTML("beforeend",newText);


// var newElement=document.createElement("li");
// var newText=document.createTextNode("wow new text");
// newElement.appendChild(newText);
// var target=document.getElementById("list");
// var oldElement=target.children[0];
// // console.log(oldElement);
// // target.replaceChild(newElement,oldElement);
// var target=document.getElementById("list1").children[0];
// var copyElement=target.cloneNode(false);
// console.log(copyElement);
// document.getElementById("list2").appendChild(copyElement);



// var parentElement=document.getElementById("test");
// var target=document.contains(target);
// console.log(find);


var target1=document.getElementById("list1").firstElementChild;
var target2=document.getElementById("list2").firstElementChild;
var equal=target1.isEqualNode(target2);
console.log(equal);