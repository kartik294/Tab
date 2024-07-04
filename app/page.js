"use client";

import React, { useState } from "react";

const Page = () => {
  // Mock JSON data for tabs
  const items = [
    {
      label: "Tab1",
      id: "1",
      content: "Content1",
      description:
        "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter.",
    },
    {
      label: "Tab2",
      id: "2",
      content: "Content2",
      description:
        "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire.",
    },
    {
      label: "Tab3",
      id: "3",
      content: "Content3",
      description:
        "We're not always in the position that we want to be at. We're constantly growing.",
    },
  ];

  const [activeLabel, setActiveLabel] = useState(items[0].label); // Default to the first tab label

  const handleItemClick = (item) => {
    setActiveLabel(item.label);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-6">
        <div className="flex gap-6 justify-center">
          {items.map((item, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`border-b-2 px-4 py-2 ${
                  activeLabel === item.label
                    ? "border-lightPink text-secondary"
                    : "border-transparent text-gray-400 hover:border-teal hover:text-lightBlue"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={
                activeLabel === item.label ? "block mt-4" : "hidden mt-4"
              }
            >
              <h2 className="text-xl text-center font-bold">{item.content}</h2>
              <p className="mt-2 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Other Content</h2>
        <p className="text-center">Additional content can go here.</p>
      </div>
    </div>
  );
};

export default Page;
