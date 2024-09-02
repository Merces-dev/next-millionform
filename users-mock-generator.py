import json
import random
import os

def generate_random_name():
    first_names = ['John', 'Jane', 'Alex', 'Emily', 'Chris', 'Katie', 'Michael', 'Sarah', 'David', 'Laura', 'Daniel', 'Olivia', 'Matthew', 'Sophia', 'Andrew', 'Emma', 'James', 'Ava', 'Robert', 'Mia']
    last_names = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin']
    return f"{random.choice(first_names)} {random.choice(last_names)}"

def generate_random_email(name):
    domains = ['example.com', 'test.com', 'demo.com', 'sample.com', 'domain.com', 'company.com', 'web.com', 'site.com', 'app.com', 'service.com']
    first_name, last_name = name.split()
    return f"{first_name.lower()}.{last_name.lower()}@{random.choice(domains)}"

def generate_random_phone():
    return f"+1-{random.randint(100,999)}-555-{random.randint(1000,9999)}"

def generate_random_age():
    return random.randint(18, 65)

def generate_random_country():
    countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'Brazil', 'India', 'China', 'Italy', 'Spain', 'Mexico', 'South Korea', 'Russia', 'Netherlands', 'Turkey', 'Switzerland', 'Sweden', 'Poland']
    return random.choice(countries)

def generate_random_occupation():
    occupations = ['Software Engineer', 'Data Scientist', 'Product Manager', 'Designer', 'Teacher', 'Nurse', 'Accountant', 'Doctor', 'Lawyer', 'Engineer', 'Analyst', 'Consultant', 'Artist', 'Musician', 'Writer', 'Photographer', 'Chef', 'Athlete', 'Scientist', 'Entrepreneur']

    return random.choice(occupations)

def generate_user(id):
    name = generate_random_name()
    return {
        "id": id,
        "name": name,
        "email": generate_random_email(name),
        "age": generate_random_age(),
        "country": generate_random_country(),
        "phone": generate_random_phone(),
        "occupation": generate_random_occupation(),
    }

# Number of users to generate
num_users = 2000000

# Ensure the directory exists
os.makedirs("mock", exist_ok=True)

# Generate the list of users with random data
users = [generate_user(i + 1) for i in range(num_users)]

# Convert the list of users to JSON
users_json = json.dumps(users, indent=2)

# Save the JSON to a file in the mock directory
with open("mock/users.json", "w") as file:
    file.write(users_json)

print("Generated 2,000,000 users with random data in mock/users.json")