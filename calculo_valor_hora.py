valor_hora = 10
horas_por_dia = 6
dias_trabalhados = ['23/02', '24/02', '25/02']
imposto = 0.06
calc = (valor_hora*horas_por_dia*len(dias_trabalhados)/(1-imposto))

print(calc) 