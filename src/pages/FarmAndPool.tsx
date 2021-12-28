import { StyledMainContainer } from "src/components/styles/StyledMainContainer";
import { FarmMountain, BannerTextContainer, BannerTitle, BannerSlogan } from "src/components/farmnpool/Banner";
import { PoolsContainer } from "src/components/farmnpool/PoolsContainer";
import { PoolAccordion } from "src/components/farmnpool/Accordion";
import { Pools } from "src/constants/Pools";

function FarmAndPool() {
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
        {Pools.map((pool) => {
          return PoolAccordion(pool);
        })}
      </PoolsContainer>
    </StyledMainContainer>
  )
}

export default FarmAndPool;