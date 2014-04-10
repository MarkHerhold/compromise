var lexicon = (function() {


	var main = {
		//conjunctions
		"yet": "CC",
		"therefore": "CC",
		"or": "CC",
		"while": "CC",
		"nor": "CC",
		"whether": "CC",
		"though": "CC",
		"because": "CC",
		"but": "CC",
		"for": "CC",
		"and": "CC",
		"if": "CC",
		"however": "CC",
		"before": "CC",
		"so": "CC",
		"although": "CC",

		//numbers
		"eighty": "CD",
		"seventeen": "CD",
		"two": "CD",
		"eighteen": "CD",
		"one": "CD",
		"nineteen": "CD",
		"four": "CD",
		"twenty": "CD",
		"six": "CD",
		"thirty": "CD",
		"eight": "CD",
		"fourty": "CD",
		"ten": "CD",
		"fifty": "CD",
		"twelve": "CD",
		"sixty": "CD",
		"fourteen": "CD",
		"seventy": "CD",
		"sixteen": "CD",
		"five": "CD",
		"nine": "CD",
		"ninety": "CD",
		"eleven": "CD",
		"seven": "CD",
		"three": "CD",
		"fifteen": "CD",
		"thirteen": "CD",

		//copula
		"is": "CP",
		"will be": "CP",
		"are": "CP",
		"was": "CP",

		//determiners
		"this": "DT",
		"any": "DT",
		"enough": "DT",
		"each": "DT",
		"whatever": "DT",
		"every": "DT",
		"which": "DT",
		"all": "DT",
		"these": "DT",
		"another": "DT",
		"such": "DT",
		"little": "DT",
		"plenty": "DT",
		"whichever": "DT",
		"neither": "DT",
		"an": "DT",
		"more": "DT",
		"a": "DT",
		"least": "DT",
		"own": "DT",
		"few": "DT",
		"both": "DT",
		"those": "DT",
		"the": "DT",
		"that": "DT",
		"various": "DT",
		"other": "DT",
		"many": "DT",
		"what": "DT",
		"most": "DT",
		"either": "DT",
		"less": "DT",
		"last": "DT",
		"much": "DT",
		"some": "DT",
		"else": "DT",
		"several": "DT",

		//prepositions
		"until": "IN",
		"onto": "IN",
		"near": "IN",
		"of": "IN",
		"into": "IN",
		"except": "IN",
		"across": "IN",
		"by": "IN",
		"between": "IN",
		"at": "IN",
		"down": "IN",
		"as": "IN",
		"from": "IN",
		"around": "IN",
		"with": "IN",
		"among": "IN",
		"upon": "IN",
		"amid": "IN",
		"to": "IN",
		"along": "IN",
		"since": "IN",
		"about": "IN",
		"behind": "IN",
		"above": "IN",
		"on": "IN",
		"within": "IN",
		"in": "IN",
		"under": "IN",
		"during": "IN",
		"per": "IN",
		"without": "IN",
		"beyond": "IN",
		"throughout": "IN",
		"against": "IN",
		"through": "IN",
		"than": "IN",
		"via": "IN",
		"up": "IN",

		//adjectives
		"hit": "JJ",
		"different": "JJ",
		"similar": "JJ",
		"final": "JJ",
		"late": "JJ",
		"full": "JJ",
		"normal": "JJ",
		"economic": "JJ",
		"hard": "JJ",
		"federal": "JJ",
		"western": "JJ",
		"special": "JJ",
		"natural": "JJ",
		"available": "JJ",
		"foreign": "JJ",
		"human": "JJ",
		"religious": "JJ",
		"level": "JJ",
		"simple": "JJ",
		"effective": "JJ",
		"medical": "JJ",
		"even": "JJ",
		"dark": "JJ",
		"second": "JJ",
		"complete": "JJ",
		"whole": "JJ",
		"military": "JJ",
		"easy": "JJ",
		"private": "JJ",
		"particular": "JJ",
		"basic": "JJ",
		"local": "JJ",
		"sure": "JJ",
		"black": "JJ",
		"high": "JJ",
		"third": "JJ",
		"just": "JJ",
		"ready": "JJ",
		"bad": "JJ",
		"clear": "JJ",
		"modern": "JJ",
		"able": "JJ",
		"short": "JJ",
		"best": "JJ",
		"strong": "JJ",
		"next": "JJ",
		"entire": "JJ",
		"good": "JJ",
		"likely": "JJ",
		"pass": "JJ",
		"free": "JJ",
		"national": "JJ",
		"common": "JJ",
		"white": "JJ",
		"small": "JJ",
		"later": "JJ",
		"beautiful": "JJ",
		"technical": "JJ",
		"patient": "JJ",
		"firm": "JJ",
		"low": "JJ",
		"big": "JJ",
		"single": "JJ",
		"kind": "JJ",
		"hot": "JJ",
		"serious": "JJ",
		"political": "JJ",
		"important": "JJ",
		"difficult": "JJ",
		"possible": "JJ",
		"former": "JJ",
		"latter": "JJ",
		"moral": "JJ",
		"according": "JJ",
		"real": "JJ",
		"young": "JJ",
		"larger": "JJ",
		"same": "JJ",
		"cold": "JJ",
		"wide": "JJ",
		"southern": "JJ",
		"toward": "JJ",
		"international": "JJ",
		"specific": "JJ",
		"dead": "JJ",
		"great": "JJ",
		"physical": "JJ",
		"old": "JJ",
		"true": "JJ",
		"still": "JJ",
		"industrial": "JJ",
		"recent": "JJ",
		"democratic": "JJ",
		"fiscal": "JJ",
		"large": "JJ",
		"social": "JJ",
		"personal": "JJ",
		"central": "JJ",
		"new": "JJ",
		"necessary": "JJ",
		"can": "MD",
		"may": "MD",
		"could": "MD",
		"might": "MD",
		"will": "MD",
		"ought to": "MD",
		"would": "MD",
		"must": "MD",
		"shall": "MD",
		"should": "MD",

		//nouns
		"situation": "NN",
		"product": "NN",
		"animal": "NN",
		"hope": "NN",
		"problem": "NN",
		"information": "NN",
		"procedure": "NN",
		"dog": "NN",
		"word": "NN",
		"hall": "NN",
		"area": "NN",
		"mark": "NN",
		"importance": "NN",
		"year": "NN",
		"fact": "NN",
		"purpose": "NN",
		"program": "NN",
		"relation": "NN",
		"earth": "NN",
		"century": "NN",
		"country": "NN",
		"ship": "NN",
		"captain": "NN",
		"date": "NN",
		"group": "NN",
		"ground": "NN",
		"case": "NN",
		"model": "NN",
		"night": "NN",
		"stage": "NN",
		"government": "NN",
		"state": "NN",
		"head": "NN",
		"poet": "NN",
		"tree": "NN",
		"department": "NN",
		"church": "NN",
		"role": "NN",
		"authority": "NN",
		"hill": "NN",
		"employee": "NN",
		"father": "NN",
		"class": "NN",
		"choice": "NN",
		"child": "NN",
		"point": "NN",
		"farm": "NN",
		"distance": "NN",
		"piece": "NN",
		"addition": "NN",
		"bed": "NN",
		"opinion": "NN",
		"end": "NN",
		"marriage": "NN",
		"weapon": "NN",
		"religion": "NN",
		"service": "NN",
		"room": "NN",
		"side": "NN",
		"image": "NN",
		"series": "NN",
		"parent": "NN",
		"week": "NN",
		"function": "NN",
		"water": "NN",
		"relationship": "NN",
		"manager": "NN",
		"picture": "NN",
		"business": "NN",
		"rule": "NN",
		"finger": "NN",
		"glass": "NN",
		"house": "NN",
		"music": "NN",
		"saint": "NN",
		"growth": "NN",
		"page": "NN",
		"road": "NN",
		"value": "NN",
		"university": "NN",
		"machine": "NN",
		"system": "NN",
		"work": "NN",
		"affair": "NN",
		"member": "NN",
		"bank": "NN",
		"form": "NN",
		"Mister": "NN",
		"matter": "NN",
		"part": "NN",
		"top": "NN",
		"eye": "NN",
		"John": "NN",
		"front": "NN",
		"power": "NN",
		"time": "NN",
		"French": "NN",
		"letter": "NN",
		"development": "NN",
		"structure": "NN",
		"force": "NN",
		"paper": "NN",
		"English": "NN",
		"region": "NN",
		"type": "NN",
		"go": "NN",
		"nation": "NN",
		"cell": "NN",
		"cost": "NN",
		"mile": "NN",
		"bar": "NN",
		"arm": "NN",
		"door": "NN",
		"report": "NN",
		"home": "NN",
		"success": "NN",
		"park": "NN",
		"land": "NN",
		"election": "NN",
		"evidence": "NN",
		"month": "NN",
		"floor": "NN",
		"audience": "NN",
		"issue": "NN",
		"office": "NN",
		"man": "NN",
		"world": "NN",
		"age": "NN",
		"field": "NN",
		"plan": "NN",
		"example": "NN",
		"peace": "NN",
		"action": "NN",
		"difficulty": "NN",
		"poem": "NN",
		"hair": "NN",
		"rate": "NN",
		"strength": "NN",
		"back": "NN",
		"length": "NN",
		"life": "NN",
		"step": "NN",
		"position": "NN",
		"record": "NN",
		"God": "NN",
		"window": "NN",
		"character": "NN",
		"horse": "NN",
		"afternoon": "NN",
		"commission": "NN",
		"pattern": "NN",
		"friend": "NN",
		"plane": "NN",
		"bill": "NN",
		"method": "NN",
		"wall": "NN",
		"account": "NN",
		"conference": "NN",
		"money": "NN",
		"freedom": "NN",
		"book": "NN",
		"officer": "NN",
		"effort": "NN",
		"son": "NN",
		"edge": "NN",
		"statement": "NN",
		"mouth": "NN",
		"morning": "NN",
		"people": "NN",
		"unit": "NN",
		"enemy": "NN",
		"heart": "NN",
		"effect": "NN",
		"influence": "NN",
		"europe": "NN",
		"army": "NN",
		"hundred": "NN",
		"space": "NN",
		"way": "NN",
		"fire": "NN",
		"student": "NN",
		"court": "NN",
		"art": "NN",
		"hotel": "NN",
		"wonder": "NN",
		"story": "NN",
		"material": "NN",
		"limit": "NN",
		"community": "NN",
		"item": "NN",
		"project": "NN",
		"total": "NN",
		"trip": "NN",
		"river": "NN",
		"mother": "NN",
		"discussion": "NN",
		"stock": "NN",
		"secretary": "NN",
		"pool": "NN",
		"operation": "NN",
		"experiment": "NN",
		"future": "NN",
		"Congress": "NN",
		"range": "NN",
		"population": "NN",
		"organization": "NN",
		"performance": "NN",
		"major": "NN",
		"process": "NN",
		"analysis": "NN",
		"ball": "NN",
		"police": "NN",
		"writer": "NN",
		"brother": "NN",
		"section": "NN",
		"half": "NN",
		"difference": "NN",
		"plant": "NN",
		"city": "NN",
		"respect": "NN",
		"west": "NN",
		"county": "NN",
		"course": "NN",
		"smile": "NN",
		"woman": "NN",
		"Brown": "NN",
		"company": "NN",
		"subject": "NN",
		"order": "NN",
		"cent": "NN",
		"list": "NN",
		"rest": "NN",
		"president": "NN",
		"datum": "NN",
		"face": "NN",
		"leg": "NN",
		"fine": "NN",
		"source": "NN",
		"school": "NN",
		"food": "NN",
		"artist": "NN",
		"agreement": "NN",
		"law": "NN",
		"nature": "NN",
		"faith": "NN",
		"committee": "NN",
		"boat": "NN",
		"England": "NN",
		"foot": "NN",
		"worker": "NN",
		"meaning": "NN",
		"event": "NN",
		"dollar": "NN",
		"district": "NN",
		"hand": "NN",
		"volume": "NN",
		"thing": "NN",
		"opportunity": "NN",
		"result": "NN",
		"station": "NN",
		"period": "NN",
		"theory": "NN",
		"reason": "NN",
		"equipment": "NN",
		"job": "NN",
		"institution": "NN",
		"college": "NN",
		"base": "NN",
		"instance": "NN",
		"chance": "NN",
		"moment": "NN",
		"meeting": "NN",
		"oil": "NN",
		"trial": "NN",
		"interest": "NN",
		"season": "NN",
		"idea": "NN",
		"lady": "NN",
		"object": "NN",
		"fear": "NN",
		"person": "NN",
		"research": "NN",
		"manner": "NN",
		"note": "NN",
		"language": "NN",
		"defense": "NN",
		"condition": "NN",
		"hospital": "NN",
		"center": "NN",
		"practice": "NN",
		"director": "NN",
		"truth": "NN",
		"voice": "NN",
		"size": "NN",
		"air": "NN",
		"feeling": "NN",
		"tax": "NN",
		"south": "NN",
		"answer": "NN",
		"couple": "NN",
		"attitude": "NN",
		"cause": "NN",
		"direction": "NN",
		"gun": "NN",
		"table": "NN",
		"association": "NN",
		"death": "NN",
		"evening": "NN",
		"kid": "NN",
		"measure": "NN",
		"number": "NN",
		"movement": "NN",
		"tooth": "NN",
		"term": "NN",
		"gas": "NN",
		"factor": "NN",
		"facility": "NN",
		"act": "NN",
		"family": "NN",
		"amount": "NN",
		"element": "NN",
		"place": "NN",
		"body": "NN",
		"sale": "NN",
		"division": "NN",
		"Christian": "NN",
		"street": "NN",
		"club": "NN",
		"hour": "NN",
		"science": "NN",
		"administration": "NN",
		"responsibility": "NN",
		"history": "NN",
		"leader": "NN",
		"mind": "NN",
		"million": "NN",
		"literature": "NN",
		"corner": "NN",
		"policy": "NN",
		"reaction": "NN",
		"inch": "NN",
		"scene": "NN",
		"day": "NN",
		"temperature": "NN",
		"wife": "NN",
		"production": "NN",
		"square": "NN",
		"decision": "NN",
		"basis": "NN",
		"drop": "NN",
		"minute": "NN",
		"fund": "NN",
		"trouble": "NN",
		"market": "NN",
		"boy": "NN",
		"sign": "NN",
		"figure": "NN",
		"loss": "NN",
		"view": "NN",
		"attention": "NN",
		"agency": "NN",
		"price": "NN",
		"girl": "NN",
		"quality": "NN",
		"citizen": "NN",
		"game": "NN",
		"sense": "NN",
		"sort": "NN",
		"sound": "NN",
		"radio": "NN",
		"light": "NN",
		"color": "NN",
		"board": "NN",
		"possibility": "NN",
		"knowledge": "NN",
		"principle": "NN",
		"car": "NN",
		"teacher": "NN",
		"name": "NN",
		"treatment": "NN",
		"summer": "NN",
		"building": "NN",
		"town": "NN",
		"pressure": "NN",
		"party": "NN",
		"line": "NN",
		"detail": "NN",
		"technique": "NN",
		"red": "NN",
		"husband": "NN",
		"question": "NN",
		"governor": "NN",
		"society": "NN",
		"experience": "NN",
		"today": "NN",

		//posessive pronouns
		"mine": "PP",
		"something": "PP",
		"none": "PP",
		"anything": "PP",
		"anyone": "PP",
		"lot": "PP",
		"I": "PP",
		"theirs": "PP",
		"himself": "PP",
		"ours": "PP",
		"his": "PP",
		"yours": "PP",
		"nothing": "PP",
		"herself": "PP",
		"hers": "PP",
		"themselves": "PP",
		"everything": "PP",
		"myself": "PP",
		"itself": "PP",
		"who": "PP",

		//personal pronouns
		"it": "PRP",
		"they": "PRP",
		"i": "PRP",
		"them": "PRP",
		"you": "PRP",
		"she": "PRP",
		"me": "PRP",
		"he": "PRP",
		"him": "PRP",
		"her": "PRP",
		"us": "PRP",
		"we": "PRP",
		"thou": "PRP",

		//adverb
		"now": "RB",
		"again": "RB",
		"already": "RB",
		"soon": "RB",
		"directly": "RB",
		"suddenly": "RB",
		"especially": "RB",
		"instead": "RB",
		"yes": "RB",
		"alone": "RB",
		"ago": "RB",
		"indeed": "RB",
		"probably": "RB",
		"usually": "RB",
		"ever": "RB",
		"quite": "RB",
		"perhaps": "RB",
		"certain": "RB",
		"slowly": "RB",
		"apparently": "RB",
		"where": "RB",
		"then": "RB",
		"here": "RB",
		"thus": "RB",
		"immediately": "RB",
		"nearly": "RB",
		"very": "RB",
		"actually": "RB",
		"often": "RB",
		"not": "RB",
		"once": "RB",
		"together": "RB",
		"never": "RB",
		"finally": "RB",
		"why": "RB",
		"merely": "RB",
		"war": "RB",
		"simply": "RB",
		"when": "RB",
		"generally": "RB",
		"away": "RB",
		"always": "RB",
		"certainly": "RB",
		"recently": "RB",
		"sometimes": "RB",
		"also": "RB",
		"maybe": "RB",

		//interjections
		"uhh": "UH",
		"uh-oh": "UH",
		"ugh": "UH",
		"sheesh": "UH",
		"eww": "UH",
		"pff": "UH",
		"voila": "UH",
		"oy": "UH",
		"eep": "UH",
		"hurrah": "UH",
		"yuck": "UH",
		"ow": "UH",
		"duh": "UH",
		"oh": "UH",
		"hmm": "UH",
		"yeah": "UH",
		"whoa": "UH",
		"ooh": "UH",
		"whee": "UH",
		"ah": "UH",
		"bah": "UH",
		"gah": "UH",
		"yaa": "UH",
		"phew": "UH",
		"gee": "UH",
		"ahem": "UH",
		"eek": "UH",
		"meh": "UH",
		"yahoo": "UH",
		"oops": "UH",
		"d'oh": "UH",
		"psst": "UH",
		"argh": "UH",
		"grr": "UH",
		"nah": "UH",
		"shhh": "UH",
		"whew": "UH",
		"mmm": "UH",
		"yay": "UH",
		"uh-huh": "UH",
		"boo": "UH",
		"wow": "UH",

		//verbs
		"enter": "VB",
		"stop": "VB",
		"turn": "VB",
		"give": "VB",
		"win": "VB",
		"control": "VB",
		"relate": "VB",
		"remember": "VB",
		"join": "VB",
		"listen": "VB",
		"train": "VB",
		"break": "VB",
		"spring": "VB",
		"enjoy": "VB",
		"fail": "VB",
		"understand": "VB",
		"recognize": "VB",
		"draw": "VB",
		"obtain": "VB",
		"learn": "VB",
		"fill": "VB",
		"announce": "VB",
		"prevent": "VB",
		"fall": "VB",
		"achieve": "VB",
		"find": "VB",
		"realize": "VB",
		"involve": "VB",
		"remove": "VB",
		"lose": "VB",
		"lie": "VB",
		"build": "VB",
		"thought": "VB",
		"aid": "VB",
		"lay": "VB",
		"visit": "VB",
		"test": "VB",
		"strike": "VB",
		"prepare": "VB",
		"wait": "VB",
		"ask": "VB",
		"carry": "VB",
		"suppose": "VB",
		"determine": "VB",
		"raise": "VB",
		"send": "VB",
		"love": "VB",
		"use": "VB",
		"pull": "VB",
		"improve": "VB",
		"contain": "VB",
		"think": "VB",
		"offer": "VB",
		"speak": "VB",
		"rise": "VB",
		"talk": "VB",
		"pick": "VB",
		"care": "VB",
		"express": "VB",
		"remain": "VB",
		"operate": "VB",
		"deal": "VB",
		"close": "VB",
		"add": "VB",
		"mention": "VB",
		"read": "VB",
		"support": "VB",
		"grow": "VB",
		"decide": "VB",
		"walk": "VB",
		"vary": "VB",
		"demand": "VB",
		"describe": "VB",
		"sell": "VB",
		"agree": "VB",
		"happen": "VB",
		"allow": "VB",
		"suffer": "VB",
		"have": "VB",
		"study": "VB",
		"be": "VB",
		"press": "VB",
		"watch": "VB",
		"seem": "VB",
		"occur": "VB",
		"contribute": "VB",
		"claim": "VB",
		"become": "VB",
		"make": "VB",
		"compare": "VB",
		"bear": "VB",
		"develop": "VB",
		"apply": "VB",
		"direct": "VB",
		"discuss": "VB",
		"consider": "VB",
		"know": "VB",
		"sit": "VB",
		"see": "VB",
		"lead": "VB",
		"indicate": "VB",
		"require": "VB",
		"change": "VB",
		"fix": "VB",
		"come": "VB",
		"reach": "VB",
		"prove": "VB",
		"expect": "VB",
		"exist": "VB",
		"play": "VB",
		"permit": "VB",
		"meet": "VB",
		"kill": "VB",
		"pay": "VB",
		"charge": "VB",
		"increase": "VB",
		"fight": "VB",
		"tell": "VB",
		"catch": "VB",
		"believe": "VB",
		"create": "VB",
		"continue": "VB",
		"live": "VB",
		"help": "VB",
		"represent": "VB",
		"serve": "VB",
		"ride": "VB",
		"appear": "VB",
		"cover": "VB",
		"set": "VB",
		"maintain": "VB",
		"mean": "VB",
		"including": "VB",
		"start": "VB",
		"stay": "VB",
		"move": "VB",
		"extend": "VB",
		"leave": "VB",
		"wear": "VB",
		"run": "VB",
		"design": "VB",
		"supply": "VB",
		"suggest": "VB",
		"want": "VB",
		"say": "VB",
		"hear": "VB",
		"drive": "VB",
		"approach": "VB",
		"cut": "VB",
		"call": "VB",
		"include": "VB",
		"try": "VB",
		"receive": "VB",
		"save": "VB",
		"discover": "VB",
		"marry": "VB",
		"throw": "VB",
		"show": "VB",
		"choose": "VB",
		"need": "VB",
		"establish": "VB",
		"keep": "VB",
		"assume": "VB",
		"attend": "VB",
		"buy": "VB",
		"unite": "VB",
		"leach": "VB",
		"feel": "VB",
		"explain": "VB",
		"publish": "VB",
		"accept": "VB",
		"settle": "VB",
		"reduce": "VB",
		"bring": "VB",
		"do": "VB",
		"let": "VB",
		"shoot": "VB",
		"look": "VB",
		"take": "VB",
		"interact": "VB",
		"concern": "VB",
		"put": "VB",
		"labor": "VB",
		"hold": "VB",
		"return": "VB",
		"select": "VB",
		"die": "VB",
		"provide": "VB",
		"seek": "VB",
		"stand": "VB",
		"spend": "VB",
		"begin": "VB",
		"get": "VB",
		"march": "VB",
		"wish": "VB",
		"hang": "VB",
		"write": "VB",
		"finish": "VB",
		"follow": "VB",
		"forget": "VB",
		"feed": "VB",
		"eat": "VB",
		"disagree": "VB",
		"produce": "VB"
	}



	if (typeof module !== "undefined" && module.exports) {
		module.exports = main;
	}

	return main
})()