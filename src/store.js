import { reactive } from "vue";

export const store = reactive({
  ArrHeader: ["Home", "Pages", "Portfolio", "Shop", "Element"],
  ArrMain: [
    {
      title: "We are Bryson, New York-based art & design studio",
      paragraf:
        "Here at Bryson it only takes smidgen of imagination and we've already prepared ourselves for future challeges. Take a peek and see if you recognize the tardemark ingredients of our work. ",
      imgOne: "hover-block.png",

      belowTitle: "What we do?",

      belowParagraf:
        "Lorem ipsum dolor amet aenean consectetuer soiic adipiscing elit. Aenean commodo ligula eget dolor pretium quis sem",

      belowTextOne: "Beautiful illustrations",

      belowTextTwo: "Brand strategies",

      belowTextTree: "Qualified support",

      belowTextFour: "Books & magazines",
    },
  ],

  ArrCard: [
    {
      title: "Basic",
      price: "99$",
      text: "5 Design concepts Full copyright ownership Art direction Top level creatives No money back",

      titleTwoCard: "Standard",
      priceTwo: "119$",

      priceThree: "139$",
    },
  ],

  ArrFooter: [
    {
      title: "Get in touch and say hello",
      paragraf:
        " Lorem ipsum dolor sit amet, consectetuer sociis quis adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum.",
      name: "Name",
      email: "Email",
    },
  ],

  ArrCopyright: [
    {
      twoTitle: "Bryson",
      twoParagraf:
        "Sometimes doing something seemingly demanding turns out to be fun. Here's the proof-Bryson. Your brand new portfolio",
    },
  ],
});
