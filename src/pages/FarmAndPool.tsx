import { StyledMainContainer } from "src/components/styles/StyledMainContainer";
import { FarmMountain, BannerTextContainer, BannerTitle, BannerSlogan } from "src/components/farmnpool/Banner";
import { PoolsContainer, ToolbarContainer } from "src/components/farmnpool/PoolsContainer";
import { PoolAccordion } from "src/components/farmnpool/Accordion";
import { Pools } from "src/constants/Pools";
import ToggleSwitch, { LabelContainer, Overlay, Slider, Switch } from "src/components/Toggle";
import { Colors } from "src/constants/Colors";
import { useEffect, useState } from "react";

function FarmAndPool() {

  const [activeToggled, setActiveToggled] = useState(false);

  const activeClick = () => {
    setActiveToggled(!activeToggled);
  }

  return (
    <StyledMainContainer>
      <FarmMountain>
        <BannerTextContainer>
          <BannerTitle>Farm & Pool</BannerTitle>
          <BannerSlogan>
            Stake LP tokens
            <br/>
            Tokens to maximise your interest earning
          </BannerSlogan>
        </BannerTextContainer>
      </FarmMountain>
      <PoolsContainer>
        <ToolbarContainer>
          <Switch
            width="100px"
            height="25px"
            backgroundColor={Colors.ToggleSwitchGrey}
          >
            <Overlay fontSize="12px" color={Colors.Black} onClick={activeClick}>
              <LabelContainer>
                <span>Active</span>
                <span>End</span>
              </LabelContainer>
              <Slider 
                backgroundColor={Colors.MinerverseYellow}
                position={activeToggled? {
                  left: "0px", right: "None"
                } : {
                  left: "None", right: "0px"
                }}
              />
              
            </Overlay>
          </Switch>
        </ToolbarContainer>
        {Pools.map((pool) => {
          return PoolAccordion(pool, Pools.indexOf(pool) === 0, Pools.indexOf(pool) === (Pools.length - 1));
        })}
      </PoolsContainer>
    </StyledMainContainer>
  )
}

export default FarmAndPool;