import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3-force";
import { useWindowSize } from "react-use";
import { PropsAnimation } from "./Models";

interface Node {
  id: number;
  x: number;
  y: number;
  vx?: number;
  vy?: number;
}

interface Link {
  source: Node;
  target: Node;
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AnimatedGraphBackground: React.FC<PropsAnimation> = ({
  width = "100%",
  height = "100%",
  nodeColor = "#3498db",
  edgeColor = "#7f8c8d",
  backgroundColor = "#ffffff",
}) => {
  const simulationRef = useRef<any>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useEffect(() => {
    const numberOfNodes = 500;
    const initialNodes: Node[] = Array.from({ length: numberOfNodes }, (_, i) => ({
      id: i,
      x: getRandomInt(0, windowWidth),
      y: getRandomInt(0, windowHeight),
      vx: 0,
      vy: 0
    }));

    // Create links with actual node references
    const initialLinks: Link[] = Array.from({ length: numberOfNodes - 1 }, (_, i) => ({
      source: initialNodes[i],
      target: initialNodes[i + 1],
    }));

    // Create and store simulation
    simulationRef.current = d3.forceSimulation(initialNodes)
      .force("link", d3.forceLink(initialLinks).distance(40))
      .force("charge", d3.forceManyBody().strength(10))
      .force("center", d3.forceCenter(windowWidth / 2, windowHeight / 1.5))
      .force("collision", d3.forceCollide().radius(60))
      .alphaTarget(0.9) // Keep simulation running
      .velocityDecay(0.7); // Make movements more fluid

    // Update nodes and links on each tick
    simulationRef.current.on("tick", () => {
      setNodes([...initialNodes]);
      setLinks([...initialLinks]);
    });

    // Set initial state
    setNodes(initialNodes);
    setLinks(initialLinks);

    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
  }, [windowWidth, windowHeight]);

  return (
    <svg 
      width={width} 
      height={height} 
      style={{ backgroundColor, position: "absolute", top: 0, left: 0, zIndex: -1 }}
    >
      <g>
        {links.map((link, index) => (
          <line
            key={`link-${index}`}
            x1={link.source.x}
            y1={link.source.y}
            x2={link.target.x}
            y2={link.target.y}
            stroke={edgeColor}
            strokeWidth={1}
            opacity={0.6}
          />
        ))}
        {nodes.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={5}
            fill={nodeColor}
          />
        ))}
      </g>
    </svg>
  );
};

export default AnimatedGraphBackground;