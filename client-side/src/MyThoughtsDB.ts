import { Thought } from "./types";


    const thoughts: Thought[] = [
      {
        id: '1',
        question: 'What is your favorite color?',
        answer: 'My favorite color is blue.',
      },
      {
        id: '2',
        question: 'What is your favorite food?',
        answer: 'My favorite food is pizza.',
      },
      {
        id: '3',
        question: 'What is your favorite hobby?',
        answer: 'My favorite hobby is reading fiction.',
      },
      {
        id: '4',
        question: 'What are you grateful for today?',
        answer: 'I am grateful for my family and friends who support me.',
      },
      {
        id: '5',
        question: 'What did you learn today?',
        answer: 'I learned a new programming language today and completed a small project with it.',
      },
      {
        id: '6',
        question: 'What did you enjoy doing today?',
        answer: 'I enjoyed spending time outdoors and going for a hike with my dog.',
      },
      {
        id: '7',
        question: 'What is something you want to achieve in the next year?',
        answer: 'I want to complete a marathon and improve my personal best time.',
      },
    ];
export function getThoughts(): Thought[] {
    return thoughts;
}
export function addThought(newThought: Thought): void {
    thoughts.push(newThought);
}