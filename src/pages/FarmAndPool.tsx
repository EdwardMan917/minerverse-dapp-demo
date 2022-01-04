import { StyledMainContainer } from "src/components/styles/StyledMainContainer";
import { FarmMountain, BannerTextContainer, BannerTitle, BannerSlogan } from "src/components/farmnpool/Banner";
import { PoolsContainer, StakedToggleContainer, ToolbarContainer } from "src/components/farmnpool/PoolsContainer";
import { PoolAccordion } from "src/components/farmnpool/Accordion";
import { Pools } from "src/constants/Pools";
import { Label, LabelContainer, Overlay, Slider, Switch } from "src/components/Toggle";
import { Colors } from "src/constants/Colors";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SearchBox, SearchIcon, SearchInput } from "src/components/Search";

function FarmAndPool() {

  const [age, setAge] = useState<string | number>('');
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [activeToggled, setActiveToggled] = useState(false);
  const [stakedToggled, setStakedToggled] = useState(false);

  const activeClick = () => {
    setActiveToggled(!activeToggled);
  }

  const stakedClick = () => {
    setStakedToggled(!stakedToggled);
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
              height="25px"
              backgroundColor={Colors.ToggleSwitchGrey}
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
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <SearchBox>
            <SearchIcon />
            <SearchInput />
          </SearchBox>
        </ToolbarContainer>
        {Pools.map((pool) => {
          return PoolAccordion(pool, Pools.indexOf(pool) === 0, Pools.indexOf(pool) === (Pools.length - 1));
        })}
      </PoolsContainer>
    </StyledMainContainer>
  )
}

export default FarmAndPool;