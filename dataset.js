export const dataset = {
	name: "Cushman",
	instructions: [
		{
			title: "Instructions",
			items: [
				{
					text: "You are going to be presented with different moral dilemmas. For each <b>scenario</b>, you'll have to answer a first question by emiting a <b>moral judgment</b>. Secondly, you'll have to explain the motivations (<b>Why?</b>) behind your first answer.",
					type: "regular",
					variables: [],
				},
				{
					text: `<b>TW:</b> This study may contain fictional content (violence, sexual assault) that may be triggering for some people. By continuing, you are acknowledging that you agree to proceed. If you choose to continue, but end up being disturbed during the study, don't hesitate to exit the study at any time.`,
					type: 'alert',
					variables: [],
				},
				{
					text: `You've completed <variable1> item(s) so far. <a onclick="resetState()"> Reset data?</a>`,
					type: 'info',
					variables: ['currentQuestionIndex'],
				},

			],
			type: "short",
		},
		// {
		// title: "Instructions",
		// text: "Good luck!",
		// type: "short",
		// },

	],
	questions: [
		{
			"title": "Standard Trolley",
			"text": "You are at the wheel of a runaway trolley quickly approaching a fork  in the tracks. On the tracks extending to the left is a group of fi ve railway workmen. On the tracks extending to the right is a single railway workman. If you do nothing the trolley will proceed to the left, causing the deaths of the five workmen. The only way to avoid the deaths of these workmen is to hit a switch on your dashboard that will cause the trolley to proceed to the right, causing the death of the single workman.",
			"id": 1,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Standard Trolley",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to hit the switch in order to avoid the deaths of the five workmen?"
		},
		{
			"title": "Standard Fumes",
			"text": "You are the late-night watchman in a hospital. Due to an accident in  the building next door, there are deadly fumes rising up through the hospital\u2019s ventilation system. In a certain room of the hospital are three patients. In another room there is a single patient. If you do nothing the fumes will rise up into the room containing the three patients and cause their deaths. The only way to avoid the deaths of these patients is to hit a certain switch, which will cause the fumes to bypass the room containing the three patients. As a result of doing this the fumes will enter the room containing the single patient, causing his death.",
			"id": 2,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Standard Fumes",
			"entered": [],
			"correct": "",
			"oldId": 2,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to hit the switch in order to avoid the deaths of the three patients?"
		},
		{
			"title": "Donation",
			"text": "You are at home one day when the mail arrives. You receive a  letter from a reputable international aid organization. The letter asks you to make a donation of two hundred dollars to their organization. The letter explains that a two hundred-dollar donation will allow this organization to provide needed medical attention to some poor people in another part of the world.",
			"id": 3,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Donation",
			"entered": [],
			"correct": "",
			"oldId": 3,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to not make a donation to this organization in order to save money?"
		},
		{
			"title": "Vaccine Policy",
			"text": "You work for the Bureau of Health, a government agency. You are deciding  whether or not your agency should encourage the use of a certain recently developed vaccine. The vast majority of people who take the vaccine develop an immunity to a certain deadly disease, but a very small number of people who take the vaccine will actually get the disease that the vaccine is designed to prevent. All the available evidence, which is very strong, suggests that the chances of getting the disease due to lack of vaccination are much higher than the chances of getting the disease by taking the vaccine.",
			"id": 4,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Vaccine Policy",
			"entered": [],
			"correct": "",
			"oldId": 4,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to direct your agency to encourage the use of this vaccine in order to promote national health?"
		},
		{
			"title": "Environmental Policy A1",
			"text": "You are a member of a government legislature. The legislature is deciding between  two different policies concerning environmental hazards. Policy A has a 90% chance of causing no deaths at all and has a 10% chance of causing 1000 deaths. Policy B has a 92% chance of causing no deaths and an 8% chance of causing 10, 000 deaths.",
			"id": 5,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Environmental Policy A1",
			"entered": [],
			"correct": "",
			"oldId": 5,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to vote for Policy A over Policy B?"
		},
		{
			"title": "Environmental Policy A2",
			"text": "You are a member of a government legislature. The legislature is deciding between  two different policies concerning environmental hazards. Policy A has a 90% chance of causing no deaths at all and has a 10% chance of causing 1000 deaths. Policy B has an 88% chance of causing no deaths and a 12% chance of causing 10 deaths.",
			"id": 6,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Environmental Policy A2",
			"entered": [],
			"correct": "",
			"oldId": 6,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to vote for Policy B over Policy A?"
		},
		{
			"title": "Sculpture ",
			"text": "You are visiting the sculpture garden of a wealthy art collector. The garden  overlooks a valley containing a set of train tracks. A railway workman is working on the tracks, and an empty runaway trolley is heading down the tracks toward the workman. The only way to save the workman\u2019s life is to push one of the art collector\u2019sprized sculptures down into the valley so that it will roll onto the tracks and block the trolley\u2019s passage. Doing this will destroy the sculpture.",
			"id": 7,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Sculpture ",
			"entered": [],
			"correct": "",
			"oldId": 7,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to destroy the sculpture in order to save this workman\u2019s life?"
		},
		{
			"title": "Speedboat",
			"text": "While on vacation on a remote island, you are fishing from a seaside  dock. You observe a group of tourists board a small boat and set sail for a nearby island. Soon after their departure you hear over the radio that there is a violent storm brewing, a storm that is sure to intercept them. The only way that you can ensure their safety is to warn them by borrowing a nearby speedboat. The speedboat belongs to a miserly tycoon who would not take kindly to your borrowing his property.",
			"id": 8,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Speedboat",
			"entered": [],
			"correct": "",
			"oldId": 8,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to borrow the speedboat in order to warn the tourists about the storm?"
		},
		{
			"title": "Guarded Speedboat",
			"text": "While on vacation on a remote island, you are fishing from a seaside  dock. You observe a group of tourists board a small boat and set sail for a nearby island. Soon after their departure you hear over the radio that there is a violent storm brewing, a storm that is sure to intercept them. The only way that you can ensure their safety is to warn them by borrowing a nearby speedboat. The speedboat belongs to a miserly tycoon who has hired a fiercely loyal guard to make sure that no one uses his boat without permission. To get to the speedboat you will have to lie to the guard.",
			"id": 9,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Guarded Speedboat",
			"entered": [],
			"correct": "",
			"oldId": 9,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to lie to the guard in order to borrow the speedboat and warn the tourists about the storm?"
		},
		{
			"title": "Five-for-Seven Trolley",
			"text": "You are at the wheel of a runaway trolley quickly approaching a fork  in the tracks. On the tracks extending to the left is a group of five railway workmen. On the tracks extending to the right is a group of seven railway workmen. If you do nothing the trolley will proceed to the left, causing the deaths of the five workmen. The only way to save these workmen is to hit a switch on your dashboard that will cause the trolley to proceed to the right, causing the deaths of the seven workmen on the other side.",
			"id": 10,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Five-for-Seven Trolley",
			"entered": [],
			"correct": "",
			"oldId": 10,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to hit the switch in order to avoid the deaths of the five workmen?"
		},
		{
			"title": "Three-for-Seven Fumes",
			"text": "You are the late-night watchman in a hospital. Due to an accident in  the building next door, there are deadly fumes rising up through the hospital\u2019s ventilation system. In a certain room of the hospital are three patients. In another room there are seven patients. If you do nothing the fumes will rise up into the room containing the three patients and cause their deaths. The only way to save these patients is to hit a certain switch, which will cause the fumes to bypass the room containing the three people. As a result of doing this the fumes will enter the room containing the seven patients, causing their deaths.",
			"id": 11,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Three-for-Seven Fumes",
			"entered": [],
			"correct": "",
			"oldId": 11,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to hit the switch in order to avoid the deaths of the three patients?"
		},
		{
			"title": "Resume",
			"text": "You have a friend who has been trying to find a job lately  without much success. He figured that he would be more likely to get hired if he had a more impressive resume. He decided to put some false information on his resume in order to make it more impressive. By doing this he ultimately managed to get hired, beating out several candidates who were actually more qualified than he.",
			"id": 12,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Resume",
			"entered": [],
			"correct": "",
			"oldId": 12,
			"cond": "impersonal_moral",
			"dilemma": " Was it appropriate for your friend to put false information on his resume in order to help him find employment?"
		},
		{
			"title": "Taxes",
			"text": "You are the owner of a small business trying to make ends meet.  It occurs to you that you could lower your taxes by pretending that some of your personal expenses are business expenses. For example, you could pretend that the stereo in your bedroom is being used in the lounge at the office, or that your dinners out with your wife are dinners with clients.",
			"id": 13,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Taxes",
			"entered": [],
			"correct": "",
			"oldId": 13,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to pretend that certain personal expenses are business expenses in order to lower your taxes?"
		},
		{
			"title": "Environmental Policy B1",
			"text": "You are a member of a government legislature. The legislature is deciding between  two different policies concerning environmental hazards. Policy A has a 90% chance of causing no deaths at all and has a 10% chance of causing 1000 deaths. Policy B has a 92% chance of causing no deaths and an 8% chance of causing 10, 000 deaths.",
			"id": 14,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Environmental Policy B1",
			"entered": [],
			"correct": "",
			"oldId": 14,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to vote for Policy B over Policy A?"
		},
		{
			"title": "Environmental Policy B2",
			"text": "You are a member of a government legislature. The legislature is deciding between  two different policies concerning environmental hazards. Policy A has a 90% chance of causing no deaths at all and has a 10% chance of causing 1000 deaths. Policy B has a 88% chance of causing no deaths and a 12% chance of causing 10 deaths.",
			"id": 15,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Environmental Policy B2",
			"entered": [],
			"correct": "",
			"oldId": 15,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to vote for Policy A over Policy B?"
		},
		{
			"title": "Stock Tip",
			"text": "You are a management consultant working on a case for a large corporate  client. You have access to confidential information that would be very useful to investors. You have a friend who plays the stock market. You owe this friend a sizable sum of money. By providing her with certain confidential information you could help her make a lot of money, considerably more than you owe her. If you did this, she would insist on canceling your debt. Releasing information in this way is strictly forbidden by federal law.",
			"id": 16,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Stock Tip",
			"entered": [],
			"correct": "",
			"oldId": 16,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to release this information to your friend so that she will cancel your debt?"
		},
		{
			"title": "Illegal Lunch",
			"text": "You are a lawyer working on a big case. The judge presiding over  the trial happens to be someone you knew from law school. The two of you were rather friendly back then, but now, decades later, it seems that your old friend barely remembers you. You\u2019re quite sure that if you were to talk to him over lunch, you could jog his memory and he would begin to see you as an old buddy, which would be very good for your work on this case. It\u2019s illegal for judges and lawyers working on the same case to meet socially.",
			"id": 17,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Illegal Lunch",
			"entered": [],
			"correct": "",
			"oldId": 17,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to meet with this judge socially in order to help you win your case?"
		},
		{
			"title": "Lost Wallet",
			"text": "You are walking down the street when you come across a wallet lying  on the ground. You open the wallet and find that it contains several hundred dollars in cash as well the owner\u2019s driver\u2019s license. From the credit cards and other items in the wallet it\u2019s very clear that the wallet\u2019s owner is wealthy. You, on the other hand, have been hit by hard times recently and could really use some extra money. You consider sending the wallet back to the owner without the cash, keeping the cash for yourself.",
			"id": 18,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Lost Wallet",
			"entered": [],
			"correct": "",
			"oldId": 18,
			"cond": "impersonal_moral",
			"dilemma": " Is it appropriate for you to keep the money you found in the wallet in order to have more money for yourself?"
		},
		{
			"title": "Transplant",
			"text": "You are a doctor. You have five patients, each of whom is  about to die due to a failing organ of some kind. You have another patient who is healthy. The only way that you can save the lives of the first five patients is to transplant five of this young man\u2019s organs (against his will) into the bodies of the other five patients. If you do this, the young man will die, but the other five patients will live.",
			"id": 19,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Transplant",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to perform this transplant in order to save five of your patients?"
		},
		{
			"title": "Footbridge",
			"text": "A runaway trolley is heading down the tracks toward five workmen who will  be killed if the trolley proceeds on its present course. You are on a footbridge over the tracks, in between the approaching trolley and the five workmen. Next to you on this footbridge is a stranger who happens to be very large. The only way to save the lives of the five workmen is to push this stranger off the bridge and onto the tracks below where his large body will stop the trolley. The stranger will die if you do this, but the five workmen will be saved.",
			"id": 20,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Footbridge",
			"entered": [],
			"correct": "",
			"oldId": 2,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to push the stranger on to the tracks in order to save the five workmen?"
		},
		{
			"title": "Country Road",
			"text": "You are driving along a country road when you hear a plea for  help coming from some roadside bushes. You pull over and encounter a man whose legs are covered with blood. The man explains that he has had an accident while hiking and asks you to take him to a nearby hospital. Your initial inclination is to help this man, who will probably lose his leg if he does not get to the hospital soon. However, if you give this man a lift, his blood will ruin the leather upholstery of your car.",
			"id": 21,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Country Road",
			"entered": [],
			"correct": "",
			"oldId": 3,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to leave this man by the side of the road in order to preserve your leather upholstery?"
		},
		{
			"title": "Architect",
			"text": "You are a young architect visiting one of your construction sites with your  boss. Your boss is a despicable individual who makes everyone around him miserable including you. It occurs to you that if you were to push him off of the building you are inspecting he would fall to his death and everyone would think it was an accident.",
			"id": 22,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Architect",
			"entered": [],
			"correct": "",
			"oldId": 4,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to push your boss off of the building in order to get him out of your life?"
		},
		{
			"title": "Hard Times",
			"text": "You are the head of a poor household in a developing country. Your  crops have failed for the second year in a row, and it appears that you have no way to feed your family. Your sons, ages eight and ten, are too young to go off to the city where there jobs, but your daughter could fare better. You know a man from your village who lives in the city and who makes sexually explicit films featuring small children such as your daughter. He tells you that in one year of working in his studio your daughter could earn enough money to keep your family fed for several growing seasons.",
			"id": 23,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Hard Times",
			"entered": [],
			"correct": "",
			"oldId": 5,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to employ your daughter in the child pornography industry in order to feed your family?"
		},
		{
			"title": "Smother for dollars",
			"text": "You are in hospital lounge waiting to visit a sick friend. A young  man sitting next to you explains that his father is very ill. The doctors believe that he has a week to live at most. He explains further that his father has a substantial life insurance policy that expires at midnight. If his father dies before midnight, this young man will receive a very large sum of money. He says that the money would mean a great deal to him and that no good will come from his father\u2019s living a few more days. He offers you half a million dollars to go up to his father\u2019s room and smother his father with a pillow.",
			"id": 24,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Smother for dollars",
			"entered": [],
			"correct": "",
			"oldId": 6,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to kill this man\u2019s father in order to get money for yourself and this young man?"
		},
		{
			"title": "Crying Baby",
			"text": "Enemy soldiers have taken over your village. They have orders to kill all  remaining civilians. You and some of your townspeople have sought refuge in the cellar of a large house. Outside you hear the voices of soldiers who have come to search the house for valuables. Your baby begins to cry loudly. You cover his mouth to block the sound. If you remove your hand from his mouth his crying will summon the attention of the soldiers who will kill you, your child, and the others hiding out in the cellar. To save yourself and the others you must smother your child to death.",
			"id": 25,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Crying Baby",
			"entered": [],
			"correct": "",
			"oldId": 7,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to smother your child in order to save yourself and the other townspeople?"
		},
		{
			"title": "Plane Crash",
			"text": "Your plane has crashed in the Himalayas. The only survivors are yourself, another  man, and a young boy. The three of you travel for days, battling extreme cold and wind. Your only chance at survival is to find your way to small a village on the other side of the mountain, several days away. The boy has a broken leg and cannot move very quickly. Hischances of surviving the journey are essentially zero. Without food, you and the other man will probably die as well. The other man suggests that you sacrifice the boy and eat his remains over the next few days.",
			"id": 26,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Plane Crash",
			"entered": [],
			"correct": "",
			"oldId": 8,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate to kill this boy so that you and the other man may survive your journey to safety?"
		},
		{
			"title": "Hired Rapist",

			"text": "You have been dissatisfied with your marriage for several years. It is your distinct impression that your partner no longer appreciates you. You remember how they appreciated you years ago when you took care of her after they was mugged. You devise the following plan to regain your partner’s affection. You will hire a person to break into your house while you are away. This person will tie up and sexually assault your partner. You, upon hearing the horrible news, will return swiftly to their side, to take care of them and comfort them, and they will once again appreciate you. Is it appropriate for you to hire a person to sexually assault your partner so that they will appreciate you as you comfort them?",
			"id": 27,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Hired Rapist",
			"entered": [],
			"correct": "",
			"oldId": 9,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to hire a man to rape your wife so that she will appreciate you as you comfort her?"
		},
		{
			"title": "Grandson",
			"text": "A young boy is visiting his grandmother for the weekend. Usually she gives  him a gift of a few dollars when he arrives, but this time she doesn\u2019t. He asks her why not and she says something about how he doesn\u2019t write her as many letters as he used to. Angered by this, the boy decides to play a trick on her. While his grandmother is busy cooking he removes a handful of pills from the medicine cabinet and puts them in his grandmother\u2019s teapot. Later that night, she makes her tea, and the dissolved pills make her sick. In the morning she is dead.",
			"id": 28,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Grandson",
			"entered": [],
			"correct": "",
			"oldId": 10,
			"cond": "personal_moral",
			"dilemma": " Was it appropriate for this boy to put pills in his grandmother\u2019s teapot in order to play a trick on her?"
		},
		{
			"title": "Infanticide",
			"text": "You are a fifteen year-old girl who has become pregnant. By wearing loose  clothing and deliberately putting on weight you have managed to keep your pregnancy a secret. One day, while at school, your water breaks. You run to the girls locker room and hide for several hours while you deliver the baby. You are sure that you are not prepared to care for this baby. You think to yourself that it would be such a relief to simply clean up the mess you\u2019ve made in the locker room, wrap the baby in some towels, throw the baby in the dumpster behind the school, and act as if nothing had ever happened.",
			"id": 29,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Infanticide",
			"entered": [],
			"correct": "",
			"oldId": 11,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to throw your baby in the dumpster in order to move on with your life?"
		},
		{
			"title": "Lifeboat 2",
			"text": "You are on a cruise ship when there is a fire on board,  and the ship has to be abandoned. The lifeboats are carrying many more people than they were designed to carry. The lifeboat you\u2019re in is sitting dangerously low in the water\u2014a few inches lower and it will sink. The seas start to get rough, and the boat begins to fill with water. If nothing is done it will sink before the rescue boats arrive and everyone on board will die. However, there is an injured person who will not survive in any case. If you throw that person overboard the boat will stay afloat and the remaining passengers will be saved.",
			"id": 30,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Lifeboat 2",
			"entered": [],
			"correct": "",
			"oldId": 12,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to throw this person overboard in order to save the lives of the remaining passengers?"
		},
		{
			"title": "Preventing the Spread 2",
			"text": "You are a waiter. You overhear one of your customers say that he  is about to go to jail and that in his last forty-eight hours of freedom he plans to infect as many people as possible with HIV. You know him well enough to know that he is telling the truth and that he has access to many potential victims. You happen to know that he has a very strong allergy to poppy seeds. If he eats even one he will go into convulsions and have to be hospitalized. for at least forty-eight hours.",
			"id": 31,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Preventing the Spread 2",
			"entered": [],
			"correct": "",
			"oldId": 13,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to cause this man to have a serious allergy attack in order to prevent him from spreading HIV?"
		},
		{
			"title": "Ecologists",
			"text": "You are part of a group of ecologists who live in a remote  stretch of jungle. The entire group, which includes eight children, has been taken hostage by a group of paramilitary terrorists. One of the terrorists takes a liking to you. He informs you that his leader intends to kill you and the rest of the hostages the following morning. He is willing to help you and the children escape, but as an act of good faith he wants you to kill one of your fellow hostages whom he does not like. If you refuse his offer all the hostages including the children and yourself will die. If you accept his offer then the others will die in the morning but you and the eight children will escape.",
			"id": 32,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Ecologists",
			"entered": [],
			"correct": "",
			"oldId": 14,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to kill one of your fellow hostages in order to escape from the terrorists and save the lives of the eight children?"
		},
		{
			"title": "Bomb 2",
			"text": "You are negotiating with a powerful and determined terrorist who is about to  set off a bomb in a crowded area. Your one advantage is that you have his teenage son in your custody. There is only one thing that you can do to stop him from detonating his bomb, which will kill thousands of people if detonated. To stop him, you must contact him over the satellite hook-up that he has established and, in front of the camera, break one of his son\u2019s arms and then threaten to break the other one if he does not give himself up.",
			"id": 33,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Bomb 2",
			"entered": [],
			"correct": "",
			"oldId": 15,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to break the terrorist\u2019s son\u2019s arm in order to prevent the terrorist from killing thousands of people with his bomb?"
		},
		{
			"title": "Submarine",
			"text": "You are the captain of a military submarine travelling underneath a large iceberg.  An onboard explosion has caused you to lose most of your oxygen supply and has injured one of your crew who is quickly losing blood. The injured crew member is going to die from his wounds no matter what happens. The remaining oxygen is not sufficient for the entire crew to make it to the surface. The only way to save the other crew members is to shoot dead the injured crew member so that there will be just enough oxygen for the rest of the crew to survive.",
			"id": 34,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Submarine",
			"entered": [],
			"correct": "",
			"oldId": 16,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to kill the fatally injured crew member in order to save the lives of the remaining crew members?"
		},
		{
			"title": "Lawrence of Arabia",
			"text": "You are the leader of a small army that consists of warriors from  two tribes, the hill tribe and the river tribe. You belong to neither tribe. During the night a hill tribesman got into an argument with a river tribesman and murdered him. The river tribe will attack the hill tribe unless the murderer is put to death, but the hill tribe refuses to kill one of its own warriors. The only way for you to avoid a war between the two tribes that will costs hundreds of lives is to publicly execute the murderer by cutting off is head with your sword.",
			"id": 35,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Lawrence of Arabia",
			"entered": [],
			"correct": "",
			"oldId": 17,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to cut off this man\u2019s head in order to prevent the two tribes from fighting a war that will cost hundreds of lives?"
		},
		{
			"title": "Sophie\u2019s Choice",
			"text": "It is wartime and you and your two children, ages eight and five,  are living in a territory that has been occupied by the enemy. At the enemy\u2019s headquarters is a doctor who performs painful experiments on humans that inevitably lead to death. He intends to perform experiments on one of your children, but he will allow you to choose which of your children will be experimented upon. You have twenty-four hours to bring one of your children to his laboratory. If you refuse to bring one of your children to his laboratory he will find them both and experiment on both of them.",
			"id": 36,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Sophie\u2019s Choice",
			"entered": [],
			"correct": "",
			"oldId": 18,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to bring one of your children to the laboratory in order to avoid having them both die?"
		},
		{
			"title": "Sacrifice",
			"text": "You, your husband, and your four children are crossing a mountain range on  your return journey to your homeland. You have inadvertently set up camp on a local clan\u2019s sacred burial ground. The leader of the clan says that according to the local laws, you and your family must be put to death. However, he will let yourself, your husband, and your three other children live if you yourself will kill your oldest son.",
			"id": 37,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Sacrifice",
			"entered": [],
			"correct": "",
			"oldId": 19,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to kill your oldest son in order to save your husband and your other three children?"
		},
		{
			"title": "Vitamins",
			"text": "You are the leader of a mountaineering expedition that is stranded in the  wilderness. Your expedition includes a family of six that has a genetically caused vitamin deficiency. A few people\u2019s kidneys contain large amounts of this vitamin. There is one such person in your party. The only way to save the lives of the six members of this family is to remove one of this man\u2019s kidneys so that the necessary vitamins may be extracted from it. The man will not die if you do this, but his health will be compromised. The man is opposed to this plan, but you have the power to do as you see fit.",
			"id": 38,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Vitamins",
			"entered": [],
			"correct": "",
			"oldId": 20,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to forcibly remove this man\u2019s kidney in order to save the lives of the six vitamin-deficient people?"
		},
		{
			"title": "Vaccine Test",
			"text": "A viral epidemic has spread across the globe killing millions of people. You  have developed two substances in your home laboratory. You know that one of them is a vaccine, but you don\u2019t know which one. You also know that the other one is deadly. Once you figure out which substance is the vaccine you can use it to save millions of lives. You have with you two people who areunder your care, and the only way to identify the vaccine is to inject each of these people with one of the two substances. One person will live, the other will die, and you will be able to start saving lives with your vaccine.",
			"id": 39,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Vaccine Test",
			"entered": [],
			"correct": "",
			"oldId": 21,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to kill one of these people with a deadly injection in order to identify a vaccine that will save millions of lives?"
		},
		{
			"title": "Euthanasia",
			"text": "You are the leader of a small group of soldiers. You are on  your way back from a completed mission deep in enemy territory when one of your men has stepped in trap that has been set by the enemy and is badly injured. The trap is connected to a radio device that by now has alerted the enemy to your presence. They will soon be on their way. If the enemy finds your injured man they will torture him and kill him. He begs you not to leave him behind, but if you try to take him with you your entire group will be captured. The only way to prevent this injured soldier from being tortured is to shoot him yourself.",
			"id": 40,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Euthanasia",
			"entered": [],
			"correct": "",
			"oldId": 22,
			"cond": "personal_moral",
			"dilemma": " Is it appropriate for you to shoot this soldier in order to prevent him from being tortured by the enemy?"
		},
		{
			"title": "Standard Turnips",
			"text": "You are a farm worker driving a turnip-harvesting machine. You are approaching two  diverging paths. By choosing the path on the left you will harvest ten bushels of turnips. By choosing the path on the right you will harvest twenty bushels of turnips. If you do nothing your turnip-harvesting machine will turn to the left.",
			"id": 41,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Standard Turnips",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "non_moral",
			"dilemma": " Would you turn your turnip-picking machine to the right in order to harvest twenty bushels of turnips instead of ten?"
		},
		{
			"title": "Plant Transport",
			"text": "You are bringing home a number of plants from a store that is  about two miles from your home. The trunk of your car, which you\u2019ve lined with plastic to catch the mud from the plants, will hold most of the plants you\u2019ve purchased. You could bring all the plants home in one trip, but this would require putting some of the plants in the back seat as well as in the trunk. By putting some of the plants in the back seat you will ruin your fine leather upholstery which would cost thousands of dollars to replace.",
			"id": 42,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Plant Transport",
			"entered": [],
			"correct": "",
			"oldId": 2,
			"cond": "non_moral",
			"dilemma": " Would you make two trips home in order to avoid ruining the upholstery of your car?"
		},
		{
			"title": "Scheduling",
			"text": "You are in charge of scheduling appointments in a dentist\u2019s office. Two people,  Mr. Morris and Mrs. Santiago have called to make appointments for next Monday. The only available times for next Monday are at 10:00 AM and at 3:00 PM. Mr. Morris\u2019s schedule is rather flexible. He can have his appointment either at 10:00 AM or at 3:00 PM. Mrs. Santiago\u2019s schedule is less flexible. She can only have her appointment at 10:00 AM. Would you schedule Mr. Morris for 3:00 PM so that both he and Mrs.",
			"id": 43,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Scheduling",
			"entered": [],
			"correct": "",
			"oldId": 3,
			"cond": "non_moral",
			"dilemma": " Santiago can have their appointments next Monday?"
		},
		{
			"title": "Generic Brand",
			"text": "You have a headache. You go to the pharmacy with the intention of  buying a particular name-brand headache medicine. When you get there you discover that the pharmacy is out of the brand you were looking for. The pharmacist, whom you\u2019ve known for a long time and in whom you have a great deal of trust, tells you that he has in stock a generic product which is, in his words, \u201cexactly the same\u201d as the product you had originally intended to buy.",
			"id": 44,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Generic Brand",
			"entered": [],
			"correct": "",
			"oldId": 4,
			"cond": "non_moral",
			"dilemma": " Would you purchase the generic brand instead of searching further for the name-brand product you were looking for?"
		},
		{
			"title": "Brownies",
			"text": "You have decided to make a batch of brownies for yourself. You open  your recipe book and find a recipe for brownies. The recipe calls for a cup of chopped walnuts. You don\u2019t like walnuts, but you do like macadamia nuts. As it happens, you have both kinds of nuts available to you.",
			"id": 45,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Brownies",
			"entered": [],
			"correct": "",
			"oldId": 5,
			"cond": "non_moral",
			"dilemma": " Would you substitute macadamia nuts for walnuts in order to avoid eating walnuts?"
		},
		{
			"title": "Train or Bus",
			"text": "You need to travel from New York to Boston in order to attend  a meeting that starts at 2:00 PM. You can take either the train or the bus. The train will get you there just in time for your meeting no matter what. The bus is scheduled to arrive an hour before your meeting, but the bus is occasionally several hours late because of traffic. It would be nice to have an extra hour before the meeting, but you cannot afford to be late.",
			"id": 46,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Train or Bus",
			"entered": [],
			"correct": "",
			"oldId": 6,
			"cond": "non_moral",
			"dilemma": " Would you take the train instead of the bus in order to ensure your not being late for your meeting?"
		},
		{
			"title": "Computer",
			"text": "You are looking to buy a new computer. At the moment the computer  that you want costs $1000. A friend who knows the computer industry has told you that this computer\u2019s price will drop to $500 next month. If you wait until next month to buy your new computer you will have to use your old computer for a few weeks longer than you would like to. Nevertheless you will be able to do everything you need to do using your old computer during that time.",
			"id": 47,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Computer",
			"entered": [],
			"correct": "",
			"oldId": 7,
			"cond": "non_moral",
			"dilemma": " Would you use your old computer for a few more weeks in order to save $500 on the purchase of a new computer?"
		},
		{
			"title": "Survey",
			"text": " A representative of a reputable, national survey organization calls you at your  home while you are having a quiet dinner by yourself. The representative explains that if you are willing to spend a half an hour answering questions about a variety of topics her organization will send you a check for $200.",
			"id": 48,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Survey",
			"entered": [],
			"correct": "",
			"oldId": 8,
			"cond": "non_moral",
			"dilemma": " Would you interrupt your dinner in order to earn $200?"
		},
		{
			"title": "Coupons",
			"text": "You have gone to a bookstore to buy $50 worth of books. You  have with you two coupons. One of these coupons gives you 30% off of your purchase price. This coupon expires tomorrow. The other coupon gives you 25% off your purchase price, and this coupon does not expire for another year.",
			"id": 49,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Coupons",
			"entered": [],
			"correct": "",
			"oldId": 9,
			"cond": "non_moral",
			"dilemma": " Would you use the 30%-off coupon for your present purchase so that you will have another coupon to use during the coming year?"
		},
		{
			"title": "Scenic Route",
			"text": "An old friend has invited you to spend the weekend with him at  his summer home some ways up the coast from where you are. You intend to travel there by car, and there are two routes that you can take: the highway and the coastal road. The highway will get you to your friend\u2019s house in about three hours, but the scenery along the highway is very boring. The coastal route will get you to your friend\u2019s house in about three hours and fifteen minutes, and the scenery along the coastal road is breathtakingly beautiful.",
			"id": 50,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Scenic Route",
			"entered": [],
			"correct": "",
			"oldId": 10,
			"cond": "non_moral",
			"dilemma": " Would you take the coastal route in order to observe the beautiful scenery as you drive?"
		},
		{
			"title": "Reversed Turnips",
			"text": "You are a farm worker driving a turnip-harvesting machine. You are approaching two  diverging paths. By choosing the path on the left you will harvest thirty bushels of turnips. By choosing the path on the right you will harvest fifteen bushels of turnips. If you do nothing your turnip-picking machine will turn to the left.",
			"id": 51,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Reversed Turnips",
			"entered": [],
			"correct": "",
			"oldId": 11,
			"cond": "non_moral",
			"dilemma": " Would you turn your turnip-harvesting machine to the right in order to harvest fifteen bushels of turnips instead of thirty?"
		},
		{
			"title": "Investment Offer",
			"text": "You are at home one day when the mail arrives. You receive a  letter from a reputable corporation that provides financial services. They have invited you to invest in a mutual fund, beginning with an initial investment of one thousand dollars. As it happens, you are familiar with this particular mutual fund. It has not performed very well over the past few years, and, based on what you know, there is no reason to think that it will perform any better in the future.",
			"id": 52,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Investment Offer",
			"entered": [],
			"correct": "",
			"oldId": 12,
			"cond": "non_moral",
			"dilemma": " Would you invest a thousand dollars in this mutual fund in order to make money?"
		},
		{
			"title": "Broken VCR",
			"text": "You have brought your broken VCR to the local repair shop. The woman  working at the shop tells you that it will cost you about $100 to have it fixed. You noticed in the paper that morning that the electronics shop next door is having a sale on VCR\u2019s and that a certain new VCR which is slightly better than your old one is on sale for $100.",
			"id": 53,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Broken VCR",
			"entered": [],
			"correct": "",
			"oldId": 13,
			"cond": "non_moral",
			"dilemma": " Would you have your old VCR fixed in order to avoid spending money on a new one?"
		},
		{
			"title": "Choosing Classes",
			"text": "You are beginning your senior year of college. In order to fulfill your  graduation requirements you need to take a history class and a science class by the end of the year. During the fall term, the history class you want to take is scheduled at the same time as the science class you want to take. During the spring term the same history class is offered, but the science class is not.",
			"id": 54,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Choosing Classes",
			"entered": [],
			"correct": "",
			"oldId": 14,
			"cond": "non_moral",
			"dilemma": " Would you take the history class during the fall term in order to help you fulfill your graduation requirements?"
		},
		{
			"title": "Raffle",
			"text": "You\u2019ve decided to buy a raffle ticket to support a local charity. They  are separately raffling off two different cars: Car A and Car B. You have decided to buy one raffle ticket. You are a serious and knowledgeable car enthusiast, and you think that these two cars are equally good. Because there have been a lot of adds for Car B on TV recently, many more people have chosen to buy tickets for the Car B raffle. Since more people have bought tickets for the Car B raffle, your chances of winning are better in the Car A raffle than in the Car B raffle.",
			"id": 55,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Raffle",
			"entered": [],
			"correct": "",
			"oldId": 15,
			"cond": "non_moral",
			"dilemma": " Would you buy a ticket for the Car B raffle in order to win a car?"
		},
		{
			"title": "Jogging",
			"text": "You intend to accomplish two things this afternoon: going for a jog and  doing some paperwork. In general you prefer to get your work done before you exercise. The weather is nice at the moment, but the weather forecast says that in a couple of hours it will start to rain. You very much dislike jogging in the rain, but you don\u2019t care what the weather is like while you do paperwork.",
			"id": 56,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Jogging",
			"entered": [],
			"correct": "",
			"oldId": 16,
			"cond": "non_moral",
			"dilemma": " Would you do your paperwork now with the intention of jogging in a couple of hours in order to get your work done before you exercise?"
		},
		{
			"title": "Food Prep",
			"text": "You are preparing pasta with fresh vegetables, and you are deciding on the  order in which you will do the various things you need to do. You are in a big hurry. At the moment you have a slight urge to cut vegetables. If you first start the water boiling and then cut the vegetables you will be done in twenty minutes. If you cut the vegetables and then start the water boiling you will be done in forty minutes.",
			"id": 57,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Food Prep",
			"entered": [],
			"correct": "",
			"oldId": 17,
			"cond": "non_moral",
			"dilemma": " Would you cut the vegetables first and then start the water boiling in order to satisfy your slight urge to cut vegetables?"
		},
		{
			"title": "Shower",
			"text": "You are planning to attend a luncheon this afternoon, and before you go  you will need to take a shower. You have some yard work that you would like to do before then, and doing this yard will cause you to perspire a fair amount. If you shower before you do your yard work you will have to take another shower before the luncheon. At the present time you could enjoy taking a shower. At the same time, you have a very strong commitment to lowering your water bill and to showering no more than once a day.",
			"id": 58,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Shower",
			"entered": [],
			"correct": "",
			"oldId": 18,
			"cond": "non_moral",
			"dilemma": " Would you shower before doing your yard work in order to enjoy a shower now?"
		},
		{
			"title": "Errands",
			"text": "You need to go to the bakery in the morning and the furniture  store in the afternoon. You also need to go to the camera shop at some point. You prefer to do most of your errands in the morning, but you very much dislike doing unnecessary driving. The camera shop is near the furniture store and far from the bakery. As a result you will have to do less driving if you go to the camera shop in the afternoon when you go to the furniture store.",
			"id": 59,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "Errands",
			"entered": [],
			"correct": "",
			"oldId": 19,
			"cond": "non_moral",
			"dilemma": " Is it appropriate for you to go to the camera shop in the morning in order to do most of your errands in the morning?"
		},
		{
			"title": "New Job",
			"text": "You have been offered employment by two different firms, and you are  trying to decide which offer to accept. Firm A has offered you an annual salary of $100, 000 and fourteen days of vacation per year. Firm B has offered you an annual salary of $50, 000 and sixteen days of vacation per year. The two firms and the two positions are otherwise very similar.",
			"id": 60,
			"type": "long",
			"additional": {
				"dilemma": "Why?",
				"entered": [],
				"type": "long"
			},
			"oldTitle": "New Job",
			"entered": [],
			"correct": "",
			"oldId": 20,
			"cond": "non_moral",
			"dilemma": " Is it appropriate for you to take Firm B\u2019s offer in order to have two more days of vacation per year?"
		}
	]

}