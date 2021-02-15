window.game={"compiled":"{\"title\":\"New Year's Eve, 2019\",\"author\":\"Autumn Chen\",\"content\":\"\",\"scenes\":{\"prevScene\":{\"id\":\"prevScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"prevTopScene\":{\"id\":\"prevTopScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"jumpScene\":{\"id\":\"jumpScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"backSpecialScene\":{\"id\":\"backSpecialScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"aub_p3\":{\"id\":\"aub_p3\",\"type\":\"scene\",\"title\":\"Aubrey\",\"subtitle\":\"She's in her room, with William.\",\"tags\":[\"top\",\"phase3\"],\"viewIf\":{\"$code\":\"return ((Q['phase'] || 0)===3);\"},\"newPage\":true,\"content\":{\"content\":\"Aubrey and William are in her childhood room.\",\"type\":\"paragraph\"}},\"aub_see_p1.stare\":{\"id\":\"aub_see_p1.stare\",\"goTo\":[{\"id\":\"aub_set_prev\"}],\"setJump\":\"aub_see_p1.aub_notice\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Mom had kept you up on the gossip; Aubrey's boyfriend William is apparently another Harvard student, like her.\"},{\"type\":\"paragraph\",\"content\":\"Aubrey and her boyfriend are dressed in matching colors, her wearing a green dress and white cardigan, him in a sweater and khakis. They're leaning on each other; any more visible displays of affection would probably seem gauche here.\"}]},\"aub_set_prev.aub_friends\":{\"id\":\"aub_set_prev.aub_friends\",\"onArrival\":[{\"$code\":\"Q['prev_aub'] = \\\"friends\\\";\"}],\"options\":[{\"id\":\"@aub_set_prev.but_last\",\"title\":\"But it didn't last.\"}],\"content\":{\"content\":\"Yes, you managed to remain friends until graduation. You had a lot in common: you were both in Science Olympiad, you had a bunch of AP classes together, and you went to the same church group. She had other friends that she was closer to, but you felt like your relationship could be called \\\"friends\\\" and not just \\\"acquaintances.\\\" For a while, at least.\",\"type\":\"paragraph\"}},\"em_miri_p3\":{\"id\":\"em_miri_p3\",\"type\":\"scene\",\"title\":\"Miri and Emily\",\"subtitle\":\"They're hanging out together in an alcove...\",\"tags\":[\"top\",\"phase3\"],\"viewIf\":{\"$code\":\"return ((Q['phase'] || 0)===3);\"},\"newPage\":true,\"content\":{\"content\":\"Miri and Emily seem to be getting along quite well. They're having an animated conversation.\",\"type\":\"paragraph\"}},\"em_set_prev.emily_date\":{\"id\":\"em_set_prev.emily_date\",\"onArrival\":[{\"$code\":\"Q['prev_em'] = \\\"date\\\";\"}],\"options\":[{\"id\":\"@em_set_prev.em_too_far\",\"title\":\"Too far away. Too long distance. It couldn't work.\"},{\"id\":\"@em_set_prev.em_anxiety\",\"title\":\"I wanted to confess but my anxiety paralyzed me.\"},{\"id\":\"@em_set_prev.em_no_feelings\",\"title\":\"I stopped having feelings for her.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"You, well, you \",{\"type\":\"emphasis-1\",\"content\":\"like\"},\" liked her. As usual, you never understood why; just some ineffable, irrational feeling deep within you. Well, she was very smart and talented and beautiful. And a kind person once you got past the initial awkwardness. And apparently, she liked you back enough, but wasn't so sure about dating back then, with the whole \\\"trans and not out as a woman\\\" thing.\"]},{\"type\":\"paragraph\",\"content\":\"You made a contract with her, or something like that, saying you could start dating after leaving home. However, you never acted upon said contract. Why?\"}]},\"food_p1.food_choices\":{\"id\":\"food_p1.food_choices\",\"options\":[{\"id\":\"@food_p1.snacks\",\"title\":\"Check out the table of snacks.\"},{\"id\":\"@food_p1.drinks\",\"title\":\"Look at the drinks.\"},{\"id\":\"@root\",\"title\":\"On second though, you don't want to eat or drink anything.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"kevin_p1.greet\":{\"id\":\"kevin_p1.greet\",\"onArrival\":[{\"$code\":\"Q['greet_kevin'] = 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['greet_kevin'] || 0)===0);\"},\"options\":[{\"id\":\"#tv\"},{\"id\":\"@kevin_p1.greet2\",\"title\":\"Talk to him again.\"},{\"id\":\"@kevin_p1.stand\",\"title\":\"Stand around awkwardly.\"},{\"id\":\"@root\",\"title\":\"Go back upstairs.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, hi, Kevin...\\\"\"},{\"type\":\"paragraph\",\"content\":\"He doesn't seem to hear you.\"}]},\"init\":{\"id\":\"init\",\"type\":\"scene\",\"title\":\"init stats\",\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Karen\\\";\\nQ['time'] = 0;\\nQ['courage'] = 8;\\nQ['energy'] = 10;\\nQ['despair'] = 5;\\nQ['minus_despair'] = 0;\\nQ['hunger'] = 10;\\nQ['thirst'] = 10;\\nQ['bathroom_need'] = 2;\\nQ['p1_time'] = 18;\\nQ['p2_time'] = 36;\\nQ['initialized'] = 1;\\nQ['anxiety'] = 5;\"}],\"newPage\":false,\"goTo\":[{\"id\":\"root\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"miri_set_prev.miri_dating\":{\"id\":\"miri_set_prev.miri_dating\",\"onArrival\":[{\"$code\":\"Q['prev_miri'] = \\\"date\\\";\"}],\"options\":[{\"id\":\"@miri_set_prev.miri_broke_up\",\"title\":\"We couldn't keep up a long-distance relationship anymore, so we broke up.\"},{\"id\":\"@miri_set_prev.miri_never\",\"title\":\"We never broke up, just started talking to each other less and...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"It was junior year of high school when she admitted that she had feelings for you. And you \",{\"type\":\"emphasis-1\",\"content\":\"liked\"},\" her too. She was cute, and nice, and all that you ever wanted.\"]},{\"type\":\"paragraph\",\"content\":\"How did it all fall apart?\"}]},\"mom_p1.everyone\":{\"id\":\"mom_p1.everyone\",\"options\":[{\"id\":\"@mom_p1.grad\",\"title\":\"\\\"我要上研究生 I'm going to grad school.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"\\\"所有人都问这个。 \",{\"type\":\"emphasis-1\",\"content\":\"Everyone is asking this.\"},\"\\\"\"]},{\"type\":\"paragraph\",\"content\":\"Laughter. Why are they always like this?\"},{\"type\":\"paragraph\",\"content\":[\"\\\"这是你一辈子最重要的时间。\",{\"type\":\"emphasis-1\",\"content\":\"This is the most important time in your life\"},\",\\\" one of the adults says. The others agree.\"]},{\"type\":\"paragraph\",\"content\":[\"\\\"告诉阿姨你要去哪儿。 \",{\"type\":\"emphasis-1\",\"content\":\"Tell auntie what you're going to do\"},\",\\\" mom says.\"]}]},\"mom_memories\":{\"id\":\"mom_memories\",\"type\":\"scene\",\"title\":\"Remember mom.\",\"newPage\":false,\"onArrival\":[{\"$code\":\"Q['remember_mom'] = 1;\"}],\"content\":{\"content\":\"Mom\",\"type\":\"paragraph\"}},\"one.back_up\":{\"id\":\"one.back_up\",\"options\":[{\"id\":\"@one.name_wrong\",\"title\":\"Actually, your name isn't Karen...\"},{\"id\":\"@one.name_dislike\",\"title\":\"You're starting to dislike \\\"Karen\\\", but it's stuck...\"},{\"id\":\"@one.name_chinese\",\"title\":\"You prefer to use Qiuyi as a name, but...\"}],\"content\":{\"content\":\"You are Qiuyi Zhao, or \\\"Karen Zhao\\\" in English, or 赵秋怡 in Chinese. You are 22 years old, a senior in college, a one-time honors student, and back home for winter break.\",\"type\":\"paragraph\"}},\"phase_2.join\":{\"id\":\"phase_2.join\",\"options\":[{\"id\":\"@phase_2.close_eyes\",\"title\":\"Close your eyes and clasp your hands.\"},{\"id\":\"@phase_2.dont_close\",\"title\":\"Don't close your eyes.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You join the rest of the crowd in the living room/dining room/kitchen. There must be at least 30 people packed in here. Everyone is standing around, heads bowed, hands clasped, eyes closed.\"},{\"type\":\"paragraph\",\"content\":\"This is a Christian household, so there is a prayer said before dinner. It is led by the unofficial pastor of this congregation, Wang Laoshi (Teacher Wang). His bushy hair is whiter since you last saw him, but his demeanor is as serious as ever.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"今天，这新年，我们感谢主... \",{\"type\":\"emphasis-1\",\"content\":\"Today, this new year, we give thanks to God...\"},\"\\\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This action will have consequences, in this life and the next. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"em_see_p1.stare\":{\"id\":\"em_see_p1.stare\",\"goTo\":[{\"id\":\"em_set_prev\"}],\"setJump\":\"em_see_p1.em_talk\",\"content\":{\"content\":\"She somehow seems softer than when you last met. Her hair is tied up in a ponytail, her face framed by bangs with thick black-framed glasses. She's wearing a black and white striped sweater, like a zebra trying to blend in among horses. Or something like that.\",\"type\":\"paragraph\"}},\"p2_convos.stare_emily\":{\"id\":\"p2_convos.stare_emily\",\"viewIf\":{\"$code\":\"return ((Q['em_seen'] || 0)===0);\"},\"goTo\":[{\"id\":\"em_set_prev\"}],\"content\":{\"content\":\"She somehow seems softer than when you last met. Her hair is tied up in a ponytail, her face framed by bangs with thick black-framed glasses. She's wearing a black and white striped sweater, like a zebra trying to blend in among horses. Or something like that.\",\"type\":\"paragraph\"}},\"root.start\":{\"id\":\"root.start\",\"content\":{\"type\":\"heading\",\"content\":\"New Year's Eve, 2020\"}},\"root\":{\"id\":\"root\",\"type\":\"scene\",\"title\":\"Root Scene\",\"onArrival\":[{\"$code\":\"Q['display_hours'] = 6 + Math.floor((5*(Q['time'] || 0))/60);\\nQ['display_minutes'] =((5*(Q['time'] || 0)) % 60);\\nif(Q['display_minutes'] < 10) { Q['display_minutes'] = '0' + Q['display_minutes']};\\nQ['phase_2_start'] = ((Q['time'] || 0) >= (Q['p1_time'] || 12) && (Q['phase'] || 0) <= 1);\"}],\"goTo\":[{\"id\":\"phase_2\",\"predicate\":{\"$code\":\"return ((Q['phase_2_start'] || 0) != 0);\"}},{\"id\":\"init\",\"predicate\":{\"$code\":\"return ((Q['initialized'] || 0)===0);\"}}],\"newPage\":true,\"maxChoices\":10,\"setBg\":\"backgrounds/room_1_filtered.jpg\",\"options\":[{\"id\":\"#start\"},{\"id\":\"#phase1\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[\"Time: \",{\"type\":\"insert\",\"insert\":0},\":\",{\"type\":\"insert\",\"insert\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"It has been 10 minutes since you arrived at the party. \",\"predicate\":2},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Mom has disappeared among the coterie of Chinese adults. Kevin has disappeared downstairs with all the other kids. And you're standing by yourself, with only your backpack for company, surveying the people gathered here on this New Year's Eve that's not so different from all your previous New Year's Eves. \",\"predicate\":3},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"At least your friends are here. Or are they your friends still? It's been so long... \",\"predicate\":4},\" \",{\"type\":\"conditional\",\"content\":\"The party is just beginning. Guests are still trickling in. But you don't recognize any of the recent arrivals. Maybe you should remember? \",\"predicate\":5},\" \",{\"type\":\"conditional\",\"content\":\"The house is busy. Introductions are made. Food is displayed. Handshakes and hugs. \",\"predicate\":6},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Some of the adults notice you, and make greetings. 小姑娘长大了! The girl's grown big! 上大学怎么样? How was university? 你饿了吗? Are you hungry? You try to smile and make perfunctory responses, which seem to satisfy them. \",\"predicate\":7},\" \",{\"type\":\"conditional\",\"content\":\"Most of the guests have arrived; there must be at least thirty people in this house. People are gathering in clumps, talking. The lights are bright. The odor is fragrant. The sounds are cacaphonous. \",\"predicate\":8},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"You pace around the various regions of the house, head down, tossing your phone from one hand to another. You successfully avoid attention. \",\"predicate\":9},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"It is dinnertime. People are gathered in their own small groups, the adults at the main dinner tables, the kids in the basement. The food is all displayed in the kitchen. \",\"predicate\":10},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"It is dinnertime. People are gathered in their own small groups, the adults at the main dinner tables, the kids in the basement. The food is all displayed in the kitchen. \",\"predicate\":11},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your actions will always have consequences. >\"},\" \"],\"predicate\":12},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your actions have already had consequences, and they have been uniformly harmful. You have already committed grave, irrevocable errors. >\"},\"\"],\"predicate\":13}}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['display_hours'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['display_minutes'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['time'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['time'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['time'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['time'] || 0) > 0) && ((Q['time'] || 0) <= 2));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['time'] || 0) >= 3) && ((Q['time'] || 0) < 8));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['time'] || 0) >= 3) && ((Q['time'] || 0) < 8));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['time'] || 0) >= 8) && ((Q['time'] || 0) < (Q['p1_time'] || 0)));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['time'] || 0) >= 8) && ((Q['time'] || 0) < (Q['p1_time'] || 0)));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['time'] || 0) > (Q['p1_time'] || 0)) && ((Q['time'] || 0) < (Q['p2_time'] || 0))) && ((Q['phase'] || 0)===2));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['time'] || 0) > (Q['p1_time'] || 0)) && ((Q['time'] || 0) < (Q['p2_time'] || 0))) && ((Q['phase'] || 0)===2));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"stats.stats_main\":{\"id\":\"stats.stats_main\",\"newPage\":true,\"options\":[{\"id\":\"@stats.chars\",\"title\":\"People\"},{\"id\":\"@backSpecialScene\",\"title\":\"Back\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Status\"},{\"type\":\"paragraph\",\"content\":[\"Time: \",{\"type\":\"insert\",\"insert\":0},\":\",{\"type\":\"insert\",\"insert\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"You are quite hungry. \",\"predicate\":2},{\"type\":\"conditional\",\"content\":\"You are somewhat hungry. \",\"predicate\":3},{\"type\":\"conditional\",\"content\":\"You are a little hungry. \",\"predicate\":4},{\"type\":\"conditional\",\"content\":\"You are not really hungry. \",\"predicate\":5},{\"type\":\"conditional\",\"content\":\"You are feeling full. \",\"predicate\":6},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"You are quite thirsty. \",\"predicate\":7},{\"type\":\"conditional\",\"content\":\"You are somewhat thirsty. \",\"predicate\":8},{\"type\":\"conditional\",\"content\":\"You are a little thirsty. \",\"predicate\":9},{\"type\":\"conditional\",\"content\":\"You are not really thirsty. \",\"predicate\":10},{\"type\":\"conditional\",\"content\":\"You are not thirsty at all. \",\"predicate\":11},\"\"]},{\"type\":\"paragraph\",\"content\":[\"You are currently feeling \",{\"type\":\"insert\",\"insert\":12},\". You are also feeling \",{\"type\":\"insert\",\"insert\":13},\".\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['display_hours'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['display_minutes'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['hunger'] || 0) >= 9);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['hunger'] || 0) < 9) && ((Q['hunger'] || 0) >= 7));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['hunger'] || 0) < 7) && ((Q['hunger'] || 0) >= 5));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['hunger'] || 0) < 5) && ((Q['hunger'] || 0) >= 3));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['hunger'] || 0) < 3);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['thirst'] || 0) >= 9);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['thirst'] || 0) < 9) && ((Q['thirst'] || 0) >= 7));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['thirst'] || 0) < 7) && ((Q['thirst'] || 0) >= 5));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['thirst'] || 0) < 5) && ((Q['thirst'] || 0) >= 3));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['thirst'] || 0) < 3);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['mood'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['mood2'] || 0);\"}}]}},\"miri_see_p1.stare_at_miri\":{\"id\":\"miri_see_p1.stare_at_miri\",\"goTo\":[{\"id\":\"miri_set_prev\"}],\"setJump\":\"miri_see_p1.miri_notice\",\"content\":{\"content\":\"She has a very casual style, wearing a college sweatshirt and jeans with a scarf. Her curly black hair is cut shorter than you remembered. She is animated as she talks, gesticulating with her arms and hands.\",\"type\":\"paragraph\"}},\"phone_p1.options\":{\"id\":\"phone_p1.options\",\"options\":[{\"id\":\"@phone_p1.games\",\"title\":\"Play games.\"},{\"id\":\"@phone_p1.media\",\"title\":\"Check social media.\"},{\"id\":\"@phone_p1.papers\",\"title\":\"Read papers for your research.\"},{\"id\":\"@phone_p1.net\",\"title\":\"Browse random internet sites.\"},{\"id\":\"@phone_p1.text\",\"title\":\"Text your friends.\"},{\"id\":\"@root\",\"title\":\"Actually, do something else.\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your actions will have consequences. >\"},\"\"],\"predicate\":0}},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"aub_see_p1.aub_notice\":{\"id\":\"aub_see_p1.aub_notice\",\"options\":[{\"id\":\"@aub_see_p1.um\",\"title\":\"\\\"Um...\\\"\"},{\"id\":\"@aub_see_p1.alright\",\"title\":\"\\\"I've been alright.\\\"\"},{\"id\":\"@aub_see_p1.great\",\"title\":\"\\\"Great!\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[\"\\\"Oh, hey \",{\"type\":\"insert\",\"insert\":0},\"! I haven't seen you in such a long time!\\\" Aubrey waves at you. \\\"How've you been?\\\"\"]},{\"type\":\"paragraph\",\"content\":\"This is not an actual question, but a social lubricant, probably.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Maybe Aubrey will remember this. >\"},\"\"],\"predicate\":1}}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"aub_set_prev.but_last\":{\"id\":\"aub_set_prev.but_last\",\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Of course your friendship did not last after graduation. The vicissitudes of time, distance, and anxiety took their toll. At first, you sometimes messaged each other, but the frequency of these messages declined, until they ceased. You only ever see her at parties such as these, and she didn't even attend last year.\"},{\"type\":\"paragraph\",\"content\":\"It has been approximately two years since your previous conversation.\"}]},\"em_set_prev.em_too_far\":{\"id\":\"em_set_prev.em_too_far\",\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Every time you thought about confessing to her for real, doubts crept into your mind. She was too far away, physically. It couldn't work out, you told yourself. You would never see each other in person, so how could you even maintain a relationship?\"},{\"type\":\"paragraph\",\"content\":\"She never contacted you, either. So maybe she didn't like you, you convinced yourself.\"}]},\"food_p1.snacks\":{\"id\":\"food_p1.snacks\",\"unavailableSubtitle\":\"You're not really hungry.\",\"viewIf\":{\"$code\":\"return ((Q['snack_consumption_count'] || 0) <= 5);\"},\"chooseIf\":{\"$code\":\"return ((Q['hunger'] || 0) > 3);\"},\"goTo\":[{\"id\":\"food_p1.snack_choice\"}],\"content\":{\"content\":\"There are plenty of snacks for you to consume, all arranged neatly on a table.\",\"type\":\"paragraph\"}},\"kevin_p1.greet2\":{\"id\":\"kevin_p1.greet2\",\"onArrival\":[{\"$code\":\"Q['kevin_int'] = (Q['kevin_int'] || 0) + 1;\\nQ['greet_kevin'] = (Q['greet_kevin'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['greet_kevin'] || 0)===1);\"},\"options\":[{\"id\":\"@kevin_p1.um\",\"title\":\"\\\"Um...\\\"\"},{\"id\":\"@kevin_p1.so\",\"title\":\"\\\"So, how's the party going?\\\"\"},{\"id\":\"@kevin_p1.no_idea\",\"title\":\"You have no idea why you're here.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You tap him on the shoulder. \\\"Hey, Kevin?\\\"\"},{\"type\":\"paragraph\",\"content\":\"He looks up at you, seemingly annoyed. \\\"Yeah? What?\\\"\"}]},\"miri_set_prev.miri_broke_up\":{\"id\":\"miri_set_prev.miri_broke_up\",\"goTo\":[{\"id\":\"jumpScene\"}],\"onArrival\":[{\"$code\":\"Q['prev_miri'] = \\\"broken\\\";\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It was an extremely amicable breakup, as far as these things go (you don't have other experiences with breakups but compared to media representation of such events, it seemed rather amicable).\"},{\"type\":\"paragraph\",\"content\":[\"In fact, it hardly entitled a change in your de fact relationship at all. You had never experienced anything overtly \",{\"type\":\"emphasis-1\",\"content\":\"sexual\"},\" with her (probably?), even after two years of officially dating, and she rarely discussed such matters with you. The two of you were friends still, even as the frequency of your interactions decreased, and eventually stopped altogether.\"]},{\"type\":\"paragraph\",\"content\":[\"You \",{\"type\":\"emphasis-1\",\"content\":\"are\"},\" still friends, right?\"]}]},\"mom_p1.grad\":{\"id\":\"mom_p1.grad\",\"options\":[{\"id\":\"@mom_p1.converse\",\"title\":\"The conversation continues.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"我要上研究生。 I'm going to graduate school.\\\"\"},{\"type\":\"paragraph\",\"content\":[\"\\\"好棒啊！你姑娘真好啊！ \",{\"type\":\"emphasis-1\",\"content\":\"How great! Your daughter is great!\"},\"\\\", one of the adults says to mom and not you.\"]},{\"type\":\"paragraph\",\"content\":[\"\\\"你学什么？ \",{\"type\":\"emphasis-1\",\"content\":\"What are you studying?\"},\"\\\", another person asks you.\"]},{\"type\":\"paragraph\",\"content\":\"\\\"Um, molecular and cell biology,\\\" you respond in English.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"这项目不好找工作。 \",{\"type\":\"emphasis-1\",\"content\":\"This field is hard to find a job\"},\",\\\" someone says.\"]},{\"type\":\"paragraph\",\"content\":\"\\\"Oh.\\\"\"}]},\"one.name_wrong\":{\"id\":\"one.name_wrong\",\"options\":[{\"id\":\"@one.still_karen\",\"title\":\"It is Karen, actually.\"},{\"id\":\"@one.amy\",\"title\":\"Amy\"},{\"id\":\"@one.christina\",\"title\":\"Christina\"},{\"id\":\"@one.erica\",\"title\":\"Erica\"},{\"id\":\"@one.grace\",\"title\":\"Grace\"},{\"id\":\"@one.jenny\",\"title\":\"Jenny\"},{\"id\":\"@one.rachel\",\"title\":\"Rachel\"},{\"id\":\"@one.sarah\",\"title\":\"Sarah\"},{\"id\":\"@one.stephanie\",\"title\":\"Stephanie\"},{\"id\":\"@one.vivian\",\"title\":\"Vivian\"}],\"content\":{\"content\":\"You go back in time to 15 years ago, to that fateful day in elementary school English class in Changchun, Jilin Province, PRC. You take a peek at the box from which you drew your assigned English names. Which name was involuntarily assigned to you on that day?\",\"type\":\"paragraph\"}},\"phase_2.close_eyes\":{\"id\":\"phase_2.close_eyes\",\"options\":[{\"id\":\"@phase_2.get_food\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You close your eyes. Wang Laoshi says the prayer. You let the words wash over you. His prayer resembles the ones you grew up hearing; talk of the corruption and sickness of the world, wishes for peace for the brothers and sisters in the abode of the Lord, for the children and parents to be healthy and successful. You aren't sure if you understood everything; it feels like your Chinese is degenerating.\"},{\"type\":\"paragraph\",\"content\":\"The prayer is over with an \\\"Amen\\\" from the gathered. Now it's time for dinner to start. The children get their food first. And then the young adults; that's you.\"}]},\"em_see_p1.em_talk\":{\"id\":\"em_see_p1.em_talk\",\"options\":[{\"id\":\"@em_see_p1.sit_next\",\"title\":\"Sit next to her.\"},{\"id\":\"@em_see_p1.stand\",\"title\":\"Stand there awkwardly.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"She glances up at you, and slowly waves.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Are you going to sit down or just stand there?\\\" Her voice is barely more than a whisper.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This action will have consequences, whether you believe it or not. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.stare_miri\":{\"id\":\"p2_convos.stare_miri\",\"viewIf\":{\"$code\":\"return ((Q['miri_seen'] || 0)===0);\"},\"goTo\":[{\"id\":\"miri_set_prev\"}],\"content\":{\"content\":\"She has a very casual style, wearing a college sweatshirt and jeans with a scarf. Her curly black hair is cut shorter than you remembered. She is animated as she talks, gesticulating with her arms and hands.\",\"type\":\"paragraph\"}},\"stats.chars\":{\"id\":\"stats.chars\",\"newPage\":true,\"options\":[{\"id\":\"@stats.stats_main\",\"title\":\"Main\"},{\"id\":\"@backSpecialScene\",\"title\":\"Back\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"People\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":[{\"type\":\"insert\",\"insert\":0},\" (Qiuyi 秋怡) Zhao\"]},\": That's you, unfortunately.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Aubrey Gao\"},\": Her family lives in this house. Back in school she was your family friend, and something of an academic rival (she always won your imagined contests). At one point you might have had a crush on her. \",{\"type\":\"conditional\",\"content\":\"You confessed to her, and went on at least one date. She is straight, so these were \\\"friend dates\\\". Or something like that. \",\"predicate\":1},\" \",{\"type\":\"conditional\",\"content\":\"You worked together in Science Olympiad, which was perhaps the primary route to your friendship. \",\"predicate\":2},\" \",{\"type\":\"conditional\",\"content\":\"At some point you ignored her, acted as if she didn't exist. \",\"predicate\":3},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Relationship status: \",{\"type\":\"insert\",\"insert\":4},\"/5 \",{\"type\":\"conditional\",\"content\":\"(bad???) \",\"predicate\":5},{\"type\":\"conditional\",\"content\":\"(you haven't spoken in couple of years) \",\"predicate\":6},{\"type\":\"conditional\",\"content\":\"(???) \",\"predicate\":7},{\"type\":\"conditional\",\"content\":\"(okay???) \",\"predicate\":8},{\"type\":\"conditional\",\"content\":\"(better???) \",\"predicate\":9},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Emily Chen\"},\": \",{\"type\":\"conditional\",\"content\":\"An acquaintance? \",\"predicate\":10},\" \",{\"type\":\"conditional\",\"content\":\"Emily was... a friend, of sorts. She helped you with the pageant back in high school, and you grew rather close. At one time, you confessed that you liked her, and she said that you could start dating after graduating from high school. \",\"predicate\":11},\" \",{\"type\":\"conditional\",\"content\":\"Emily was... a friend, of sorts. She helped you with the pageant back in high school, and you grew rather close. \",\"predicate\":12},\" \",{\"type\":\"conditional\",\"content\":\"Emily was... an acquaintance, of sorts. Not much more, besides a few intense moments in which you revealed your dearest secrets to each other. \",\"predicate\":13},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Relationship status: \",{\"type\":\"insert\",\"insert\":14},\"/5 \",{\"type\":\"conditional\",\"content\":\"(bad???) \",\"predicate\":15},{\"type\":\"conditional\",\"content\":\"(you haven't spoken in at least a year) \",\"predicate\":16},{\"type\":\"conditional\",\"content\":\"(???) \",\"predicate\":17},{\"type\":\"conditional\",\"content\":\"(okay???) \",\"predicate\":18},{\"type\":\"conditional\",\"content\":\"(better???) \",\"predicate\":19},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Miri (Miriam) Brooks\"},\": She was your friend back in high school. \",{\"type\":\"conditional\",\"content\":\"You started dating Miri your junior year. But now... you're not sure what your relationship is like. \",\"predicate\":20},\" \",{\"type\":\"conditional\",\"content\":\"You were good friends, perhaps best friends. But now, you're not sure what you have. \",\"predicate\":21},\" \",{\"type\":\"conditional\",\"content\":\"But now, you aren't sure if you're still friends. \",\"predicate\":22},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Relationship status: \",{\"type\":\"insert\",\"insert\":23},\"/5 \",{\"type\":\"conditional\",\"content\":\"(bad???) \",\"predicate\":24},{\"type\":\"conditional\",\"content\":\"(you haven't spoken in a while) \",\"predicate\":25},{\"type\":\"conditional\",\"content\":\"(???) \",\"predicate\":26},{\"type\":\"conditional\",\"content\":\"(okay???) \",\"predicate\":27},{\"type\":\"conditional\",\"content\":\"(better???) \",\"predicate\":28},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Kevin (Chunyi 春艺) Zhao\"},\": Your younger brother, now 11 years old. Has a predilection for Minecraft and such. He's never needed you.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Mom\"},\": She's still working at the old job. Lives alone with Kevin after dad moved back to China (they're finally officially divorced after a few years of informal separation).\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"William Du\"},\": Aubrey's boyfriend, here on break from their university.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Rose Gao\"},\": Aubrey's younger sister.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_aub'] == \\\"date\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_aub'] == \\\"friend\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_aub'] == \\\"none\\\");\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['aub_relationship'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['aub_relationship'] || 0) < 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['aub_relationship'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['aub_relationship'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['aub_relationship'] || 0)===2);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['aub_relationship'] || 0) >= 3);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['prev_em'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_em'] == \\\"date\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_em'] == \\\"friend\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_em'] == \\\"none\\\");\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['em_relationship'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['em_relationship'] || 0) < 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['em_relationship'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['em_relationship'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['em_relationship'] || 0)===2);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['em_relationship'] || 0) >= 3);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_miri'] == \\\"date\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_miri'] == \\\"friend\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['prev_miri'] == \\\"none\\\");\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['miri_relationship'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['miri_relationship'] || 0) < 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['miri_relationship'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['miri_relationship'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['miri_relationship'] || 0)===2);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['miri_relationship'] || 0) >= 3);\"}}]}},\"stats\":{\"id\":\"stats\",\"type\":\"scene\",\"title\":\"Stats\",\"newPage\":true,\"isSpecial\":true,\"goTo\":[{\"id\":\"stats.stats_main\"}],\"onArrival\":[{\"$code\":\"Q['display_hours'] = 6 + Math.floor((5*(Q['time'] || 0))/60);\\nQ['display_minutes'] = ((5*(Q['time'] || 0)) % 60);\\nif(Q['display_minutes'] < 10) { Q['display_minutes'] = '0' + Q['display_minutes']};\\nQ['phase_2_start'] = ((Q['time'] || 0) == 20 && (Q['phase'] || 0) <= 1);\\n\\n// mood calculator: based on despair & anxiety\\nQ['mood'] = 'wistful';\\nQ['mood2'] = 'cautious';\\nif ((Q['despair'] < Q['minus_despair']) && (Q['anxiety'] <= Q['despair'])) {\\n    Q['mood'] = 'hopeful';\\n    Q['mood2'] = 'calm';\\n} else if (Q['despair'] >= 7 && Q['despair'] > Q['anxiety']) {\\n    if (Q['despair'] >= 11) {\\n        Q['mood'] = 'hopeless';\\n    } else if (Q['despair'] >= 9) {\\n        Q['mood'] = 'depressed';\\n    } else if (Q['despair'] >= 7) {\\n        Q['mood'] = 'sad, somewhat moreso than usual';\\n    }\\n}\\n// mood2 is based on anxiety\\nif (Q['anxiety'] >= 11) {\\n    Q['mood2'] = 'messed up';\\n} else if (Q['anxiety'] >= 9) {\\n    Q['mood2'] = 'on edge';\\n} else if (Q['anxiety'] >= 7) {\\n    Q['mood2'] = 'nervous';\\n} else if (Q['anxiety'] >= 5) {\\n    Q['mood2'] = 'a little bit nervous';\\n} else {\\n    Q['mood2'] = 'mostly calm';\\n}\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"miri_see_p1.miri_notice\":{\"id\":\"miri_see_p1.miri_notice\",\"options\":[{\"id\":\"@miri_see_p1.right_here\",\"title\":\"\\\"...I was standing right here.\\\"\"},{\"id\":\"@miri_see_p1.you_disappeared\",\"title\":\"\\\"...It was you who disappeared.\\\"\"},{\"id\":\"@miri_see_p1.oh_hi\",\"title\":\"\\\"...Oh. Hello.\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"She turns to face you and waves; she must have noticed you staring at her.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"秋怡大姐! \",{\"type\":\"emphasis-1\",\"content\":\"Big sister Qiuyi!\"},\"\\\" She laughs as she walks over, leaving the adults to laugh along. \\\"I was looking for you! You just disappeared!\\\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Miri will remember this, unfortunately. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"phone_p1.text\":{\"id\":\"phone_p1.text\",\"maxVisits\":1,\"options\":[{\"id\":\"@phone_p1.games\",\"title\":\"Play games.\"},{\"id\":\"@phone_p1.papers\",\"title\":\"Read papers for your research.\"},{\"id\":\"@phone_p1.media\",\"title\":\"Check social media.\"},{\"id\":\"@phone_p1.net\",\"title\":\"Browse random internet sites.\"}],\"content\":{\"content\":\"Lol.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"aub_see_p1.um\":{\"id\":\"aub_see_p1.um\",\"goTo\":[{\"id\":\"aub_see_p1.anyway\"}],\"content\":{\"content\":\"\\\"Um...\\\"\",\"type\":\"paragraph\"}},\"aub_set_prev.aub_dated\":{\"id\":\"aub_set_prev.aub_dated\",\"onArrival\":[{\"$code\":\"Q['prev_aub'] = \\\"dated\\\";\"}],\"options\":[{\"id\":\"@aub_set_prev.but_last\",\"title\":\"Of course it didn't last.\"}],\"content\":{\"content\":\"Alas, she is totally straight, as far as you know. However, you confessed to her in a moment of weakness, and for some strange reason, she wanted to go on a date with you. You accepted and went on the date. Even more surprisingly, it was not to be your last. Your \\\"friend dates\\\" became a thing, for a while, until it stopped without a final resolution.\",\"type\":\"paragraph\"}},\"em_set_prev.em_anxiety\":{\"id\":\"em_set_prev.em_anxiety\",\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":{\"content\":\"You had thought about confessing your feelings for her. Too often. Every time you would consider doing so, you could not bring yourself to press the send button. You drafted messages, agonized over every word, but it all seemed wrong. Every wrong word felt like it would ruin your relationship forever.\",\"type\":\"paragraph\"}},\"food_p1.snack_choice\":{\"id\":\"food_p1.snack_choice\",\"chooseIf\":{\"$code\":\"return (((Q['snack_consumption_count'] || 0) <= 5) && ((Q['hunger'] || 0) > 3));\"},\"unavailableSubtitle\":\"You're not that hungry anymore.\",\"onArrival\":[{\"$code\":\"if (Q['snack_consumption_count'] >= 2) {\\n    Q['time'] += 1;\\n}\"}],\"options\":[{\"id\":\"@food_p1.haw_flakes\",\"title\":\"Haw flakes.\"},{\"id\":\"@food_p1.shrimp_chips\",\"title\":\"Shrimp chips.\"},{\"id\":\"@food_p1.dried_squid\",\"title\":\"Dried squid.\"},{\"id\":\"@food_p1.seeds\",\"title\":\"Melon and sunflower seeds.\"},{\"id\":\"@food_p1.peas\",\"title\":\"Wasabi peas.\"},{\"id\":\"@food_p1.potato_chips\",\"title\":\"Potato chips.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"kevin_p1.um\":{\"id\":\"kevin_p1.um\",\"goTo\":[{\"id\":\"kevin_p1.no_idea\"}],\"content\":{\"content\":\"\\\"So, um...\\\"\",\"type\":\"paragraph\"}},\"miri_set_prev.miri_never\":{\"id\":\"miri_set_prev.miri_never\",\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"There was never a real breakup. Your already occasional conversations simply became ever less frequent. Maybe you were too nervous, or she was too busy, or there was simply not much to talk about, not much you had in common. Soon you simply fell out of touch, the gaps growing so long that neither you nor her wanted to initiate contact.\"},{\"type\":\"paragraph\",\"content\":\"Perhaps, since you never officially broke up, you're still dating, still girlfriends or something like that. You shudder.\"},{\"type\":\"paragraph\",\"content\":[\"But even if not, at least you \",{\"type\":\"emphasis-1\",\"content\":\"are\"},\" still friends, right?\"]}]},\"mom_p1.converse\":{\"id\":\"mom_p1.converse\",\"options\":[{\"id\":\"@mom_p1.love\",\"title\":\"You love her...\"},{\"id\":\"@mom_p1.wish\",\"title\":\"But you wish she wouldn't be like this.\"}],\"content\":{\"content\":\"The conversation continues, with more detailed questions and comments. You smile and answer. Mom doesn't say much. It's as if she's presenting you to her friends, as if you're a project.\",\"type\":\"paragraph\"}},\"one.still_karen\":{\"id\":\"one.still_karen\",\"goTo\":[{\"id\":\"one.name\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.dont_close\":{\"id\":\"phase_2.dont_close\",\"options\":[{\"id\":\"@phase_2.get_food\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You glance around, and catch Emily's eyes. She stares at you. You stare back. Emily's dad is glaring at Emily, and then staring at you. You look away.\"},{\"type\":\"paragraph\",\"content\":\"Wang Laoshi finishes the prayer. Now it's time for dinner to start. The children get their food first. And then the young adults; that's you.\"}]},\"em_see_p1.sit_next\":{\"id\":\"em_see_p1.sit_next\",\"options\":[{\"id\":\"@em_see_p1.what_reading\",\"title\":\"\\\"What are you reading?\\\"\"},{\"id\":\"@em_see_p1.how_are_you\",\"title\":\"\\\"How have you been?\\\"\"},{\"id\":\"@em_see_p1.sit_silence\",\"title\":\"Just sit there in silence.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, sure...\\\"\"},{\"type\":\"paragraph\",\"content\":\"You sit down on the couch next to her.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This action (or inaction) will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.stare_aubrey\":{\"id\":\"p2_convos.stare_aubrey\",\"viewIf\":{\"$code\":\"return ((Q['aub_seen'] || 0)===0);\"},\"goTo\":[{\"id\":\"aub_set_prev\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Mom had kept you up on the gossip; Aubrey's boyfriend William is apparently another Harvard student, like her.\"},{\"type\":\"paragraph\",\"content\":\"Aubrey and her boyfriend are dressed in matching colors, her wearing a green dress and white cardigan, him in a sweater and khakis. They're sitting next to each other.\"}]},\"miri_see_p1.how_are_you\":{\"id\":\"miri_see_p1.how_are_you\",\"options\":[{\"id\":\"@miri_see_p1.anxiety\",\"title\":\"\\\"I have anxiety...\\\"\"},{\"id\":\"@miri_see_p1.busy\",\"title\":\"\\\"I've been busy...\\\"\"},{\"id\":\"@miri_see_p1.no_reason\",\"title\":\"\\\"I don't know...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Anyway, why haven't you replied to my messages for so long?,\\\" she asks. \\\"And why did you do so today? God, I wish you would stop ghosting me so much.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um...\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Miri will remember this, probably. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"phone_p1.games\":{\"id\":\"phone_p1.games\",\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) < (Q['p1_time'] || 0));\"},\"options\":[{\"id\":\"@phone_p1.word_game\",\"title\":\"Word puzzles.\"},{\"id\":\"@phone_p1.cif\",\"title\":\"Choice-based interactive fiction.\"},{\"id\":\"@phone_p1.pif\",\"title\":\"Parser-based interactive fiction.\"},{\"id\":\"@phone_p1.pageant_game\",\"title\":\"A dating sim.\"},{\"id\":\"@phone_p1.pageant_game_2\",\"title\":\"Keep playing the pageant dating sim.\"}],\"content\":{\"content\":\"There are a bunch of different games on your phone.\",\"type\":\"paragraph\"}},\"aub_see_p1.alright\":{\"id\":\"aub_see_p1.alright\",\"goTo\":[{\"id\":\"aub_see_p1.anyway\"}],\"content\":{\"content\":\"\\\"Um, I've been alright...\\\"\",\"type\":\"paragraph\"}},\"aub_set_prev.aub_nothing\":{\"id\":\"aub_set_prev.aub_nothing\",\"onArrival\":[{\"$code\":\"Q['prev_aub'] = \\\"none\\\";\"}],\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You're not sure why you did it, or if it was ever a conscious choice. But at some point you stopped doing the same things she did, stopped discussing homework solutions after class, stopped doing the same events in Science Olympiad, even stopped talking to her at gatherings such as these. And the worst part of all, she didn't seem to notice.\"},{\"type\":\"paragraph\",\"content\":\"You have not spoken to her in four years. Perhaps you'll start now.\"}]},\"aub_set_prev\":{\"id\":\"aub_set_prev\",\"type\":\"scene\",\"title\":\"Aubrey - Memories\",\"newPage\":false,\"onArrival\":[{\"$code\":\"Q['aub_seen'] = 1;\"}],\"options\":[{\"id\":\"@aub_set_prev.aub_friends\",\"title\":\"You remained friends until college.\"},{\"id\":\"@aub_set_prev.aub_dated\",\"title\":\"You went on at least one date with Aubrey.\"},{\"id\":\"@aub_set_prev.aub_nothing\",\"title\":\"You started avoiding her.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Aubrey is a daughter of the family who owns the house. She was something of your unknown rival in high school. Mom would always compare your grades and test scores and extracurriculars to hers, and she would always compare superior. She's an artist, a musician, and an aspiring scientist-physician.\"},{\"type\":\"paragraph\",\"content\":\"But she was also your friend, of sorts. Your parents often attended various community gatherings together, naturally creating the opportunity for you two to incidently interact.\"},{\"type\":\"paragraph\",\"content\":\"Unfortunately, you also had a crush on her. Another symptom of your irrationality. How did that turn out?\"}]},\"em_set_prev.em_no_feelings\":{\"id\":\"em_set_prev.em_no_feelings\",\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"As time passed, you found yourself thinking of her less and less. You had more pressing worries, so you pushed the topic of Emily Chen to the back of your mind. Sometimes, you considered confessing to her, but you found that your feelings for her had faded with time and distance.\"},{\"type\":\"paragraph\",\"content\":\"She never contacted you, either. So maybe she stopped liking you, you convinced yourself.\"}]},\"food_p1.snack_choices_end\":{\"id\":\"food_p1.snack_choices_end\",\"options\":[{\"id\":\"@food_p1.snack_choice\",\"title\":\"Look for more snacks\"},{\"id\":\"@food_p1.drinks\",\"title\":\"Look at the drinks.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"kevin_p1.so\":{\"id\":\"kevin_p1.so\",\"options\":[{\"id\":\"#tv\"},{\"id\":\"@root\",\"title\":\"Go back upstairs.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So, um, how's it going?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. It's going alright,\\\" he says, and looks back down to the ipad, ignoring you.\"},{\"type\":\"paragraph\",\"content\":\"Why did you bother talking to him again?\"}]},\"miri_set_prev.miri_friends\":{\"id\":\"miri_set_prev.miri_friends\",\"goTo\":[{\"id\":\"jumpScene\"}],\"onArrival\":[{\"$code\":\"Q['prev_miri'] = \\\"friends\\\";\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The two of you gradually grew apart after starting college. With the physical distance and the continuous grind of college work, the frequency of your interactions decreased. You went from messaging every day, to once a week, to once a month, to nothing.\"},{\"type\":\"paragraph\",\"content\":[\"You \",{\"type\":\"emphasis-1\",\"content\":\"are\"},\" still friends, right?\"]}]},\"mom_p1.love\":{\"id\":\"mom_p1.love\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"one.amy\":{\"id\":\"one.amy\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Amy\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.late\":{\"id\":\"phase_2.late\",\"options\":[{\"id\":\"@phase_2.get_food\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Upon your entrance to the dining room, mom greets you. She already has a plate of food.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"我们没有等你吃。饭都要凉了。\",{\"type\":\"emphasis-1\",\"content\":\"We didn't wait for you. The food is almost cold now.\"},\"\\\" Mom says.\"]}]},\"em_see_p1.sit_silence\":{\"id\":\"em_see_p1.sit_silence\",\"options\":[{\"id\":\"@em_see_p1.what_reading\",\"title\":\"\\\"What are you reading?\\\"\"},{\"id\":\"@em_see_p1.how_are_you\",\"title\":\"\\\"How have you been?\\\"\"},{\"id\":\"@em_see_p1.stay_silent\",\"title\":\"Just sit there.\"},{\"id\":\"@em_see_p1.leave_emily\",\"title\":\"Leave her be.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You just sit there. Emily scrolls through a long article on her computer, eyes seemingly focused on the screen.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This action (or inaction) will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"p2_convos.intros_3\":{\"id\":\"p2_convos.intros_3\",\"setJump\":\"p2_convos.intros_4\",\"options\":[{\"id\":\"@p2_convos.intros_4\",\"title\":\"Listen.\"},{\"id\":\"@p2_convos.eat\",\"title\":\"Eat.\"}],\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Miri, your turn.\",{\"type\":\"magic\",\"content\":\"</span>\"}]}},\"miri_see_p1.anxiety\":{\"id\":\"miri_see_p1.anxiety\",\"goTo\":[{\"id\":\"miri_see_p1.thats_okay\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Are you supposed to just admit your mental illnesses like that? Your greatest weakness, revealed?\"},{\"type\":\"paragraph\",\"content\":\"Sure, why not? \\\"Um, I kind of have anxiety, and it's been getting worse lately, sorry...\\\"\"}]},\"phone_p1.word_game\":{\"id\":\"phone_p1.word_game\",\"goTo\":[{\"id\":\"phone_p1.game_opts\"}],\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\"}],\"content\":{\"content\":\"You spend a few minutes on a word find game.\",\"type\":\"paragraph\"}},\"aub_see_p1.great\":{\"id\":\"aub_see_p1.great\",\"goTo\":[{\"id\":\"aub_see_p1.anyway\"}],\"content\":{\"content\":\"\\\"Um, I've been great...\\\"\",\"type\":\"paragraph\"}},\"em_set_prev.emily_friends\":{\"id\":\"em_set_prev.emily_friends\",\"onArrival\":[{\"$code\":\"Q['prev_em'] = \\\"friends\\\";\"}],\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"You became friends while she helped you prepare for the beauty pageant. She was \",{\"type\":\"emphasis-1\",\"content\":\"good\"},\" at it, too; you couldn't have walked up onto the stage without her moral assistance. Thus initiated your friendship; deep confessions and meaningful conversations followed. She said that you saved her life; you aren't so sure.\"]},{\"type\":\"paragraph\",\"content\":\"But all that melted away as you went off to colleges across the country. You had more immediate concerns. The thoughts of Emily Chen slowly melted away and flowed into the abcesses of your mind.\"}]},\"food_p1.haw_flakes\":{\"id\":\"food_p1.haw_flakes\",\"onArrival\":[{\"$code\":\"Q['hunger'] = (Q['hunger'] || 0) - 1;\\nQ['snack_consumption_count'] = (Q['snack_consumption_count'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"food_p1.snack_choices_end\"}],\"content\":{\"content\":\"Haw flakes are crumbly reddish discs about the diameter of your thumb, made from the \\\"haw\\\", or 山楂, which is some kind of tree fruit. You've never actually found out what a \\\"haw\\\" is, or even if these things contain actual fruit (there's no ingredients list). But it tastes good. Sweet, a little tart.\",\"type\":\"paragraph\"}},\"kevin_p1.no_idea\":{\"id\":\"kevin_p1.no_idea\",\"onArrival\":[{\"$code\":\"Q['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"options\":[{\"id\":\"#tv\"},{\"id\":\"@root\",\"title\":\"Go back upstairs.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You have no idea why you're here, both in the general sense and the more specific sense of 'why are you talking to Kevin at this moment'.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um... I just wanted to see you,\\\" you say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Okay,\\\" he says, and looks back down to the ipad, ignoring you.\"},{\"type\":\"paragraph\",\"content\":\"Why did you bother talking to him again?\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< You have committed CRINGE. Kevin may not remember this, but you will. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 5);\"}}]}},\"miri_set_prev.miri_breakup\":{\"id\":\"miri_set_prev.miri_breakup\",\"goTo\":[{\"id\":\"jumpScene\"}],\"onArrival\":[{\"$code\":\"Q['prev_miri'] = \\\"none\\\";\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It was a careless moment. She tried to help you. But then you said something that made her hate you. You never really contacted her since then, and she hasn't really contacted you. Your relationship has been ruined forever.\"},{\"type\":\"paragraph\",\"content\":\"Well, hopefully not forever. But still, you're surprised that she would still choose to initiate contact with you after all this time.\"}]},\"miri_set_prev\":{\"id\":\"miri_set_prev\",\"type\":\"scene\",\"title\":\"Miri - Memories\",\"newPage\":false,\"onArrival\":[{\"$code\":\"Q['miri_seen'] = 1;\"}],\"options\":[{\"id\":\"@miri_set_prev.miri_dating\",\"title\":\"We dated for a while, but...\"},{\"id\":\"@miri_set_prev.miri_friends\",\"title\":\"We were good friends, but...\"},{\"id\":\"@miri_set_prev.miri_breakup\",\"title\":\"We had a falling out...\"}],\"content\":{\"content\":\"Miri was probably your best friend in high school. But until today, it had been at least one year since your last perfunctory messages. She contacted you out of the blue , saying that there was trouble in her household and she had to get away. Of course you accepted her request. She is the only person here who is not Chinese in any way (she's half Black, half Vietnamese).\",\"type\":\"paragraph\"}},\"mom_p1.wish\":{\"id\":\"mom_p1.wish\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"mom_p1\":{\"id\":\"mom_p1\",\"type\":\"scene\",\"title\":\"Mom\",\"subtitle\":\"She's hanging around somewhere...\",\"viewIf\":{\"$code\":\"return ((((Q['phase'] || 0)===1) && ((Q['time'] || 0) < (Q['p1_time'] || 0))) && ((Q['mom_int'] || 0)===0));\"},\"newPage\":true,\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['mom_int'] = (Q['mom_int'] || 0) + 1;\\nQ['time'] = (Q['time'] || 0) + 1;\"}],\"tags\":[\"phase1\",\"top\"],\"options\":[{\"id\":\"@mom_p1.everyone\",\"title\":\"Why is everyone asking that?\"},{\"id\":\"@mom_p1.grad\",\"title\":\"\\\"我要上研究生 I'm going to grad school.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"\\\"秋怡！过来！ \",{\"type\":\"emphasis-1\",\"content\":\"Qiuyi! Come here!\"},\"\\\", mom shouts.\"]},{\"type\":\"paragraph\",\"content\":\"You walk over to join the group. Mom stands with a group of Chinese adults, mostly moms. She introduces you to the group. You say your requisite greetings, and they say theirs.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"你的头发长出来了。 \",{\"type\":\"emphasis-1\",\"content\":\"Your hair is longer\"},\",\\\" someone says. It's true that you've gone a year without a haircut.\"]},{\"type\":\"paragraph\",\"content\":[\"\\\"女孩子头发应该长一点。 这样更好看。 \",{\"type\":\"emphasis-1\",\"content\":\"Girls should have longer hair. It looks better this way\"},\",\\\" someone else says. Ugh.\"]},{\"type\":\"paragraph\",\"content\":[\"\\\"你快毕业了，要做什么？ \",{\"type\":\"emphasis-1\",\"content\":\"You're graduating soon, what are you going to do?\"},\"\\\"\"]}],\"countVisitsMax\":1},\"one.christina\":{\"id\":\"one.christina\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Christina\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.get_food\":{\"id\":\"phase_2.get_food\",\"title\":\"Get food.\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 2;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"The meal is a potluck, with each household bringing their own dishes. It is a dazzling geometric arrangement, full of colors and smells.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your food choices will have consequences for your future. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 8);\"}}]}},\"em_see_p1.stand\":{\"id\":\"em_see_p1.stand\",\"options\":[{\"id\":\"@em_see_p1.what_reading\",\"title\":\"\\\"What are you reading?\\\"\"},{\"id\":\"@em_see_p1.how_are_you\",\"title\":\"\\\"How have you been?\\\"\"},{\"id\":\"@em_see_p1.stand_silence\",\"title\":\"Just stand there.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I'll stand here awkwardly...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Emily shrugs. \\\"Okay. Suit yourself.\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your words (or lack of thereof) will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.intros_5\":{\"id\":\"p2_convos.intros_5\",\"setJump\":\"p2_convos.intros_6\",\"options\":[{\"id\":\"@p2_convos.intros_6\",\"title\":\"Listen.\"},{\"id\":\"@p2_convos.eat\",\"title\":\"Eat.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"William looks at Emily.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: I don't think I've met you before. What's your name?\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"miri_see_p1.busy\":{\"id\":\"miri_see_p1.busy\",\"goTo\":[{\"id\":\"miri_see_p1.thats_okay\"}],\"content\":{\"content\":\"\\\"Um, I've been really busy with college and stuff, sorry...\\\"\",\"type\":\"paragraph\"}},\"phone_p1.game_opts\":{\"id\":\"phone_p1.game_opts\",\"options\":[{\"id\":\"@phone_p1.games\",\"title\":\"Play more games.\"},{\"id\":\"@phone_p1.options\",\"title\":\"Keep using your phone.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"aub_see_p1.anyway\":{\"id\":\"aub_see_p1.anyway\",\"options\":[{\"id\":\"@aub_see_p1.bio\",\"title\":\"\\\"Molecular and Cell Biology.\\\"\"},{\"id\":\"@aub_see_p1.college_good\",\"title\":\"\\\"It's going okay.\\\"\"},{\"id\":\"@aub_see_p1.um_2\",\"title\":\"\\\"Um...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[\"\\\"Anyway,\\\" Aubrey continues, \\\"This is my boyfriend William. William, this is \",{\"type\":\"insert\",\"insert\":0},\"\\\"\"]},{\"type\":\"paragraph\",\"content\":\"You already knew all about him from mom's gossip.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hi,\\\" William says. \\\"Aubrey's said a lot about you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Really?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah! She says you were really good at Science Olympiad back in high school.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, not exactly...\\\" This man goes to Harvard, so he probably has at least a few college application ranks on you.\"},{\"type\":\"paragraph\",\"content\":\"\\\"So, how's college going?\\\", Aubrey asks. \\\"What are you majoring in again?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Maybe Aubrey will remember this. >\"},\"\"],\"predicate\":1}}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"em_set_prev.emily_none\":{\"id\":\"em_set_prev.emily_none\",\"onArrival\":[{\"$code\":\"Q['prev_em'] = \\\"none\\\";\"}],\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Well, you did know that she was a trans girl; she came out to you at a party much like this one, in a moment you never forgot. But outside of some chance encounters, you never became close. After graduation, you never spoke to her again.\"},{\"type\":\"paragraph\",\"content\":\"But now, she's here.\"}]},\"em_set_prev\":{\"id\":\"em_set_prev\",\"type\":\"scene\",\"title\":\"Emily - Memories\",\"newPage\":false,\"onArrival\":[{\"$code\":\"Q['em_seen'] = 1;\"}],\"options\":[{\"id\":\"@em_set_prev.emily_date\",\"title\":\"I liked her, and she said that we could date after she goes to college, but nothing came of that.\"},{\"id\":\"@em_set_prev.emily_friends\",\"title\":\"We became good friends, but fell out of touch.\"},{\"id\":\"@em_set_prev.emily_none\",\"title\":\"We didn't know each other very well.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You first encountered her while you were attempting to prepare for a beauty pageant that your parents signed you up for in the junior year of high school. She was at the first meeting for the pageant, not as a contestant but as a social experiment. Or something like that. She offered to help you prepare; she was much more amenable to such things. Thus, the two of you became steadily acquainted.\"},{\"type\":\"paragraph\",\"content\":\"Emily's parents were also part of your parents' social circle. Emily's dad, Song Chen, was several levels of academic hierarchy above your mom at their university department. You used to see her at parties much like this one, but not once since high school, until today.\"},{\"type\":\"paragraph\",\"content\":\"By the way, she's trans. And you don't even know if she's out yet.\"}]},\"food_p1.shrimp_chips\":{\"id\":\"food_p1.shrimp_chips\",\"onArrival\":[{\"$code\":\"Q['hunger'] = (Q['hunger'] || 0) - 1;\\nQ['snack_consumption_count'] = (Q['snack_consumption_count'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"food_p1.snack_choices_end\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Shrimp chips are basically potato chips with some artificial and/or \\\"natural\\\" flavor compounds to give it a taste that vaguely resembles shrimp. According to the ingredients list, they're made from tapioca flour. What is tapioca flour, anyways? It's apparently some root vegetable.\"},{\"type\":\"paragraph\",\"content\":\"Anyway, you eat some shrimp chips. They're good.\"}]},\"kevin_p1.tv\":{\"id\":\"kevin_p1.tv\",\"title\":\"Watch TV.\",\"viewIf\":{\"$code\":\"return (((Q['tv_prog'] || 0)===0) && ((Q['phase'] || 0)===1));\"},\"onArrival\":[{\"$code\":\"Q['tv_prog'] = 1;\"}],\"tags\":[\"tv\"],\"options\":[{\"id\":\"#tv\"},{\"id\":\"@kevin_p1.greet\",\"title\":\"Approach Kevin.\"},{\"id\":\"@kevin_p1.greet2\",\"title\":\"Talk to Kevin again.\"},{\"id\":\"@root\",\"title\":\"Go back upstairs.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"There are a bunch of dudes fighting a bunch of other dudes. Some of them are the good guys and some of them are the bad guys. There's this also giant gray dude. That's Thanos from the internet memes, right?\"},{\"type\":\"paragraph\",\"content\":\"You are not exactly plugged in to popular media.\"}]},\"one.erica\":{\"id\":\"one.erica\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Erica\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.foods\":{\"id\":\"phase_2.foods\",\"goTo\":[{\"id\":\"phase_2.end_food\",\"predicate\":{\"$code\":\"return ((Q['food_left'] || 0)===0);\"}}],\"options\":[{\"id\":\"@phase_2.rice\",\"title\":\"Steamed rice.\"},{\"id\":\"@phase_2.jiaozi\",\"title\":\"饺子 - dumplings.\"},{\"id\":\"@phase_2.baozi\",\"title\":\"包子 - baozi\"},{\"id\":\"@phase_2.stir\",\"title\":\"Various meat and vegetable stir fries.\"},{\"id\":\"@phase_2.tomato\",\"title\":\"西红柿炒鸡蛋 - tomato stir-fried with eggs.\"},{\"id\":\"@phase_2.lamb\",\"title\":\"孜然羊肉面 - cumin lamb noodles.\"},{\"id\":\"@phase_2.donggua\",\"title\":\"Winter melon and meatball soup.\"},{\"id\":\"@phase_2.porridge\",\"title\":\"米饭粥 - Rice porridge.\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"You can still get \",{\"type\":\"insert\",\"insert\":0},\" thing\",{\"type\":\"conditional\",\"content\":\"s\",\"predicate\":1},\".\"]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['food_left'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['food_left'] || 0) > 1);\"}}]}},\"em_see_p1.stand_silence\":{\"id\":\"em_see_p1.stand_silence\",\"options\":[{\"id\":\"@em_see_p1.what_reading\",\"title\":\"\\\"What are you reading?\\\"\"},{\"id\":\"@em_see_p1.how_are_you\",\"title\":\"\\\"How have you been?\\\"\"},{\"id\":\"@em_see_p1.stay_silent\",\"title\":\"Just stand there.\"},{\"id\":\"@em_see_p1.leave_emily\",\"title\":\"Leave her be.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You stand there next to Emily, who is silent as her eyes are focused on the article on her computer screen.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your words (or lack of thereof) will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.intros_7\":{\"id\":\"p2_convos.intros_7\",\"options\":[{\"id\":\"@p2_convos.intros_8_know\",\"title\":\"\\\"Everyone knows me already...\\\"\"},{\"id\":\"@p2_convos.intros_8\",\"title\":\"Okay, just say your name.\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: And what about you, \",{\"type\":\"insert\",\"insert\":0},\"?\",{\"type\":\"magic\",\"content\":\"</span>\"}]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}}]}},\"miri_see_p1.no_reason\":{\"id\":\"miri_see_p1.no_reason\",\"goTo\":[{\"id\":\"miri_see_p1.thats_okay\"}],\"content\":{\"content\":\"\\\"Um, I don't really know, sorry...\\\"\",\"type\":\"paragraph\"}},\"phone_p1.cif_a1\":{\"id\":\"phone_p1.cif_a1\",\"goTo\":[{\"id\":\"phone_p1.game_opts\"}],\"content\":{\"content\":\"In this game you play as a scientist who makes a robotic companion. You can't date the robot, but later you can create a different robot that you can date. Because it's that kind of game.\",\"type\":\"paragraph\"}},\"aub_see_p1.bio\":{\"id\":\"aub_see_p1.bio\",\"goTo\":[{\"id\":\"aub_see_p1.after_grad\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I'm majoring in MCB. Molecular and cell biology.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, cool! I'm a biochem major so that's like, the same thing?\\\", Aubrey replies.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I'm a CS major,\\\" William says, awkwardly smiling.\"}]},\"food_p1.dried_squid\":{\"id\":\"food_p1.dried_squid\",\"onArrival\":[{\"$code\":\"Q['hunger'] = (Q['hunger'] || 0) - 1;\\nQ['snack_consumption_count'] = (Q['snack_consumption_count'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"food_p1.snack_choices_end\"}],\"content\":{\"content\":\"Dried squid pieces chewy, salty, white stringy things. They're hard to chew, but infused with the salty and savory flavors of the sea. You eat some. Bits get stuck to your teeth.\",\"type\":\"paragraph\"}},\"kevin_p1.stand\":{\"id\":\"kevin_p1.stand\",\"options\":[{\"id\":\"#tv\"},{\"id\":\"@kevin_p1.greet\",\"title\":\"Approach Kevin.\"},{\"id\":\"@kevin_p1.greet2\",\"title\":\"Talk to Kevin again.\"},{\"id\":\"@root\",\"title\":\"Go back upstairs.\"}],\"content\":{\"content\":\"You pace slowly around the basement, tossing your cell phone from one hand to another. No one pays you any attention.\",\"type\":\"paragraph\"}},\"one.grace\":{\"id\":\"one.grace\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Grace\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.rice\":{\"id\":\"phase_2.rice\",\"onArrival\":[{\"$code\":\"Q['food'].push('rice'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"You shovel some rice on your plate.\",\"type\":\"paragraph\"}},\"em_see_p1.what_reading\":{\"id\":\"em_see_p1.what_reading\",\"options\":[{\"id\":\"@em_see_p1.what_about\",\"title\":\"\\\"What is it about?\\\"\"},{\"id\":\"@em_see_p1.how_are_you\",\"title\":\"\\\"How have you been?\\\"\"},{\"id\":\"@em_see_p1.stay_silent\",\"title\":\"Don't say anything.\"},{\"id\":\"@em_see_p1.leave_emily\",\"title\":\"Just leave.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, what are you reading?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um, this is a short article by Karl Marx. Relatively short anyway. It's called The 18th Brumaire of Louis Bonaparte.\\\"\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Silence. She isn't going to talk if you aren't. \",\"predicate\":0},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your words (or lack of thereof) will have consequences. >\"},\"\"],\"predicate\":1}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 6);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.intros_8_know\":{\"id\":\"p2_convos.intros_8_know\",\"viewIf\":{\"$code\":\"return ((((Q['em_int'] || 0) > 0) && ((Q['miri_int'] || 0) > 0)) && ((Q['aub_int'] || 0) > 0));\"},\"goTo\":[{\"id\":\"p2_convos.intros_9\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: Um, doesn't everyone know me already?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Glances around the table.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: I guess, but you should still at least say your name just so we're all even.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: Alright, fine, um, I'm \",{\"type\":\"insert\",\"insert\":0},\".\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}}]}},\"miri_see_p1.thats_okay\":{\"id\":\"miri_see_p1.thats_okay\",\"options\":[{\"id\":\"@miri_see_p1.friend_hug\",\"title\":\"Let her hug you.\"},{\"id\":\"@miri_see_p1.hug_kiss\",\"title\":\"Hug her.\"},{\"id\":\"@miri_see_p1.no_hug\",\"title\":\"\\\"No hugs, sorry...\\\"\"}],\"content\":{\"content\":\"Miri sighs. \\\"That's okay. I just hope things haven't been getting worse, you know. Hey, it'll be fine. Wanna hug it out?\\\"\",\"type\":\"paragraph\"}},\"phone_p1.cif_a2\":{\"id\":\"phone_p1.cif_a2\",\"goTo\":[{\"id\":\"phone_p1.game_opts\"}],\"content\":{\"content\":\"This is a romance game taking place in a fantasy-European upper-class boarding school. There might or might not be magic going on, but there are dark non-magical secrets. As usual there is a variety of romantic options, but they are hard to keep track of; the names are too uniformly European.\",\"type\":\"paragraph\"}},\"aub_see_p1.college_good\":{\"id\":\"aub_see_p1.college_good\",\"goTo\":[{\"id\":\"aub_see_p1.after_grad\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, college is going... okay, I guess.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Really? How so?\\\", Aubrey asks.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um... I'm majoring in molecular and cell biology.\\\"\"}]},\"food_p1.seeds\":{\"id\":\"food_p1.seeds\",\"onArrival\":[{\"$code\":\"Q['hunger'] = (Q['hunger'] || 0) - 1;\\nQ['snack_consumption_count'] = (Q['snack_consumption_count'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"food_p1.snack_choices_end\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"At these parties, all the Chinese adults seem to be constantly 嗑瓜子-ing (cracking melon seed shells) all the time when they're not talking or eating. A lot of people have dents in their front teeth from 嗑瓜子.\"},{\"type\":\"paragraph\",\"content\":\"You're not nearly as much of an afficionado of 嗑瓜子. But you eat some anyway.\"}]},\"kevin_p1.tv2\":{\"id\":\"kevin_p1.tv2\",\"title\":\"Keep watching the movie.\",\"viewIf\":{\"$code\":\"return (((Q['tv_prog'] || 0)===1) && ((Q['phase'] || 0)===1));\"},\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['tv_prog'] = (Q['tv_prog'] || 0) + 1;\"}],\"tags\":[\"tv\"],\"options\":[{\"id\":\"#tv\"},{\"id\":\"@kevin_p1.greet\",\"title\":\"Approach Kevin.\"},{\"id\":\"@kevin_p1.greet2\",\"title\":\"Talk to Kevin again.\"},{\"id\":\"@root\",\"title\":\"Go back upstairs.\"}],\"content\":{\"content\":\"The fights in the movie have grown bigger. There's this giant fight on Earth between a human army and an alien army, and a smaller fight on another planet. Thanos (that's Thanos, right?) smashes some dudes around. There's fancy light effects.\",\"type\":\"paragraph\"}},\"one.jenny\":{\"id\":\"one.jenny\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Jenny\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.jiaozi\":{\"id\":\"phase_2.jiaozi\",\"onArrival\":[{\"$code\":\"Q['food'].push('dumplings'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"You take a few dumplings.\",\"type\":\"paragraph\"}},\"em_see_p1.what_about\":{\"id\":\"em_see_p1.what_about\",\"onArrival\":[{\"$code\":\"Q['anxiety'] = (Q['anxiety'] || 0) + 1;\\nQ['em_relationship'] = (Q['em_relationship'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.how_are_you\",\"title\":\"\\\"How have you been?\\\"\"},{\"id\":\"@em_see_p1.stay_silent\",\"title\":\"Don't say anything.\"},{\"id\":\"@em_see_p1.leave_emily\",\"title\":\"Just leave.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So, um, what is it about?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"It's a history and analysis of the French Revolution. The one in 1848.\\\" A pause. She glances at you. You turn away. \\\"It's kind of interesting. Kind of relevant, politically, in this present moment.\\\" She smiles to herself.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Okay.\\\"\"},{\"type\":\"paragraph\",\"content\":\"More silence. She's still staring at the screen, but isn't scrolling anymore.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This action will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"p2_convos.intros_8\":{\"id\":\"p2_convos.intros_8\",\"viewIf\":{\"$code\":\"return ((((Q['em_int'] || 0)===0) || ((Q['miri_int'] || 0)===0)) || ((Q['aub_int'] || 0)===0));\"},\"goTo\":[{\"id\":\"p2_convos.intros_9\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You're going to have to do this eventually, right?\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: Alright, um, I'm \",{\"type\":\"insert\",\"insert\":0},\".\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}}]}},\"miri_see_p1.friend_hug\":{\"id\":\"miri_see_p1.friend_hug\",\"onArrival\":[{\"$code\":\"Q['miri_relationship'] = (Q['miri_relationship'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['miri_date'] || 0) <= 0);\"},\"options\":[{\"id\":\"@miri_see_p1.sit_down\",\"title\":\"Follow her.\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave and do something else.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"She pulls you into a gentle hug. You reach around her shoulders, as if you've forgotten how to make human contact.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hey, do you want to just hang out for a bit?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This seemingly minor action will have dire consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"phone_p1.cif_a3\":{\"id\":\"phone_p1.cif_a3\",\"goTo\":[{\"id\":\"phone_p1.game_opts\"}],\"content\":{\"content\":\"This is another fantasy choice-based game where you play as a deposed royal heir and attempt to regain power. There is a variety of romance options, of course, which all require a complicated set of stat checks to complete.\",\"type\":\"paragraph\"}},\"aub_see_p1.um_2\":{\"id\":\"aub_see_p1.um_2\",\"goTo\":[{\"id\":\"aub_see_p1.after_grad\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um... I don't really know...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, tell me about it.\\\" William laughs.\"}]},\"food_p1.peas\":{\"id\":\"food_p1.peas\",\"onArrival\":[{\"$code\":\"Q['hunger'] = (Q['hunger'] || 0) - 1;\\nQ['snack_consumption_count'] = (Q['snack_consumption_count'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"food_p1.snack_choices_end\"}],\"content\":{\"content\":\"Wasabi peas are pretty popular around these parts. They're spicy and savory.\",\"type\":\"paragraph\"}},\"kevin_p1.tv3\":{\"id\":\"kevin_p1.tv3\",\"title\":\"Keep watching the movie.\",\"viewIf\":{\"$code\":\"return (((Q['tv_prob'] || 0)===2) && ((Q['phase'] || 0)===1));\"},\"tags\":[\"tv\"],\"options\":[{\"id\":\"#tv\"},{\"id\":\"@kevin_p1.greet\",\"title\":\"Approach Kevin.\"},{\"id\":\"@kevin_p1.greet2\",\"title\":\"Talk to Kevin again.\"},{\"id\":\"@root\",\"title\":\"Go back upstairs.\"}],\"content\":{\"content\":\"It's kind of confusing trying to follow the battles going on, given that you haven't seen any of the previous installments in this series. The evil dudes appear to be winning, overpowering the good guys' army. Thanos (you still don't know if that's him) kills some people.\",\"type\":\"paragraph\"}},\"kevin_p1\":{\"id\":\"kevin_p1\",\"type\":\"scene\",\"title\":\"Kevin Zhao\",\"subtitle\":\"In the basement with the other kids.\",\"viewIf\":{\"$code\":\"return ((((Q['phase'] || 0)===1) && ((Q['time'] || 0) < (Q['p1_time'] || 0))) && ((Q['kevin_int'] || 0)===0));\"},\"tags\":[\"phase1\"],\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\"}],\"newPage\":true,\"setBg\":\"backgrounds/basement_3_filtered_cropped.jpg\",\"maxVisits\":1,\"options\":[{\"id\":\"@kevin_p1.greet\",\"title\":\"Approach Kevin.\"},{\"id\":\"@kevin_p1.tv\",\"title\":\"Watch TV.\"},{\"id\":\"@kevin_p1.stand\",\"title\":\"Stand around awkwardly.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The children are sitting around the unfinished basement, some hunched over their tablets, others watching the TV. There's a Marvel movie playing, one of the recent ones that you've never seen. You actually haven't seen any of the Marvel movies save snippets in parties such as these.\"},{\"type\":\"paragraph\",\"content\":\"Kevin is on a couch, watching Aubrey's sister Rose play some game on the ipad. He doesn't notice you.\"}],\"countVisitsMax\":1},\"one.rachel\":{\"id\":\"one.rachel\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Rachel\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.baozi\":{\"id\":\"phase_2.baozi\",\"onArrival\":[{\"$code\":\"Q['food'].push('baozi'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"You take a big bao.\",\"type\":\"paragraph\"}},\"em_see_p1.how_are_you\":{\"id\":\"em_see_p1.how_are_you\",\"options\":[{\"id\":\"@em_see_p1.just_say_it\",\"title\":\"Just say \\\"how are you\\\" or something like that.\"},{\"id\":\"@em_see_p1.stay_silent\",\"title\":\"Actually, just stay quiet.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You're going to have to initiate this conversation. You hate initiating conversations. It's as if there is a physical block placed upon your brain, halting you from uttering a single word. But you can do it, right?\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This action will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"p2_convos.intros_9\":{\"id\":\"p2_convos.intros_9\",\"onArrival\":[{\"$code\":\"Q['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"options\":[{\"id\":\"@p2_convos.intros_9_f1\",\"title\":\"\\\"I'm gay.\\\"\"},{\"id\":\"@p2_convos.intros_9_f2\",\"title\":\"\\\"Um, I have a lot of anxiety right now and I don't want to be here but I don't want to be alone either so I don't know what to do...\\\"\"},{\"id\":\"@p2_convos.intros_9_f4\",\"title\":\"\\\"I was in a beauty pageant once?\\\"\"},{\"id\":\"@p2_convos.intros_9_f3\",\"title\":\"\\\"Nothing's cool about me.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: And what's one cool fact about yourself?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: Um... uh, ...\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"miri_see_p1.no_hug\":{\"id\":\"miri_see_p1.no_hug\",\"options\":[{\"id\":\"@miri_see_p1.sit_down\",\"title\":\"Follow her.\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave and do something else.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, no hugs right now, sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. That's okay. Well, let's go sit down. Do you want to just hang out for a bit?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This seemingly minor action will have dire consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"phone_p1.pageant_game\":{\"id\":\"phone_p1.pageant_game\",\"onArrival\":[{\"$code\":\"Q['pageant_seen'] = 1;\\nQ['time'] = (Q['time'] || 0) + 1;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['pageant_seen'] || 0)===0);\"},\"goTo\":[{\"id\":\"phone_p1.game_opts\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"This game is a lesbian beauty pageant simulator, which is surprisingly resonant with your past experiences. At is heart is a time management game; you have to decide how you spend your time preparing for the pageant, whether to focus on outfits or makeup or talent or the interview. There are multiple endings, most of which are abject failures.\"},{\"type\":\"paragraph\",\"content\":\"And then there's the social optimization component, which takes the outward form of a dating sim but is actually a ruthless puzzle, where selecting the wrong dialogue choices or weekly activities could destroy your relationships forever.\"},{\"type\":\"paragraph\",\"content\":\"It's a rather interesting game.\"}]},\"aub_see_p1.after_grad\":{\"id\":\"aub_see_p1.after_grad\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\"}],\"options\":[{\"id\":\"@aub_see_p1.everyone\",\"title\":\"\\\"Everyone's been asking that.\\\"\"},{\"id\":\"@aub_see_p1.grad_school\",\"title\":\"\\\"Grad school.\\\"\"},{\"id\":\"@aub_see_p1.you\",\"title\":\"\\\"What about you?\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So what are you doing after graduation?\\\", Aubrey asks.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Aubrey will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"food_p1.potato_chips\":{\"id\":\"food_p1.potato_chips\",\"onArrival\":[{\"$code\":\"Q['hunger'] = (Q['hunger'] || 0) - 2;\\nQ['snack_consumption_count'] = (Q['snack_consumption_count'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"food_p1.snack_choices_end\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Just straight-up regular Lay's potato chips, produced by the Frito-Lay Corporation, based in Plano, Texas, which is an upper-class suburb of the Dallas-Fort Worth Metroplex, with a very strong public school system and a high Asian population. You know this because you read Wikipedia for fun.\"},{\"type\":\"paragraph\",\"content\":\"Anyway, these chips are for the kids, that is, you. Because the parents decided that ABC kids need their American snacks, or something like that. And well, you eat a bag full. Yeah.\"}]},\"one.sarah\":{\"id\":\"one.sarah\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Sarah\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.stir\":{\"id\":\"phase_2.stir\",\"options\":[{\"id\":\"@phase_2.beans\",\"title\":\"Stir-fried string beans.\"},{\"id\":\"@phase_2.tofu\",\"title\":\"Tofu stuffed with meat paste.\"},{\"id\":\"@phase_2.cauli\",\"title\":\"Chicken and cauliflower.\"},{\"id\":\"@phase_2.shrimp\",\"title\":\"Shrimp and bok choy.\"},{\"id\":\"@phase_2.lotus\",\"title\":\"Lotus roots and pork.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"em_see_p1.em_not_okay\":{\"id\":\"em_see_p1.em_not_okay\",\"onArrival\":[{\"$code\":\"Q['em_int'] = (Q['em_int'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.how_so\",\"title\":\"\\\"How so?\\\"\"},{\"id\":\"@em_see_p1.sorry_about_everything\",\"title\":\"\\\"Sorry about everything...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Oh... really?\\\"\"},{\"type\":\"paragraph\",\"content\":\"She sighs, and closes her laptop. \\\"No. Of course not.\\\"\"}]},\"p2_convos.intros_9_f1\":{\"id\":\"p2_convos.intros_9_f1\",\"goTo\":[{\"id\":\"p2_convos.next_topic\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: I'm gay. Sorry.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Awkward laughter all around.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: As are we all. Most of us, anyway.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Emily is smiling to herself.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: So, um, anyway...\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"miri_see_p1.leave\":{\"id\":\"miri_see_p1.leave\",\"onArrival\":[{\"$code\":\"Q['despair'] = (Q['despair'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I was going to go...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Alright. Don't let me keep you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You wander back towards the rest of the party. Miri is left alone.\"}]},\"phone_p1.pageant_game_2\":{\"id\":\"phone_p1.pageant_game_2\",\"onArrival\":[{\"$code\":\"Q['pageant_seen'] = (Q['pageant_seen'] || 0) + 1;\\nQ['time'] = (Q['time'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['pageant_seen'] || 0) >= 1);\"},\"goTo\":[{\"id\":\"phone_p1.game_opts\"}],\"content\":{\"content\":\"You've already done a few failed playthroughs of this game, \\\"failed\\\" meaning you both failed to win the pageant and get with your preferred romantic interests. You've kept notes, but it's been difficult since there are no visible stats. Maybe another try wouldn't hurt.\",\"type\":\"paragraph\"}},\"aub_see_p1.everyone\":{\"id\":\"aub_see_p1.everyone\",\"options\":[{\"id\":\"@aub_see_p1.boring\",\"title\":\"\\\"It's such a boring question...\\\"\"},{\"id\":\"@aub_see_p1.feels\",\"title\":\"\\\"It just feels wrong...\\\"\"},{\"id\":\"@aub_see_p1.idk\",\"title\":\"\\\"I don't know...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Everyone's been asking that...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Aubrey laughs. \\\"Hey, it's an important question! It's your entire future! The rest of your life is on the line!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, but, it's just... kind of...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"What is it? What's wrong?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your words will have consequences, believe it or not. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"food_p1.drinks\":{\"id\":\"food_p1.drinks\",\"chooseIf\":{\"$code\":\"return ((Q['thirst'] || 0) > 5);\"},\"unavailableSubtitle\":\"You don't really want to drink anything anymore.\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\"}],\"options\":[{\"id\":\"@food_p1.carbonated_beverages\",\"title\":\"Carbonated beverages.\"},{\"id\":\"@food_p1.fruity_beverages\",\"title\":\"Fruit-based beverages.\"},{\"id\":\"@food_p1.alcoholic_beverages\",\"title\":\"Alcoholic beverages.\"},{\"id\":\"@food_p1.water\",\"title\":\"Water.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"one.stephanie\":{\"id\":\"one.stephanie\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Stephanie\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.beans\":{\"id\":\"phase_2.beans\",\"onArrival\":[{\"$code\":\"Q['food'].push('string beans'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"You use chopsticks to grab a few stir-fried string beans. They're dripping in oil.\",\"type\":\"paragraph\"}},\"em_see_p1.how_so\":{\"id\":\"em_see_p1.how_so\",\"options\":[{\"id\":\"@em_see_p1.doing_great\",\"title\":\"\\\"I'm doing great!\\\"\"},{\"id\":\"@em_see_p1.doing_alright\",\"title\":\"\\\"I've been doing alright...\\\"\"},{\"id\":\"@em_see_p1.doing_no_idea\",\"title\":\"\\\"Um...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, how so?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Just, things kind of sucked with my parents recently. And college. And like, the state of the world in general I guess.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Sorry.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, it's not your fault at all.\\\" Emily shakes her head. \\\"So, enough about myself. How are you doing?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"p2_convos.intros_9_f2\":{\"id\":\"p2_convos.intros_9_f2\",\"options\":[{\"id\":\"@p2_convos.intros_9_f4\",\"title\":\"\\\"I was in a beauty pageant once?\\\"\"},{\"id\":\"@p2_convos.intros_9_f3\",\"title\":\"\\\"Nothing's cool about me.\\\"\"}],\"content\":{\"content\":\"You aren't really going to say something like that.\",\"type\":\"paragraph\"}},\"miri_see_p1.date\":{\"id\":\"miri_see_p1.date\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.yes_date\",\"title\":\"I still want this. \\\"Yeah...\\\"\"},{\"id\":\"@miri_see_p1.no_date\",\"title\":\"It's over. \\\"No, sorry...\\\"\"},{\"id\":\"@miri_see_p1.um_date\",\"title\":\"I have no idea what's happening anymore. \\\"Um...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Anyway, why haven't you replied to my messages for so long?,\\\" she asks. \\\"This is what they call ghosting, right? Like, do we still have a thing?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Well? What do you think? You close your eyes for a moment. It doesn't help. The world swirls around you. All your failures and fuckups are coming into clarity.\"},{\"type\":\"paragraph\",\"content\":\"Miri is waiting. Your brain is in agony.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-2\",\"content\":\"< Miri will remember this. >\"}}]},\"phone_p1.pif\":{\"id\":\"phone_p1.pif\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\"}],\"options\":[{\"id\":\"@phone_p1.games\",\"title\":\"Play more games.\"},{\"id\":\"@phone_p1.options\",\"title\":\"Keep using your phone.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"You've been playing this game for a while without getting very far. It's an old-fashioned text adventure about a spy infiltrating a research base, and it is very difficult. You stop playing after dying a few times.\",\"type\":\"paragraph\"}},\"aub_see_p1.boring\":{\"id\":\"aub_see_p1.boring\",\"options\":[{\"id\":\"@aub_see_p1.idk_2\",\"title\":\"\\\"I don't know...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's just kind of a boring question.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Then do you have any more interesting questions? Anything you would rather talk about?\\\"\"}]},\"food_p1.carbonated_beverages\":{\"id\":\"food_p1.carbonated_beverages\",\"onArrival\":[{\"$code\":\"Q['thirst'] = (Q['thirst'] || 0) - 2;\"}],\"options\":[{\"id\":\"@food_p1.food_choices\",\"title\":\"Look at other snacks or drinks.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"There's Coke, Diet Coke, Sprite, stuff like that.\"},{\"type\":\"paragraph\",\"content\":\"You are not a habitual consumer of carbonated beverages. But you consume a can of Sprite anyway. It's alright. So yeah.\"}]},\"one.vivian\":{\"id\":\"one.vivian\",\"goTo\":[{\"id\":\"one.name\"}],\"onArrival\":[{\"$code\":\"Q['first_name'] = \\\"Vivian\\\";\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.tofu\":{\"id\":\"phase_2.tofu\",\"onArrival\":[{\"$code\":\"Q['food'].push('tofu'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"These are tofu cubes with a meatball stuffed inside. You take a few.\",\"type\":\"paragraph\"}},\"em_see_p1.sorry_about_everything\":{\"id\":\"em_see_p1.sorry_about_everything\",\"options\":[{\"id\":\"@em_see_p1.doing_great\",\"title\":\"\\\"I'm doing great!\\\"\"},{\"id\":\"@em_see_p1.doing_alright\",\"title\":\"\\\"I've been doing alright...\\\"\"},{\"id\":\"@em_see_p1.doing_no_idea\",\"title\":\"\\\"Um...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"It's not your fault. Well, mostly not your fault. Actually, totally not your fault at all.\\\" She smiles(?) to herself. \\\"So, enough about myself. How are you doing?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"p2_convos.intros_9_f4\":{\"id\":\"p2_convos.intros_9_f4\",\"goTo\":[{\"id\":\"p2_convos.next_topic\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: Um, I... uh... I was in a beauty pageant once?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Yeah, I remember that! That was back in high school, right? How did it go?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: Um, it could have gone better.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: So, um, anyway...\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"miri_see_p1.yes_date\":{\"id\":\"miri_see_p1.yes_date\",\"onArrival\":[{\"$code\":\"Q['miri_date'] = 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.anxiety\",\"title\":\"\\\"I have anxiety...\\\"\"},{\"id\":\"@miri_see_p1.busy\",\"title\":\"\\\"I've been busy...\\\"\"},{\"id\":\"@miri_see_p1.no_reason\",\"title\":\"\\\"I don't know...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, yeah, I still, um,... like you.\\\" You wonder if you're blushing as you avert her gaze.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Really? Hmm. Then why didn't you keep in touch? It didn't use to be this bad.\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Miri will probably remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 5);\"}}]}},\"phone_p1.media\":{\"id\":\"phone_p1.media\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['despair'] = (Q['despair'] || 0) + 1;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"maxVisits\":1,\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) < (Q['p1_time'] || 0));\"},\"options\":[{\"id\":\"@phone_p1.options\",\"title\":\"Keep using your phone.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You're basically a lurker on every social media platform you have an account on. It's the anxiety. The \\\"mortifying ordeal of being known\\\" or something like that.\"},{\"type\":\"paragraph\",\"content\":\"You spend a few minutes checking the latest updates from around the world. It's not very interesting, but it makes you feel more connected to the rest of humanity, at least for a little while. You check your five email accounts too. It's not interesting, but it's something to do.\"}],\"countVisitsMax\":1},\"aub_see_p1.idk_2\":{\"id\":\"aub_see_p1.idk_2\",\"options\":[{\"id\":\"@aub_see_p1.hang_around\",\"title\":\"Just hang around?\"},{\"id\":\"@aub_see_p1.leave\",\"title\":\"exit this area.\"}],\"content\":{\"content\":\"Before you can say anything, someone approaches, an adult. An older adult; you keep forgetting that you're technically an adult too. He greets Aubrey.\",\"type\":\"paragraph\"}},\"food_p1.fruity_beverages\":{\"id\":\"food_p1.fruity_beverages\",\"onArrival\":[{\"$code\":\"Q['thirst'] = (Q['thirst'] || 0) - 3;\"}],\"options\":[{\"id\":\"@food_p1.food_choices\",\"title\":\"Look at other snacks or drinks.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"There's apple juice, orange juice, sparkling apple cider.\"},{\"type\":\"paragraph\",\"content\":\"You drink half a cup of apple juice.\"}]},\"one.name\":{\"id\":\"one.name\",\"goTo\":[{\"id\":\"one.lesbian\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"Right, your English name is \",{\"type\":\"insert\",\"insert\":1},\". \"],\"predicate\":0},\" \",{\"type\":\"conditional\",\"content\":\"Right, despite everything your English name is still Karen.\",\"predicate\":2}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['first_name'] != \\\"Karen\\\");\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['first_name'] == \\\"Karen\\\");\"}}]}},\"phase_2.cauli\":{\"id\":\"phase_2.cauli\",\"onArrival\":[{\"$code\":\"Q['food'].push('chicken and cauliflower'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"You take some of the cauliflower and chicken.\",\"type\":\"paragraph\"}},\"em_see_p1.em_dodging\":{\"id\":\"em_see_p1.em_dodging\",\"options\":[{\"id\":\"@em_see_p1.doing_great\",\"title\":\"\\\"I'm doing great!\\\"\"},{\"id\":\"@em_see_p1.doing_alright\",\"title\":\"\\\"I've been doing alright...\\\"\"},{\"id\":\"@em_see_p1.doing_no_idea\",\"title\":\"\\\"Um...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Oh...\\\" You aren't sure whether to prompt for more. She isn't exactly forthcoming. Thus, the silence resumes.\"},{\"type\":\"paragraph\",\"content\":\"A long pause ensues, before Emily asks, \\\"So, how are you doing?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um...\\\" It takes a moment to get your bearings.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"p2_convos.intros_9_f3\":{\"id\":\"p2_convos.intros_9_f3\",\"goTo\":[{\"id\":\"p2_convos.next_topic\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"zq\\\">\"},\"YOU: Um... I don't know. There's nothing cool about me. Nothing at all.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Aw, that's not true! There's a lot of cool things about you!\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Miri smiles at you.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Yeah! You don't have to be so self-deprecating all the time.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: So, um, anyway...\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"miri_see_p1.no_date\":{\"id\":\"miri_see_p1.no_date\",\"onArrival\":[{\"$code\":\"Q['miri_date'] = -1;\\nQ['despair'] = (Q['despair'] || 0) + 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.sorry\",\"title\":\"\\\"Sorry...\\\"\"},{\"id\":\"@miri_see_p1.you_too\",\"title\":\"\\\"You could have talked to me first...\\\"\"},{\"id\":\"@miri_see_p1.actually\",\"title\":\"\\\"Actually, I still...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"No, um, sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's what I thought.\\\" She sighs. \\\"Well, at least that confirms it. You could have given me some warning, you know? Instead of ghosting?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Miri will remember this? >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"phone_p1.papers\":{\"id\":\"phone_p1.papers\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\"}],\"maxVisits\":1,\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) < (Q['p1_time'] || 0));\"},\"options\":[{\"id\":\"@phone_p1.options\",\"title\":\"Keep using your phone.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It might be a bad idea to try to do work at a party, but you have to try anyways. You open up the mobile-optimized pubmed central website and loop up the papers your professor assigned, something about T-cell differentiation.\"},{\"type\":\"paragraph\",\"content\":\"It's a fool's errand, as usual. You can't concentrate on the paper, not when the entire internet is there to distract you, not when the sounds of the party are going off all around you.\"},{\"type\":\"paragraph\",\"content\":\"Ugh. Maybe it's time to do something else.\"}],\"countVisitsMax\":1},\"aub_see_p1.feels\":{\"id\":\"aub_see_p1.feels\",\"options\":[{\"id\":\"@aub_see_p1.idk_2\",\"title\":\"\\\"I don't know...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It just feels kind of wrong...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"What do you mean? How is it wrong?\\\"\"}]},\"food_p1.alcoholic_beverages\":{\"id\":\"food_p1.alcoholic_beverages\",\"unavailableSubtitle\":\"You already have a drink.\",\"chooseIf\":{\"$code\":\"return ((((Q['carrying_beer'] || 0)===0) && ((Q['carrying_wine'] || 0)===0)) && ((Q['carrying_baijiu'] || 0)===0));\"},\"options\":[{\"id\":\"@food_p1.beer\",\"title\":\"Get a beer.\"},{\"id\":\"@food_p1.wine\",\"title\":\"Get some wine.\"},{\"id\":\"@food_p1.baijiu\",\"title\":\"Get some baijiu.\"},{\"id\":\"@food_p1.food_choices\",\"title\":\"On second thought, no.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Right, you're over 21. You can legally drink alcoholic beverages now. Which you would be more inclined to do if they didn't taste so bad.\"},{\"type\":\"paragraph\",\"content\":\"They have some beer, wine, 白酒 (baijiu, Chinese liquor). At least one man has already started to drink a beer.\"}]},\"one.name_dislike\":{\"id\":\"one.name_dislike\",\"goTo\":[{\"id\":\"one.lesbian\"}],\"content\":{\"content\":\"With the recent rise of various connotations, Karen is becoming less tenable as an assigned name. Nevertheless, you have stuck with it for the sake of stability, if nothing else.\",\"type\":\"paragraph\"}},\"phase_2.shrimp\":{\"id\":\"phase_2.shrimp\",\"onArrival\":[{\"$code\":\"Q['food'].push('shrimp and bok choy'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"You take some of the shrimp and bok choy.\",\"type\":\"paragraph\"}},\"em_see_p1.em_asks\":{\"id\":\"em_see_p1.em_asks\",\"onArrival\":[{\"$code\":\"Q['em_int'] = (Q['em_int'] || 0) + 1;\\nQ['time'] = (Q['time'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.doing_great\",\"title\":\"\\\"I'm doing great!\\\"\"},{\"id\":\"@em_see_p1.doing_alright\",\"title\":\"\\\"I've been doing alright...\\\"\"},{\"id\":\"@em_see_p1.doing_no_idea\",\"title\":\"\\\"Um...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So, how are you doing?\\\", Emily asks, interrupting the silence.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um...\\\" It takes a moment to get your bearings.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"p2_convos.next_topic\":{\"id\":\"p2_convos.next_topic\",\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) < (Q['p2_time'] || 0));\"},\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\"}],\"maxChoices\":1,\"options\":[{\"id\":\"#topic_start\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"miri_see_p1.um_date\":{\"id\":\"miri_see_p1.um_date\",\"onArrival\":[{\"$code\":\"Q['miri_date'] = -1;\\nQ['despair'] = (Q['despair'] || 0) + 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.sorry\",\"title\":\"\\\"Sorry...\\\"\"},{\"id\":\"@miri_see_p1.you_too\",\"title\":\"\\\"You could have talked to me first...\\\"\"},{\"id\":\"@miri_see_p1.actually\",\"title\":\"\\\"Actually, I still...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um... I don't know...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I'll take that as a no, unless you disagree?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"She sighs. \\\"That's what I thought. You could have given me some warning, you know? Instead of ghosting on me? God.\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Miri will remember this? >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"phone_p1.wiki_1\":{\"id\":\"phone_p1.wiki_1\",\"options\":[{\"id\":\"@phone_p1.options\",\"title\":\"Keep using your phone.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"You end up at the Wikipedia pages for various suburban localities of major metropolitan areas in the United States. Did you know about the populaion density of Overland Park, KS before? Yes, you did in fact. You've read all of these things before.\",\"type\":\"paragraph\"}},\"aub_see_p1.idk\":{\"id\":\"aub_see_p1.idk\",\"options\":[{\"id\":\"@aub_see_p1.idk_2\",\"title\":\"\\\"Um...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I don't know. I just... don't want to talk about it.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Why? What's wrong?\\\"\"}]},\"food_p1.beer\":{\"id\":\"food_p1.beer\",\"unavailableSubtitle\":\"You're already carrying something.\",\"viewIf\":{\"$code\":\"return ((((Q['carrying_beer'] || 0)===0) && ((Q['carrying_wine'] || 0)===0)) && ((Q['carrying_baijiu'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['carrying_beer'] = 1;\\nQ['thirst'] = (Q['thirst'] || 0) - 1;\\nQ['alcohol_consumption'] = (Q['alcohol_consumption'] || 0) + 1;\"}],\"options\":[{\"id\":\"@food_p1.food_choices\",\"title\":\"Look at other snacks or drinks.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"You open a bottle of Harbin beer and take a sip. It tastes... bad. You don't know how people can unironically enjoy drinking this stuff. You aren't going to finish this, but you take the bottle with you.\",\"type\":\"paragraph\"}},\"one.name_chinese\":{\"id\":\"one.name_chinese\",\"goTo\":[{\"id\":\"one.lesbian\"}],\"content\":{\"content\":\"Most people pronounce Qiuyi like \\\"Chewy\\\", which is emphatically not a correct pronounciation; the actual sounds do not exist in English. Thus, Karen is still your most commonly used name among English-speaking acquaintances, despite its recently acquired connotations.\",\"type\":\"paragraph\"}},\"phase_2.lotus\":{\"id\":\"phase_2.lotus\",\"onArrival\":[{\"$code\":\"Q['food'].push('lotus root'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"You take some of the lotus root and pork.\",\"type\":\"paragraph\"}},\"em_see_p1.doing_great\":{\"id\":\"em_see_p1.doing_great\",\"options\":[{\"id\":\"@em_see_p1.lots_of_friends\",\"title\":\"(lie) \\\"I've made lots of friends!\\\"\"},{\"id\":\"@em_see_p1.doing_well_in_class\",\"title\":\"(lie) \\\"I'm doing well in my classes!\\\"\"},{\"id\":\"@em_see_p1.doing_research\",\"title\":\"\\\"I've been doing research...\\\"\"},{\"id\":\"@em_see_p1.grad_school\",\"title\":\"\\\"I've applied to grad school!\\\"\"},{\"id\":\"@em_see_p1.missed_you\",\"title\":\"\\\"I've really missed you...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I've been doing great!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh? How so?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.eat\":{\"id\":\"p2_convos.eat\",\"title\":\"Eat.\",\"unavailableSubtitle\":\"You aren't really hungry at all.\",\"chooseIf\":{\"$code\":\"return ((Q['hunger'] || 0) > 0);\"},\"onArrival\":[{\"$code\":\"// randomly select a food to eat...\\nvar food_id = Math.floor(Math.random()*(Q['food'].length));\\nQ['food_item'] = Q['food'][food_id];\\nQ['food_consumption'] += 1;\\nQ['hunger'] -= 0.5;\\nvar descs = Q['food_descs'][Q['food_item']];\\nvar food_desc_id = Math.floor(Math.random()*(descs.length));\\nQ['food_desc'] = descs[food_desc_id];\"}],\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"You take a bite of the \",{\"type\":\"insert\",\"insert\":0},\". It tastes \",{\"type\":\"insert\",\"insert\":1},\".\"]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['food_item'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['food_desc'] || 0);\"}}]}},\"miri_see_p1.you_too\":{\"id\":\"miri_see_p1.you_too\",\"onArrival\":[{\"$code\":\"Q['miri_int'] = (Q['miri_int'] || 0) + 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.talk_more\",\"title\":\"Just say something?\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave, before she does.\"},{\"id\":\"@miri_see_p1.quiet_2\",\"title\":\"Wait around.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, you could have talked to me first...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Look, I tried, but you just didn't respond! What was I supposed to do? Spam you with messages? I didn't want to be the clingy type.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Maybe that would have worked.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Ugh.\\\" Miri throws her hands up. \\\"Nevermind. Want some, uh, haw flakes?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Sure.\\\" She hands one from her plate. You eat it.\"},{\"type\":\"paragraph\",\"content\":\"There is a quiet moment. Miri looks as if she's about to get up.\"}]},\"phone_p1.wiki_2\":{\"id\":\"phone_p1.wiki_2\",\"onArrival\":[{\"$code\":\"Q['despair'] = (Q['despair'] || 0) + 1;\"}],\"options\":[{\"id\":\"@phone_p1.options\",\"title\":\"Keep using your phone.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"type\":\"paragraph\",\"content\":[\"From the front page, you somehow navigate to pages for various life-threatening diseases. \",{\"type\":\"emphasis-1\",\"content\":\"Are you\"},\" having a pulmonary thromboembolism or an intracranial hemmorage right now? How do you know you're not? You have a headache. Is it cancer? It's probably not something \",{\"type\":\"emphasis-1\",\"content\":\"that\"},\" bad, but what do you know? There are so many ways to die. That's why you're studying biology, to help people not die as much, right? Right?\"]}},\"aub_see_p1.grad_school\":{\"id\":\"aub_see_p1.grad_school\",\"onArrival\":[{\"$code\":\"Q['aub_knows_grad'] = 1;\"}],\"options\":[{\"id\":\"@aub_see_p1.you2\",\"title\":\"\\\"What about you?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Grad school, probably? In molecular biology I guess.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Have you already applied?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, that's great! Where did you apply?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You list all the universities.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Those are all really great places!\\\"\"}]},\"food_p1.wine\":{\"id\":\"food_p1.wine\",\"unavailableSubtitle\":\"You're already carrying something.\",\"viewIf\":{\"$code\":\"return ((((Q['carrying_beer'] || 0)===0) && ((Q['carrying_wine'] || 0)===0)) && ((Q['carrying_baijiu'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['carrying_wine'] = 1;\\nQ['thirst'] = (Q['thirst'] || 0) - 1;\\nQ['alcohol_consumption'] = (Q['alcohol_consumption'] || 0) + 1;\"}],\"options\":[{\"id\":\"@food_p1.food_choices\",\"title\":\"Look at other snacks or drinks.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"Red wine is supposed to be healthy, right? You pour a small bit. It tastes...bad. Isn't wine supposed to taste good? You aren't going to finish this, but you take the glass with you.\",\"type\":\"paragraph\"}},\"one.lesbian\":{\"id\":\"one.lesbian\",\"options\":[{\"id\":\"@one.by_the_way\",\"title\":\"And by the way, you're a lesbian.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"phase_2.tomato\":{\"id\":\"phase_2.tomato\",\"onArrival\":[{\"$code\":\"Q['food'].push('tomato and eggs'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"One of the most common Chinese dishes. You spoon some of the tomato-egg stir fry onto your plate.\",\"type\":\"paragraph\"}},\"em_see_p1.doing_alright\":{\"id\":\"em_see_p1.doing_alright\",\"options\":[{\"id\":\"@em_see_p1.tough\",\"title\":\"\\\"It's been tough...\\\"\"},{\"id\":\"@em_see_p1.doing_research\",\"title\":\"\\\"I've been doing research...\\\"\"},{\"id\":\"@em_see_p1.grad_school\",\"title\":\"\\\"I've applied to grad school!\\\"\"},{\"id\":\"@em_see_p1.missed_you\",\"title\":\"\\\"I've really missed you...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I've been doing alright...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh? What's been happening?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.college_1\":{\"id\":\"p2_convos.college_1\",\"title\":\"Aubrey talks about college.\",\"tags\":[\"topic_college\",\"phase2\",\"topic_start\"],\"viewIf\":{\"$code\":\"return (((Q['phase'] || 0)===2) && ((Q['topic_college'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['topic_college'] = 1;\\nQ['time'] = (Q['time'] || 0) + 1;\"}],\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: So, how's college going? We're all seniors now, right? How are you feeling that it's almost over?\",{\"type\":\"magic\",\"content\":\"</span>\"}]}},\"miri_see_p1.sorry\":{\"id\":\"miri_see_p1.sorry\",\"options\":[{\"id\":\"@miri_see_p1.sorry_2\",\"title\":\"\\\"Sorry...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Look, you keep saying sorry but... Do you still want to talk to me? Like, do you actually enjoy interacting with me?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yes, of course...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Well, if that's true, you're kind of terrible at showing it.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"God, can you stop saying sorry? Next time, can you at least try to do a little better?\\\"\"}]},\"phone_p1.wiki_3\":{\"id\":\"phone_p1.wiki_3\",\"onArrival\":[{\"$code\":\"Q['despair'] = (Q['despair'] || 0) + 1;\"}],\"options\":[{\"id\":\"@phone_p1.options\",\"title\":\"Keep using your phone.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"You quasi-randomly navigate to the pages for various small geographical localities. The Pacific Islands are particularly interesting for some reason. Pitcairn Island, partially populated by descendants of naval mutineers. The Society Islands, upon which we live whether we like it or not. Nauru, site of massive phosphate mining and environmental collapse. It's all rather sad.\",\"type\":\"paragraph\"}},\"aub_see_p1.you\":{\"id\":\"aub_see_p1.you\",\"onArrival\":[{\"$code\":\"Q['kar_knows_aub_grad'] = 1;\"}],\"options\":[{\"id\":\"@aub_see_p1.everyone\",\"title\":\"\\\"Everyone's been asking that.\\\"\"},{\"id\":\"@aub_see_p1.grad_school\",\"title\":\"\\\"Grad school.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, what about you?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I'm going to med school. I've already applied, so it's all a matter of waiting now. Haha. Now it's your turn. Are you going to grad school, med school, working? Something else?\\\"\"}]},\"food_p1.baijiu\":{\"id\":\"food_p1.baijiu\",\"unavailableSubtitle\":\"You don't want that stuff.\",\"chooseIf\":{\"$code\":\"return ((Q['want_baijiu'] || 0) > 0);\"},\"options\":[{\"id\":\"@food_p1.food_choices\",\"title\":\"Look at other snacks or drinks.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"The baijiu smells like rubbing alcohol. And it probably tastes about as good.\",\"type\":\"paragraph\"}},\"one.by_the_way\":{\"id\":\"one.by_the_way\",\"options\":[{\"id\":\"@one.stand\",\"title\":\"And you can't stand it.\"},{\"id\":\"@one.goals\",\"title\":\"But, it could be alright?\"},{\"id\":\"@one.opt\",\"title\":\"You're looking forward to it.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Or something like that.\"},{\"type\":\"paragraph\",\"content\":\"It is New Year's Eve, which means that it is time for a Chinese family party, as there is every year. Mom and her friends are the instigators, and you're always along for the ride. The party is occurring at the Gao household, who have recently moved into a larger house in a more suburban and affluent town. Their family has been friends with your family for the past ten years at least.\"},{\"type\":\"paragraph\",\"content\":\"Which brings you to the truly agonizing part of this party. Everyone you grew up with between the ages of 10 and 18 are here. Your old friends and acquaintances, and their parents and siblings and everyone else. People you thought you had left behind, or had left you behind. It's as if your past has come back.\"}]},\"phase_2.lamb\":{\"id\":\"phase_2.lamb\",\"onArrival\":[{\"$code\":\"Q['food'].push('lamb noodles'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"content\":{\"content\":\"This was mom's dish, a specialty of her home province of Shaanxi. The spicy noodes with fried lamb are always popular.\",\"type\":\"paragraph\"}},\"em_see_p1.doing_no_idea\":{\"id\":\"em_see_p1.doing_no_idea\",\"options\":[{\"id\":\"@em_see_p1.tough\",\"title\":\"\\\"It's been tough...\\\"\"},{\"id\":\"@em_see_p1.doing_research\",\"title\":\"\\\"I've been doing research...\\\"\"},{\"id\":\"@em_see_p1.grad_school\",\"title\":\"\\\"I've applied to grad school!\\\"\"},{\"id\":\"@em_see_p1.missed_you\",\"title\":\"\\\"I've really missed you...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um...\\\" You aren't sure what to say. You never know what to say.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.politics_1\":{\"id\":\"p2_convos.politics_1\",\"title\":\"William talks about politics.\",\"tags\":[\"topic_start\",\"phase2\",\"topic_politics\"],\"viewIf\":{\"$code\":\"return (((Q['phase'] || 0)===2) && ((Q['topic_politics'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['topic_politics'] = 1;\"}],\"setJump\":\"p2_convos.politics_2\",\"options\":[{\"id\":\"@p2_convos.eat\"},{\"id\":\"@p2_convos.politics_2\",\"title\":\"Listen.\"},{\"id\":\"@p2_convos.politics_1_interject\",\"title\":\"Interject.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: So, how about that election?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The table is silent. No one wants to be the first person to respond.\"}]},\"miri_see_p1.sorry_2\":{\"id\":\"miri_see_p1.sorry_2\",\"onArrival\":[{\"$code\":\"Q['miri_int'] = (Q['miri_int'] || 0) + 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.talk_more\",\"title\":\"Just say something?\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave, before she does.\"},{\"id\":\"@miri_see_p1.quiet_2\",\"title\":\"Wait around.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri laughs. \\\"Are you doing that on purpose now?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Have I ever done anything on purpose?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah...\\\"\"},{\"type\":\"paragraph\",\"content\":\"There is a quiet moment. Miri looks as if she's about to get up.\"}]},\"phone_p1.cif\":{\"id\":\"phone_p1.cif\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['cif_seen'] = (Q['cif_seen'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"phone_p1.cif_a1\"},{\"id\":\"phone_p1.cif_a2\"},{\"id\":\"phone_p1.cif_a3\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"aub_see_p1.you2\":{\"id\":\"aub_see_p1.you2\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, what about you?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I'm going to med school. I've already applied, so it's all a matter of waiting now. Haha.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Congratulations.\\\"\"}]},\"food_p1.water\":{\"id\":\"food_p1.water\",\"onArrival\":[{\"$code\":\"Q['thirst'] = (Q['thirst'] || 0) - 4;\"}],\"options\":[{\"id\":\"@food_p1.food_choices\",\"title\":\"Look at other snacks or drinks.\"},{\"id\":\"@root\",\"title\":\"Do something else.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It's rare that you drink any beverage besides water. Because that's the kind of bland, boring person that you are.\"},{\"type\":\"paragraph\",\"content\":\"You drink a cup of water. So yeah. You're less thirsty now.\"}]},\"food_p1\":{\"id\":\"food_p1\",\"type\":\"scene\",\"title\":\"Food\",\"subtitle\":\"The ever-inviting lure of snacks...\",\"unavailableSubtitle\":\"There's something else going on...\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['food_seen'] = (Q['food_seen'] || 0) + 1;\\nQ['time'] = (Q['time'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((((Q['phase'] || 0)===1) && ((Q['food_seen'] || 0) <= 3)) && ((Q['time'] || 0) < (Q['p1_time'] || 0)));\"},\"chooseIf\":{\"$code\":\"return ((Q['has_interruption'] || 0)===0);\"},\"goTo\":[{\"id\":\"food_p1.food_choices\"}],\"tags\":[\"phase1\",\"food\"],\"setBg\":\"backgrounds/food_2_filtered.jpg\",\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"One of the highlights of these social gatherings is the cornucopia of foodstuffs present. Currently, dinner has not yet started, but the snacks and beverages are out in a tantalizing display.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your food choices will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 8);\"}}]}},\"one.stand\":{\"id\":\"one.stand\",\"onArrival\":[{\"$code\":\"Q['intro_flag'] = \\\"pessimistic\\\";\"}],\"options\":[{\"id\":\"@one.non_opt_1\"},{\"id\":\"@one.non_opt_2\"},{\"id\":\"@one.optimizing\"}],\"content\":{\"content\":\"You didn't want to come here. But it was necessary, mom said. Why didn't you want to meet your friends, mom said. You don't have many opportunities to visit anymore, mom said. So, now you're here. And you're supposed to... hang out? Or something like that.\",\"type\":\"paragraph\"}},\"phase_2.donggua\":{\"id\":\"phase_2.donggua\",\"onArrival\":[{\"$code\":\"Q['food'].push('soup'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"maxVisits\":1,\"content\":{\"content\":\"You spoon some of the winter melon soup into a small plastic bowl.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"em_see_p1.lots_of_friends\":{\"id\":\"em_see_p1.lots_of_friends\",\"viewIf\":{\"$code\":\"return ((Q['prev_em'] == \\\"date\\\") || (Q['prev_em'] == \\\"friends\\\"));\"},\"onArrival\":[{\"$code\":\"Q['despair'] = (Q['despair'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.doing_research\",\"title\":\"\\\"I've been doing research...\\\"\"},{\"id\":\"@em_see_p1.grad_school\",\"title\":\"\\\"I've applied to grad school!\\\"\"},{\"id\":\"@em_see_p1.missed_you\",\"title\":\"\\\"I've really missed you...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"Are you really going to lie like that? What's the point? What would you be trying to prove? You're not doing great, and Emily can probably tell.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, I'm making a lot of friends! Haha.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Haha.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That was a joke.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Sorry.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, it's not your fault... well, mostly not your fault.\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.politics_1_interject\":{\"id\":\"p2_convos.politics_1_interject\",\"goTo\":[{\"id\":\"p2_convos.politics_2\"}],\"content\":{\"content\":\"You're not going to be the one to open this discussion.\",\"type\":\"paragraph\"}},\"miri_see_p1.actually\":{\"id\":\"miri_see_p1.actually\",\"options\":[{\"id\":\"@miri_see_p1.still_like\",\"title\":\"\\\"I still like you.\\\"\"},{\"id\":\"@miri_see_p1.still_want_friends\",\"title\":\"\\\"I still want to be friends.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, actually, I still...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Still what?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-2\",\"content\":\"< Miri will obviously remember this. >\"}}]},\"phone_p1.net\":{\"id\":\"phone_p1.net\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 2;\"}],\"goTo\":[{\"id\":\"phone_p1.wiki_1\"},{\"id\":\"phone_p1.wiki_2\"},{\"id\":\"phone_p1.wiki_3\"}],\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) < (Q['p1_time'] || 0));\"},\"content\":{\"content\":\"In practice, \\\"browsing the web\\\" usually means Wikipedia for you. Why not go on Wikipedia for an hour or two, when you have work to do?\",\"type\":\"paragraph\"}},\"phone_p1\":{\"id\":\"phone_p1\",\"type\":\"scene\",\"title\":\"Use your cellphone\",\"subtitle\":\"First finding a safe alcove.\",\"viewIf\":{\"$code\":\"return (((Q['phase'] || 0)===1) && ((Q['time'] || 0) < (Q['p1_time'] || 0)));\"},\"newPage\":true,\"goTo\":[{\"id\":\"phone_p1.options\"}],\"tags\":[\"phase1\",\"alone\"],\"content\":[{\"type\":\"paragraph\",\"content\":\"You have a four-year-old Android with about two hours of battery life left. But it is perfectly capable for your purposes.\"},{\"type\":\"paragraph\",\"content\":\"What do you want to do?\"}]},\"aub_see_p1.hang_around\":{\"id\":\"aub_see_p1.hang_around\",\"onArrival\":[{\"$code\":\"Q['despair'] = (Q['despair'] || 0) + 1;\\nQ['time'] = (Q['time'] || 0) + 1;\"}],\"content\":{\"content\":\"There's really nothing for you to do around here. You stand around aimlessly for a while before moving away.\",\"type\":\"paragraph\"}},\"one.goals\":{\"id\":\"one.goals\",\"onArrival\":[{\"$code\":\"Q['intro_flag'] = \\\"accepting\\\";\"}],\"options\":[{\"id\":\"@one.non_opt_1\"},{\"id\":\"@one.non_opt_2\"},{\"id\":\"@one.optimizing\"}],\"content\":{\"type\":\"paragraph\",\"content\":[\"You weren't sure if you wanted to come here, as you aren't sure about most things. But now that you're here, you might as well make the best of it. It can't be \",{\"type\":\"emphasis-1\",\"content\":\"that\"},\" bad; these people are your friends, right? You still have a nonzero amount of hope for... a genuine personal connection? Or something like that.\"]}},\"phase_2.porridge\":{\"id\":\"phase_2.porridge\",\"onArrival\":[{\"$code\":\"Q['food'].push('porridge'); Q['food_left'] -= 1;\"}],\"goTo\":[{\"id\":\"phase_2.foods\"}],\"maxVisits\":1,\"content\":{\"content\":\"You spoon some of the porridge into a bowl.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"em_see_p1.doing_well_in_class\":{\"id\":\"em_see_p1.doing_well_in_class\",\"viewIf\":{\"$code\":\"return ((Q['prev_em'] == \\\"date\\\") || (Q['prev_em'] == \\\"friends\\\"));\"},\"onArrival\":[{\"$code\":\"Q['despair'] = (Q['despair'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.doing_research\",\"title\":\"\\\"I've been doing research...\\\"\"},{\"id\":\"@em_see_p1.grad_school\",\"title\":\"\\\"I've applied to grad school!\\\"\"},{\"id\":\"@em_see_p1.missed_you\",\"title\":\"\\\"I've really missed you...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I'm doing well in class! I mean, sort of, not really.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Sorry.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, it's not your fault... well, mostly not your fault.\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.politics_2\":{\"id\":\"p2_convos.politics_2\",\"setJump\":\"p2_convos.politics_3\",\"options\":[{\"id\":\"@p2_convos.eat\"},{\"id\":\"@p2_convos.politics_3\",\"title\":\"Listen.\"},{\"id\":\"@p2_convos.politics_2_interject\",\"title\":\"Interject.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Everyone's voting for Bernie, right?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Emily smiles.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: I dunno, I'm more of a Warren guy myself.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Oh, really? Why?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: I just think that she has the best policy plans.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: What do you think about the racefaking?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: Why is that the only thing anyone ever talks about? She apologized!\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"miri_see_p1.still_like\":{\"id\":\"miri_see_p1.still_like\",\"options\":[{\"id\":\"@miri_see_p1.still_like_2\",\"title\":\"Just say it.\"},{\"id\":\"@miri_see_p1.still_want_friends\",\"title\":\"\\\"I still want to be friends.\\\"\"}],\"content\":{\"content\":\"Can you actually say something like that? Are you allowed to?\",\"type\":\"paragraph\"}},\"aub_see_p1.leave\":{\"id\":\"aub_see_p1.leave\",\"onArrival\":[{\"$code\":\"Q['despair'] = (Q['despair'] || 0) + 1;\"}],\"content\":{\"content\":\"No one is paying you much attention. You move away from Aubrey; she doesn't seem to notice.\",\"type\":\"paragraph\"}},\"aub_see_p1\":{\"id\":\"aub_see_p1\",\"type\":\"scene\",\"title\":\"Aubrey Gao\",\"subtitle\":\"Talking around the dinner table...\",\"onArrival\":[{\"$code\":\"Q['aub_int'] = (Q['aub_int'] || 0) + 1;\\nQ['time'] = (Q['time'] || 0) + 1;\\nQ['energy'] = (Q['energy'] || 0) - 1;\"}],\"viewIf\":{\"$code\":\"return (((((Q['aub_intro_seen'] || 0)===0) && ((Q['phase'] || 0)===1)) && ((Q['energy'] || 0) > 0)) && ((Q['time'] || 0) < (Q['p1_time'] || 0)));\"},\"newPage\":true,\"tags\":[\"phase1\",\"aub\"],\"options\":[{\"id\":\"@aub_see_p1.stare\",\"title\":\"Stare at Aubrey.\"}],\"content\":{\"content\":\"Aubrey stands around a table with her boyfriend and a few other adults, talking and smiling.\",\"type\":\"paragraph\"}},\"one.opt\":{\"id\":\"one.opt\",\"onArrival\":[{\"$code\":\"Q['intro_flag'] = \\\"optimistic\\\";\"}],\"options\":[{\"id\":\"@one.non_opt_1\"},{\"id\":\"@one.non_opt_2\"},{\"id\":\"@one.optimizing\"}],\"content\":{\"content\":\"You have been socially deficient for far too long. This is an opportunity. But for what, exactly? Hopefully not to make a huge mess of yourself. It's most likely impossible, but you still hold out hope for genuine interpersonal connection. Or something like that.\",\"type\":\"paragraph\"}},\"phase_2.end_food\":{\"id\":\"phase_2.end_food\",\"options\":[{\"id\":\"@p2_convos\",\"title\":\"Join the table.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Your plate is filled. You see Emily, Miri, Aubrey, and William sit together in one of the dining tables. There's an open seat for you.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"你跟你朋友们坐吧 \",{\"type\":\"emphasis-1\",\"content\":\"You should sit with your friends\"},\",\\\" mom says, pointing you in the direction of their table. Kevin has already gone into the basement with some of the younger kids.\"]}]},\"phase_2\":{\"id\":\"phase_2\",\"type\":\"scene\",\"title\":\"Dinnertime...\",\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) >= (Q['p1_time'] || 0));\"},\"goTo\":[{\"id\":\"phase_2.late\",\"predicate\":{\"$code\":\"return ((Q['time'] || 0) >= ((Q['p1_time'] || 0) + 2));\"}}],\"onArrival\":[{\"$code\":\"Q['phase'] = 2; Q['food_left'] = 6; Q['food'] = [];\\n// TODO: add more food descriptions.\\nQ['food_descs'] = {\\n'rice': ['fine', 'perfectly ordinary', 'exactly as it should'],\\n'dumplings': ['fine', 'a bit salty', 'kind of delicious'],\\n'baozi': ['fine', 'good', 'juicy', 'flavorful'],\\n'string beans': ['fine', 'a little salty', 'good'],\\n'tofu': ['fine', 'good', 'decent', 'flavorful'],\\n'chicken and cauliflower': ['fine', 'bland', 'neutral', 'good'],\\n'shrimp and bok choy': ['fine', '...vegetable-like', 'oily'],\\n'lotus root': ['fine', 'starchy', 'crunchy'],\\n'tomato and eggs': ['fine', 'exactly as it should', 'sweet-ish'],\\n'lamb noodle': ['fine', '...meaty', 'kind of spicy', 'like home, somehow'],\\n'soup': ['fine', 'flavorful', 'savory', 'nostalgic'],\\n'porridge': ['fine', 'plain', 'familiar']\\n};\"}],\"setBg\":\"backgrounds/food_1_filtered.jpg\",\"newPage\":true,\"options\":[{\"id\":\"@phase_2.join\",\"title\":\"You join the crowd.\"}],\"content\":{\"content\":\"The call for dinner comes. \\\"开饭了！\\\", voices shout in turn.\",\"type\":\"paragraph\"}},\"em_see_p1.doing_research\":{\"id\":\"em_see_p1.doing_research\",\"goTo\":[{\"id\":\"em_see_p1.lull\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I've been doing research...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah? What about?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, it's in the biology department, about using genome-I mean epigenome-sequencing to assess development.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. That's cool. I've been kind of involved in climate science research at my college, but it's such a small school so it's kind of hard.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's great...\\\"\"}]},\"p2_convos.politics_2_interject\":{\"id\":\"p2_convos.politics_2_interject\",\"goTo\":[{\"id\":\"p2_convos.politics_3\"}],\"content\":{\"content\":\"There is nothing for you to say. Nothing at all.\",\"type\":\"paragraph\"}},\"miri_see_p1.still_like_2\":{\"id\":\"miri_see_p1.still_like_2\",\"goTo\":[{\"id\":\"miri_see_p1.still_want_friends\"}],\"content\":{\"content\":\"No. You aren't going to say it.\",\"type\":\"paragraph\"}},\"one.non_opt_1\":{\"id\":\"one.non_opt_1\",\"title\":\"Parties aren't really your thing...\",\"onArrival\":[{\"$code\":\"Q['optimizing'] = 0;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You've never done well at these parties in the past, and there's no reason to believe that you'd do better this time. They say that there's no worse place to be alone than in a crowd...\"},{\"type\":\"paragraph\",\"content\":\"But at least the food will be good, right?\"}]},\"em_see_p1.tough\":{\"id\":\"em_see_p1.tough\",\"goTo\":[{\"id\":\"em_see_p1.lull\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, it's been tough...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah? How so?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, just like... classes and everything, not enough time to do everything you want, having to make so many decisions and worry about the future, and, um... being alone all the time but still surrounded by people. Sorry, does that make any sense?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Sorry. Yeah, I kind of get that.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Thanks...\\\"\"}]},\"p2_convos.politics_3\":{\"id\":\"p2_convos.politics_3\",\"setJump\":\"p2_convos.politics_4\",\"options\":[{\"id\":\"@p2_convos.eat\"},{\"id\":\"@p2_convos.politics_4\",\"title\":\"Listen.\"},{\"id\":\"@p2_convos.politics_3_interject\",\"title\":\"Interject.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Maybe it was bad that she doubled down in the first place? Like, the whole DNA test thing was horrible.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: Okay, I admit that was bad, but what about her policies?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ce\\\">\"},\"EMILY: They have similar policies but I think Bernie would be much better at building up the working class.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Yeah! Only overeducated middle-class types like Warren. Bernie is way more popular among actual working class people.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: Okay, but we haven't even gotten close to the nomination yet so things could change.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Can we talk about something else? Please?\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"miri_see_p1.still_want_friends\":{\"id\":\"miri_see_p1.still_want_friends\",\"options\":[{\"id\":\"@miri_see_p1.terrible\",\"title\":\"\\\"Because I'm a terrible person?\\\"\"},{\"id\":\"@miri_see_p1.idk_friends\",\"title\":\"\\\"I don't know?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I still want to be friends.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, sure. Why wouldn't we be?\\\"\"}]},\"one.non_opt_2\":{\"id\":\"one.non_opt_2\",\"title\":\"Or any social gatherings, for that matter...\",\"onArrival\":[{\"$code\":\"Q['optimizing'] = 0;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"They said that college would be a time for making friends. But do you really have any friends at college?\"},{\"type\":\"paragraph\",\"content\":\"Well that was depressing. At least the food here will be good, right?\"}]},\"em_see_p1.grad_school\":{\"id\":\"em_see_p1.grad_school\",\"goTo\":[{\"id\":\"em_see_p1.lull\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I've applied to grad schools...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah? What for? Where to?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, molecular biology and genomics and stuff. And it's a whole bunch of schools...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. That's cool. I'm applying to grad schools to, in climate science.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's great...\\\"\"}]},\"p2_convos.politics_3_interject\":{\"id\":\"p2_convos.politics_3_interject\",\"goTo\":[{\"id\":\"p2_convos.politics_4\"}],\"content\":{\"content\":\"You nod, but you aren't sure if anyone notices.\",\"type\":\"paragraph\"}},\"miri_see_p1.terrible\":{\"id\":\"miri_see_p1.terrible\",\"options\":[{\"id\":\"@miri_see_p1.talk_more\",\"title\":\"Just say something?\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave, before she does.\"},{\"id\":\"@miri_see_p1.quiet_2\",\"title\":\"Wait around.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Because I'm kind of a terrible person?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"You're not, though! You might do some really dumb things, but you're not a terrible person.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"What's the difference?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri sighs.\"},{\"type\":\"paragraph\",\"content\":\"There is a quiet moment. Miri looks as if she's about to get up.\"}]},\"one.optimizing\":{\"id\":\"one.optimizing\",\"title\":\"But after all, aren't social interactions just another optimization problem?\",\"onArrival\":[{\"$code\":\"Q['optimizing'] = 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You can approach these gatherings mechanistically, orchestrating a series of events that will achieve all of your goals in an optimal fashion, while minimizing your exposure to awkwardness and food poisoning.\"},{\"type\":\"paragraph\",\"content\":\"That's totally something you can do, right?\"}]},\"one\":{\"id\":\"one\",\"type\":\"scene\",\"title\":\"Introspect\",\"subtitle\":\"Who are you, really?\",\"viewIf\":{\"$code\":\"return ((Q['phase'] || 0)===0);\"},\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['phase'] = 1;\"}],\"tags\":[\"start\",\"top\"],\"signal\":\"{! console.log(\\\"introspect\\\"); !}\",\"options\":[{\"id\":\"@one.back_up\",\"title\":\"Back up for a minute...\"}],\"content\":{\"content\":\"Every social gathering is horrific in its own way. Over the years you have learned to adapt, to cope, to survive. The one in which you are currently attending, however, threatens to ruin you.\",\"type\":\"paragraph\"}},\"em_see_p1.lull\":{\"id\":\"em_see_p1.lull\",\"options\":[{\"id\":\"@em_see_p1.leave_emily\",\"title\":\"\\\"I'll be going...\\\"\"},{\"id\":\"@em_see_p1.missed_you\",\"title\":\"\\\"I've missed you...\\\"\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"A lull in the conversation. Emily is quiet, and you don't know what to say next.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 5);\"}}]}},\"p2_convos.politics_4\":{\"id\":\"p2_convos.politics_4\",\"goTo\":[{\"id\":\"p2_convos.next_topic\"}],\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: Yeah, sorry. I got carried away.\",{\"type\":\"magic\",\"content\":\"</span>\"}]}},\"miri_see_p1.idk_friends\":{\"id\":\"miri_see_p1.idk_friends\",\"options\":[{\"id\":\"@miri_see_p1.talk_more\",\"title\":\"Just say something?\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave, before she does.\"},{\"id\":\"@miri_see_p1.quiet_2\",\"title\":\"Wait around.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I don't know.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"See? There's nothing wrong. We can still be friends.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah. Thanks...\\\"\"},{\"type\":\"paragraph\",\"content\":\"There is a quiet moment. Miri looks as if she's about to get up.\"}]},\"em_see_p1.missed_you\":{\"id\":\"em_see_p1.missed_you\",\"viewIf\":{\"$code\":\"return ((Q['prev_em'] == \\\"date\\\") || (Q['prev_em'] == \\\"friends\\\"));\"},\"onArrival\":[{\"$code\":\"Q['em_int'] = (Q['em_int'] || 0) + 1;\\nQ['energy'] = (Q['energy'] || 0) - 1;\\nQ['em_relationship'] = (Q['em_relationship'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.yes_romantic\",\"title\":\"Yes...\"},{\"id\":\"@em_see_p1.hope_romantic\",\"title\":\"Hopefully?...\"},{\"id\":\"@em_see_p1.no_romantic\",\"title\":\"No...\"},{\"id\":\"@em_see_p1.idk_romantic\",\"title\":\"I don't know...\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I've missed you a lot... sorry...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, it's my fault too.\\\" Emily glances at you. \\\"I've missed you too.\\\"\"},{\"type\":\"paragraph\",\"content\":[\"Okay. Was your statement supposed to have \",{\"type\":\"emphasis-1\",\"content\":\"romantic\"},\" undertones?\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< You will probably think about this in the future. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 5);\"}}]}},\"p2_convos.intros_2\":{\"id\":\"p2_convos.intros_2\",\"goTo\":[{\"id\":\"p2_convos.stare_aubrey\",\"predicate\":{\"$code\":\"return ((Q['aub_seen'] || 0)===0);\"}},{\"id\":\"p2_convos.intros_3\",\"predicate\":{\"$code\":\"return ((Q['aub_seen'] || 0) > 0);\"}}],\"setJump\":\"p2_convos.intros_3\",\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: So should we go around in a circle and talk about ourselves?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Can we please talk like normal people? Instead of doing team building exercises?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ce\\\">\"},\"EMILY (looking around): None of us can act like normal people.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Okay, I'll go first. My name's Aubrey and this is my house.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: I'm William. I'm Aubrey's boyfriend.\",{\"type\":\"magic\",\"content\":\"</span>\"},\" (He chuckles to himself.)\"]}]},\"miri_see_p1.hug_kiss\":{\"id\":\"miri_see_p1.hug_kiss\",\"viewIf\":{\"$code\":\"return ((Q['miri_date'] || 0)===1);\"},\"options\":[{\"id\":\"@miri_see_p1.sit_down\",\"title\":\"Follow her.\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave and do something else.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You reach over to hug her. It feels nice, her arms wrapped around your body. Your hands are cold. She's warm.\"},{\"type\":\"paragraph\",\"content\":\"She lets go before you do. \\\"Anyway, let's go sit over here. Catch up.\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This seemingly minor action will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"em_see_p1.yes_romantic\":{\"id\":\"em_see_p1.yes_romantic\",\"goTo\":[{\"id\":\"em_see_p1.hope_romantic\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"p2_convos.intros_4\":{\"id\":\"p2_convos.intros_4\",\"goTo\":[{\"id\":\"p2_convos.stare_miri\",\"predicate\":{\"$code\":\"return ((Q['miri_seen'] || 0)===0);\"}},{\"id\":\"p2_convos.intros_5\",\"predicate\":{\"$code\":\"return ((Q['miri_seen'] || 0) > 0);\"}}],\"setJump\":\"p2_convos.intros_5\",\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: You already know me though.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: I don't.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ce\\\">\"},\"EMILY: I don't either.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Alright, fine. If you insist.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: I'm Miri. I went to high school with these people and I came here with \",{\"type\":\"insert\",\"insert\":0},\".\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Thank you for your time.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}}]}},\"miri_see_p1.reconcile\":{\"id\":\"miri_see_p1.reconcile\",\"options\":[{\"id\":\"@miri_see_p1.sorry_again_bad\",\"title\":\"\\\"Sorry again...\\\"\"},{\"id\":\"@miri_see_p1.why_me\",\"title\":\"\\\"Why did you contact me and not anyone else?\\\"\"},{\"id\":\"@miri_see_p1.stay_quiet\",\"title\":\"Stay quiet.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Anyway, I'm sorry we haven't talked in such a long time,\\\" she says. \\\"It's my fault too.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um, that's okay...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"And I was kind of surprised that you even responded. Like, you were kind of a jerk the last time we talked.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Sorry... I'm kind of a terrible person, huh?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, I mean, I wasn't like, the best either.\\\" She makes a brief smile at you.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your words (or lack of thereof) will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"em_see_p1.hope_romantic\":{\"id\":\"em_see_p1.hope_romantic\",\"onArrival\":[{\"$code\":\"Q['em_rom'] = (Q['em_rom'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.exit_moment\",\"title\":\"You're going to have to exit this moment.\"},{\"id\":\"@em_see_p1.stay_with_emily\",\"title\":\"Actually, you'd rather stay here.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"In a movie, this would be the moment where you hugged, kissed, or something like that. But that will never happen. The conversation has suddenly acquired an awkward quality.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Emily will remember this. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"p2_convos.intros_6\":{\"id\":\"p2_convos.intros_6\",\"goTo\":[{\"id\":\"p2_convos.stare_emily\",\"predicate\":{\"$code\":\"return ((Q['em_seen'] || 0)===0);\"}},{\"id\":\"p2_convos.intros_7\",\"predicate\":{\"$code\":\"return ((Q['em_seen'] || 0) > 0);\"}}],\"onArrival\":[{\"$code\":\"Q['em_dinner_intro_seen'] = 1;\"}],\"setJump\":\"p2_convos.intros_7\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Emily inhales, and glances around the dining table.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ce\\\">\"},\"EMILY: I'm Emily.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Aubrey stares at her for a moment.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Do your parents know?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ce\\\">\"},\"EMILY: Sort of. It's complicated.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"She takes a big bite of rice.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: What?\",{\"type\":\"magic\",\"content\":\"</span>\"},\" (He looks confused.)\"]},{\"type\":\"paragraph\",\"content\":\"Emily sighs.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ce\\\">\"},\"EMILY: So, I'm trans, you know? Yeah?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Miri smiles widely at Emily. The latter is implacable, but glances back.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: Oh, that's awesome!\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: That's like, really cool.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM: Oh. That's cool.\",{\"type\":\"magic\",\"content\":\"</span>\"}]}]},\"p2_convos\":{\"id\":\"p2_convos\",\"type\":\"scene\",\"title\":\"Sit with your friends.\",\"tags\":[\"phase2\"],\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['food_consumption'] = 0;\\nQ['hunger'] = (Q['hunger'] || 0) + 4;\"}],\"viewIf\":{\"$code\":\"return ((((Q['phase'] || 0)===2) && ((Q['time'] || 0) >= (Q['p1_time'] || 0))) && ((Q['time'] || 0) < (Q['p2_time'] || 0)));\"},\"newPage\":true,\"setBg\":\"backgrounds/food_1_filtered.jpg\",\"setJump\":\"p2_convos.intros_2\",\"options\":[{\"id\":\"@p2_convos.eat\",\"title\":\"Start eating.\"},{\"id\":\"@p2_convos.intros_2\",\"title\":\"Listen.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"Aubrey waves at you as you sit down.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"ga\\\">\"},\"AUBREY: Hey, \",{\"type\":\"insert\",\"insert\":0},\"! Everyone's here! Do we all know each other?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"dw\\\">\"},\"WILLIAM \",{\"type\":\"conditional\",\"content\":\"(Aubrey's boyfriend)\",\"predicate\":1},\": No, we don't. Does everyone else already know each other?\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Miri shakes her head.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<span class=\\\"bm\\\">\"},\"MIRI: It's my first time at one of these things. I came with \",{\"type\":\"insert\",\"insert\":2},\", and I saw Aubrey around in high school, but that's it.\",{\"type\":\"magic\",\"content\":\"</span>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Emily shrugs, but doesn't say anything.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['aub_int'] || 0)===0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['first_name'] || 0);\"}}]}},\"miri_see_p1.sorry_again_bad\":{\"id\":\"miri_see_p1.sorry_again_bad\",\"goTo\":[{\"id\":\"miri_see_p1.post_grad\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, sorry again... sorry about everything.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, it's okay! You don't need to apologize anymore! You've done enough apologizing for the both of us!\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri continues, \\\"You know what? Forget about that. Let's move on. Do you know what you're doing after graduating?\\\"\"}]},\"em_see_p1.no_romantic\":{\"id\":\"em_see_p1.no_romantic\",\"goTo\":[{\"id\":\"em_see_p1.idk_romantic\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"miri_see_p1.why_me\":{\"id\":\"miri_see_p1.why_me\",\"options\":[{\"id\":\"@miri_see_p1.idk_why\",\"title\":\"\\\"I don't know...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Why did you contact me in the first place? Why not anyone else?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Well...\\\" She sucks in a breath. \\\"You were the only person I could think of.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, I thought you had a bunch of other friends? Like, better friends than me?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Why would you think that?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Oh God.\"}]},\"em_see_p1.idk_romantic\":{\"id\":\"em_see_p1.idk_romantic\",\"options\":[{\"id\":\"@em_see_p1.exit_moment\",\"title\":\"You're going to have to exit this moment.\"},{\"id\":\"@em_see_p1.stay_with_emily\",\"title\":\"Actually, you'd rather stay here.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"Okay then.\"},{\"type\":\"paragraph\",\"content\":[\"Anyway, regardless of your \",{\"type\":\"emphasis-1\",\"content\":\"feelings\"},\" or lack of thereof, the conversation has suddenly acquired an awkward quality. As much as you would like to stay...\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< This action will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 5);\"}}]}},\"miri_see_p1.idk_why\":{\"id\":\"miri_see_p1.idk_why\",\"options\":[{\"id\":\"@miri_see_p1.stay_quiet\",\"title\":\"Silence.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I don't know, I just thought that you were, you know, popular?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri laughs. \\\"You are full of misconceptions. I don't think either of us really understood anything about each other.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah...\\\"\"},{\"type\":\"paragraph\",\"content\":\"It's quiet for a moment.\"}]},\"em_see_p1.exit_moment\":{\"id\":\"em_see_p1.exit_moment\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['energy'] = (Q['energy'] || 0) - 1;\\nQ['despair'] = (Q['despair'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I'm going to...\\\", you begin, before getting up. Something doesn't feel right.\"},{\"type\":\"paragraph\",\"content\":\"\\\"See you later?\\\" She waves as you return to the living room. You feel a bit more lonely.\"}]},\"miri_see_p1.sit_down\":{\"id\":\"miri_see_p1.sit_down\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['miri_int'] = (Q['miri_int'] || 0) + 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.still_like_me\",\"title\":\"\\\"Do you still like me?\\\"\"},{\"id\":\"@miri_see_p1.still_friends\",\"title\":\"\\\"Can we still be friends?\\\"\"},{\"id\":\"@miri_see_p1.sorry_again_2\",\"title\":\"\\\"Sorry again...\\\"\"},{\"id\":\"@miri_see_p1.why_me\",\"title\":\"\\\"Why did you contact me and not anyone else?\\\"\"},{\"id\":\"@miri_see_p1.stay_quiet\",\"title\":\"Just stay quiet.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You follow her to an empty couch, away from the circle of adults.\"},{\"type\":\"paragraph\",\"content\":\"\\\"This food is great,\\\" she says, taking some haw flakes from her plate. \\\"Man, I should go to Asian stores more often.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I think this was from Costco,\\\" you say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Well. I guess I just don't know what to look for.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri eats more snacks. A silence falls between you, a silence that desires to be filled.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your words (or lack of thereof) will have consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 7);\"}}]}},\"em_see_p1.stay_with_emily\":{\"id\":\"em_see_p1.stay_with_emily\",\"viewIf\":{\"$code\":\"return ((Q['em_int'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['em_int'] = (Q['em_int'] || 0) + 1;\"}],\"options\":[{\"id\":\"@em_see_p1.stay_more\",\"title\":\"Stay more.\"},{\"id\":\"@em_see_p1.go_back\",\"title\":\"Do something else.\"},{\"id\":\"@phase_2\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You feel as if you are overstepping things a little by sitting here on the couch with her. But she seems fine with it. Or does she?\"},{\"type\":\"paragraph\",\"content\":\"Neither of you talk at all. But it's fine; it's a comfortable silence, right? Is that what they call it?\"}]},\"miri_see_p1.still_like_me\":{\"id\":\"miri_see_p1.still_like_me\",\"viewIf\":{\"$code\":\"return ((Q['miri_date'] || 0)===1);\"},\"goTo\":[{\"id\":\"miri_see_p1.stay_quiet\"}],\"content\":{\"content\":\"Can you ask that? Are you really just allowed to say something like that? You decide better of it, and let the silence continue.\",\"type\":\"paragraph\"}},\"em_see_p1.stay_more\":{\"id\":\"em_see_p1.stay_more\",\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) < 15);\"},\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 3;\"}],\"options\":[{\"id\":\"@em_see_p1.stay_more\",\"title\":\"Stay here.\"},{\"id\":\"@em_see_p1.go_back\",\"title\":\"Do something else.\"},{\"id\":\"@phase_2\"}],\"content\":{\"content\":\"For some reason you enjoy staying here. Emily taps on her keyboard, her eyes glued to the screen. She doesn't bother you, and you don't bother her. Meanwhile you observe the dynamics of the party.\",\"type\":\"paragraph\"}},\"miri_see_p1.still_friends\":{\"id\":\"miri_see_p1.still_friends\",\"viewIf\":{\"$code\":\"return ((Q['miri_date'] || 0)===0);\"},\"onArrival\":[{\"$code\":\"Q['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"miri_see_p1.post_grad\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um... can we still be friends?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri looks at you with a strange expression. You immediately regret making such a banal remark.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, I guess?\\\", she replies. \\\"We would have to be better at staying in touch, though.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Sorry again...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Anyway, let's move on. Forget about that. Do you know what you're doing after graduating?\\\"\"}]},\"em_see_p1.go_back\":{\"id\":\"em_see_p1.go_back\",\"viewIf\":{\"$code\":\"return ((Q['time'] || 0) < 15);\"},\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I kind of want to do something else...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Sure, go ahead,\\\" Emily says. \\\"See you later.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You make your way back to the living room.\"}]},\"miri_see_p1.sorry_again_2\":{\"id\":\"miri_see_p1.sorry_again_2\",\"goTo\":[{\"id\":\"miri_see_p1.post_grad\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, sorry again... sorry about everything.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, it's okay! It's not just your fault. Maybe I could have been more, I don't know, proactive? I should have spammed more messages at you, I guess?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, maybe? Maybe that would have worked.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"You know what? Forget about that. Let's move on. Do you know what you're doing after graduating?\\\"\"}]},\"em_see_p1.em_waiting\":{\"id\":\"em_see_p1.em_waiting\",\"options\":[{\"id\":\"@em_see_p1.how_are_you\",\"title\":\"\\\"How are you?\\\"\"},{\"id\":\"@em_see_p1.leave_emily\",\"title\":\"Just leave.\"}],\"content\":{\"content\":\"Emily is not going to initiate the conversation. Do you want to say something, or just go?\",\"type\":\"paragraph\"}},\"miri_see_p1.stay_quiet\":{\"id\":\"miri_see_p1.stay_quiet\",\"goTo\":[{\"id\":\"miri_see_p1.post_grad\"}],\"content\":{\"content\":\"It is Miri who breaks the silence first. \\\"So, you're graduating soon, right? Do you know what you're doing afterwards?\\\", she asks.\",\"type\":\"paragraph\"}},\"em_see_p1.leave_emily\":{\"id\":\"em_see_p1.leave_emily\",\"onArrival\":[{\"$code\":\"Q['energy'] = (Q['energy'] || 0) - 1;\\nQ['despair'] = (Q['despair'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Somehow, you sense that you are a little unwelcome here, as if you have overstayed the bounds of acceptable social discourse given your previous relationship or lack of thereof.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, see you later...\\\" You wave at her and make your way back to the living room. She waves back.\"},{\"type\":\"paragraph\",\"content\":\"You feel just a little bit more lonely.\"}]},\"miri_see_p1.post_grad\":{\"id\":\"miri_see_p1.post_grad\",\"options\":[{\"id\":\"@miri_see_p1.everyone\",\"title\":\"\\\"Everyone's been asking that today.\\\"\"},{\"id\":\"@miri_see_p1.grad\",\"title\":\"\\\"Grad school.\\\"\"},{\"id\":\"@miri_see_p1.idk\",\"title\":\"\\\"What about you?\\\"\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"em_see_p1.just_say_it\":{\"id\":\"em_see_p1.just_say_it\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"em_see_p1.em_not_okay\",\"predicate\":{\"$code\":\"return (((Q['prev_em'] == \\\"date\\\") || (Q['prev_em'] == \\\"friends\\\")));\"}},{\"id\":\"em_see_p1.em_dodging\",\"predicate\":{\"$code\":\"return (Q['prev_em'] == \\\"none\\\");\"}}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So, um, how have you been?\\\"\"},{\"type\":\"paragraph\",\"content\":\"She gives you a quick glance. \\\"I'm doing fine.\\\"\"}]},\"miri_see_p1.everyone\":{\"id\":\"miri_see_p1.everyone\",\"onArrival\":[{\"$code\":\"Q['miri_small_talk'] = 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.knew\",\"title\":\"\\\"I thought we knew each other...\\\"\"},{\"id\":\"@miri_see_p1.small\",\"title\":\"\\\"I'm not good with small talk...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Everyone's been asking that today.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah? Sorry about that. God, it's been so long. I don't know what to talk about anymore. Like, what do people talk about if they don't know what to talk about? They find the most generic topics they can. It's why people talk about the weather.\\\"\"}]},\"em_see_p1.stay_silent\":{\"id\":\"em_see_p1.stay_silent\",\"goTo\":[{\"id\":\"em_see_p1.em_asks\",\"predicate\":{\"$code\":\"return (((Q['prev_em'] == \\\"date\\\") || (Q['prev_em'] == \\\"friends\\\")));\"}},{\"id\":\"em_see_p1.em_waiting\",\"predicate\":{\"$code\":\"return (Q['prev_em'] == \\\"none\\\");\"}}],\"content\":{\"content\":\"You don't know what to say, and apparently Emily isn't in the mood for casual interaction. She doesn't seem so focused on the words on the screen anymore, her eyes occasionally glancing up, but still not looking at you.\",\"type\":\"paragraph\"}},\"em_see_p1\":{\"id\":\"em_see_p1\",\"type\":\"scene\",\"title\":\"Emily Chen\",\"subtitle\":\"Sitting alone in an alcove...\",\"unavailableSubtitle\":\"There's something else going on...\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['em_seen'] = (Q['em_seen'] || 0) + 1;\\nQ['time'] = (Q['time'] || 0) + 1;\\nQ['energy'] = (Q['energy'] || 0) - 1;\\nQ['em_int'] = (Q['em_int'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return (((((Q['phase'] || 0)===1) && ((Q['em_seen'] || 0)===0)) && ((Q['energy'] || 0) > 0)) && ((Q['time'] || 0) < (Q['p1_time'] || 0)));\"},\"chooseIf\":{\"$code\":\"return ((Q['has_interruption'] || 0)===0);\"},\"tags\":[\"phase1\",\"emily\",\"initiation\"],\"options\":[{\"id\":\"@em_see_p1.stare\",\"title\":\"Stare at Emily.\"}],\"content\":{\"content\":\"Emily is sitting by herself on a couch in a darkened alcove, her face faintly illuminated by the glow of the laptop screen.\",\"type\":\"paragraph\"}},\"miri_see_p1.knew\":{\"id\":\"miri_see_p1.knew\",\"options\":[{\"id\":\"@miri_see_p1.grad_guess\",\"title\":\"\\\"Grad school...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I thought we knew each other pretty well...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"It's been a year at least.\\\" She shrugs. \\\"We have a lot to catch up on. So what are your plans after college?\\\"\"}]},\"miri_see_p1.small\":{\"id\":\"miri_see_p1.small\",\"options\":[{\"id\":\"@miri_see_p1.grad_guess\",\"title\":\"\\\"Grad school...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Sorry, I'm not good at this sort of thing...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah. I know. Guess that hasn't changed.\\\" Miri stretches. \\\"I'm just trying to initiate conversation in any way I can. So what are your graduation plans?\\\"\"}]},\"miri_see_p1.grad_guess\":{\"id\":\"miri_see_p1.grad_guess\",\"options\":[{\"id\":\"@miri_see_p1.talk_more\",\"title\":\"Just talk?\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave, before she does.\"},{\"id\":\"@miri_see_p1.quiet_2\",\"title\":\"Wait around.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Grad school, I guess,\\\" you finally answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah? That's great! What are you studying?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, molecular and cell biology.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"So you're still into science research?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri glances around. Is she bored of you already?\"}]},\"miri_see_p1.grad\":{\"id\":\"miri_see_p1.grad\",\"onArrival\":[{\"$code\":\"Q['miri_knows_grad'] = 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.talk_more\",\"title\":\"Just talk?\"},{\"id\":\"@miri_see_p1.leave\",\"title\":\"Leave, before she does.\"},{\"id\":\"@miri_see_p1.quiet_2\",\"title\":\"Wait around.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I'm applying to grad school.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah? That's great! What are you studying?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, molecular and cell biology.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"So you're still into science research?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. That's cool.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Miri glances around. Is she bored of you already?\"}]},\"miri_see_p1.idk\":{\"id\":\"miri_see_p1.idk\",\"onArrival\":[{\"$code\":\"Q['miri_knows_grad'] = 1;\"}],\"options\":[{\"id\":\"@miri_see_p1.grad\",\"title\":\"\\\"Grad school.\\\"\"},{\"id\":\"@miri_see_p1.everyone\",\"title\":\"\\\"Everyone's been asking that today.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, what are you doing?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I have to take an extra semester before graduating. So I still have some time to think. What about you?\\\"\"}]},\"miri_see_p1.talk_more\":{\"id\":\"miri_see_p1.talk_more\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"options\":[{\"id\":\"@root\",\"title\":\"Bye...\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"What would you ever talk about? You can't think of anything to say. It's as if your brain's vocalization system is frozen in place, not an unfamiliar feeling, but never a pleasant one.\"},{\"type\":\"paragraph\",\"content\":\"\\\"So, the party's just getting started. I'm going to wander around a bit more.\\\" Miri gets up. \\\"See you later?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your actions had consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"miri_see_p1.quiet_2\":{\"id\":\"miri_see_p1.quiet_2\",\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"options\":[{\"id\":\"@root\",\"title\":\"Bye...\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So, the party's just getting started. I'm going to wander around a bit more.\\\" Miri gets up. \\\"See you later?\\\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"< Your actions had consequences. >\"},\"\"],\"predicate\":0}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['anxiety'] || 0) >= 10);\"}}]}},\"miri_see_p1.gay\":{\"id\":\"miri_see_p1.gay\",\"options\":[{\"id\":\"@miri_see_p1.why\",\"title\":\"\\\"Why are you asking?\\\"\"}],\"content\":{\"content\":\"\\\"So, how's the gay scene at your school?\\\", Miri asks, breaking the silence.\",\"type\":\"paragraph\"}},\"miri_see_p1.why\":{\"id\":\"miri_see_p1.why\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"miri_see_p1.right_here\":{\"id\":\"miri_see_p1.right_here\",\"goTo\":[{\"id\":\"miri_see_p1.how_are_you\",\"predicate\":{\"$code\":\"return ((Q['prev_miri'] == \\\"friends\\\") || (Q['prev_miri'] == \\\"broken\\\"));\"}},{\"id\":\"miri_see_p1.date\",\"predicate\":{\"$code\":\"return (Q['prev_miri'] == \\\"date\\\");\"}},{\"id\":\"miri_see_p1.reconcile\",\"predicate\":{\"$code\":\"return (Q['prev_miri'] == \\\"none\\\");\"}}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...I was standing right here.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. I guess I didn't notice you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah. That happens.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Anyway, it's been such a long time! I haven't even asked how you've been?\\\"\"},{\"type\":\"paragraph\",\"content\":\"A pause.\"}]},\"miri_see_p1.you_disappeared\":{\"id\":\"miri_see_p1.you_disappeared\",\"goTo\":[{\"id\":\"miri_see_p1.how_are_you\",\"predicate\":{\"$code\":\"return ((Q['prev_miri'] == \\\"friends\\\") || (Q['prev_miri'] == \\\"broken\\\"));\"}},{\"id\":\"miri_see_p1.date\",\"predicate\":{\"$code\":\"return (Q['prev_miri'] == \\\"date\\\");\"}},{\"id\":\"miri_see_p1.reconcile\",\"predicate\":{\"$code\":\"return (Q['prev_miri'] == \\\"none\\\");\"}}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...I thought you had disappeared.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Really? I've been right here this whole time!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh...\\\"\"},{\"type\":\"paragraph\",\"content\":\"A pause.\"}]},\"miri_see_p1.oh_hi\":{\"id\":\"miri_see_p1.oh_hi\",\"goTo\":[{\"id\":\"miri_see_p1.how_are_you\",\"predicate\":{\"$code\":\"return ((Q['prev_miri'] == \\\"friends\\\") || (Q['prev_miri'] == \\\"broken\\\"));\"}},{\"id\":\"miri_see_p1.date\",\"predicate\":{\"$code\":\"return (Q['prev_miri'] == \\\"date\\\");\"}},{\"id\":\"miri_see_p1.reconcile\",\"predicate\":{\"$code\":\"return (Q['prev_miri'] == \\\"none\\\");\"}}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...Oh. Hello.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hey.\\\"\"},{\"type\":\"paragraph\",\"content\":\"A pause.\"}]},\"miri_see_p1\":{\"id\":\"miri_see_p1\",\"type\":\"scene\",\"title\":\"Miri Brooks\",\"subtitle\":\"Standing amidst a circle of adults...\",\"unavailableSubtitle\":\"There's something else going on...\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['time'] = (Q['time'] || 0) + 1;\\nQ['energy'] = (Q['energy'] || 0) - 1;\\nQ['miri_int'] = (Q['miri_int'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return (((((Q['phase'] || 0)===1) && ((Q['miri_seen'] || 0)===0)) && ((Q['energy'] || 0) > 0)) && ((Q['time'] || 0) < (Q['p1_time'] || 0)));\"},\"chooseIf\":{\"$code\":\"return ((Q['has_interruption'] || 0)===0);\"},\"tags\":[\"phase1\",\"miri\",\"initiation\"],\"options\":[{\"id\":\"@miri_see_p1.stare_at_miri\",\"title\":\"Stare at Miri.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Miri stands in the living room in the center of a small semicircle of moms, beaming as she converses in fluent Mandarin and basking in the adulation of the adults.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"你的中文多帮啊! 是大学学得吗?\\\" \",{\"type\":\"emphasis-1\",\"content\":\"Your Chinese is so good! Did you study it at university?\"},\"\\\", someone asks.\"]},{\"type\":\"paragraph\",\"content\":[\"\\\"谢谢阿姨! 我在大学上了汉语课。\\\" \",{\"type\":\"emphasis-1\",\"content\":\"Thank you auntie! I took a Chinese class at university.\"},\"\\\" She's really good.\"]}]}},\"qualities\":{},\"qdisplays\":{},\"tagLookup\":{\"top\":{\"aub_p3\":true,\"em_miri_p3\":true,\"mom_p1\":true,\"one\":true},\"phase3\":{\"aub_p3\":true,\"em_miri_p3\":true},\"phase1\":{\"mom_p1\":true,\"kevin_p1\":true,\"food_p1\":true,\"phone_p1\":true,\"aub_see_p1\":true,\"em_see_p1\":true,\"miri_see_p1\":true},\"tv\":{\"kevin_p1.tv\":true,\"kevin_p1.tv2\":true,\"kevin_p1.tv3\":true},\"topic_college\":{\"p2_convos.college_1\":true},\"phase2\":{\"p2_convos.college_1\":true,\"p2_convos.politics_1\":true,\"p2_convos\":true},\"topic_start\":{\"p2_convos.college_1\":true,\"p2_convos.politics_1\":true},\"topic_politics\":{\"p2_convos.politics_1\":true},\"food\":{\"food_p1\":true},\"alone\":{\"phone_p1\":true},\"aub\":{\"aub_see_p1\":true},\"start\":{\"one\":true},\"emily\":{\"em_see_p1\":true},\"initiation\":{\"em_see_p1\":true,\"miri_see_p1\":true},\"miri\":{\"miri_see_p1\":true}}}"};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  // To avoid the need to include any utility libraries when this is
  // used in a browser, define some helper functions we'd normally
  // rely on libraries for.

  var assert = function(mustBeTrue) {
    /* istanbul ignore if */
    if (!mustBeTrue) {
      throw new Error('Assertion failed.');
    }
  };

  var each = function(array, fn) {
    for (var i = 0; i < array.length; ++i) {
      fn(array[i]);
    }
  };

  var objEach = function(obj, fn) {
    for (var key in obj) {
      fn(key, obj[key]);
    }
  };

  var merge = function() {
    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var obj = arguments[i];
      for (var key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  };

  // Credit: Taken from Lodash (MIT License). See CREDITS.
  var isObject = function(value) {
    var type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  };

  var makeFunctionFromSource = function(source) {
    source = source.trim();
    /*jshint -W054 */
    var fn = new Function('state', 'Q', source);
    /*jshint +W054 */
    fn.source = source;
    return fn;
  };

  var runActions = function(actions, context, state) {
    if (actions === undefined) {
      return;
    }
    each(actions, function(fn) {
      try {
        fn.call(context, state, state.qualities);
      } catch (err) {
        // Ignore errors. TODO: Log them somehow?
      }
    });
  };

  var runPredicate = function(predicate, default_, context, state) {
    var result = default_;
    if (predicate === undefined) {
      return result;
    }
    try {
      result = !!predicate.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
    }
    return result;
  };

  var runExpression = function(expression, default_, context, state) {
    var result = default_;
    if (expression === undefined) {
      return result;
    }
    try {
      result = expression.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
    }
    return result;
  };

  var convertJSONToGame = function(json, callback) {
    var reviver = function(key, value) {
      if (isObject(value) && value.$code !== undefined) {
        return makeFunctionFromSource(value.$code);
      } else {
        return value;
      }
    };

    try {
      var game = JSON.parse(json, reviver);
      return callback(null, game);
    } catch (err) {
      return callback(err);
    }
  };

  var simpleContent = function(text) {
    return [{type:'paragraph', content:text}];
  };

  var getCardinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0 && value <= 12) {
      // Integer, so use word.
      return ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'][value];
    } else {
      return value.toString();
    }
  };

  var getOrdinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0) {
      if (value <= 12) {
        return ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth',
                'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh',
                'twelfth'][value];
      } else {
        value = value.toString();
        if (/1[0-9]$/.test(value)) {
          return value + 'th';
        } else {
          var last = value.substr(value.length - 1, 1);
          switch (last) {
            case '1': return value + 'st';
            case '2': return value + 'nd';
            case '3': return value + 'rd';
            default: return value + 'th';
          }
        }
      }
    } else {
      return value.toString();
    }
  };

  var getFudgeDisplay = function(value) {
    if (Math.floor(value) === value) {
      if (value > 3) {
        return 'superb+' + (value - 3);
      } else if (value < -3) {
        return 'terrible' + (value + 3);
      } else {
        switch (value) {
          case  3: return 'superb';
          case  2: return 'great';
          case  1: return 'good';
          case  0: return 'fair';
          case -1: return 'mediocre';
          case -2: return 'poor';
          case -3: return 'terrible';
        }
      }
    } else {
      return value.toString();
    }
  };

  var getUserQDisplay = function(value, qdisplay) {
    for (var i = 0; i < qdisplay.content.length; ++i) {
      var case_ = qdisplay.content[i];
      var min = case_.min;
      var max = case_.max;
      if ((min === undefined || min <= value) &&
          (max === undefined || max >= value)) {
        if (case_.output !== undefined) {
          return case_.output;
        } else {
          return value.toString();
        }
      }
    }
    return value.toString();
  };

  // ------------------------------------------------------------------------

  // Objects with this interface are passed to a game state to have it
  // display content.
  var UserInterface = function() {};
  UserInterface.prototype.beginGame = function() {};
  UserInterface.prototype.displayContent = function(paragraphs) {};
  UserInterface.prototype.displayChoices = function(choices) {};
  UserInterface.prototype.displayGameOver = function() {
    this.displayContent(simpleContent('Game Over'));
  };
  UserInterface.prototype.removeChoices = function() {};
  // Called when the player makes a choice and new content is about to be
  // added (i.e. isn't called between output when the next scene is arrived
  // at via go-to).
  UserInterface.prototype.beginOutput = function() {};
  UserInterface.prototype.endOutput = function() {};
  UserInterface.prototype.newPage = function() {};
  UserInterface.prototype.setStyle = function(style) {};
  UserInterface.prototype.signal = function(data) {};
  UserInterface.prototype.setBg = function(img) {};
  // Not part of the UI, but allows us to simply subclass.
  UserInterface.makeParentOf = function(OtherConstructor) {
    OtherConstructor.prototype = new UserInterface();
    OtherConstructor.constructor = OtherConstructor;
  };

  // ------------------------------------------------------------------------

  // An engine is given a user interface, the game and the current
  // game state (can be omitted). It is responsible for the logic of
  // the game.
  var DendryEngine = function(ui, game) {
    this.ui = ui;
    this.game = game;
  };

  DendryEngine.prototype.displayGameOver = function() {
    this.ui.displayGameOver();
    return this;
  };

  DendryEngine.prototype.displayChoices = function() {
    var choices = this.getCurrentChoices();
    assert(choices);
    this.ui.displayChoices(choices);

    return this;
  };

  DendryEngine.prototype.displaySceneContent = function(restorePage) {
    var scene = this.getCurrentScene();
    assert(scene);

    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      this.ui.signal({signal:sceneSignal,
                      event:'scene-display',
                      id:this.state.sceneId});
    }
    if (restorePage) {
      this.ui.newPage();
      this.ui.displayContent(this.state.tempCurrentContent);
      this.state.currentContent = this.state.tempCurrentContent.slice();
    } else if (scene.newPage) {
      this.ui.newPage();
      this.state.currentContent = [];
    }
    this.ui.setStyle(scene.style);
    this.ui.removeChoices();

    this._runActions(scene.onDisplay);
    if (scene.content !== undefined && !restorePage) {
      var displayContent = this._makeDisplayContent(scene.content, true);
      this.state.currentContent = this.state.currentContent.concat(displayContent);
      this.ui.displayContent(displayContent);
    }

    return this;
  };

  DendryEngine.prototype.choose = function(choiceIndex) {
    var choices = this.choiceCache;

    // Check for valid choice.
    assert(choices);
    if (choices.length <= choiceIndex) {
      throw new Error('No choice at index ' + choiceIndex + ', only ' +
                      choices.length + ' choices are available.');
    }

    // Commit the choice.
    var choice = choices[choiceIndex];
    if (!choice.canChoose) {
      throw new Error('Attempted to choose index ' + choiceIndex + ', but ' +
                      'that choice is unavailable.');
    }

    var id = choice.id;

    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype.goToScene = function(id) {
    this.state.sceneIdsSinceGoTo = [];
    this.ui.beginOutput();
    this.__changeScene(id);
    this.ui.endOutput();
  };

  DendryEngine.prototype.beginGame = function(rndSeeds) {
    this.random = rndSeeds ? Random.fromSeeds(rndSeeds) : Random.fromUnique();
    this.state = {
      sceneId: null,
      sceneIdsSinceGoTo: [],
      rootSceneId: this.game.rootScene || this.game.firstScene || 'root',
      gameOver: false,
      visits: {},
      qualities: {},
      currentRandomState: null,
      currentContent: [],
      // tempCurrentContent is used for when the
      // player visits the stats or settings pages in order to remember
      // where the previous page was?
      tempCurrentContent: [],
      // prevSpecialSceneId is only set when visiting scene tagged with
      // isSpecial = true, and is the scene before the special scene.
      prevSpecialSceneId: null,
      prevSceneId: null,
      // every time a top-level scene changes,
      // this record the last-visited qualified id within that scene.
      prevTopSceneId: null,
      // jumpScene is defined within a scene file, indicating the scene that
      // @jumpScene will go to. Basically it's used to make subroutines.
      jumpSceneId: null,
    };

    this._setUpQualities();

    this.ui.beginGame();

    var id = this.game.firstScene || this.state.rootSceneId;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype.gameOver = function() {
    this.state.gameOver = true;
    this.displayGameOver();
    return this;
  };

  DendryEngine.prototype.isGameOver = function() {
    return this.state.gameOver;
  };

  DendryEngine.prototype.getCurrentScene = function() {
    var scene = this.game.scenes[this.state.sceneId];
    assert(scene !== undefined);
    return scene;
  };

  // Returns the choices for the current scene. Choices are objects
  // with an id and a title property, not to be confused with the
  // option objects in a scene (though options are used to generate
  // choices). Choices are compiled from the options belonging to the
  // current scene.
  DendryEngine.prototype.getCurrentChoices = function() {
    return this.choiceCache;
  };

  // Sets the current state of the engine from an exportable state.
  DendryEngine.prototype.setState = function(state) {
    // Set the state.
    this.state = state;
    this._setUpQualities();
    this.random = Random.fromState(this.state.currentRandomState);

    // Display the current state.
    if (this.isGameOver()) {
      this.displayGameOver();
    } else {
      var scene = this.getCurrentScene();
      this.choiceCache = this._compileChoices(scene);
      this.ui.newPage();
      this.ui.removeChoices();
      this.ui.displayContent(this.state.currentContent);
      this.displayChoices();
    }
    return this;
  };

  // Returns a data structure for exporting without any accessors or
  // complex classes.
  DendryEngine.prototype.getExportableState = function() {
    // Because we only have complex state in the qualities (they have
    // accessors), and because we save with JSON (which calls
    // accessors correctly), we don't have to worry about giving the
    // actual state. Note that, if you want to keep this object, however,
    // you want to clone it somehow (turning it to and from json,
    // for example), otherwise it will change as the engine updates.
    return this.state;
  };

  // ------------------------------------------------------------------------

  DendryEngine.prototype._getQDisplay = function(value, qDisplayId) {
    switch (qDisplayId) {
    case 'cardinal': case 'number':
      return getCardinalNumber(value);
    case 'ordinal':
      return getOrdinalNumber(value);
    case 'fudge':
      return getFudgeDisplay(value);
    default:
      var qdisplay = this.game.qdisplays[qDisplayId];
      assert(qdisplay !== undefined);
      return getUserQDisplay(value, qdisplay);
    }
  };

  DendryEngine.prototype._evaluateStateDependencies = function(defs) {
    var result = [];

    for (var i = 0; i < defs.length; ++i) {
      var value;
      var def = defs[i];
      var fn = def.fn;
      switch (def.type) {
      case 'insert':
        value = this._runExpression(fn);
        if (def.qdisplay) {
          value = this._getQDisplay(value, def.qdisplay);
        } else {
          value = value.toString();
        }
        break;

      default:
        assert(def.type === 'predicate');
        value = this._runPredicate(fn);
        break;
      }

      // Recurse the resolution into the resulting value, if needed.
      if (value.stateDependencies !== undefined) {
        // We have to resolve the nested state dependencies.
        value = this._makeDisplayContent(value, false);
      }
      result.push(value);
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvalsInArray = function(array, evals) {
    if (!Array.isArray(array)) {
      array = [array];
    }
    var result = [];
    for (var i = 0; i < array.length; ++i) {
      result = result.concat(this._mergeStateEvals(array[i], evals));
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvals = function(content, evals) {
    if (content.type === undefined) {
      return [content];
    }

    var result;
    switch (content.type) {
    case 'conditional':
      if (evals[content.predicate]) {
        result = this._mergeStateEvalsInArray(content.content, evals);
      } else {
        result = [];
      }
      break;
    case 'insert':
      result = evals[content.insert];
      break;
    default:
      var newE = {type:content.type};
      newE.content = this._mergeStateEvalsInArray(content.content, evals);
      result = [newE];
      break;
    }
    return result;
  };

  DendryEngine.prototype._makeDisplayContent = function(content, useParas) {
    // Raw content can just be returned.
    if (content.content === undefined) {
      if (Array.isArray(content)) {
        return content;
      } else if (useParas) {
        return [{type:'paragraph', content:content}];
      } else {
        return [content];
      }
    } else if (content.stateDependencies === undefined &&
               content.type !== undefined) {
      return [content];
    }

    // Merge in dependencies if we have them
    var stateDepDefs = content.stateDependencies;
    var displayContent = content.content;
    if (stateDepDefs && stateDepDefs.length > 0) {
      var evals = this._evaluateStateDependencies(stateDepDefs);
      if (!Array.isArray(displayContent)) {
        displayContent = [displayContent];
      }
      displayContent = this._mergeStateEvalsInArray(
        displayContent, evals
      );
    }
    return displayContent;
  };

  DendryEngine.prototype._setUpQualities = function() {
    var _Q = this._qualitiesAccessorsPrivate = {};
    var Q = this.state.qualities;
    var that = this;
    objEach(this.game.qualities, function(id, quality) {
      var min = quality.min;
      var max = quality.max;
      var signal = quality.signal || that.game.qualitySignal;
      var predicate = quality.isValid;
      var needsAccessors = (
        min !== undefined ||
        max !== undefined ||
        signal !== undefined ||
        predicate !== undefined
      );
      if (needsAccessors) {
        if (Q[id] !== undefined) {
          _Q[id] = Q[id];
        }
        Q.__defineGetter__(id, function() {
          return _Q[id];
        });
        Q.__defineSetter__(id, function(value) {
          if (min !== undefined && value < min) {
            value = min;
          }
          if (max !== undefined && value > max) {
            value = max;
          }
          var was = _Q[id];
          _Q[id] = value;

          // Check if the new value is not allowed.
          if (!that._runPredicate(predicate, true)) {
            // Reverse the change.
            _Q[id] = value = was;
          }

          // Signal after the change is made.
          if (signal !== undefined && value !== was) {
            var signalObj = {
              signal: signal,
              event: 'quality-change',
              id: id,
              now: value
            };
            if (was !== undefined) {
              signalObj.was = was;
            }
            that.ui.signal(signalObj);
          }
        });
      }
      if (quality.initial !== undefined && Q[id] === undefined) {
        Q[id] = quality.initial;
      }
    });
  };

  DendryEngine.prototype._runActions = function(actions) {
    runActions(actions, this, this.state);
  };

  DendryEngine.prototype._runPredicate = function(predicate, default_) {
    return runPredicate(predicate, default_, this, this.state);
  };

  DendryEngine.prototype._runExpression = function(expression, default_) {
    return runExpression(expression, default_, this, this.state);
  };

  DendryEngine.prototype.__changeScene = function(id) {
    var scene = null;
    var restorePage = false;
    // if id is 'prevScene', go to the previous scene.
    if (id == 'prevScene') {
      if (this.prevSceneId === null) {
        // TODO: prevScene should only be allowed when prevSceneId is not null.
        // this really only comes up on the very first scene of the game.
      }
      scene = this.game.scenes[this.state.prevSceneId];
      id = this.state.prevSceneId;
      assert(scene);
    } else if (id == 'prevTopScene') {
      scene = this.game.scenes[this.state.prevTopSceneId];
      id = this.state.prevTopSceneId;
      assert(scene);
    } else if (id == 'jumpScene') {
      scene = this.game.scenes[this.state.jumpSceneId];
      id = this.state.jumpSceneId;
      assert(scene);
    } else if (id === 'backSpecialScene') {
      scene = this.game.scenes[this.state.prevSpecialSceneId];
      id = this.state.prevSpecialSceneId;
      restorePage = true;
      assert(scene);
      // if prevSpecialSceneId is null, this indicates that
      // we're not within a specialScene, and we can set a jump point.
      this.state.prevSpecialSceneId = null;
    } else {
      scene = this.game.scenes[id];
      assert(scene);
    }


    // Leave previous scene.
    var fromId = this.state.sceneId;
    if (!!fromId) {
      this.state.prevSceneId = fromId;
      // TODO: this doesn't necessarily work... there should be
      // a different classification of top scenes
      if (scene.isTop) {
        this.state.prevTopSceneId = fromId;
      }
      if (scene.isSpecial && this.state.prevSpecialSceneId === null) {
        this.state.tempCurrentContent = this.state.currentContent.slice();
        this.state.prevSpecialSceneId = fromId;
      }
      var from = this.getCurrentScene();
      this._runActions(from.onDeparture);
      var fromSignal = from.signal || this.game.sceneSignal;
      if (fromSignal !== undefined) {
        this.ui.signal({signal:fromSignal,
                        event:'scene-departure',
                        id:this.state.sceneId,
                        'to':id});
      }
    }

    // Arrive at current scene.
    this.state.sceneId = id;
    this.state.sceneIdsSinceGoTo.push(id);

    if (scene.setRoot) {
      this.state.rootSceneId = id;
    }
    if (scene.setJump) {
      this.state.jumpSceneId = scene.setJump;
    }

    if (scene.countVisitsMax !== undefined) {
      if (this.state.visits[id] === undefined) {
        this.state.visits[id] = 1;
      } else if (this.state.visits[id] < scene.countVisitsMax) {
        this.state.visits[id]++;
      }
    }

    this._runActions(scene.onArrival);
    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      var signal = {
        signal: sceneSignal,
        event: 'scene-arrival',
        id: id
      };
      if (!!fromId) {
        signal.from = fromId;
      }
      this.ui.signal(signal);
    }

    // We're done with any code that might generate random numbers
    // (except go-to, which will recurse into this method anyway), so we
    // can store the seed which can be used to replay the behavior
    // from here.
    this.state.currentRandomState = this.random.getState();
    this.displaySceneContent(restorePage);
    // display background
    if (scene.setBg) {
        this.ui.setBg(scene.setBg);
    }

    // Check if we have any reason to leave the scene, or end the game.
    var done = false;
    if (scene.gameOver === true) {
      done = true;
      this.gameOver();
    } else if (scene.goTo) {
      // Find all valid gotos.
      var validGoToIds = [];
      for (var i = 0; i < scene.goTo.length; ++i) {
        var goTo = scene.goTo[i];
        if (goTo.predicate === undefined ||
            this._runPredicate(goTo.predicate)) {
          validGoToIds.push(goTo.id);
        }
      }
      if (validGoToIds.length === 1) {
        done = true;
        this.__changeScene(validGoToIds[0]);
      } else if (validGoToIds.length > 1) {
        var randomNumber = this.random.uint32();
        var choice = randomNumber % validGoToIds.length;
        var chosenGoToId = validGoToIds[choice];
        done = true;
        this.__changeScene(chosenGoToId);
      }
    }

    // If we've not ended, nor found a valid go-to, then we try choices.
    if (!done) {
      this.choiceCache = this._compileChoices(scene);
      if (this.choiceCache === null) {
        // Explicitly disallowing game over keeps us stuck here.
        if (scene.gameOver !== false) {
          this.gameOver();
        }
      } else {
        this.displayChoices();
      }
    }
  };

  DendryEngine.prototype.__getChoiceSelectionData = function(idToInfoMap) {
    var result = [];
    for (var id in idToInfoMap) {
      var optionScene = this.game.scenes[id];
      var optionInfo = idToInfoMap[id];

      optionInfo.order = optionInfo.order || optionScene.order || 0;
      optionInfo.priority = optionInfo.priority || optionScene.priority || 1;
      // Because 'null' is a valid frequency, we can't use || to do this.
      if (optionInfo.frequency === undefined) {
        optionInfo.frequency = optionScene.frequency;
        if (optionInfo.frequency === undefined) {
          optionInfo.frequency = 100;
        }
      }
      optionInfo.selectionPriority = 0; // Used by __filterByPriority

      result.push(optionInfo);
    }
    return result;
  };

  DendryEngine.prototype.__filterViewable = function(idToInfoMap) {
    var result = {};
    for (var id in idToInfoMap) {
      var thisScene = this.game.scenes[id];

      // This id fails if it is past its max visits.
      var maxVisits = thisScene.maxVisits;
      if (maxVisits !== undefined) {
        var visits = this.state.visits[id] || 0;
        if (visits >= maxVisits) {
          continue;
        }
      }

      // Fiter out scenes that can't be viewed.
      var canView = this._runPredicate(thisScene.viewIf, true);
      if (!canView) {
        continue;
      }

      // It passes otherwise.
      result[id] = idToInfoMap[id];
    }
    return result;
  };

  DendryEngine.prototype.__getChoiceIdsFromOptions = function(options) {
    var that = this;

    var choices = {};
    each(options, function(option) {
      // Filter out options that can't be viewed.
      if (!that._runPredicate(option.viewIf, true)) {
        return;
      }

      if (option.id.substr(0, 1) === '@') {
        // This is an id, use it.
        var trimmedId = option.id.substring(1);
        var choice = merge(option, {id:trimmedId});
        choices[trimmedId] = choice;
      } else {
        assert(option.id.substr(0, 1) === '#');
        // This is a tag, add all matching ids.
        var ids = that.game.tagLookup[option.id.substring(1)];
        objEach(ids, function(id) {
          if (choices[id] === undefined) {
            choices[id] = merge(option, {id:id});
          }
        });
      }
    });
    return choices;
  };

  // Code based on Undum (MIT License). See CREDITS.
  DendryEngine.prototype.__filterByPriority = function(choices,
                                                       minChoices,
                                                       maxChoices) {
    assert(minChoices === null ||
           maxChoices === null ||
           maxChoices >= minChoices);
    var that = this;

    var committed = [];
    var candidates = [];
    var choice;

    // Work in descending priority order.
    choices.sort(function(a, b) {
      return b.priority - a.priority;
    });

    // First phase: we make sure we have at least our minimum number
    // of choices, and that we consider the minimum possible number of
    // priorities to reach that minimum.
    var lastPriority;
    for (var i = 0; i < choices.length; ++i) {
      choice = choices[i];
      if (choice.priority !== lastPriority) {
        if (lastPriority !== undefined) {
          // Priority has decreased, use the candidates if there are enough.
          if (minChoices === null || i >= minChoices) {
            break;
          }
        }

        // We're going on, so commit our current candidates.
        committed.push.apply(committed, candidates);
        candidates = [];
        lastPriority = choice.priority;
      }
      candidates.push(choice);
    }

    // Second phase: we commit as many candidates as we can without
    // exceeding our maximum.
    var committedChoices = committed.length;
    var totalChoices = committedChoices + candidates.length;
    if (maxChoices === null || maxChoices >= totalChoices) {
      // We can use all the candidates without exceeding our maximum.
      committed.push.apply(committed, candidates);
    } else {
      // Take a subset of the candidates, using their relative frequency.
      each(candidates, function(choice) {
        if (choice.frequency === null) {
          choice.selectionPriority = 0; // Always choose.
        } else {
          choice.selectionPriority = that.random.random() / choice.frequency;
        }
      });
      candidates.sort(function(a, b) {
        return a.selectionPriority - b.selectionPriority;
      });
      var extraChoices = maxChoices - committedChoices;
      var chosen = candidates.slice(0, extraChoices);
      committed.push.apply(committed, chosen);
    }

    return committed;
  };

  DendryEngine.prototype.__getChoiceDisplayData = function(choicesSelected) {
    var choiceOutput = [];
    var numChoosable = 0;

    for (var i = 0; i < choicesSelected.length; ++i) {
      var choice = choicesSelected[i];
      var choiceScene = this.game.scenes[choice.id];

      // Figure out if this choice can be chosen.
      var canChoose = true;
      if (choice.chooseIf) {
        canChoose = this._runPredicate(choice.chooseIf, true);
      }
      if (canChoose && choiceScene.chooseIf) {
        canChoose = this._runPredicate(choiceScene.chooseIf, true);
      }

      var title = choice.title || choiceScene.title;
      assert(title);

      var subtitle = null;
      if (!canChoose) {
        subtitle = choice.unavailableSubtitle ||
                   choiceScene.unavailableSubtitle;
      }
      if (!subtitle) {
        subtitle = choice.subtitle || choiceScene.subtitle;
      }

      var finalChoice = {
        id:choice.id,
        canChoose:canChoose,
        title:this._makeDisplayContent(title, false)
      };
      if (subtitle) {
        finalChoice.subtitle = this._makeDisplayContent(subtitle, false);
      }

      choiceOutput.push(finalChoice);
      if (canChoose) {
        ++numChoosable;
      }
    }

    return {choices:choiceOutput, numChoosable:numChoosable};
  };

  DendryEngine.prototype._compileChoices = function(scene) {
    assert(scene);

    var options = scene.options;
    var choiceOutput = [];
    var numChoosable = 0;
    if (options !== undefined) {

      var choiceIds = this.__getChoiceIdsFromOptions(options);
      choiceIds = this.__filterViewable(choiceIds);

      var validChoiceData = this.__getChoiceSelectionData(choiceIds);
      var minChoices = scene.minChoices || null;
      var maxChoices = scene.maxChoices || null;
      validChoiceData = this.__filterByPriority(validChoiceData,
                                                minChoices, maxChoices);

      // Sort the result into display order.
      validChoiceData.sort(function(a, b) {
        return a.order - b.order;
      });

      // Now we've chosen our selection, get the final displayable data.
      var data = this.__getChoiceDisplayData(validChoiceData);
      choiceOutput = data.choices;
      numChoosable = data.numChoosable;
    }

    if (numChoosable === 0) {
      // We have no choosable options, so add the default option (NB:
      // this may take us over the max-choices limit).
      var root = this.state.rootSceneId;
      if (root !== this.state.sceneId) {
        var rootSceneChoose = this.game.scenes[root].chooseIf;
        if (!rootSceneChoose || this._runPredicate(rootSceneChoose, true)) {
          choiceOutput.push({id:root, title:'Continue...', canChoose:true});
          ++numChoosable;
        }
      }
    }
    if (numChoosable > 0) {
      return choiceOutput;
    } else {
      return null;
    }
  };

  // ------------------------------------------------------------------------

  // Marsaglia, George (July 2003). 'Xorshift RNGs'.
  // Journal of Statistical Software 8 (14).
  var Random = function(v, w, x, y, z) {
    this.getState = function() {
      return [v, w, x, y, z];
    };
    var uint32Multiply = function(a, b) {
      var aHigh = (a >> 16) & 0xffff;
      var aLow = a & 0xffff;
      var bHigh = (b >> 16) & 0xffff;
      var bLow = b & 0xffff;
      var prodHigh = ((aHigh * bLow) + (aLow * bHigh)) & 0xffff;
      return ((prodHigh << 16) >>> 0) + (aLow * bLow);
    };
    this.uint32 = function() {
      var t = (x ^ (x >>> 7)) >>> 0;
      x = y;
      y = z;
      z = w;
      w = v;
      v = (v ^ (v << 6)) ^ (t ^ (t << 13)) >>> 0;
      return uint32Multiply((y + y + 1), v) >>> 0;
    };
    this.random = function() {
      return this.uint32() * 2.3283064365386963e-10;
    };
  };

  var __next = 1;
  Random.fromUnique = function() {
    var seed = new Date().getTime();
    return Random.fromSeeds([seed, __next++]);
  };

  Random.fromTime = function() {
    return Random.fromSeeds([new Date().getTime()]);
  };

  Random.fromSeeds = function(seeds) {
    var v = 886756453;
    var w = 88675123;
    var x = 123456789;
    var y = 362436069;
    var z = 521288629;

    // The seed hashing function is based on Mash 0.9 (MIT License).
    // See CREDITS.
    var hashSeed = function(data) {
      data = data.toString();
      var n = 0xefc8249d;
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000;
      }
      return (n >>> 0) * 2.3283064365386963e-10;
    };

    for (var i = 0; i < seeds.length; i++) {
      var hashedSeed = hashSeed(seeds[i]) * 0x100000000;
      v ^= hashedSeed;
      w ^= hashedSeed;
      x ^= hashedSeed;
      y ^= hashedSeed;
      z ^= hashedSeed;
    }
    return new Random(v, w, x, y, z);
  };

  Random.fromState = function(state) {
    return new Random(state[0], state[1], state[2], state[3], state[4]);
  };

  // ------------------------------------------------------------------------

  module.exports = {
    makeFunctionFromSource: makeFunctionFromSource,
    runActions: runActions,
    runPredicate: runPredicate,
    runExpression: runExpression,
    convertJSONToGame: convertJSONToGame,
    simpleContent: simpleContent,

    getCardinalNumber: getCardinalNumber,
    getOrdinalNumber: getOrdinalNumber,
    getUserQDisplay: getUserQDisplay,
    getFudgeDisplay: getFudgeDisplay,

    DendryEngine: DendryEngine,
    UserInterface: UserInterface,
    NullUserInterface: UserInterface,

    Random: Random
  };
}());

},{}],2:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function($) {
  'use strict';

  var contentToHTML = require('./content/html');
  var engine = require('../engine');

  var BrowserUserInterface = function(game, $content) {
    this.game = game;
    this.$content = $content;
    this._registerEvents();

    this.dendryEngine = new engine.DendryEngine(this, game);
    // TODO: consider displaying a sidebar with various qualities...
    this.hasSidebar = false;
    this.sidebarQualities = [];
  };
  engine.UserInterface.makeParentOf(BrowserUserInterface);

  // ------------------------------------------------------------------------
  // Main API

  BrowserUserInterface.prototype.displayContent = function(paragraphs) {
    var html = contentToHTML.convert(paragraphs);
    this.$content.append(html);
  };
  BrowserUserInterface.prototype.displayGameOver = function() {
    var $p = $('<p>').text(this.getGameOverMsg()).addClass('game-over');
    this.$content.append($p);
  };
  BrowserUserInterface.prototype.displayChoices = function(choices) {
    var $ul = $('<ul>').addClass('choices');
    for (var i = 0; i < choices.length; ++i) {
      var choice = choices[i];

      var title = contentToHTML.convertLine(choice.title);
      var subtitle = "";
      if (choice.subtitle !== undefined) {
        subtitle = contentToHTML.convertLine(choice.subtitle);
      }

      var $li = $('<li>');
      var $titleHolder = $li;
      if (choice.canChoose) {
        $titleHolder = $('<a>').attr({href: '#', 'data-choice': i});
        $li.html($titleHolder);
      } else {
        $titleHolder.addClass('unavailable');
      }
      $titleHolder.html(title);
      if (subtitle) {
        $li.append($('<div>').addClass('subtitle').html(subtitle));
      }
      $ul.append($li);
    }
    this.$content.append($ul);
  };
  BrowserUserInterface.prototype.newPage = function() {
    this.$content.empty();
  };
  BrowserUserInterface.prototype.setStyle = function(style) {
    this.$content.removeClass();
    if (style !== undefined) {
      this.$content.addClass(style);
    }
  };
  BrowserUserInterface.prototype.removeChoices = function() {
    $('.choices', this.$content).remove();
    $('.hidden', this.$content).remove();
  };
  BrowserUserInterface.prototype.beginOutput = function() {
    $("#read-marker", this.$content).remove();
    this.$content.append($('<hr>').attr('id', 'read-marker'));
  };
  BrowserUserInterface.prototype.endOutput = function() {
    var $marker = $("#read-marker");
    if ($marker.length > 0) {
      //$('html, body').animate({scrollTop: $marker.offset().top}, 500);
    } else {
      //$('html, body').animate({scrollTop: 0}, 500);
    }
  };
  BrowserUserInterface.prototype.signal = function(data) {
    // TODO: implement signals - signals contain signal, event, and id
    console.log(data);
    var signal = data.signal;
    // event can be scene-arrival, scene-departure, or scene-display.
    var event = data.event;
    var id = data.id;
    // TODO: have a list of signals somewhere - update sidebar, throw up a warning, etc.
    if (signal == 'update_sidebar') {
    }
  };
  BrowserUserInterface.prototype.setBg = function(image_url) {
      if (image_url == 'none' || image_url == 'null') {
          document.body.style.backgroundImage = 'none'; 
      } else if (image_url.startsWith('#') || image_url.startsWith('rgba(')) {
          document.body.style.backgroundImage = 'none'; 
          document.body.style.backgroundColor = image_url;
      } else {
          document.body.style.backgroundImage = "url('" + image_url + "')"; 
      }
  };

  // ------------------------------------------------------------------------
  // Additional methods

  BrowserUserInterface.prototype.getGameOverMsg = function() {
    return 'Game Over (reload to read again)';
  };

  BrowserUserInterface.prototype._registerEvents = function() {
    var that = this;
    this.$content.on('click', 'ul.choices li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = parseInt($(this).attr('data-choice'));
      that.dendryEngine.choose(choice);
      return false;
    });
    this.$content.on('click', 'ul.choices li', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('a', this).click();
      return false;
    });
  };

  // ------------------------------------------------------------------------
  // Run when loaded.

  var main = function() {
    engine.convertJSONToGame(window.game.compiled, function(err, game) {
      if (err) {
        throw err;
      }

      var ui = new BrowserUserInterface(game, $('#content'));
      window.dendryUI = ui;
      // Allow the ui system to be customized before use.
      if (window.dendryModifyUI !== undefined) {
        // If it returns true, then we don't need to begin the game.
        var dontStart = window.dendryModifyUI(ui);
        if (dontStart) {
          return;
        }
      }
      ui.dendryEngine.beginGame();
    });
  };
  $(main);

}(jQuery));

},{"../engine":1,"./content/html":3}],3:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  var _contentObjectToHTML = function(contentObj) {
    if (contentObj.type === undefined) {
      return contentObj;
    } else {
      switch (contentObj.type) {
      case 'emphasis-1':
        return '<em>' + _contentToHTML(contentObj.content) + '</em>';
      case 'emphasis-2':
        return '<strong>' + _contentToHTML(contentObj.content) + '</strong>';
      case 'hidden':
        return '<span class="hidden">' + _contentToHTML(contentObj.content) +
          '</span>';
      case 'line-break':
        return '<br>';

      // We can't handle elements that require state-dependency.
      case 'insert':
        /* falls through */
      // raw html for magic
      case 'magic':
        return contentObj.content;
      case 'conditional':
        throw new Error(
          contentObj.type + ' should have been evaluated by now.'
          );
      }
    }
  };

  var _contentToHTML = function(content) {
    if (Array.isArray(content)) {
      var result = [];
      for (var i = 0; i < content.length; ++i) {
        var contentObj = content[i];
        result.push(_contentObjectToHTML(contentObj));
      }
      return result.join('');
    } else {
      return _contentObjectToHTML(content);
    }
  };

  var _paragraphsToHTML = function(paragraphs) {
    var result = [];
    for (var i = 0; i < paragraphs.length; ++i) {
      var paragraph = paragraphs[i];
      switch (paragraph.type) {
      case 'heading':
        result.push('<h1>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</h1>');
        break;
      case 'paragraph':
        result.push('<p>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</p>');
        break;
      case 'quotation':
        result.push('<blockquote>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'attribution':
        result.push('<blockquote class="attribution">');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'magic':
        result.push(paragraph.content);
        break;
      case 'hrule':
        result.push('<hr>');
        break;
      }
    }
    return result.join('');
  };

  module.exports = {
    convert: _paragraphsToHTML,
    convertLine: _contentToHTML
  };
}());

},{}]},{},[2]);
