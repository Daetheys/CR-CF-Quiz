export const dataset = {
	name: "Cushman",
	instructions: [
		{
			title: "Instructions",
			text: [
				"You are going to be presented with different moral dilemmas. For each scenario, you'll have to answer a first question by emiting a moral judgment (more precisely by answering <b>Yes</b>/<b>No</b>). Secondly, you'll have to explain <b>why</b> you've choosen <b>Yes</b> or <b>No</b>", 
				`You've completed <variable1> item(s) so far. <a onclick="addURLParameters('reset', 1)"> Reset data?</a>`],
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
			"dilemma": " Is accelerating quickly the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Control",
			"text": "Adam is driving his motorboat when he notices five swimmers drowning in the  distance. If Adam does not drive toward them at top speed he will not arrive in time, and all five will die. In order to drive at top speed, Adam must accelerate quickly. If Adam accelerates quickly, he will save the five drowning swimmers. If Adam does not accelerate quickly, the five swimmers will drown.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 1
		},
		{
			"dilemma": " Is flipping the switch the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Control",
			"text": "Ben sees that an empty runaway boxcar is headed down a track. There  is nobody on the track. There is one person working on a side track. If Ben flips the switch, the boxcar will turn onto the side track and hit the one person. If Ben does not flip the switch, the boxcar will continue on the track, and nobody will be hit.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 2
		},
		{
			"dilemma": " Is pushing the one visitor the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Aqua",
			"text": "Connor is at a new aquarium exhibit when he sees a visitor slip  on a wet floor, fall down, and break his neck. The visitor is still alive and can be safely evacuated by medics so long as he is not moved. He has fallen, however, on top of the oxygen supply line servicing five other visitors in an underwater observation pod. Without oxygen, the five visitors will soon die. If Connor does nothing the one visitor will be safely evacuated, but the five visitors in the pod will die. If Connor pushes the one visitor off the supply line this one visitor will die, but the five visitors in the pod will have their oxygen restored and will live.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 3
		},
		{
			"dilemma": " Is pulling the supply line the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Aqua",
			"text": "Mike is at a new aquarium exhibit when he sees a visitor slip  on a wet floor, fall down, and break his neck. The visitor is still alive and can be safely evacuated by medics so long as he is not moved. He has fallen, however, on top of the oxygen supply line servicing five other visitors in an underwater observation pod. Without oxygen, the five visitors will soon die. If Mike does nothing the one visitor will be safely evacuated, but the five visitors in the pod will die. If Mike pulls the supply line out from under the one visitor this one visitor will die, but the five visitors in the pod will have their oxygen restored and will live.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 4
		},
		{
			"dilemma": " Is flipping the switch the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Boxcar",
			"text": "Dennis sees that an empty runaway boxcar is about to hit five people  working on the track ahead. They are too far away to be warned. Next to Dennis is a switch that can be flipped to turn the boxcar away from the five people onto a side track. One person, unaware of the train, is working on a side track. If Dennis flips the switch, the boxcar will turn onto the side track and hit the one person and not the five people. If Dennis does not flip the switch, the boxcar will continue on the track and hit the five people and not the one person.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 5
		},
		{
			"dilemma": " Is flipping the switch the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Boxcar",
			"text": "Evan sees that an empty runaway boxcar is about to hit five people  working on the track ahead. They are too far away to be warned. The only way to stop the boxcar is for it to hit something heavy. Next to Evan is a switch that can be flipped to turn the boxcar away from the five people onto a side track that loops and then rejoins the main track. One person, unaware of the boxcar, is working on this looped side track. This person, if hit, will cause the boxcar to stop before it reaches the five people on the main track. If Evan flips the switch, the boxcar will turn onto the side track, hit the one person and therefore stop before it reaches to the five people. If Evan does not flip the switch, the boxcar will continue on the main track and hit the five people and not the one person.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 6
		},
		{
			"dilemma": " Is pushing the person the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Boxcar",
			"text": "Frank sees that an empty runaway boxcar is about to hit five people  working on the track ahead. They are too far away to be warned. The only way to stop the boxcar is for it to hit something heavy. One person, unaware of the boxcar, is working on a side track. This person, if hit, will cause the boxcar to stop. If Frank pushes the one person onto the main track, the boxcar will hit the one person, and therefore stop before it reaches the five people. If Frank does not push the one person, the boxcar will continue on the track and hit the five people and not the one person.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 7
		},
		{
			"dilemma": " Is not warning the one person the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Boxcar",
			"text": "Jeff sees that an empty runaway boxcar is about to hit five people  working on the track ahead. They are too far away to be warned. The only way to stop the boxcar is for it to hit something heavy. One person, unaware of the boxcar, is about to walk in front of the tracks. This person, if hit, will cause the boxcar to stop. If Jeff shouts out a warning to the one person, the one person will stop and not be hit by the boxcar, and the boxcar will hit the five people. If Jeff does not shout out a warning, the one person will walk in front of the boxcar, the boxcar will hit the one and therefore stop before it hits the five people.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 8
		},
		{
			"dilemma": " Is poisoning the one the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Pond",
			"text": "James is hiking through a foreign land when he comes across a remote  village. James learns that one of the villagers fell into a cursed pond but, contrary to local superstition, did not die. If the one villager does not die by sunrise, five other innocent and unwilling villagers will be sacrificed to the gods to thank them for sparing the one. James, who has some medical training, realizes that he can prevent the sacrifice of the five villagers if he secretly poisons the one villager. If James poisons the one, the one will be dead by sunrise, and the five will not be sacrificed. If James does not poison the one, the one will not be dead by sunrise, and the five will be sacrificed as planned.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 9
		},
		{
			"dilemma": " Is not providing the antidote to the one the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Pond",
			"text": "Robert is hiking through a foreign land when he comes across a remote  village. Robert learns that one of the villagers fell into a cursed pond but, contrary to local superstition, did not die. If the one villager does not die by sunrise, five other innocent and unwilling villagers will be sacrificed to the gods to thank them for sparing the one. Robert, who has some medical training, notices that the one has consumed a poisonous substance. Robert can secretly administer the antidote to the one villager. If Robert withholds the antidote from the one, the one will die by sunrise, and the five will not be sacrificed. If Robert does provide the antidote to the one, the one will not be dead by sunrise, and the five will be sacrificed as planned.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 10
		},
		{
			"dilemma": " Is accelerating quickly the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Speed",
			"text": "Matt is driving a motorboat when he notices five swimmers drowning in the  distance. If Matt does not drive toward them at top speed he will not arrive in time, and all five will die. In order to drive at top speed, Matt must accelerate quickly. Accelerating quickly will also cause a passenger to tumble off the back of the boat. This passenger cannot swim and will drown. If Matt accelerates quickly, the one passenger will drown, but Matt will save the five drowning swimmers. If Matt does not accelerate quickly, the one passenger will stay safely on the boat, but the five swimmers will drown.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 11
		},
		{
			"dilemma": " Is accelerating quickly the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Speed",
			"text": "Dave is driving a motorboat when he notices five swimmers drowning in the  distance. If Dave does not drive toward them at top speed he will not arrive in time, and all five will die. In order to drive at top speed, Dave must lighten the load on his boat. The only way to lighten the load is to accelerate quickly and cause a passenger to tumble off the back of the boat. This passenger cannot swim and will drown. If Dave accelerates quickly, the one passenger will drown, but Dave will save the five drowning swimmers. If Dave does not accelerate quickly, the one passenger will not drown, but the five swimmers will drown.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 12
		},
		{
			"dilemma": " Is pushing the one passenger the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Speed",
			"text": "John is driving a motorboat when he notices five swimmers drowning in the  distance. If John does not drive toward them at top speed, he will not arrive in time, and all five will die. In order to drive at top speed, John must lighten the load on his boat. The only way to lighten the load is to push his passenger with his hands and cause the passenger to tumble off the back of the boat. This passenger cannot swim and will drown. If John pushes the passenger, the one passenger will drown, but Dave will save the five drowning swimmers. If Dave does not push the passenger, the one passenger will not drown, but the five swimmers will drown.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 13
		},
		{
			"dilemma": " Is not stopping the machine the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Chem",
			"text": "Tim works at a hospital. He is in charge of a machine that  can both increase and decrease the amount of a certain chemical in a patient's bloodstream. Too much or too little of the chemical results in death. Tim notices that the machine has pumped a near toxic amount of the chemical into a patient's body. Tim must immediately stop the machine to save the patient's life. However, he sees that five other patients with toxic amounts of the chemical are hooked up to the machine. The machine is removing the chemical from these five patients. If Tim stops the machine to save the one patient, the five other patients will die. If Tim doesn\u2019t stop the machine, the one patient will die, but the five other patients will survive.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 14
		},
		{
			"dilemma": " Is not stopping the machine the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Chem",
			"text": "Bob works at a hospital. He is in charge of a machine that  can both increase and decrease the amount of a certain chemical in a patient's bloodstream. Too much or too little of the chemical results in death. Bob notices that the machine has pumped a near toxic amount of the chemical into a patient's body. Bob must immediately stop the machine to save the patient's life. However, he sees that five other patients with toxic amounts of the chemical are hooked up to the machine. The machine is removing the chemical from these five patients and will continue to do so only if it can maintain equilibrium by continuing to pump the chemical into the one patient. If Bob stops the machine to save the one patient, the five other patients will die. If Bob doesn\u2019t stop the machine, the one patient will die, but the five other patients will survive.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 15
		},
		{
			"dilemma": " Is breaking open the window the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Burn",
			"text": "Ken is a fireman trying to help five children out of a burning  house. There is only one window from which the children can be safely evacuated, and it is jammed shut. Ken must immediately smash open this large, heavy window or else all five children will die. Outside the window, on the ground below, is a man safely awaiting evacuation who Ken cannot help hitting with heavy falling glass if he breaks the window. If Ken breaks open the window, he will hit the man with the glass, the man will die, but the five children will be safely evacuated. If Ken does not break open the window, the man will be safely evacuated, but the five children will die.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 16
		},
		{
			"dilemma": " Is swinging the burning debris the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Burn",
			"text": "Andy is a fireman trying to help five children out of a burning  house. There is only one window from which the children can be safely evacuated, and it is jammed shut. Andy must immediately use an object to smash open this large, heavy window or else all five children will die. The only sufficiently large object is a man on his way towards safely escaping the burning house. Andy can break open the window by swinging a piece of burning debris towards the man, which will cause the man to jump out of the way, lose his balance and crash into the window. The man will break open the window, fall out and die, but the five children will be safely evacuated. If Andy does not swing the burning debris, causing the man to break open the window, the man will safely escape, but the five children will die.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 17
		},
		{
			"dilemma": " Is breaking open the window the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Burn",
			"text": "Rick is a fireman trying to help five children out of a burning  house. There is only one window from which the children can be safely evacuated, and it is jammed shut. Rick must immediately smash open this large, heavy window or else all five children will die. Outside the window, on the sill, is a man safely awaiting evacuation who Rick cannot help hitting with his fist if he breaks the window. Rick knows that if he breaks open the window he will hit the man with his fist, the man will fall off and die, but the five children will be safely evacuated. If Rick does not break open the window the man will be safely evacuated, but the children will die.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 18
		},
		{
			"dilemma": " Is pushing the man the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Burn",
			"text": "Peter is a fireman trying to help five children out of a burning  house. There is only one window from which the children can be safely evacuated, and it is jammed shut. Peter must immediately use an object to smash open this large, heavy window or else all five children will die. The only sufficiently large object is a man on his way towards safely escaping the burning house. If Peter pushes the man into the window and breaks it open, the man will fall out and die, but the five children will be safely evacuated. If Peter does not push the man into the window the man will safely escape, but the five children will die.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 19
		},
		{
			"dilemma": " Is firing the missile the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Ship",
			"text": "Mark receives a communication that the captain of a cargo ship has contracted  a highly infectious disease. The captain himself is only a carrier of the disease and is immune to the symptoms, but anybody who comes into contact with him will die. No passengers are on the ship. The ship is headed for a remote island where the captain will hand-deliver the cargo to the five islanders. The captain does not know that he is carrying the disease and has no radio on board to receive a warning. Mark takes off in a helicopter to intercept the ship, but from a distance he sees the ship about to dock. The only way Mark can stop the captain from transmitting the disease is to use a missile to blow up the ship. If Mark fires the missile, the captain will die and the five islanders will live. If Mark does not fire the missile, the captain will live and the five islanders will die.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 20
		},
		{
			"dilemma": " Is not firing the missile the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Ship",
			"text": "George receives a communication that the captain of a cargo ship has contracted  a highly infectious disease. The captain himself is only a carrier of the disease and is immune to the symptoms, but anybody who comes into contact with him will die. No passengers are on the ship. The ship is headed for a remote island where the captain will hand-deliver the cargo to the five islanders. The captain does not know that he is carrying the disease and has no radio to receive a warning. George takes off in a helicopter to intercept the ship, but from a distance he sees the ship about to dock. The ship is on fire, however, and the captain will be burned before the ship docks. George could fire a missile into the water next to the ship, causing a splash that would put out the fire and save the captain. If George fires the missile the captain will live but the disease will be transmitted, killing the five islanders. If George does not fire the missile the captain will die and the five islanders will live.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 21
		},
		{
			"dilemma": " Is not pulling the lever the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Switch",
			"text": "Todd is operating the switch at a railroad station when he sees an  empty, out of control boxcar coming down the tracks. It is moving so fast that anyone it hits will die immediately. The boxcar is headed towards a repairman whose leg is caught in the switch. If Todd does nothing, the boxcar will hit the repairman and then come to a stop on the empty main track where nobody else will be threatened. Todd can pull a lever that will switch the tracks and release the repairman\u2019s leg, allowing him to jump safely out of the way. However, switching the tracks will send the boxcar down a side track where it will hit five other repairmen.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 22
		},
		{
			"dilemma": " Is not pulling the lever the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Switch",
			"text": "Alan is operating the switch at a railroad station when he sees an  empty, out of control boxcar coming down the tracks. It is moving so fast that anyone it hits will die immediately. The boxcar is headed towards a repairman whose leg is caught in the switch. Further down the main track are five more repairmen. If Alan does nothing, the boxcar will hit the repairman and then come to a stop and none of the five workers will be threatened. Alan can pull a lever and release the repairman\u2019s leg, allowing him to jump safely out of the way. However, releasing the repairman will allow the boxcar to continue down the main track where it will hit the five other reparimen.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 23
		},
		{
			"dilemma": " Is pulling the lever the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Switch",
			"text": "Luke is operating the switch at a railroad station when he sees an  empty, out of control boxcar coming down the tracks. It is moving so fast that anyone it hits will die immediately. The boxcar is headed towards five repairmen on the track. If Luke does nothing, the boxcar will hit the five repairmen on the track. Luke can pull a lever redirecting the boxcar to an empty sidetrack. However, pulling the lever will cause the switch to crush a another repairman standing by, who will die immediately.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 24
		},
		{
			"dilemma": " Is taking the narrow channel the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Boat",
			"text": "Justin is driving his motorboat in the bay when he notices some swimmers  in trouble. There are five swimmers drowning at the end of a narrow channel in front of Justin. In between Justin and the drowning swimmers is another swimmer who is safe and not in trouble. If Justin takes the narrow channel to the five drowning swimmers and saves them, the wake from Justin\u2019s boat will wash over the safe swimmer, drowning him. If Justin does nothing, the five swimmers will drown and the one swimmer will remain safe.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 25
		},
		{
			"dilemma": " Is continuing to speed towards the five swimmers the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Boat",
			"text": "Don is driving his motorboat in the bay when he notices some swimmers  in trouble. There are five swimmers drowning at the end of a channel in front of Don. To the side of the channel there is another swimmer drowning. If Don stops to save the one swimmer on the side of the channel, he will not be able to get to the five swimmers in time to save them. If Don continues to speed towards the five swimmers past the one swimmer, the one swimmer will drown, but he will reach the five swimmers in time to save them.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 26
		},
		{
			"dilemma": " Is continuing to drive the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Car",
			"text": "Ed is driving five sick people to the hospital. They are in critical  condition and will die if Ed makes any stops along the way. In his hurry to pack them in the car Ed slams the door on a few feet of thick cord that is now dangling beside the car. Ed takes the fastest route to the hospital, which is a narrow, unpaved mountain pass. On his way, Ed sees a rock climber hanging onto the side of the mountain beside the road. The rock climber is safe and in control, but if Ed drives by the thick cord dragging along the side of his car will dislodge the rock climber, causing him to fall to his death. If Ed slows to a stop and waits, the rock climber will be able to reach a stable landing where the cord will not dislodge him, but it will be too late to save the five people. If Ed continues to drive, the one person will fall to his death and the five will be saved.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 27
		},
		{
			"dilemma": " Is continuing to drive the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Car",
			"text": "Jack is driving five sick people to the hospital. They are in critical  condition and will die if Jack makes any stops along the way. In his hurry to pack them in the car Jack slams the door on a few feet of thick cord that is now dangling beside the car. Jack takes the fastest route to the hospital, which is a narrow, unpaved mountain pass. On his way, Jack sees a rock climber hanging onto the side of the mountain beside the road. The rock climber is losing control and is about to fall to his death, but he could be saved if he had a cord to pull himself up. If Jack slows to a stop the rock climber will be able to use the cord dangling from the side of the car to pull himself up to safety, but it will be too late to save the five people. If Jack continues to drive, the one person will fall to his death and the five will be saved.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 28
		},
		{
			"dilemma": " Is using the dynamite the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Rubble",
			"text": "Rushing into a burning house, Ethan hears the voices of five people trapped  in a room. In order to reach them, Ethan must remove a pile of rubble blocking the room\u2019s entrance. If he does not remove it immediately, all five will die. Ethan could blast the rubble out of the way with a stick of dynamite and free the five trapped people. Lodged in the rubble is one person who is slowly escaping, and will survive without Ethan\u2019s help. Using the dynamite would unavoidably blast and kill the one person before he escapes. If Ethan uses the dynamite, the one person will die, but the five will be saved. If Ethan helps the one out, it will be too late to save the five.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 29
		},
		{
			"dilemma": " Is using the sledgehammer the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Rubble",
			"text": "Rushing into a burning house, Fred hears the voices of five people trapped  in a room. In order to reach them, Fred must remove a pile of rubble blocking the room\u2019s entrance. If he does not remove it immediately, all five will die. Fred could smash the rubble out of the way using a sledgehammer and free the five trapped people. Lodged in the rubble is one person who is slowly escaping, and will survive without Fred\u2019s help. Using the sledgehammer will unavoidably hit and kill the one person before he escapes. If Fred uses the sledgehammer, the one person will die, but the five will be saved. If Fred does not use the sledgehammer, the one person will escape on his own and the five people will die.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 30
		},
		{
			"dilemma": " Is not moving toward the one swimmer the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Shark",
			"text": "Joe is drifting along in his motorboat at the mouth of a narrow  channel when he notices a shark approaching. Further down the channel he sees five swimmers. If Joe maintains his current position, his boat will obstruct the entrance to the channel, thereby preventing the shark from attacking the five swimmers. However, Joe sees another swimmer drowning in the distance. Joe can save the one swimmer by immediately moving toward him in the motorboat, thereby leaving the channel open to the shark. If Joe moves towards the one swimmer in his motorboat, the one swimmer will live but the five swimmers will be eaten by the shark. If Joe does not move him, the one swimmer will drown but the five swimmers will remain safe.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 31
		},
		{
			"dilemma": " Is not moving toward the one swimmer the right thing to do?",
			"additional": {
				"type": "long",
				"entered": [],
				"dilemma": "Why?"
			},
			"title": "Shark",
			"text": "Casey is drifting along in his motorboat near the mouth of a narrow  channel when he notices a shark approaching. Further down the channel he sees five swimmers. However, one other swimmer is positioned at the mouth of the channel such that the shark will attack the one first, giving the five the necessary time to escape. Casey can save the one swimmer by immediately moving toward him in the motorboat, but saving the one swimmer would also leave the channel open to the shark. If Casey moves towards the one swimmer, the one swimmer will live but the five swimmers will be eaten by the shark. If Casey does not move toward him, the one swimmer will drown but the five swimmers will remain safe.",
			"answers": [
				"Yes",
				"No"
			],
			"correct": "",
			"entered": [],
			"type": "single",
			"id": 32
		}
	]
};