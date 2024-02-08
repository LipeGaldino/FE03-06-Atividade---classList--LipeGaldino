function changeStyle() {
  //Parte 1
  const divsClassBlock = document.querySelectorAll(".block");

  for(let i = 0; i < divsClassBlock.length; i++){
    const actualDiv = divsClassBlock[i];

    actualDiv.classList.toggle("circle");
  }

  //Parte 2
  const listItems = document.querySelectorAll("li");

  for(let i = 0; i < listItems.length; i++){
    const actualList = listItems[i];

    actualList.classList.toggle("itemCard");
  }

  //Parte 3
  const spans = document.querySelectorAll("span");
  const paragraphs = document.querySelectorAll("p");

  for(let i = 0; i < spans.length; i++){
    const span = spans[i];
    const p = paragraphs[i];

    const online = span.classList.toggle("online");
  
    if (online) {
      span.classList.remove("offline");
      p.innerText = "Online";
    } else {
      span.classList.add("offline");
      p.innerText = "Offline";
    }
  }
}





