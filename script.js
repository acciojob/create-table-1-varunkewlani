function insert_Row() {
	let abc=document.getElementById("sampleTable")
	let a=document.createElement("tr")
	let b=document.createElement("td")
	let c=document.createElement("td")
	c.textContent= "New Cell2"
	b.textContent= "New Cell1"
	a.appendChild(b)
	a.appendChild(c)
	abc.insertBefore(a, abc.lastChild)
	//Write your code here
  
}
