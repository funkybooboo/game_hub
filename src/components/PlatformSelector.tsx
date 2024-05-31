import {Button, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../hooks/useGames.ts";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

    const {data, error} = usePlatforms();

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown/>}> {selectedPlatform?.name || 'Platforms' } </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;