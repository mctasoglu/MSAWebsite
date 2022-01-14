import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { BodyMain } from "../styles/TextStyles";

const statement =
  "The Carnegie Mellon Muslim Student Association's mission is to serve the needs of\n the Muslim community and foster a comfortable environment on campus. By\n following God's commands and our dear Prophet's examples, we aim to function as\n a model student organization that promotes human rights, forges alliances with\n other student organizations, and nurtures a deeper understanding of Islam.";

//Create a for loop function

function useAsyncState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const setter = (x) =>
    new Promise((resolve) => {
      setValue(x);
      resolve(x);
    });
  return [value, setter];
}

export function MissionStatement(props) {
  const lines = statement.split("\n");
  //console.log(lines);
  const num_lines = lines.length;

  const [idx, addIdx] = React.useState(0);
  //const [id, set_id] = useState(null);
  const [text, update_text] = useState("");
  let index = 0;
  console.log(`Text is : ${text}`);

  // Declare a setInterval
  // Want function to keep on executing until we hit a certain block

  //toggle(setInterval(displayLines(), 1000));

  //   function displayLines() {
  //     let index = 0;
  //     if (index < 1) {
  //       console.log(index);
  //       //updateText(text.concat(lines[idx]));
  //       index += 1;
  //     } else {
  //       set_id(clearInterval(id));
  //     }
  //   }

  //   if (props.is_clicked == true) {
  //     //trigger the appearance of lines
  //     console.log("test");
  //   }
  //toggle(clearInterval(id));

  //   const intervalId = setInterval(() => {
  //     const generator = loop_lines();
  //     try {
  //       const value = generator.next().value;
  //       //updateText(text.concat(value));
  //       console.log(false);
  //       //console.log(text);
  //     } catch (e) {
  //       clearInterval(intervalId);
  //       console.log("STOP");
  //     }
  //   }, 1000);

  //Need to set up a timeout function

  //console.log(text);

  useEffect(() => {
    if (props.is_clicked == true) {
      if (index < num_lines) {
        // Trigger a setInterval

        let index = 0;

        let id = setInterval(() => {
          if (index < num_lines) {
            console.log(`Current text is: ${text}`);
            console.log("Inside loop");
            update_text((text) => text.concat(lines[index]));
            index += 1;
          } else {
            console.log("Exited");
            clearInterval(id);
          }
        }, 500);

        //console.log(this.text);
      }
    }
  }, [props.is_clicked]);
  //     if (index < num_lines) {
  //       console.log(`Index is: ${index}`);
  //       console.log(`Accessing text as: ${text}`);
  //       //console.log(this.text);

  //       console.log("testing");
  //       index += 1;
  //       update_text(text.concat(lines[index]));
  //       //console.log(new_text);
  //     } else {
  //       console.log("over");
  //       clearInterval(id);
  //     }
  //   }, 500);

  return <Wrapper>{text} </Wrapper>;
}

const Wrapper = styled(BodyMain)`
  position: absolute;
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;

  left: 21%;
  top: 55%;
  //margin: auto;
  width: 60%;
  height: 193px;

  align-items: center;
  text-align: center;
`;
