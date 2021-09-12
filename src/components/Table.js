import styled, { css } from "styled-components";

const commonStyles = css`
  padding: 1rem;
  border: 1px solid #a9a9a9;
`;

const StyledTable = styled.table`
  ${commonStyles}
  border-collapse: collapse;
  word-wrap: break-word;
  text-align: left;
  width: 100%;
`;

const StyledRow = styled.tr`
  ${commonStyles}
  &:hover {
    background-color: #ebebeb;
  }
  background-color: ${({ colorIndex }) => {
    switch (colorIndex) {
      case 0:
        return "#ceecf6";
      case 1:
        return "#7addf0";
      case 2:
        return "#bee4fd";
      default:
        return "#ceecf6";
    }
  }};
`;

const StyledHeader = styled.th`
  ${commonStyles}
  background-color: #f0f0f0;
  cursor: pointer;
`;

const StyledCell = styled.td`
  ${commonStyles}
`;

const Table = () => {
  return (
    <StyledTable>
      <thead>
        <StyledRow>
          <StyledHeader>S.No</StyledHeader>
          <StyledHeader>Header1</StyledHeader>
          <StyledHeader>Header2</StyledHeader>
          <StyledHeader>Header3</StyledHeader>
          <StyledHeader>Header4</StyledHeader>
          <StyledHeader>Header5</StyledHeader>
        </StyledRow>
      </thead>
      <tbody>
        {Array(11000)
          .fill(0)
          .map((a, index) => {
            return (
              <StyledRow colorIndex={index % 3}>
                <StyledCell>{index + 1}</StyledCell>
                <StyledCell>The cell body</StyledCell>
                <StyledCell>The cell body</StyledCell>
                <StyledCell>The cell body</StyledCell>
                <StyledCell>The cell body</StyledCell>
                <StyledCell>The cell body</StyledCell>
              </StyledRow>
            );
          })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
