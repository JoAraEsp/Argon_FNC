import tkinter as tk

class PDA:
    def __init__(self):
        self.stack = ['#']
        self.state = 'start'
        self.transitions = {
            # Declaración de variables
            ('start', 'A', '#'): ('process_TV', 'E'),
            ('process_TV', 'E', 'E#'): ('accept', ''),
            ('E', 'I', 'E'): ('process_I', 'DV'),
            ('DV', 'NV', 'DV'): ('process_NV', 'PV'),
            ('DV', 'PV', 'DV'): ('process_PV', 'DP'),
            ('NV', 'L', 'NV'): ('process_L', 'NV'),
            ('NV', 'L', 'L'): ('process_L', 'RL'),
            ('PV', 'DP', 'PV'): ('process_DP', 'O'),
            ('O', 'L', 'O'): ('process_L', 'RL'),
            ('O', 'L', 'L'): ('process_L', 'RL'),
            ('O', 'D', 'O'): ('process_D', 'RD'),
            ('O', 'D', 'P'): ('process_P', 'D'),
            ('O', 'C1', 'O'): ('accept', ''),
            ('O', 'C2', 'O'): ('accept', ''),

            # Funciones
            ('start', 'IN', '#'): ('process_DF', 'RD'),
            ('process_DF', 'RD', 'RD'): ('process_L', 'G1'),
            ('G1', 'RL', 'G1'): ('process_L', 'RL'),
            ('G1', 'L', 'G1'): ('process_L', 'RL'),
            ('G1', 'PA', 'G1'): ('process_PA', 'G2'),
            ('G2', 'PC', 'G2'): ('process_PC', 'G3'),
            ('G3', 'DP', 'G3'): ('process_DP', 'G4'),
            ('G4', 'DP', 'G4'): ('process_DP', 'G5'),
            ('G5', 'LA', 'G5'): ('process_LA', 'G6'),
            ('G6', 'LC', 'G6'): ('process_LC', ''),

            # Condicional
            ('start', 'IN', '#'): ('process_I', 'R'),
            ('process_I', 'R', 'R'): ('process_C', 'J1'),
            ('J1', 'DP', 'J1'): ('process_DP', 'J2'),
            ('J2', 'LA', 'J2'): ('process_LA', 'J3'),
            ('J3', 'CO', 'J3'): ('process_CO', 'J4'),
            ('J4', 'LC', 'J4'): ('process_LC', 'E'),
            ('C', 'L', 'C'): ('process_L', 'K1'),
            ('K1', 'RL', 'K1'): ('process_RL', 'K2'),
            ('K2', 'O', 'K2'): ('process_O', 'OP'),
            ('OP', 'D', 'OP'): ('process_D', 'RD'),
            ('OP', 'C1', 'OP'): ('accept', ''),
            ('OP', 'C2', 'OP'): ('accept', ''),
            ('OP', 'L', 'OP'): ('process_L', 'RL'),

            # Ciclo
            ('start', 'IN', '#'): ('process_Ci', 'R'),
            ('process_Ci', 'R', 'R'): ('process_PA', 'CA'),
            ('CA', 'NA', 'CA'): ('process_NA', 'IC'),
            ('NA', 'LL', 'NA'): ('process_LL', 'NO'),
            ('LL', 'L', 'LL'): ('process_L', 'RL'),
            ('NO', 'O', 'NO'): ('process_O', 'OP'),
            ('IC', 'DP', 'IC'): ('process_DP', 'DC'),
            ('DC', 'LA', 'DC'): ('process_LA', 'DF'),
            ('DF', 'CO', 'DF'): ('process_CO', 'LC'),

            # Terminales y no terminales individuales
            ('start', 'TV', '#'): ('accept', ''),
            ('TV', 'TN', 'TV'): ('process_TN', ''),
            ('TN', 'B1', 'TN'): ('accept', ''),
            ('TN', 'B2', 'TN'): ('accept', ''),
            ('TV', 'TL', 'TV'): ('process_TL', ''),
            ('TL', 'LC', 'TL'): ('process_LC', ''),
            ('TL', 'LV', 'TL'): ('process_LV', ''),
            ('LC', 'F1', 'LC'): ('accept', ''),
            ('LC', 'F2', 'LC'): ('accept', ''),
            ('LV', 'char', 'LV'): ('accept', ''),
            ('P', '.', 'P'): ('accept', ''),
            ('DP', ':', 'DP'): ('accept', ''),
            ('I', '=', 'I'): ('accept', ''),
            ('L', 'a...z', 'L'): ('accept', ''),
            ('L', 'A...Z', 'L'): ('accept', ''),
            ('D', '0...9', 'D'): ('accept', ''),
            ('B', 'C1', 'B'): ('accept', ''),
            ('B', 'C2', 'B'): ('accept', ''),
            ('RL', 'L', 'RL'): ('process_L', 'RL'),
            ('RL', 'ε', 'RL'): ('accept', ''),
            ('RD', 'D', 'RD'): ('process_D', 'RD'),
            ('RD', 'ε', 'RD'): ('accept', ''),
            ('PD', 'RD', 'PD'): ('accept', ''),
            ('DPD', 'D', 'DPD'): ('process_D', 'RD')
        }
        self.log = ""

    def process_input(self, input_string):
        for symbol in input_string.split():
            while True:
                if len(self.stack) == 0:
                    self.log += f"Error: Pila vacía en el estado {self.state}\n"
                    return False
                top_stack = self.stack.pop()
                if (self.state, symbol, top_stack) in self.transitions:
                    new_state, to_stack = self.transitions[(self.state, symbol, top_stack)]
                    self.log += f"Transición: {self.state} + {symbol}/{top_stack} -> {new_state}/{to_stack}\n"
                    self.state = new_state
                    for s in reversed(to_stack):
                        if s != '':
                            self.stack.append(s)
                    break
                else:
                    self.log += f"Error: Transición no válida desde {self.state} con {symbol}/{top_stack}\n"
                    return False
        return self.state == 'accept'

class Application(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title('Autómata con Pila')
        self.create_widgets()

    def create_widgets(self):
        self.input_label = tk.Label(self, text="Ingrese la cadena:")
        self.input_label.pack()

        self.input_entry = tk.Entry(self)
        self.input_entry.pack()

        self.validate_button = tk.Button(self, text="Validar", command=self.validate)
        self.validate_button.pack()

        self.log_text = tk.Text(self, height=10, width=50)
        self.log_text.pack()

    def validate(self):
        pda = PDA()
        input_string = self.input_entry.get()
        valid = pda.process_input(input_string)
        self.log_text.delete(1.0, tk.END)
        self.log_text.insert(tk.END, pda.log)
        if valid:
            self.log_text.insert(tk.END, "Cadena aceptada.")
        else:
            self.log_text.insert(tk.END, "Cadena rechazada.")

app = Application()
app.mainloop()
