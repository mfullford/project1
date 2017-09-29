# [Pet A Puppy](https://mfullford.github.io/project1/)

My first project is a game that involves:

- A moving background
- A protagonist in the form of a floating hand
- Lots of puppies

The concept is that you're in a park and a bunch of puppies are running down hill at you. The puppies will be "running" towards the bottom of the screen while the protagonist moves to try and pet as many puppies as possible within the 30 second timeline. Once that 30 seconds is over, the next player will have a chance to pet as many puppies as possible within the same time frame. 

## To Do List
Here is a [link](https://trello.com/b/Jyiv5fzo/pet-a-puppy) to do my Trello to do list.

## Wireframe 
Here is a [link](https://wireframepro.mockflow.com/view/pet-a-puppy#/page/7415fa9fe4074b759cebc5fb93895e6f) to my wireframe.

### How I Accomplished This Game

Using math round and math random I made the puppies appear at the top of my container div. I used a url image to get my cursor to look like a hand. For the countdwon, I used a basic timer I found online and switched it around a little to display on the div I created in HTML. I used a JQUERY click function to add points to my score. I had to use a restart button to reset the score, but I got my timer to loop 30 seconds over and over again.

### Running Through the Six with My Woes

Initially I wanted to use a left/right moving protagonist with collision detection to add points. Unfortunately, I wasn't able to figure out how to detect every single position of all of my boxes (puppies) because there were a ton and math is hard so I pivoted to use my cursor instead. I also created a third page which was meant to be my scoreboard page, but I couldn't figure out how to locally store the scores and then populate the highest in that div.

I have a graveyard in my js with my many attempts at collision detection, I'm going to try to go back and tinker with it to see if I can figure it out eventually!
