import { Container, TileHeader, TileIcon, Tile } from "./styled";

export const SkillSet = ({ title, titleIcon, skillSetList }) => (
  <Container>
    <Tile>
      <TileHeader>{title}</TileHeader>
      <TileIcon>{titleIcon}</TileIcon>
    </Tile>
    {skillSetList}
  </Container>
);
