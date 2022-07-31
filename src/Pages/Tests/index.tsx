import { TestsBody } from "../../Components/TestsBody/TestsBody";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/SideBar/Sidebar";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { StyledDiv, StyledMain } from "./styles";

export function Tests() {
  const [opened, setOpened] = useState(true);
  return (
    <StyledDiv>
      <Header />
      <StyledMain>
        <TestsBody opened={opened} setOpened={setOpened} />
        <Collapse isOpened={opened}>
          <Sidebar />
        </Collapse>
      </StyledMain>
    </StyledDiv>
  );
}
