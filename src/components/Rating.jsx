import { Flex } from "@chakra-ui/react";

export default function Rating({ stars, maxStars = 5 }) {
  const filledStars = [];
  const emptyStars = [];

  for (let i = 0; i < stars; i++) {
    filledStars.push(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <defs>
          <linearGradient
            id="reactGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
          {/* <stop offset="0%" stopColor="#00d8ff" />
          <stop offset="100%" stopColor="#007acc" /> old blue versions */}
          <stop offset="30%" stop-color="#f87171" />
          <stop offset="100%" stop-color="#a855f7" />

          </linearGradient>
        </defs>
        <path
          fill="url(#reactGradient)"
          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
        />
      </svg>,
    );
  }

  for (let i = 0; i < maxStars - stars; i++) {
    emptyStars.push(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <defs>
          <linearGradient
            id="reactGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00d8ff" />
            <stop offset="100%" stopColor="#007acc" />
          </linearGradient>
        </defs>
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
      </svg>,
    );
  }

  return (
    <Flex p={"1rem"} justifyContent={"center"} gap={"1rem"}>
      {filledStars}
      {emptyStars}
    </Flex>
  );
}
