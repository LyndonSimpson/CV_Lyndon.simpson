# RPG-test-in-JS
trying to see if GTP-4 can "make" a whole text based RPG for me

# Dog quest :

: Once upon a time, a little goblin wanted to find a very special snack. It had only ever heard rumors about its existence, yet it was determined to unravel the mystery

: It could not remember what the snack was called, so it needed to assemble it's other animal friends to track down clues from them and the strange things their hoomans talked about

: (mystery about pets interacting with each other to find some special treat that they don't know anything about and turns out to be a super common thing)


: all the animals suggest something else depending on what they like to eat (example, duck or pidgeon suggests baguette but calls it obscure thing since they don't know the word for bread)

you can have different locations to go to, like a pond, an alley, back yard, etc etc.

(by Sofie)


# Zed advice for better state handling :

Zed3900
: Looking at your code more closely, it seems you have the game details in a javascript constant... I am suggesting to keep that in a file that is read at runtime instead of making it part of the code... then the only thing you have to do is add code for the event handlers where they are needed (based on the state)

: A JSON file that is read in at runtime

: yes

: You can just convert the combined, aggregate array into JSON text and write it to a file

: After it's all been combined

: Here's the problem with that

: You are using numeric indices for your array (of course)... wouldn't it be better to say "next_state = GO_HOME" or something, and use GO_HOME as the index into a dictionary/hashtable

: But these are bigger changes

: So just food for thought

: What happens if you lose track of your numbers?
:)
NovaBison
: DOG_QUEST_1

: In comments, yes, I saw that
:)

: prone to human error
:)

: What we did with MUDs back in the day was to use "zones" to group related rooms together, and the rooms were numbered within the zone

: HOME12 etc
a_n_i_v
: @tjspeirs SMILERS

: Because JSON is Javascript Object Notation ... an object in Javascript syntax
:)

: You NEED the array unless you assign another identifier to each of the records in the array

: (i.e. a text-based index)

## ZED advice for item managment and item checks for quest :

Zed3900
: Ah... instead of using an array, use a hashtable with the item name as the key/index... that way you don't have to search for the item, you just check it's existence in the hashtable


## items to use for quests (checks) :

- harmonica -- music quest link : save a band from failure with the harmonica
- i gave up t-shirt -- ?? 
- i died t shirt -- ??
- cruiser -- used as a weapon to save someone ?? getting another item!
- telephone portable -- getting contacted by the mafia
- funky guitar pick -- has a spell, whoever holds it plays like Jimmy Hendrix
- funky toaster -- it can stop time for a few seconds (normally to let you eat a toast)
- hard-drive -- hack something ?? 'ANIV QUEST'
- Tam item quest (not chosen yet)

## items with a quest :
- old metro ticket -- 'midnight in Paris' quest - time travel to the past for n epic party -- time travel to save Laetitia Toureaux!
- funky toaster or harmonica quest -- linked to 'cour a balou', cour a basile, cour a zilbax.

## last touches when game done :

- spelling and syntax of the story
- compressing ALL the images

## next steps for project

- adding english version
- adding german verion

## Petit garage before :

https://www.timeout.fr/paris/bar/le-petit-garage


## Landy time travel idea for subway :

 - save Laetitia Toureaux from her murder in the subway and then come back to the present to see she is famous for something else (she was a spy, so maybe unravel a political fiasco).

 - all the info we need : https://journalmamater.fr/2023/01/25/laffaire-laetitia-toureaux-le-mystere-non-elucide-de-la-ligne-8/

