import json


def main():
    with open('data/items.json', 'rw') as f:
        questions = json.load(f)
        for q in questions:
            idx = [i for i, c in enumerate(q['title']) if c.isupper()][0]
            title = q['title'][idx:]
            dilemma = q['text'].split('.')[-1]
            text = q['text'].replace(dilemma, '').replace(
                '...', '').replace('\n', '')
            idea = dilemma.split('the right thing to do')[0].split("Is")[1]
            dilemma = dilemma.replace(idea, '<b>'+idea+'</b>')

            new_keys = {
                "type": "single",
                "answers": ["Yes", "No"],
                "additional": {
                    "dilemma": "Why?",
                    "entered": [],
                    "type": "long"
                },
                "oldTitle": q['title'],
                "entered": [],
                "correct": "",
                "title": title,
                "text": text,
                "dilemma": dilemma
            }
            q.update(new_keys)
        with open('data/new_items.json', 'w') as fp:
            json.dump(questions, fp)


if __name__ == '__main__':
    main()
