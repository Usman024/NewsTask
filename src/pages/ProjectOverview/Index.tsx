import React from "react";
import {
  reactFeatureList,
  UIFeatureList,
  fetchDescribe,
  whyZustand,
} from "../../constant/ProjectOverview.ts";
const Index = () => {
  return (
    <div className="w-full pb-32 my-10">
      <p className="text-lg font-black text-center">Project Overview:</p>
      <h1 className="text-sm text-center">
        I developed this React.js project to demonstrate my understanding of
        frontend development <br /> principles, state management, and API
        integration, Handling Complex Logics
      </h1>

      <p className="mt-10 text-2xl font-bold text-primaryColor">
        React Features, Techniques and Good practices Used in this project
      </p>
      <ol>
        {reactFeatureList.map((item, index) => {
          return (
            <li key={index}>
              <span className="font-semibold ">{item.title}: </span>
              {item.description}
            </li>
          );
        })}
      </ol>

      <p className="mt-10 text-2xl font-bold text-primaryColor">
        UI Best Practices
      </p>
      <ol>
        {UIFeatureList.map((item, index) => {
          return (
            <li key={index}>
              <span className="font-semibold ">{item.title}: </span>
              {item.description}
            </li>
          );
        })}
      </ol>

      <p className="mt-10 text-2xl font-bold text-primaryColor">
        Global State Management
      </p>
      <ol>
        {whyZustand.map((item, index) => {
          return (
            <li key={index}>
              <span className="font-semibold ">{item.title}: </span>
              {item.description}
            </li>
          );
        })}
      </ol>

      <p className="mt-10 text-2xl font-bold text-primaryColor">
        For API Calls
      </p>
      <ol>
        {fetchDescribe.map((item, index) => {
          return (
            <li key={index}>
              <span className="font-semibold ">{item.title}: </span>
              {item.description}
            </li>
          );
        })}
      </ol>
      <p className="mt-10 text-xl font-bold text-primaryColor">
        All the application uses Typescript. For each state, variable, store,
        function.
      </p>
      <p className="text-xl font-bold text-primaryColor">
        Using Mapping Techniques for Handling multiple sources as Backend
      </p>
      <p className="text-xl font-bold text-primaryColor">
        Using Helper functions (/utility) to help our app handle the commonly
        used logics
      </p>
    </div>
  );
};

export default Index;
