import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './home.css';

// An array of sentences where each sentence is an array of lines
const sentences = [
  ["Top Notch.", "Award Winning.", "Affordable."],
  ["We're a", "Google Certified", "Partner."],
  ["We Create", "Stunning", "Websites."],
  ["We Develop", "Scalable", "Mobile Apps."],
  ["We Build", "Robust", "Web Applications."],
  ["We Craft", "Great", "User Experiences."],
  ["We Design", "Unique", "Brand Identities."],
  ["We Spread", "Social", "Media Buzz!"],
];

// A custom component for each animated line with a delay parameter
const AnimatedLine = ({ delay, swipeInProgress, onRest }) => {
  const animation = useSpring({
    from: { width: '0%', backgroundColor: ' #2e3192' },
    to: { width: swipeInProgress ? '100%' : '0%' },
    config: { duration: 500 },
    delay, // Staggered effect via delay
    onRest, // Function to call when animation completes
  });

  return <animated.div className="swipe-animation" style={animation} />;
};

// Main Home component
const Home = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [swipeInProgress, setSwipeInProgress] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwipeInProgress(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSentence = sentences[currentSentenceIndex];

  const handleAnimationRest = (lineIndex) => {
    if (swipeInProgress && lineIndex === 0) {
      setSwipeInProgress(false);
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }
  };


  return (
    <div className="banner">
      <div className="background-overlay">
        <div className="caption">
          <div className="t-cell">
            <div className="center">
              <div className="sentence">
                {currentSentence.map((line, index) => (
                  <div className="line-wrap" key={index}>
                    {line}
                    <AnimatedLine
                      delay={index * 300} // Staggered delay for each line
                      swipeInProgress={swipeInProgress}
                      onRest={() => handleAnimationRest(index)} // Reset when the first animation is done
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
