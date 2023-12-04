import Stack from "./Stack.js";

const btn = document.getElementById('btn');
const stack = new Stack();
const rules = new Map();
let arr = [];
const FFP = "++)[contenido]";
const FFL = "--)[contenido]"

rules.set("A", {TV: "TV", E: "E"});
rules.set("E", {I: "I", DV: "DV"});
rules.set("DV", {NV: "NV", PV: "PV"});
rules.set("PV", {DP: "DP", O: "O"});
rules.set("NV", {L: "L", RL: "RL"});
rules.set("O", {L: "L", RL: "RL", D: "D", RD: "RD", true: "true", false: "false"});
rules.set("TV", {TN: "TN", TL: "TL"});
rules.set("TN", {B1: "B1", B2: "B2"});
rules.set("B1", {int: "int"});
rules.set("B2", {float: "float"});
rules.set("TL", {LC: "LC", LV: "LV"});
rules.set("LC", {F1: "F1", F2: "F2"});
rules.set("F1", {string: "string"});
rules.set("F2", {bool: "bool"});
rules.set("LV", {char: "char"});
rules.set("P", ".");
rules.set("DP", ":");
rules.set("I", "=");
rules.set("L", {a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z", A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"});
rules.set("D", {0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9"});
rules.set("B", {C1: "C1", C2: "C2"});
rules.set("C1", "true");
rules.set("C2", "false");
rules.set("RL", {L: "L", RL: "RL", "": ""});
rules.set("RD", {D: "D", RD: "RD", "": ""});
rules.set("PD", {RD: "RD", DP: "DP"});
rules.set("DP", {P: "P", D: "D", DPD: "DPD"});
rules.set("DPD", {D: "D", RD: "RD"});
rules.set("IN", {DF: "DF", RD: "RD"});
rules.set("DF", {Fn: "Fn"});
rules.set("RD", {L: "L", G1: "G1"});
rules.set("G1", {RL: "RL", G2: "G2"});
rules.set("G2", {PA: "PA", G3: "G3"});
rules.set("G3", {PC: "PC", G4: "G4"});
rules.set("G4", {DP: "DP", G5: "G5"});
rules.set("G5", {LA: "LA", G6: "G6"});
rules.set("G6", {CO: "CO", LC: "LC"});
rules.set("PA", "(");
rules.set("PC",  ")");
rules.set("LA",  "{");
rules.set("LC", "}");
rules.set("CO", {Contenido: "Contenido"});
rules.set("I", {assuming: "assuming"});
rules.set("C", {L: "L", K1: "K1"});
rules.set("K1", {RL: "RL", K2: "K2"});
rules.set("K2", {O: "O", OP: "OP"});
rules.set("OP", {D: "D", RD: "RD", C1: "C1", C2: "C2", L: "L", RL: "RL"});
rules.set("M", {O1: "O1", M1: "M1"});
rules.set("O1", {otherwise: "otherwise"});
rules.set("M1", {DP: "DP", M2: "M2"});
rules.set("M2", {LA: "LA", M3: "M3"});
rules.set("M3", {CO: "CO", LC: "LC"});
rules.set("L", {a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z", A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"});
rules.set("RL", {L: "L", RL: "RL", "": ""});
rules.set("LA", "{");
rules.set("LC", "}");
rules.set("DP", ":");
rules.set("P", ".");
rules.set("CO", {Contenido: "Contenido"});
rules.set("D", {0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9"});
rules.set("RD", {D: "D", RD: "RD", "": ""});
rules.set("IN", {CI: "CI", "R": "R"});
rules.set("CI", {loop: "loop"});
rules.set("R", {PA: "PA", CA: "CA"});
rules.set("CA", {NA: "NA", IC: "IC"});
rules.set("NA", {LL: "LL", NO: "NO"});
rules.set("LL", {L: "L", RL: "RL"});
rules.set("NO", {O: "O", OP: "OP"});
rules.set("IC", {DP: "DP", DC: "DC"});
rules.set("DC", {LA: "LA", DF: "DF"});
rules.set("DF", {CO: "CO", LC: "LC"});
rules.set("L", {a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z", A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"});
rules.set("RL", {L: "L", RL: "RL", "": ""});
rules.set("D", {0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9"});
rules.set("O", {"==": "==", "=>": "=>", "<=": "<=", "!=": "!=", ">": ">", "<": "<"});
rules.set("OP", {D: "D", RD: "RD", C1: "C1", C2: "C2", L: "L", RL: "RL"});
rules.set("PA",  "(");
rules.set("PC", ")");
rules.set("DP", ":");
rules.set("LA", "{");
rules.set("LC", "}");
rules.set("CO", {Contenido: "Contenido"});

function validate(){
    stack.clear()
    switch(document.getElementById('type').value){
        case "Variable":
            validateVariables();
            break;
        case "If":
            validateIf();
            break;
        case "For":
            validateLoop();
            break;
        case "Funcion":
            validateFn();
            break;
        default:
            alert("Selecciona una opción");
            break;
    }
    drawStack();
}

function validateVariables() {
    stack.clear();
    let input = document.getElementById('str').value;
    let arr = input.split(/\s+/);
    stack.push("A");

    let tipoDato = arr[0];
    let categoriaTipoDato = (tipoDato === "int" || tipoDato === "float") ? "TN" : "TL";
    stack.push("TV");
    stack.push(categoriaTipoDato);

    let subCategoria;
    if (categoriaTipoDato === "TN") {
        subCategoria = (tipoDato === "int") ? "B1" : "B2";
    } else { 
        if (tipoDato === "string") {
            subCategoria = "F1";
        } else if (tipoDato === "bool") {
            subCategoria = "F2";
        } else { 
            subCategoria = "LV";
        }
        stack.push("LC");
    }
    stack.push(subCategoria);
    
    let identificador = arr[1];
    let ruleIdentificador = rules.get("NV");
    let ruleLetra = rules.get("L");

    if (ruleIdentificador && ruleLetra[identificador[0]]) {
        stack.push("NV");
        stack.push("L");
    } else {
        console.log("Error: Identificador no válido");
        alert("Identificador no válido")
        return;
    }

    if (arr[2] !== "=") {
        console.log("Error: Se esperaba '='");
        alert("Se esperaba =")
        return;
    } else {
        stack.push("E");
        stack.push("I");
    }

    validateValue(tipoDato, arr[3]);

    console.log("Cadena válida");
    alert("Cadena válida");
}

function validateValue(type, value) {
    switch (type) {
        case "int":
            if (!/^\d+$/.test(value)) {
                console.log("Error: Valor no válido para int");
                alert("Valor no válido dado el tipo");
                return;
            }
            stack.push("DV");
            stack.push("NV");
            stack.push("PV");
            stack.push("DP");
            stack.push("O");
            stack.push("D");
            stack.push("RD");
            break;
        case "float":
            if (!/^\d+\.\d+$/.test(value)) {
                console.log("Error: Valor no válido para float");
                alert("Valor no válido dado el tipo");
                return;
            }
            stack.push("DV");
            stack.push("NV");
            stack.push("PV");
            stack.push("DP");
            stack.push("O");
            stack.push("D");
            stack.push("DPD");
            break;
        case "string":
            if (!/^".*"$/.test(value)) {
                console.log("Error: Valor no válido para string");
                alert("Valor no válido dado el tipo");
                return;
            }
            stack.push("DV");
            stack.push("NV");
            stack.push("PV");
            stack.push("DP");
            stack.push("O");
            stack.push("F1");
            break;
        case "bool":
            if (!["true", "false"].includes(value)) {
                console.log("Error: Valor no válido para bool");
                alert("Valor no válido dado el tipo");
                return;
            }
            stack.push("DV");
            stack.push("NV");
            stack.push("PV");
            stack.push("DP");
            stack.push("O");
            stack.push("F2");
            break;
        case "char":
            if (!/^'.'$/.test(value)) {
                console.log("Error: Valor no válido para char");
                alert("Valor no válido dado el tipo");
                return;
            }
            stack.push("DV");
            stack.push("NV");
            stack.push("PV");
            stack.push("DP");
            stack.push("O");
            stack.push("LV");
            break;
    }
}


function validateIf() {
    stack.clear();
    let input = document.getElementById('str').value;
    
    let blocks = input.split(/(assuming|otherwise)/);

    if (!blocks[1] || blocks[1].trim() !== "assuming" || !blocks[2]) {
        console.log("Error: Se esperaba 'assuming'");
        alert("Se esperaba assuming");
        return;
    }
    validateCondition(blocks[2].trim().split(/\s+/)); 

    stack.push("LA");
    stack.push("CO");
    stack.push("LC");

    if (!blocks[3] || blocks[3].trim() !== "otherwise" || !blocks[4]) {
        console.log("Error: Se esperaba 'otherwise'");
        alert("Se esperaba otherwise");
        return;
    }
    stack.push("O1");
    stack.push("LA");
    stack.push("CO");
    stack.push("LC");

    console.log("Cadena válida");
    alert("Cadena válida");
}


function validateCondition(condParts) {
    if (condParts.length !== 3) {
        return;
    }
    
    let variable = condParts[0];
    let ruleL = rules.get("L");
    if (!ruleL[variable[0]]) { 
        console.log("Error: Variable no válida en la condición");
        return;
    }
    stack.push("C");
    stack.push("L");

    let operador = condParts[1];
    let ruleO = rules.get("O");
    if (!ruleO[operador]) {
        console.log("Error: Operador no válido en la condición");
        return;
    }
    stack.push("O");

    let numero = condParts[2];
    let ruleD = rules.get("D");
    if (!ruleD[numero]) {
        console.log("Error: Número no válido en la condición");
        return;
    }
    stack.push("D");
}

function validateLoop() {
    stack.clear();
    let input = document.getElementById('str').value;
    let arr = input.split(/[\s(){}]+/); 
    stack.push("IN");

    if (arr[0] !== "loop") {
        console.log("Error: Se esperaba 'loop'");
        alert("Se esperaba loop");
        return;
    }
    stack.push("CI");

    stack.push("R");
    stack.push("PA");

    validateLoopCondition(arr.slice(1, 4)); 

    stack.push("PC");
    stack.push("LA");
    stack.push("CO");
    stack.push("LC");

    console.log("Cadena válida");
    alert("Cadena válida");
}

function validateLoopCondition(condParts) {
    if (condParts.length !== 3) {
        console.log("Error: Condición del bucle mal formada");
        return;
    }
    
    let variable = condParts[0];
    let ruleL = rules.get("L");
    if (!ruleL[variable]) {
        return;
    }
    stack.push("NA");
    stack.push("LL");
    stack.push("L");

    let operador = condParts[1];
    let ruleO = rules.get("O");
    if (!ruleO[operador]) {
        return;
    }
    stack.push("O");

    let numero = condParts[2];
    let ruleD = rules.get("D");
    if (!ruleD[numero]) {
        return;
    }
    stack.push("D");
}


function validateFn() {
    stack.clear();
    let input = document.getElementById('str').value;
    let arr = input.split(/[\s(){}]+/); 
    stack.push("IN");

    if (arr[0] !== "Fn") {
        console.log("Error: Se esperaba 'Fn'");
        alert("Se esperaba Fn");
        return;
    }
    stack.push("DF");

    let functionName = arr[1];
    let ruleL = rules.get("L");
    let ruleRL = rules.get("RL");
    if (!ruleL[functionName[0]] || (functionName.length > 1 && !ruleRL[functionName.substring(1)])) {
        console.log("Error: Nombre de función no válido");
        alert("Función no válida");
        return;
    }
    stack.push("RD");
    stack.push("L");
    stack.push("G1");

    stack.push("G2");
    stack.push("PA");
    stack.push("G3");
    stack.push("PC");

    stack.push("G4");
    stack.push("G5");
    stack.push("LA");
    stack.push("G6");
    stack.push("CO");
    stack.push("LC");

    console.log("Cadena válida");
    alert("Cadena válida");
}



function drawStack() {
    const div = document.getElementById("pila");
    div.innerHTML = "";
    for (const element of stack.get()) {
      const p = document.createElement("p");
      p.textContent = element;
      div.appendChild(p);
    }
  }

btn.addEventListener('click', validate);