//Script to copy Names ,phone numbers and adresses off of a single page web page and download it in form of txt file.

//div element class names for data items
nameClass='name';
phoneClass='icon';
addressClass='addr';

var result="";
names=document.getElementsByClassName(nameClass)
phone=document.getElementsByClassName(phoneClass)
address=document.getElementsByClassName(addressClass)

for(i=0;i<names.length;i++){
result=result.concat(names[i].innerText+"\t"+phone[i].innerText+"\t"+address[i].innerText+"\n");
//using tabs instead of space to make it possible to paste in different cells of excel document automatically (in same order)

}filename="output"
var blob=new Blob([result],{type:'text/json'}),
e = document.createEvent('MouseEvents'),
        a = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
