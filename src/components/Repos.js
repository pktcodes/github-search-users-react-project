import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total; //Returns an object
  }, {});

  // most used language
  const mostUsed = Object.values(languages) // Converting values in object into array
    .sort((a, b) => {
      // Sorting the popular languages by highest value
      return b.value - a.value;
    })
    .slice(0, 5); // Selecting first five languages

  //most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "23",
    },
    {
      label: "JavaScript",
      value: "66",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed}></Pie3D>

        <div></div>
        <Doughnut2D data={mostPopular}></Doughnut2D>
        <div></div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
