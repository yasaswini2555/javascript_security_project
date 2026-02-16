n = int(input("Enter a number: "))

count = 0
temp = abs(n)

if temp == 0:
    count = 1
else:
    while temp > 0:
        temp //= 10
        count += 1

print("Number of digits:", count)


marks = []
for i in range(30):
    marks.append(int(input()))

count = [0] * 101

for m in marks:
    if 0 <= m <= 100:
        count[m] += 1

for i in range(101):
    if count[i] > 0:
        print(i, ":", count[i])


n = int(input("Enter decimal number: "))

binary = ""

if n == 0:
    binary = "0"
else:
    while n > 0:
        binary = str(n % 2) + binary
        n //= 2

print("Binary representation:", binary)


binary = input("Enter binary number: ")

decimal = 0
power = 0

for digit in reversed(binary):
    decimal += int(digit) * (2 ** power)
    power += 1

print("Decimal equivalent:", decimal)


n = int(input("Enter a number: "))

divisor = None

for i in range(2, n + 1):
    if n % i == 0:
        divisor = i
        break

if divisor:
    print("Smallest exact divisor other than 1:", divisor)
else:
    print("No divisor found")
