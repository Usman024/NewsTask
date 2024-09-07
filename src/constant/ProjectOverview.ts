import { OverviewItem } from "../types/ProjectOverview.ts";
export const reactFeatureList: OverviewItem[] = [
  {
    title: "useEffect",
    description: "As Mounted and watching sideEffects of a state change",
  },
  {
    title: "useState",
    description: "A reactive state, For Managing components internal states",
  },
  {
    title: "Memo",
    description:
      "For optimising our react app/components and to avoid unnecessary Rerendering",
  },
  {
    title: "UseRef",
    description:
      "Used to demonstrate how to avoid Rerendering when a state change changes",
  },
  {
    title: "Conditional Rendering",
    description:
      "Rendering Conditional components using ternary operator as state updates",
  },
  {
    title: "List/Loop",
    description: "Used Map to loop our list of item or cards",
  },
  {
    title: "Props",
    description:
      "Use of Props for demonstrating how parent and child communicate",
  },
  { title: "Form binding", description: "Binding our input with the state" },
  {
    title: "Slots concept",
    description:
      "Used in layouts and dialog components to demonstrate how slots/(Childrens) works",
  },
  {
    title: "Layouts",
    description:
      "Multiple layouts for demonstrating how we can reuse our basic structure",
  },
  {
    title: "Componential approach",
    description:
      "Created reuseable components like dialog box, Input field and Cards to make our code reuseable (Dry)",
  },
  {
    title: "React Router",
    description:
      "Used of react router and separated code for better readablity",
  },
];

export const UIFeatureList: OverviewItem[] = [
  {
    title: "Responsiveness",
    description:
      "Designed Responsive for Mobiles, Tablets, Laptops and big LCD screens From Minimum 280PX to 3000+PX",
  },
  { title: "Animations", description: "For better user experience" },
  {
    title: "Empty States",
    description: "Handled Empty states using visually appealing SVG",
  },
  {
    title: "Skeletons",
    description: "Used Skeletons/Loadings for better user experience",
  },
  {
    title: "Tailwind CSS",
    description:
      "Used Tailwind CSS for Responsive design and Faster development",
  },
  {
    title: "Semantic HTML",
    description:
      "For best practice, readability, and better defining the different sections and layout",
  },
];

export const whyZustand: OverviewItem[] = [
  {
    title: "Zustand",
    description:
      "Due to small webapp used Zustand instead of Redux or Redux Toolkit. (KISS) (Although I have experience with these too)",
  },
  {
    title: "Zustand Middlewares (partialize)",
    description:
      "To store Zustand state in a storage (e.g., localStorage, AsyncStorage, IndexedDB, etc.), thus persisting its data.",
  },
  {
    title: "Typed slices",
    description:
      "Perfectly types the slices for better readability, making the code more robust, maintainable, and easier to understand.",
  },
];

export const fetchDescribe: OverviewItem[] = [
  {
    title: "Native Fetch",
    description:
      "(KISS) To demonstrate my expertise with JAVASCRIPT mechanism and to make simple AJAX calls.",
  },
  {
    title: "Reuseability",
    description: "Created a separate file that acts as a mini AXIOS library.",
  },
  {
    title: "Functionality",
    description:
      "It will concatenate our Conditional BASE URL and Conditional API KEY.",
  },
  {
    title: "Extra",
    description:
      "Added code for handling Tokens, Token expiry, and Token Refresh to demonstrate my code skills.",
  },
];
