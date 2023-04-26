const parser = new DOMParser();
const XMLString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


// Создание результирущего массива js-объектов с данными о каждом студенте
let resultArray = [];

// Получение данных
const XMLDom = parser.parseFromString(XMLString, "text/xml");
const listNode = XMLDom.querySelector("list");

// const studentNode = listNode.querySelector("student");

// Создание массива всех узлов c тэгом <student> (прямых потомков от <list>)

const studentArray = [...listNode.children]; // "..." spred syntax JavaScript ES6   

studentArray.forEach((item, index) => {
  const studentNode = item;
  const nameNode = studentNode.querySelector("name");
  const firstNameNode = nameNode.querySelector("first");
  const secondNameNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");  
  //Получение данных из атрибута
  const langAttr = nameNode.getAttribute('lang');

  // Создаем js-объект с данными о текущем студенте  
  const result = {
    name: firstNameNode.textContent + " " + secondNameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  };
  
  // Записываем полученный js-объект в результирующий массив
  resultArray[index] = result;
      
});

// Output resulted array to the web console
console.log(resultArray);


