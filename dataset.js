export const dataset = {
	name: "Cushman",
	instructions: [

		{
			title: "Consent",
			items: [
				{
					text: `You are about to participate in a psychological research study.
					This study aims to understand how people make moral decisions in a variety of situations.
					The proposed experiments have no immediate application or clinical value, but they will allow us to improve our understanding of moral reasoning in humans. We are asking you to participate in this study because you have been recruited on the Prolific platform.`,
					type: "regular",
					variables: [],
					title: "Information for the participant"
				},
				{
					text: `During your participation in this study, we will ask you to answer several simple questionnaires and tests, which do not require any particular competence.Your internet-based participation will require approximately 1 hour or  possibly less.`,
					type: "regular",
					variables: [],
					title: "Procedure"
				},
				{
					text: `Your participation in this study is voluntary. This means that you are consenting to participate in this project without external pressure.During your participation in this project, the researcher in charge and his staff will collect and record information about you. In order to preserve your identity and the confidentiality of the data, the identification of each file will be coded, thus preserving the anonymity of your answers. We will not collect any personal data from the RISC or Prolific platforms. The researcher in charge of this study will only use the data for research purposes in order to answer the scientific objectives of the project.The data may be published in scientific journals and shared within the scientific community, in which case no publication or scientific communication will contain identifying information.`,
					type: "regular",
					variables: [],
					title: "Voluntary Participation And Confidentiality"
				},
				{
					text: `This study contains fictional content (violence, sexual assault) that may be triggering for some people. By continuing, you are acknowledging that you agree to proceed. If you choose to continue, but end up being disturbed during the study, don't hesitate to exit the study at any time.`,
					type: 'alert',
					variables: [],
					title: "Trigger Warning"
				},
				{
					text: "I'm 18 years old or older",
					type: "checkbox",
				},
				{
					text: "My participation in this experiment is voluntary",
					type: "checkbox",
				},
				{
					text: "I understand that my data will be kept confidential and I can stop at any time without justification",
					type: "checkbox",
				}
			],
			type: "short",
		},

		{
			title: "Instructions",
			items: [
				{
					text: "You are going to be presented with different moral dilemmas. For each <b>scenario</b>, you'll have to answer a first question by emiting a <b>moral judgment</b>. Secondly, you'll have to explain the motivations (<b>Why?</b>) behind your first answer.",
					type: "regular",
					variables: [],
				},
				{
					text: 'Please note that (very) poor quality answers, such as those composed of random characters (resulting in a nonsensical sentence) or consisting in a single repeated character  (to meet input length requirements) will potentially lead to a rejection of your submission.',
					type: 'alert',
					variables: [],
					title: "Warning"
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
			"title": "sControl",
			"text": "A scarf costs 210€ more than a hat. The scarf and the hat cost 220€ in total. How much does the hat cost?",
			"id": 1,
			"type": "long",
			"oldTitle": "sControl",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "control",
			"dilemma": ""
		},
		{
			"title": "sControl",
			"text": "How long would it take 80 carpenters to repair 80 tables, if it takes 8 carpenters 8 hours to repair 8 tables?",
			"id": 1,
			"type": "long",
			"oldTitle": "sControl",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "control",
			"dilemma": ""
		},
		{
			"title": "sControl",
			"text": "An entire forest was consumed by a wildfire in 40 hours, with its size doubling every hour. How long did it take to burn 50% of the forest?",
			"id": 1,
			"type": "long",
			"oldTitle": "sControl",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "control",
			"dilemma": ""
		},
		{
			"title": "sControl",
			"text": "If Andrea can clean a house in 3 hours, and Alex can clean a house in 6 hours, how many hours would it take for them to clean a house together?",
			"id": 1,
			"type": "long",
			"oldTitle": "sControl",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "control",
			"dilemma": ""
		},
		{
			"title": "sControl",
			"text": "A runner participates in a marathon and arrives both at the 100th highest and the 100th lowest position. How many participants are in the marathon?",
			"id": 1,
			"type": "long",
			"oldTitle": "sControl",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "control",
			"dilemma": ""
		},
		{
			"title": "sControl",
			"text": "A woman buys a second-hand car for $1000, then sells it for $2000. Later she buys it back for $3000 and finally sells it for $4000. How much has she made?",
			"id": 1,
			"type": "long",
			"oldTitle": "sControl",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "control",
			"dilemma": ""
		},
		{
			"title": "sControl",
			"text": "Frank decided to invest $10,000 into bitcoin in January 2018. Four months after he invested, the bitcoin he had purchased went down 50%. In the subsequent eight months, the bitcoin he had purchased went up 80%. What is the value of Frank’s bitcoin after one year?",
			"id": 1,
			"type": "long",
			"oldTitle": "sControl",
			"entered": [],
			"correct": "",
			"oldId": 1,
			"cond": "control",
			"dilemma": ""
		},
	]
}	