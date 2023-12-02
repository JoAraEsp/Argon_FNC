import tkinter as tk
import re

class PDA:
    def __init__(self):
        self.stack = ['#']
        self.state = 'start'
        self.transitions = {
            ('start', 'TV', '#'): ('A', 'E'),
            ('A', 'I', 'E'): ('E', 'DV'),
            ('E', 'NV', 'DV'): ('DV', 'PV'),
            ('DV', 'DP', 'PV'): ('PV', 'Z'),
            ('DV', 'L', 'NV'): ('NV', ''),
            ('DV', 'L', 'RL_NV'): ('NV', 'RL'),
            ('PV', 'L', 'Z'): ('Z', 'RL'),
            ('PV', 'D', 'Z'): ('Z', 'RD'),
            ('PV', 'true', 'Z'): ('Z', ''),
            ('PV', 'false', 'Z'): ('Z', ''),
            ('start', 'TN', 'TV'): ('TV', ''),
            ('start', 'TL', 'TV'): ('TV', ''),
            ('TV', 'B1', 'TN'): ('TN', ''),
            ('TV', 'B2', 'TN'): ('TN', ''),
            ('TN', 'int', 'B1'): ('B1', ''),
            ('TN', 'float', 'B2'): ('B2', ''),
            ('TV', 'LC', 'TL'): ('TL', ''),
            ('TV', 'LV', 'TL'): ('TL', ''),
            ('TL', 'F1', 'LC'): ('LC', ''),
            ('TL', 'F2', 'LC'): ('LC', ''),
            ('LC', 'string', 'F1'): ('F1', ''),
            ('LC', 'bool', 'F2'): ('F2', ''),
            ('TL', 'char', 'LV'): ('LV', ''),
            ('DPD', '.', 'P'): ('P', ''),
            ('PV', ':', 'DP'): ('DP', ''),
            ('E', '=', 'I'): ('I', ''),
            ('NV', '[a-z]', 'L'): ('L', ''),
            ('NV', '[A-Z]', 'L'): ('L', ''),
            ('Z', '[1-9]', 'D'): ('D', ''),
            ('Z', '0', 'B'): ('B', ''),
            ('B', 'true', 'C1'): ('C1', ''),
            ('B', 'false', 'C2'): ('C2', ''),
            ('NV', 'L', 'RL'): ('RL', 'RL')
        }
        self.log = []

    def interpret_input(self, user_input):
        patterns = {
            # Declaraciones de tipo
            r'^int\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*\d+\s*;$': ['TV', 'TL', 'LV', 'int', 'I', '=', 'NV', 'L', 'DP', ':', 'Z', 'D', 'RD'],
            r'^float\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*\d+\.\d*\s*;$': ['TV', 'TL', 'LV', 'float', 'I', '=', 'NV', 'L', 'DP', ':', 'Z', 'D', 'DPD', 'Z', 'D', 'RD'],
            r'^string\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*".*"\s*;$': ['TV', 'TL', 'LV', 'string', 'I', '=', 'NV', 'L', 'DP', ':', 'Z', 'F1'],
            r'^bool\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*(true|false)\s*;$': ['TV', 'TL', 'LV', 'bool', 'I', '=', 'NV', 'L', 'DP', ':', 'Z', 'C1'],
            r"^char\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*'.{1}'\s*;$": ['TV', 'TL', 'LV', 'char', 'I', '=', 'NV', 'L', 'DP', ':', 'Z', 'L', 'RL'],

            # Funciones
            r'^Fn\s+[a-zA-Z_][a-zA-Z0-9_]*\(\)\s*:\s*\{.*\}$': ['DF', 'Fn', 'RD', 'L', 'G1', 'RL', 'G2', 'PA', 'G3', 'PC', 'G4', 'DP', 'G5', 'LA', 'G6', 'CO', 'LC'],

            # Condiciones
            r'^assuming\s+.*:\s*{\s*if\s*\(.*\)\s*{\s*.*\s*}\s*else\s*{\s*.*\s*}.*}\s*;\s*otherwise:\s*{\s*.*\s*}\s*;$': ['I', 'assuming', 'L', 'RL', 'C', 'L', 'K1', 'RL', 'O', 'RL', 'J1', 'RP', 'J2', 'DP', 'J3', 'LC', 'E', 'O1', 'otherwise', 'M1', 'DP', 'M2', 'LA', 'M3', 'CO', 'LC'],

            # Ciclos
            r'^loop\s*\(\s*[a-zA-Z]\s*=\s*\d+\s*;\s*[a-zA-Z]\s*[<>=!]{1,2}\s*\d+\s*;\s*[a-zA-Z]\s*[+\-*/%]?=\s*[+\-*/%]?\s*\d+\s*\)\s*:\s*{\s*.*\s*}': ['IN', 'CI', 'loop', 'R', 'PA', 'NV', 'L', 'DP', ':', 'Z', 'D', 'RD', 'PC', 'CA', 'NV', 'LL', 'O', 'RL', 'NO', 'NV', 'L', 'RL', 'OP', 'D', 'RD', 'NA', 'DP', 'RL', 'LL', 'O', 'RL', 'DC', 'LA', 'DF', 'CO', 'LC']
        }

        for pattern, tokens in patterns.items():
            if re.fullmatch(pattern, user_input):
                return tokens
        return None
    
    def process_input(self, token_sequence):
        if token_sequence is None:
            self.log.append("Entrada no reconocida.")
            return False

        for token in token_sequence:
            if len(self.stack) == 0:
                self.log.append("Error: Pila vacía.")
                return False

            top_stack = self.stack.pop()

            if (self.state, token, top_stack) in self.transitions:
                new_state, to_stack = self.transitions[(self.state, token, top_stack)]
                self.log.append(f"Transición: ({self.state}, {token}, {top_stack}) -> ({new_state}, {to_stack})")
                self.state = new_state
                for s in reversed(to_stack):
                    if s != '':
                        self.stack.append(s)
            else:
                self.log.append(f"Error: Transición no válida desde {self.state} con {token}/{top_stack}")
                return False

        return self.state == 'accept'
    
    def get_stack_string(self):
        return ' '.join(reversed(self.stack))

class Application(tk.Tk):
    def __init__(self):
        super().__init__()
        self.pda = PDA()
        self.title('Autómata con Pila - Validador de Gramática')
        self.create_widgets()

    def create_widgets(self):
        self.input_label = tk.Label(self, text="Ingrese la cadena:")
        self.input_label.pack()

        self.input_text = tk.Text(self, height=4, width=50)
        self.input_text.pack()

        self.validate_button = tk.Button(self, text="Validar", command=self.validate)
        self.validate_button.pack()

        self.show_stack_button = tk.Button(self, text="Mostrar Pila", command=self.show_pda_stack)
        self.show_stack_button.pack()

        self.result_label = tk.Label(self, text="", fg="red")
        self.result_label.pack()

        self.log_text = tk.Text(self, height=10, width=50)
        self.log_text.pack()

    def validate(self):
        user_input = self.input_text.get("1.0", "end-1c").strip()
        token_sequence = self.pda.interpret_input(user_input)
        valid = self.pda.process_input(token_sequence)
        self.result_label.config(text="Cadena aceptada." if valid else "Cadena no aceptada.")
        self.log_text.delete("1.0", tk.END)
        self.log_text.insert(tk.END, '\n'.join(self.pda.log) + "\n")

    def show_pda_stack(self):
        self.log_text.delete("1.0", tk.END)
        stack_contents = self.pda.get_stack_string()
        self.log_text.insert(tk.END, "Contenido actual de la pila basado en la entrada:\n" + stack_contents)

app = Application()
app.mainloop()