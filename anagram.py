str = raw_input("Enter a string: ")
substr = raw_input ("Enter the anagram/substring to look for:")

len = len(substr);

count=0;
found=False;
for i in range(count,len+1):
	if(str[count:count+len]==substr):
		found=True
	else:
		count+=1
		found=False

if (found):
	print("Substring found")
else:
  print("substring doesn't exist")