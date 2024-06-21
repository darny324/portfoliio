class Project
{
  name;
  link;
  isOriginal;
  text;
  constructor(pn, ln, isOri, text)
  {
    this.name = pn;
    this.link = ln;
    this.isOriginal = isOri;
    this.text = text;
  }
}

export const myProjects = [
  new Project(
    "nike-react-app", 
    "https://github.com/darny324/nike-react-app", 
    false,
    "A project that imitates a shopping websites.", 
  ), 
  new Project(
    "open-world-rpg", 
    "https://github.com/darny324/openWorld", 
    false,
    "An RPG game with menu and other functionsl", 
  ), 
  new Project(
    "tic-tac-toe", 
    "https://github.com/darny324/tic-tac-toe", 
    false,
    "A tic-tac-toe game with horrible UI", 
  ), 
];