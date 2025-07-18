/*document.title = "hey there";
document.title
//innerHTML property allowsd access to all of the HTML in the body of the webpage!
console.log(document.body.innerHTML);
document.body.innerHTML = "I can change the body content.";
console.log(document.body.innerHTML);
//lets change something other than bodt text
document.body.innerHTML = '<button>dynamic button</button>'
*/

//querySelector allows us to select elements in the DOM. the button is just an object which can have properties such as innerHTML
console.log(document.body.querySelector('button').innerHTML)
document.querySelector('button')
    .innerHTML = "changed text via querySelector";
//organize lines like this to make it easier to read. Each line is a seperate property or method call
console.log(document.body
    .querySelector('button')
        .innerHTML);

//now attempting to get the second button

const button2 = document.querySelector('.js-button2');

console.log(button2);

