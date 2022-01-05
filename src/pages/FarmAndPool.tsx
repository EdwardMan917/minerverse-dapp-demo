import { StyledMainContainer } from "src/components/styles/StyledMainContainer";
import { FarmMountain, BannerTextContainer, BannerTitle, BannerSlogan } from "src/components/farmnpool/Banner";
import { PoolsContainer, StakedToggleContainer, ToolbarContainer, ToolbarSubContainer } from "src/components/farmnpool/PoolsContainer";
import { PoolAccordion } from "src/components/farmnpool/Accordion";
import { Pools } from "src/constants/Pools";
import { Label, LabelContainer, Overlay, Slider, Switch } from "src/components/Toggle";
import { Colors } from "src/constants/Colors";
import * as React from "react";
import { SelectChangeEvent } from '@mui/material/Select';
import { SearchBox, SearchIcon, SearchInput, StyledSelect } from "src/components/Search";
import useStateRef from "react-usestateref";
import { CatchingPokemonSharp } from "@mui/icons-material";

function FarmAndPool() {
  let filteredPools: any[] = Pools;

  const [pools, setPools, poolsRef] = useStateRef(Pools);
  const [search, setSearch] = React.useState("");
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleSearch = (event: any) => {
    setSearch(event.target.value.toLowerCase());
  }

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [activeToggled, setActiveToggled] = React.useState(false);
  const [stakedToggled, setStakedToggled] = React.useState(false);

  const activeClick = () => {
    setActiveToggled(!activeToggled);
  }

  const stakedClick = () => {
    setStakedToggled(!stakedToggled);
  }

  React.useEffect(() => {
    if(!search) {
      setPools(Pools);
      return;
    }
    filteredPools = [];
    for(let i = 0; i < Pools.length; ++i){
      if(Pools[i].name.toLowerCase().includes(search)){
        filteredPools.push(Pools[i]);
      }
    }
    setPools(filteredPools);
  }, [search])

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
          <ToolbarSubContainer justifyContent="flex-start">
            <Switch
              width="140px"
              height="28px"
              backgroundColor={Colors.ToggleSwitchGrey}
            >
              <Overlay fontSize="12px" color={Colors.Black} onClick={activeClick}>
                <LabelContainer>
                  <Label>Active</Label>
                  <Label>Ended</Label>
                </LabelContainer>
                <Slider 
                  backgroundColor={Colors.MinerverseYellow}
                  position={activeToggled? {
                    left: "0px", right: "none"
                  } : {
                    left: "none", right: "0px"
                  }}
                >
                  {activeToggled? "Active" : "Ended"}
                </Slider>
              </Overlay>
            </Switch>
            <StakedToggleContainer>
              <Switch
                width="40px"
                height="23px"
                backgroundColor={Colors.ToggleSwitchGrey}
                margin="0 10px 0 0"
                onClick={stakedClick}
              >
                <Slider 
                  backgroundColor={stakedToggled? Colors.MinerverseYellow : Colors.Black}
                  position={stakedToggled? {
                    left: "None", right: "0px"
                  } : {
                    left: "0px", right: "None"
                  }}
                />
              </Switch>
              Staked Only
            </StakedToggleContainer>
          </ToolbarSubContainer>
          <ToolbarSubContainer justifyContent="flex-end">
            <StyledSelect>
              <option value="hot"> HOT </option>
              <option value="apr"> APR </option>
              <option value="earned"> Earned </option>
            </StyledSelect>
            <SearchBox>
              <SearchIcon />
              <SearchInput placeholder="Search" onChange={(e) => {handleSearch(e)}} />
            </SearchBox>
          </ToolbarSubContainer>
        </ToolbarContainer>
        {poolsRef.current.map((pool) => {
          return <PoolAccordion pool={pool} isFirst={poolsRef.current.indexOf(pool) === 0} isLast={poolsRef.current.indexOf(pool) === (poolsRef.current.length - 1)}/>
        })}
      </PoolsContainer>
    </StyledMainContainer>
  )
}

export default FarmAndPool;