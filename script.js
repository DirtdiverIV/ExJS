function printConsole() {
    const jsonData = {
        "results": [
          {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
          },
          {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
          },
          {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
          },
          {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
          }
        ]
      };
      
      const results = jsonData.results;
      results.forEach(item => {
        console.log(item.title);
      });
}

/*function printWeb() {
    const jsonData = {
      "results": [
        {
          "title": "Estudiar Js",
          "priority": "alta",
          "isDone": false
        },
        {
          "title": "Estudiar CSS",
          "priority": "alta",
          "isDone": true
        },
        {
          "title": "Estudiar OOP",
          "priority": "media",
          "isDone": false
        },
        {
          "title": "Estudiar IA",
          "priority": "baja",
          "isDone": false
        }
      ]
    };
  
    let title = [];
    let prior = [];
    let done = [];
  
    const results = jsonData.results;
    results.forEach(item => {
      title.push(item.title);
      prior.push(item.priority);
      done.push(item.isDone);
    });
  
    const showElement1 = document.querySelector('.show1');
    const showElement2 = document.querySelector('.show2');
    const showElement3 = document.querySelector('.show3');
    const showElement4 = document.querySelector('.show4');
    showElement1.textContent = title[0]+"  "+prior[0]+"  "+done[0];
    showElement2.textContent = title[1]+"  "+prior[1]+"  "+done[1];
    showElement3.textContent = title[2]+"  "+prior[2]+"  "+done[2];
    showElement4.textContent = title[3]+"  "+prior[3]+"  "+done[3];
  }
*/

let tableFromJson = () => {
    
    const todos = [
        {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
          },
          {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
          },
          {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
          },
          {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
          }
        ]
      
    let column = [];
    for (let i = 0; i < todos.length; i++) {
      for (let num in todos[i]) {
        if (column.indexOf(num) === -1) {
          column.push(num);
        }
      }
    }
    const table = document.createElement("table");
     let tr = table.insertRow(-1);             

    for (let i = 0; i < column.length; i++) {
      let th = document.createElement("th"); 
      th.innerHTML = column[i];
      tr.appendChild(th);
    }

    for (let i = 0; i < todos.length; i++) {

      tr = table.insertRow(-1);

      for (let j = 0; j < column.length; j++) {
        let celda = tr.insertCell(-1);
        celda.innerHTML = todos[i][column[j]];
      }
    }

    const tablaDiv = document.getElementById('showData');
    tablaDiv.innerHTML = "";
    tablaDiv.appendChild(table);
    
  
  }

