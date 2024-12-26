import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const AccordionX = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const items = [
    {
      title: "Design should enrich our day",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      title: "Bring their individual experience and creative",
      description:
        "This is the second `$item's` accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.",
    },
    {
      title: "Human centred design to challenges",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      title: "Design should enrich our day",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      title: "Developing core web applications",
      description:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={expanded === `panel${index}` ? <FiMinus /> : <GoPlus />}
            className="accordion-title"
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            {item.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionX;
