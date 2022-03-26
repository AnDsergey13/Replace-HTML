import json

# with open('rules.json', "utf8") as f:
#     file_content = f.read()
#     templates = json.loads(file_content)
#     print(templates)

to_json = {"e-dostavka.by":[
	{"button.minus":"_____________минус"},
	{"button.plus":"_____________плюс"}]
}

with open('rules_gen.json', 'w') as f:
    json.dump(to_json, f)