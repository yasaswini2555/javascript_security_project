#1
# arr = []
# for i in range(10):
#     arr.append(int(input("Enter a number: ")))
# total = sum(arr)
# print("The total is:", total)

#2
arr = [int(input()) for _ in range(20)]
arr.sort()
print("Max 3:", arr[-1], arr[-2], arr[-3])
print("Min 3:", arr[0], arr[1], arr[2])

#3
arr = [int(input()) for _ in range(10)]
rev = arr[::-1]
print("Reversed array:", rev)

#4
marks = []
for i in range(30):
    marks.append(int(input()))
count = [0] * 101
for mark in marks:
    count[mark] += 1
for i in range(101):
    if count[i] > 0:
        print(f"Marks: {i}, Frequency: {count[i]}")
        
#5
marks = [int(input()) for _ in range(30)]

ranges = [0]*10

for m in marks:
    if m == 100:
        ranges[9] += 1
    else:
        ranges[m//10] += 1

for i in range(10):
    if i == 0:
        print("0–10 :", ranges[i])
    else:
        print(f"{i*10+1}–{(i+1)*10} :", ranges[i])

#6
n = int(input("Enter N: "))

fact = 1
for i in range(1, n + 1):
    fact *= i

print("Factorial:", fact)

#7
arr = []
for i in range(10):
    arr.append(int(input()))

avg = sum(arr) / 10
print("Average:", avg)

#8
x = float(input("Speed (km/hr): "))
y = float(input("Time (sec): "))

speed_mps = x * 5 / 18
length = speed_mps * y

print("Length of Train (m):", length)

#9
X = float(input("Train length (m): "))
Y = float(input("Time (sec): "))

man_speed = 5 * 5 / 18

train_speed_mps = (X / Y) + man_speed
train_speed_kmph = train_speed_mps * 18 / 5

print("Speed of Train (km/hr):", train_speed_kmph)
 
#10
X = float(input("Speed of Train 1 (km/hr): "))
Y = float(input("Speed of Train 2 (km/hr): "))

rel_speed = (X + Y) * 5 / 18
distance = 1000

time = distance / rel_speed
print("Time (sec):", time)
