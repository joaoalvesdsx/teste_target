def is_fibonacci(num):
    a, b = 0, 1
    if num == 0 or num == 1:
        return True

    while b < num:
        a = b
        b = a + b

    return b == num

num = 21  # Substitua este valor pela entrada desejada

if is_fibonacci(num):
    print(f"{num} pertence à sequência de Fibonacci.")
else:
    print(f"{num} não pertence à sequência de Fibonacci.")
