import * as React from "react";
import useState from "react-usestateref";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Colors } from "src/constants/Colors";
import { AccordionPanelProps, AccordionProps, ExpandIconProps, IPoolConfig } from "src/interfaces/AppInterfaces";
import { ApproveButton, ClaimButton } from "../styles/Buttons";
import { approvePool } from "src/utils/PoolService";

const MobileViewWidth = 650;

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

  @media (max-width: 946px) {
    width: 100%;
  }
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
  flex-direction: column;
  justify-content: left;
  font-size: 35px;
  font-family: "GothamMedium";
  color: ${Colors.MinerverseYellow};
`

const AutoCompound = styled.div`
  margin: 5px;
  padding: 5px 15px;
  width: 194px;
  height: auto;
  background: ${Colors.Black};
  font-family: "GothamBold";
  color: ${Colors.AccordionText};
  font-size: 14px;
`

const StakedInfo = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: right;
  font-family: "GothamMedium";
  line-height: 1.2rem;

  @media (max-width: ${MobileViewWidth}px) {
    visibility: hidden;
  }
`

const ExpandIcon = styled.span<ExpandIconProps>`
  color: ${Colors.MinerverseYellow};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;

  &:after {
    content: ${props => props.content};
  }
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

  @media (max-width: 946px) {
    width: 100%;
  }
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
  font-size: 12px;
  padding: 2px 0 0 20px;
  border-right: 1px ${Colors.FormBorderGrey} solid;
`

const RewardPair = styled.div`
  width: 100%;
  height: 20px;
  font-family: "GothamBold";
  display: flex;
  align-items: center;
`

const StakeSection = styled.div`
  width: 33.3%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function PoolAccordion(props: {pool: IPoolConfig, isFirst: boolean, isLast: boolean}) {
  const IconDiameterPC = "38px";
  const IconDiameterMobile = "20px";
  const [width, setWidth] = React.useState(window.innerWidth);

  const [expand, setExpand, expandRef] = useState(false);

  const apyData = useSelector((state: {apy: {[poolId: number]: any}}) => state.apy);
  
  const [apy, setAPY] = React.useState("0.00");

  const BorderRadius = "15px";
  const AccordionBorderRadius = () => {
    if(props.isFirst){
      return `${BorderRadius} ${BorderRadius} 0 0`;
    } 
    if (props.isLast) {
      return `0 0 ${BorderRadius} ${BorderRadius}`;
    }
    return "0";
  }

  const [accordionBorderRadius, setAccordionBorderRadius] = React.useState(AccordionBorderRadius());
  const [panelBorderRadius, setPanelBorderRadius] = React.useState("0");
  const [panelBorderBottom, setPanelBorderBottom] = React.useState("0");

  const handleExpand = () => {
    setExpand(!expand);
    if(props.isLast){
      setAccordionBorderRadius(expandRef.current ? "0" : `0 0 ${BorderRadius} ${BorderRadius}`);
      setPanelBorderRadius(expandRef.current ? `0 0 ${BorderRadius} ${BorderRadius}` : "0");
      setPanelBorderBottom(expandRef.current ? `1px ${Colors.FormBorderGrey} solid` : "0");
    }
  }

  const handleApprove = async () => {
    await approvePool(props.pool.address);
  }

  React.useEffect(() => {
    setAPY(apyData[props.pool.id] ? apyData[props.pool.id]: "0.00");
  }, [apyData])

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  
  
  return (
    <React.Fragment key={props.pool.id}>
      <Accordion onClick={handleExpand} borderRadius={accordionBorderRadius}>
        <Icon>
          {props.pool.icon(props.pool.name, width < MobileViewWidth ? IconDiameterMobile : IconDiameterPC)}
        </Icon>
        <Brief>
          {props.pool.name}
          <br/>
          Reward: {props.pool.reward.join(" + ")}
          <br/>
          TVL: $0
        </Brief>
        <APY>
          {apy}%
          {props.pool.autoCompound ? <AutoCompound>AUTO-COMPOUNDING</AutoCompound> : null}
        </APY>
        <StakedInfo>
          Staked
          <br/>
          --
          <br/>
          Earned
          <br/>
          0
        </StakedInfo>
        <ExpandIcon content={expand? "\"▲\"" : "\"▼\""}/>
      </Accordion>
      <AccordionPanel 
        maxHeight={expand? "130px": "0px"} 
        borderBottom={panelBorderBottom}
        borderRadius={panelBorderRadius} 
      >
        <LinksSection>
          Get {props.pool.name}
          <br/>
          View Contract
        </LinksSection>
        <RewardSection>
          Reward
          <RewardPair>
            {
              props.pool.reward.length === 2 ?  
                <>
                  {" 0 " + props.pool.reward[0] + " 0 " + props.pool.reward[1]}
                </> : 
                <>
                  {" 0 " + props.pool.reward[0]}
                </>
            }
          </RewardPair>
          - $ 0
          <ClaimButton 
            background={Colors.ConvertFormGrey} 
            color={Colors.PendingGrey}
            border={`1px ${Colors.PendingGrey} solid`}
          >Claim</ClaimButton>
        </RewardSection>
        <StakeSection>
          <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
        </StakeSection>
      </AccordionPanel>
    </React.Fragment>
  )
}