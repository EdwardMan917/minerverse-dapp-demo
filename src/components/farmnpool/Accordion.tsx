import * as React from "react";
import useState from "react-usestateref";
import styled from "styled-components";
import { Colors } from "src/constants/Colors";
import { AccordionPanelProps, AccordionProps, ExpandIconProps, IPoolConfig } from "src/interfaces/AppInterfaces";
import { ApproveButton } from "../styles/Buttons";
import { getAPY } from "src/utils/PoolService";

const Accordion = styled.button<AccordionProps>`
  font-family: "GothamBold";
  background-color: ${Colors.ConvertFormGrey};
  color: ${Colors.AccordionText};
  cursor: pointer;
  padding: 18px 0;
  width: 886px;
  height: 100px;
  text-align: left;
  border: 1px ${Colors.FormBorderGrey} solid;
  outline: none;
  transition: 0.4s;
  display: flex;
  flex-direction: row;
  border-radius: ${props => props.borderRadius};
`

const Icon = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Brief = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  line-height: 1.2rem;
`

const APY = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 35px;
  font-family: "GothamMedium";
  color: ${Colors.MinerverseYellow};
`

const StakedInfo = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: right;
  font-family: "GothamLight";
  line-height: 1.2rem;
`

const ExpandIcon = styled.span<ExpandIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;
`

const AccordionPanel = styled.div<AccordionPanelProps>`
  width: 886px;
  font-family: "GothamBold";
  padding: 0 18px;
  background-color: ${Colors.Black};
  color: ${Colors.AccordionPanelText};
  overflow: hidden;
  height: ${props => props.maxHeight};
  transition: height 0.2s ease-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 1px ${Colors.FormBorderGrey} solid;
  border-right: 1px ${Colors.FormBorderGrey} solid;
  border-bottom: ${props => props.borderBottom};
  border-radius: ${props => props.borderRadius};
`

const LinksSection = styled.div`
  width: 33.3%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: "GothamLight";
  color: ${Colors.MinerverseYellow};
  text-decoration: underline;
  border-right: 1px ${Colors.FormBorderGrey} solid;
`

const RewardSection = styled.div`
  width: 33.3%;
  height: 85%;
  display: flex;
  flex-direction: column;
  font-family: "GothamLight";
  padding: 25px 0 0 20px;
  border-right: 1px ${Colors.FormBorderGrey} solid;
`

const RewardPair = styled.div`
  width: 100%;
  height: 30px;
  font-family: "GothamBold";
  margin-top: 8px;
`

const StakeSection = styled.div`
  width: 33.3%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function PoolAccordion(pool: IPoolConfig, isFirst: boolean, isLast: boolean) {
  const [expand, setExpand, expandRef] = useState(false);
 
  const BorderRadius = "15px";
  const AccordionBorderRadius = () => {
    if(isFirst){
      return `${BorderRadius} ${BorderRadius} 0 0`;
    } 
    if (isLast) {
      return `0 0 ${BorderRadius} ${BorderRadius}`;
    }
    return "0";
  }

  const [accordionBorderRadius, setAccordionBorderRadius] = React.useState(AccordionBorderRadius());
  const [panelBorderRadius, setPanelBorderRadius] = React.useState("0");
  const [panelBorderBottom, setPanelBorderBottom] = React.useState("0");

  const handleExpand = () => {
    setExpand(!expand);
    if(isLast){
      setAccordionBorderRadius(expandRef.current ? "0" : `0 0 ${BorderRadius} ${BorderRadius}`);
      setPanelBorderRadius(expandRef.current ? `0 0 ${BorderRadius} ${BorderRadius}` : "0");
      setPanelBorderBottom(expandRef.current ? `1px ${Colors.FormBorderGrey} solid` : "0");
    }
  }

  return (
    <React.Fragment key={pool.id}>
      <Accordion onClick={handleExpand} borderRadius={accordionBorderRadius}>
        <Icon>
          {pool.icon}
        </Icon>
        <Brief>
          {pool.name}
          <br/>
          Reward: {pool.reward.join(" + ")}
          <br/>
          TVL: $0
        </Brief>
        <APY>0.00%</APY>
        <StakedInfo>
          Staked
          <br/>
          --
          <br/>
          Earned
          <br/>
          0
        </StakedInfo>
        <ExpandIcon content={expand? "⌃" : "⌄"}/>
      </Accordion>
      <AccordionPanel 
        maxHeight={expand? "130px": "0px"} 
        borderBottom={panelBorderBottom}
        borderRadius={panelBorderRadius} 
      >
        <LinksSection>
          Get {pool.name}
          <br/>
          View Contract
        </LinksSection>
        <RewardSection>
          Reward
          <RewardPair>
            {
              pool.reward.length === 2 ?  
                <>
                  {" 0 " + pool.reward[0] + " 0 " + pool.reward[1]}
                </> : 
                <>
                  {" 0 " + pool.reward[0]}
                </>
            }
          </RewardPair>
          - $ 0
        </RewardSection>
        <StakeSection>
          <ApproveButton>Approve</ApproveButton>
        </StakeSection>
      </AccordionPanel>
    </React.Fragment>
  )
}