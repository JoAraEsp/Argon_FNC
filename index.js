class Stack {
    constructor() {
      this.items = [];
    }
  
    // Añadir un elemento a la cima de la pila
    push(element) {
      this.items.push(element);
    }
  
    // Quitar el elemento de la cima de la pila
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Ver el elemento en la cima de la pila
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Comprobar si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Obtener el tamaño de la pila
    size() {
      return this.items.length;
    }
  
    // Imprimir los elementos de la pila
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  
    get() {
      return this.items.slice().reverse();
    }
  
    clear() {
      this.items = [];
    }
  }
  
  const letters = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let stack = new Stack();
  
  const map = new Map();
        map.set("A", {
        TV: "TV",
        E: "E",
        });
        map.set("E", {
        I: "I",
        DV: "DV",
        });
        map.set("DV", {
        NV: "NV",
        PV: "PV",
        });
        map.set("PV", {
        DP: "DP",
        O: "O",
        });
        map.set("NV", {
        L: "L",
        RL: "RL",
        });

        map.set("O", {
        L: "L",
        RL: "RL",
        D: "D",
        RD: "RD",
        PD: "PD",
        true: true,
        false: false,
        });
        map.set("TV", {
        TN: "TN",
        TL: "TL",
        });
        map.set("TN", {
        B1: "B1",
        B2: "B2",
        });
        map.set("B1", "int");
        map.set("B2", "float");
        map.set("TL", {
        LC: "LC",
        LV: "LV",
        });
        map.set("LC", {
        F1: "F1",
        F2: "F2",
        });
        map.set("F1", "string");
        map.set("F2", "bool");
        map.set("LV", "char");
        map.set("P", ".");
        map.set("DP", ":");
        map.set("I", "=");
        map.set("L", /^[a-z]+$/);
        map.set("D", /[0-9]/);
        map.set("B", {
        C1: "C1",
        C2: "C2",
        });
        map.set("C1", "true");
        map.set("C2", "false");
        map.set("RL", {
        L: "L",
        RL: "RL",
        });
        map.set("RD", {
        D: "D",
        RD: "RD",
        });
        map.set("PD", {
        RD: "RD",
        DP: "DP",
        });
        map.set("DPD", {
        D: "D",
        RD: "RD",
        });
        map.set("IN", {
        DF: "DF",
        RD: "RD",
        });
        map.set("DF", "Fn");
        map.set("RD", {
        L: "L",
        G1: "G1",
        });
        map.set("G1", {
        RL: "RL",
        G2: "G2",
        });
        map.set("G2", {
        PA: "PA",
        G3: "G3",
        });
        map.set("G3", {
        PC: "PC",
        G4: "G4",
        });
        map.set("G4", {
        DP: "DP",
        G5: "G5",
        });
        map.set("G5", {
        LA: "LA",
        G6: "G6",
        });
        map.set("G6", {
        LC: "LC",
        });
        map.set("R", {
        C: "C",
        J1: "J1",
        });
        map.set("J1", {
        DP: "DP",
        J2: "J2",
        });
        map.set("J2", {
        LA: "LA",
        J3: "J3",
        });
        map.set("J3", {
        CO: "CO",
        J4: "J4",
        });
        map.set("J4", {
        LC: "LC",
        E: "E",
        });
        map.set("C", {
        L: "L",
        K1: "K1",
        });
        map.set("K1", {
        RL: "RL",
        K2: "K2",
        });
        map.set("K2", {
        O: "O",
        OP: "OP",
        });
        map.set("O", {
        "==": "==",
        "=>": "=>",
        "<=": "<=",
        "!=": "!=",
        ">": ">",
        "<": "<",
        });
        map.set("OP", {
        D: "D",
        RD: "RD",
        C1: "C1",
        C2: "C2",
        L: "L",
        });
        map.set("LA", "{");
        map.set("LC", "}");
        map.set("CI", "loop");
        map.set("CA", {
        PA: "PA",
        NA: "NA",
        });
        map.set("NA", {
        LL: "LL",
        NO: "NO",
        });
        map.set("LL", {
        L: "L",
        RL: "RL",
        });
        map.set("NO", {
        O: "O",
        OP: "OP",
        });
        map.set("IC", {
        DP: "DP",
        DC: "DC",
        });
        map.set("DC", {
        LA: "LA",
        DF: "DF",
        });
        map.set("CI", "loop");
        map.set("R", {
        PA: "PA",
        CA: "CA",
        });
        map.set("CA", {
        NA: "NA",
        IC: "IC",
        });
        map.set("PA", "(");
        map.set("PC", ")");
        map.set("LA", "{");
        map.set("LC", "}");
        map.set("CO", "Contenido");
        map.set("IF", "assuming");
        map.set("R", {
        C: "C",
        J1: "J1",
        });
        map.set("J1", {
        DP: "DP",
        J2: "J2",
        });
        map.set("J2", {
        LA: "LA",
        J3: "J3",
        });
        map.set("J3", {
        CO: "CO",
        J4: "J4",
        });
        map.set("J4", {
        LC: "LC",
        E: "E",
        });
        map.set("C", {
        L: "L",
        K1: "K1",
        });
        map.set("K1", {
        RL: "RL",
        K2: "K2",
        });
        map.set("K2", {
        O: "O",
        OP: "OP",
        });
        map.set("O", {
        "==": "==",
        "=>": "=>",
        "<=": "<=",
        "!=": "!=",
        ">": ">",
        "<": "<",
        });
        map.set("OP", {
        D: "D",
        RD: "RD",
        C1: "C1",
        C2: "C2",
        L: "L",
        });
        map.set("L", /^[a-z]+$/);
        map.set("RL", {
        L: "L",
        RL: "RL",
        });
        map.set("LA", "{");
        map.set("LC", "}");
        map.set("DP", ":");
        map.set("P", ".");
        map.set("CO", "Contenido");
        map.set("D", /[0-9]/);
        map.set("RD", {
        D: "D",
        RD: "RD",
        });
        map.set("IN", {
        I: "I",
        R: "R",
        });
        map.set("I", "assuming");
        map.set("R", {
        C: "C",
        J1: "J1",
        });
        map.set("J1", {
        DP: "DP",
        J2: "J2",
        });
        map.set("J2", {
        LA: "LA",
        J3: "J3",
        });
        map.set("J3", {
        CO: "CO",
        J4: "J4",
        });
        map.set("J4", {
        LC: "LC",
        E: "E",
        });
        map.set("C", {
        L: "L",
        K1: "K1",
        });
        map.set("K1", {
        RL: "RL",
        K2: "K2",
        });
        map.set("K2", {
        O: "O",
        OP: "OP",
        });
        map.set("O", {
        "==": "==",
        "=>": "=>",
        "<=": "<=",
        "!=": "!=",
        ">": ">",
        "<": "<",
        });
        map.set("OP", {
        D: "D",
        RD: "RD",
        C1: "C1",
        C2: "C2",
        L: "L",
        });
        map.set("PA", "(");
        map.set("CA", {
        NA: "NA",
        IC: "IC",
        });
        map.set("NA", {
        LL: "LL",
        NO: "NO",
        });
        map.set("LL", {
        L: "L",
        RL: "RL",
        });
        map.set("NO", {
        O: "O",
        OP: "OP",
        });
        map.set("IC", {
        DP: "DP",
        DC: "DC",
        });
        map.set("DC", {
        LA: "LA",
        DF: "DF",
        });
        map.set("L", /^[a-z]+$/);
        map.set("G1", {
        RL: "RL",
        G2: "G2",
        });
        map.set("G2", {
        PA: "PA",
        G3: "G3",
        });
        map.set("G3", {
        PC: "PC",
        G4: "G4",
        });
        map.set("G4", {
        DP: "DP",
        G5: "G5",
        });
        map.set("G5", {
        LA: "LA",
        G6: "G6",
        });
        map.set("G6", {
        LC: "LC",
        });

  
  let arr;
  let result;

    function tokenize(input) {
        const tokens = [];
        const keywords = ["int", "string", "float", "bool", "char", "true", "false", "assuming"];
        let currentToken = "";

        for (let i = 0; i < input.length; i++) {
            currentToken += input[i];

            if (keywords.includes(currentToken) || [" ", ";", "=", "{", "}", "(", ")", ".", ":"].includes(input[i])) {
                if (currentToken.trim()) {
                    tokens.push(currentToken.trim());
                    currentToken = "";
                }
            }
        }

        if (currentToken.trim()) {
            tokens.push(currentToken.trim());
        }

        return tokens;
    }


  function validate() {
    stack.clear();
    let str = document.getElementById("textarea").value;
    arr = tokenize(str);

    let option = document.getElementById("option").value; // Asegúrate de obtener el valor de la opción seleccionada
    let result = false;

    switch (option) {
        case "Variable":
            stack.push("A"); 
            result = variable(); 
            break;
        case "Estructura de control":
            stack.push("IN"); 
            result = structControl(); 
            break;
        case "Ciclo":
            stack.push("CI"); 
            result = cycle(); 
            break;
        case "Funcion":
            stack.push("DF"); 
            result = functions(); 
            break;
        default:
            alert("Opción no válida");
            return;
    }

    if (result) {
        alert("Es una cadena válida");
    } else {
        alert("No es una cadena válida");
    }

    paint(); 
}

    function variable() {
        console.log(arr);
        stack.push("DV");

        while (!stack.isEmpty() && arr.length > 0) {
            let current = stack.pop();
            let rule = map.get(current);

            if (typeof rule === 'object') {
                for (const key in rule) {
                    stack.push(rule[key]);
                }
            } else if (current === "L" || current === "D") {
                let nextChar = arr.shift();
                if ((current === "L" && !letters.includes(nextChar)) ||
                    (current === "D" && !numbers.includes(nextChar))) {
                    return false;
                }
            } else if (typeof rule === 'string') {
                let nextChar = arr.shift();
                if (nextChar !== current) {
                    return false;
                }
            } else {
                return false;
            }
        }

        return arr.length === 0 && stack.isEmpty();
    }

    function structControl() {
        stack.push("R");  
        while (!stack.isEmpty() && arr.length > 0) {
            let current = stack.pop();
            let rule = map.get(current);
    
            if (typeof rule === 'object') { 
                for (const key in rule) {
                    stack.push(rule[key]); 
                }
            } else if (current === "L" || current === "D") { 
                let nextChar = arr.shift();
                if ((current === "L" && !letters.includes(nextChar)) || 
                    (current === "D" && !numbers.includes(nextChar))) {
                    return false;
                }
            } else if (typeof rule === 'string') { 
                let nextChar = arr.shift();
                if (nextChar !== rule) {
                    return false;
                }
            } else if (current === "=" || current === "{" || current === "}") { 
                let nextChar = arr.shift();
                if (nextChar !== current) {
                    return false;
                }
            }
        }
    
        return arr.length === 0 && stack.isEmpty(); 
    }
    
  
    function variableOfEC(rule) {
        while (!stack.isEmpty() && arr.length > 0) {
            let current = stack.pop();
            rule = map.get(current);
    
            if (typeof rule === 'object') { 
                for (const key in rule) {
                    stack.push(rule[key]); 
                }
            } else if (current === "L" || current === "D") { 
                let nextChar = arr.shift();
                if ((current === "L" && !letters.includes(nextChar)) || 
                    (current === "D" && !numbers.includes(nextChar))) {
                    return false;
                }
            } else if (typeof rule === 'string') { 
                let nextChar = arr.shift();
                if (nextChar !== rule) {
                    return false;
                }
            } else if (current === "=" || current === "{" || current === "}" || current === ")") { 
                let nextChar = arr.shift();
                if (nextChar !== current) {
                    return false;
                }
            }
        }
    
        return arr.length === 0 && stack.isEmpty();
    }
    
  
    function cycle() {
        stack.push("CI"); 
    
        while (!stack.isEmpty() && arr.length > 0) {
            let current = stack.pop();
            let rule = map.get(current);
    
            if (typeof rule === 'object') { 
                for (const key in rule) {
                    stack.push(rule[key]); 
                }
            } else if (current === "L" || current === "D") { 
                let nextChar = arr.shift();
                if ((current === "L" && !letters.includes(nextChar)) || 
                    (current === "D" && !numbers.includes(nextChar))) {
                    return false;
                }
            } else if (typeof rule === 'string') { 
                let nextChar = arr.shift();
                if (nextChar !== rule) {
                    return false;
                }
            } else if (current === "=" || current === "{" || current === "}" || current === "(" || current === ")") { 
                let nextChar = arr.shift();
                if (nextChar !== current) {
                    return false;
                }
            } else {
                
                return false;
            }
        }
    
        return arr.length === 0 && stack.isEmpty(); 
    }
    
  
    function functions() {
        stack.push("IN"); 
    
        while (!stack.isEmpty() && arr.length > 0) {
            let current = stack.pop();
            let rule = map.get(current);
    
            if (typeof rule === 'object') { 
                for (const key in rule) {
                    stack.push(rule[key]); 
                }
            } else if (current === "L" || current === "D") { 
                let nextChar = arr.shift();
                if ((current === "L" && !letters.includes(nextChar)) || 
                    (current === "D" && !numbers.includes(nextChar))) {
                    return false;
                }
            } else if (typeof rule === 'string') { 
                let nextChar = arr.shift();
                if (nextChar !== rule) {
                    return false;
                }
            } else if (current === "=" || current === "{" || current === "}" || current === "(" || current === ")") { 
                let nextChar = arr.shift();
                if (nextChar !== current) {
                    return false;
                }
            } else {
                return false;
            }
        }
    
        return arr.length === 0 && stack.isEmpty(); 
    }
    
  
  function paint() {
    const div = document.getElementById("pila");
    const p = document.getElementById("status");
    div.innerHTML = "";
    p.innerHTML = "";
    if (stack.isEmpty()) {
      p.style.color = "green"
      p.textContent = "La pila queda vacia";
      return;
    }
    div.innerHTML = "";
    p.textContent = "Estado de la pila:"
    p.style.color = "red"
    for (const element of stack.get()) {
      const label = document.createElement("p");
      label.textContent = element;
      div.appendChild(label);
    }
  }